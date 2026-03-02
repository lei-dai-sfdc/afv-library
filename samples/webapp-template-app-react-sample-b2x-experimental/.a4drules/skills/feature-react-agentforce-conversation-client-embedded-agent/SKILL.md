---
name: embedded-agent
description: Embed an Agentforce conversation client (chat UI) into a React web application. Use when the user wants to add an employee agent, a chat client, chatbot, chat widget, chat component, conversation client, or conversational interface to their React app. Also applies when the user asks to embed or integrate any Salesforce agent — including employee agent, travel agent, HR agent, service agent, or any custom-named agent — or mentions Agentforce, Agentforce widget, Agentforce chat, or agent chat.
---

# Embedded Agentforce chat (workflow)

When the user wants an embedded Agentforce chat client in a React app, follow this workflow.

## 1. Install the package

```bash
npm install @salesforce/webapp-template-feature-react-agentforce-conversation-client-experimental
```

This single install also brings in `@salesforce/agentforce-conversation-client` (the underlying SDK) automatically.

## 2. Use the shared wrapper

Use the `AgentforceConversationClient` React component. It resolves auth automatically:

- **Dev (localhost)**: fetches `frontdoorUrl` from `/__lo/frontdoor`
- **Prod (hosted in org)**: uses `salesforceOrigin` from `window.location.origin`

## 3. Embed in the layout

Render `<AgentforceConversationClient />` in the app layout so the chat client loads globally. Keep it alongside the existing layout (do not replace the page shell).

```tsx
import { Outlet } from "react-router";
import { AgentforceConversationClient } from "@salesforce/webapp-template-feature-react-agentforce-conversation-client-experimental";

export default function AppLayout() {
  return (
    <>
      <Outlet />
      <AgentforceConversationClient />
    </>
  );
}
```

## 4. Configure the agent

Pass options via the `agentforceClientConfig` prop:

| Option                             | Purpose                                           |
| ---------------------------------- | ------------------------------------------------- |
| `renderingConfig.mode`             | `"floating"` (default) or `"inline"`              |
| `renderingConfig.width` / `height` | Inline dimensions (number for px, string for CSS) |
| `agentId`                          | Select a specific agent from the org              |
| `styleTokens`                      | Theme colors and style overrides                  |

See [embed-examples.md](docs/embed-examples.md) for complete examples of each mode.

## 5. Validate prerequisites

- The org must allow `localhost:<PORT>` in **Trusted Domains for Inline Frames** (session settings).

## Quick reference: rendering modes

### Floating (default)

A persistent chat widget overlay pinned to the bottom-right corner. No extra config needed — floating is the default.

```tsx
<AgentforceConversationClient />
```

### Inline

The chat renders within the page layout at a specific size.

```tsx
<AgentforceConversationClient
  agentforceClientConfig={{
    renderingConfig: { mode: "inline", width: 420, height: 600 },
  }}
/>
```

### Theming

Use `styleTokens` to customize the chat appearance.

```tsx
<AgentforceConversationClient
  agentforceClientConfig={{
    styleTokens: {
      headerBlockBackground: "#0176d3",
      headerBlockTextColor: "#ffffff",
      messageBlockInboundColor: "#0176d3",
    },
  }}
/>
```

### Agent selection

Pass `agentId` to load a specific agent (e.g. travel agent, HR agent).

```tsx
<AgentforceConversationClient
  agentforceClientConfig={{
    agentId: "0Xx000000000000",
  }}
/>
```
