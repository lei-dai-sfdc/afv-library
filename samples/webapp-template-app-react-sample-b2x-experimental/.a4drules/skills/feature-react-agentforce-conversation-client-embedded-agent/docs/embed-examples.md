# Embed examples

Detailed examples for configuring the Agentforce Conversation Client. All examples use the `AgentforceConversationClient` React component; the underlying `embedAgentforceClient` API accepts the same `agentforceClientConfig` shape.

---

## Floating mode (default)

A floating chat widget appears in the bottom-right corner. It starts minimized and expands when the user clicks it. This is the default — no `renderingConfig` is required.

### Minimal (no config)

```tsx
<AgentforceConversationClient />
```

### Explicit floating

```tsx
<AgentforceConversationClient
  agentforceClientConfig={{
    renderingConfig: { mode: "floating" },
  }}
/>
```

### Floating with a specific agent and theme

```tsx
<AgentforceConversationClient
  agentforceClientConfig={{
    renderingConfig: { mode: "floating" },
    agentId: "0Xx000000000000",
    styleTokens: {
      headerBlockBackground: "#032D60",
      headerBlockTextColor: "#ffffff",
    },
  }}
/>
```

---

## Inline mode

The chat renders inside the parent container at a specific size. Use this when the chat should be part of the page layout rather than an overlay.

### Fixed pixel dimensions

```tsx
<AgentforceConversationClient
  agentforceClientConfig={{
    renderingConfig: { mode: "inline", width: 420, height: 600 },
  }}
/>
```

### CSS string dimensions

```tsx
<AgentforceConversationClient
  agentforceClientConfig={{
    renderingConfig: { mode: "inline", width: "100%", height: "80vh" },
  }}
/>
```

### Inline filling a sidebar

```tsx
<div style={{ display: "flex", height: "100vh" }}>
  <main style={{ flex: 1 }}>{/* App content */}</main>
  <aside style={{ width: 400 }}>
    <AgentforceConversationClient
      agentforceClientConfig={{
        renderingConfig: { mode: "inline", width: "100%", height: "100%" },
      }}
    />
  </aside>
</div>
```

---

## Theming

Use `styleTokens` to customize colors. Tokens are passed directly to the Agentforce client.

### Brand-colored header

```tsx
<AgentforceConversationClient
  agentforceClientConfig={{
    styleTokens: {
      headerBlockBackground: "#0176d3",
      headerBlockTextColor: "#ffffff",
    },
  }}
/>
```

### Full theme example

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

### Dark theme example

```tsx
<AgentforceConversationClient
  agentforceClientConfig={{
    styleTokens: {
      headerBlockBackground: "#1a1a2e",
      headerBlockTextColor: "#e0e0e0",
      messageBlockInboundColor: "#16213e",
    },
  }}
/>
```

---

## Agent selection

Use `agentId` to load a specific agent from the org. If omitted, the org's default employee agent is used.

### Specific agent by ID

```tsx
<AgentforceConversationClient
  agentforceClientConfig={{
    agentId: "0Xx000000000000",
  }}
/>
```

### Agent with inline mode and theming

```tsx
<AgentforceConversationClient
  agentforceClientConfig={{
    agentId: "0Xx000000000000",
    renderingConfig: { mode: "inline", width: 400, height: 700 },
    styleTokens: {
      headerBlockBackground: "#0176d3",
      headerBlockTextColor: "#ffffff",
    },
  }}
/>
```

---

## Using the low-level `embedAgentforceClient` API

The React component wraps `embedAgentforceClient`. If you need the raw API (e.g. in a non-React context), the config shape is the same:

```ts
import { embedAgentforceClient } from "@salesforce/agentforce-conversation-client";

const { loApp, chatClientComponent } = embedAgentforceClient({
  container: "#agentforce-container",
  salesforceOrigin: "https://myorg.my.salesforce.com",
  agentforceClientConfig: {
    agentId: "0Xx000000000000",
    renderingConfig: { mode: "floating" },
    styleTokens: {
      headerBlockBackground: "#0176d3",
      headerBlockTextColor: "#ffffff",
    },
  },
});
```
