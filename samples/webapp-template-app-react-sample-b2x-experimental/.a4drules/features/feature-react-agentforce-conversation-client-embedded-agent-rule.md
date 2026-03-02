---
paths:
  - "**/*.tsx"
  - "**/components/**/*.ts"
---

# Agentforce Conversation Client (standards)

When adding or editing the embedded Agentforce chat client in this project, follow these conventions.

## Component and library

- Use the shared **AgentforceConversationClient** React component from `@salesforce/webapp-template-feature-react-agentforce-conversation-client-experimental`. Do not call `embedAgentforceClient` directly in application code.
- Install with `npm install @salesforce/webapp-template-feature-react-agentforce-conversation-client-experimental`. The underlying SDK (`@salesforce/agentforce-conversation-client`) is included automatically as a dependency.

## Authentication

- The component resolves auth automatically: **localhost** fetches `frontdoorUrl` from `/__lo/frontdoor`; **production** uses `window.location.origin` as `salesforceOrigin`.
- Do not hard-code `salesforceOrigin` or `frontdoorUrl` unless the consumer explicitly provides them as props.

## Rendering mode

- Pass `agentforceClientConfig.renderingConfig.mode` to select **floating** (default) or **inline**. Do not apply custom positioning CSS to override the built-in layout.
- For inline mode, set `width` and `height` in `renderingConfig`. Do not override iframe dimensions with external CSS.

## Agent selection

- Use `agentforceClientConfig.agentId` to select a specific agent. Ask the user for the agent ID; if not provided, note that the org's default agent is used.

## Placement

- Render `<AgentforceConversationClient />` inside the existing app layout (e.g. alongside `<Outlet />`). Do not replace the entire page shell with the chat client.
