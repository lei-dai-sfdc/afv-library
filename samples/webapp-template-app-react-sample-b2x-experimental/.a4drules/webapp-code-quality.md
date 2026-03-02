---
description: Code quality and build validation standards
paths:
  - "force-app/main/default/webapplications/**/*"
---

# Code Quality & Build Validation

Enforces ESLint, TypeScript, and build validation for consistent, maintainable code.

## MANDATORY Quality Gates

**Before completing any coding session** (from the web app directory `force-app/main/default/webapplications/<appName>/`):

```bash
npm run lint   # MUST result in 0 errors
npm run build  # MUST succeed (includes TypeScript check)
```

## Requirements

**Must Pass:**
- `npm run build` completes successfully
- No TypeScript compilation errors
- No critical ESLint errors (0 errors)

**Can Be Warnings:**
- ESLint warnings (fix when convenient)
- Minor TypeScript warnings

## Key Commands

```bash
npm run dev    # Start development server (vite)
npm run lint   # Run ESLint
npm run build  # TypeScript + Vite build; check deployment readiness
```

## Error Priority

**Fix Immediately:**
- TypeScript compilation errors
- Import/export errors
- Syntax errors

**Fix When Convenient:**
- ESLint warnings
- Unused variables

## Import Order (MANDATORY)

```typescript
// 1. React ecosystem
import { useState, useEffect } from 'react';

// 2. External libraries (alphabetical)
import clsx from 'clsx';

// 3. UI components (alphabetical)
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// 4. Internal utilities (alphabetical)
import { useAuth } from '../hooks/useAuth';
import { formatDate } from '../utils/dateUtils';

// 5. Relative imports
import { ComponentA } from './ComponentA';

// 6. Type imports (separate, at end)
import type { User, ApiResponse } from '../types';
```

## Naming Conventions

```typescript
// PascalCase: Components, classes
const UserProfile = () => {};

// camelCase: Variables, functions, properties
const userName = 'john';
const fetchUserData = async () => {};

// SCREAMING_SNAKE_CASE: Constants
const API_BASE_URL = 'https://api.example.com';

// kebab-case: Files
// user-profile.tsx, api-client.ts
```

## React Component Structure

```typescript
interface ComponentProps {
  // Props interface first
}

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // 1. Hooks
  // 2. Computed values
  // 3. Event handlers
  // 4. JSX return

  return <div />;
};

export default Component;
```

## Anti-Patterns (FORBIDDEN)

```typescript
// NEVER disable ESLint without justification
// eslint-disable-next-line

// NEVER mutate state directly
state.items.push(newItem); // Wrong
setItems(prev => [...prev, newItem]); // Correct

// NEVER use magic numbers/strings
setTimeout(() => {}, 5000); // Wrong
const DEBOUNCE_DELAY = 5000; // Correct
```

## Troubleshooting

**Import Errors:**
```bash
npm install  # Check missing dependencies
# Verify: file exists, case sensitivity, export/import match
```

**Build Failures:**
1. Run `npm run lint` to identify issues
2. Fix TypeScript/ESLint errors
3. Retry `npm run build`
