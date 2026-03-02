---
description: React-specific patterns and Salesforce data access for SFDX web apps
paths:
  - "force-app/main/default/webapplications/**/*"
---

# React Web App (SFDX)

React-specific guidelines for data access, component library, and Salesforce integration.

For layout, navigation, and generation rules, see **webapp.md**.

## Project Structure

- Web app root: `force-app/main/default/webapplications/<appName>/`
- Entry: `src/app.tsx`
- Layout shell: `src/appLayout.tsx`
- Dev server: `npm run dev`
- Build: `npm run build`

## Component Library (MANDATORY)

Use **shadcn/ui** for UI components:

```typescript
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
```

## Styling

- Use **Tailwind CSS** utility classes
- Follow consistent spacing, color, and typography conventions

## Module & Platform Restrictions

React apps must NOT import Salesforce platform modules:

- ❌ `@salesforce/*` (except `@salesforce/sdk-data`)
- ❌ `lightning/*`
- ❌ `@wire` (LWC-only)

Use standard web APIs and npm packages only.

## Data Access (CRITICAL)

### Use DataSDK for All Salesforce API Calls

```typescript
import { getDataSDK } from '@salesforce/sdk-data';

const sdk = await getDataSDK();
// Use sdk.graphql?.() or sdk.fetch!() for API calls
```

Do NOT use `axios` or raw `fetch` for Salesforce APIs. The SDK handles authentication and CSRF.

### Data Access Priority

1. **GraphQL** (preferred) — queries & mutations via `sdk.graphql?.()`
2. **UI API** — via `sdk.fetch!()` for `/services/data/v62.0/ui-api/*`

### Apex REST is NOT Available

Apex REST cannot be called from React applications. If Apex seems required:
1. Evaluate if GraphQL can accomplish the task
2. If not, inform the user the feature is not supported in React

### MCP Tool Integration

Before implementing data access:
1. Check if `orchestrate_lds_data_requirements` tool is available
2. Use it to get guidance on the appropriate pattern (GraphQL or UI API)
3. If it recommends Apex REST, ignore and use GraphQL instead

## Einstein LLM Gateway (AI Features)

```typescript
import { getDataSDK } from '@salesforce/sdk-data';

async function callEinsteinGenerations(prompt: string): Promise<string> {
  const sdk = await getDataSDK();
  const resp = await sdk.fetch!('/services/data/v62.0/einstein/llm/prompt/generations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      additionalConfig: { applicationName: 'PromptTemplateGenerationsInvocable' },
      promptTextorId: prompt,
    }),
  });

  if (!resp.ok) throw new Error(`Einstein LLM failed (${resp.status})`);
  const data = await resp.json();
  return data?.generations?.[0]?.text || '';
}
```

## Error Handling

```typescript
async function safeFetch<T>(fn: () => Promise<T>): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    console.error('API Error:', err);
    throw err;
  }
}
```

### Authentication Errors

On 401/403 response, trigger page refresh to redirect to login:
```typescript
window.location.reload();
```

## Security Standards

- Validate user permissions before data operations
- Respect record sharing rules and field-level security
- Never hardcode credentials or secrets
- Sanitize all user inputs
- Use HTTPS for all API calls

## Performance

- Use React Query or RTK Query for caching API data
- Use `React.memo`, `useMemo`, `useCallback` where appropriate
- Implement loading and error states

## Anti-Patterns (FORBIDDEN)

- ❌ Calling Apex REST from React
- ❌ Using `axios` or raw `fetch` for Salesforce APIs
- ❌ Direct DOM manipulation in React
- ❌ Using LWC patterns (`@wire`, LDS) in React
- ❌ Hardcoded Salesforce IDs or URLs
- ❌ Missing error handling for async operations

## Quality Checklist

- [ ] Entry point maintained (`app.tsx`)
- [ ] Uses shadcn/ui and Tailwind
- [ ] DataSDK used for all Salesforce API calls
- [ ] Proper error handling with try/catch
- [ ] Loading and error states implemented
- [ ] No hardcoded credentials or IDs
