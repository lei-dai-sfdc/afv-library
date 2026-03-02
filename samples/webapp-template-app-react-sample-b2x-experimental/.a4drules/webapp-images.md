---
description: Image handling rules - Unsplash default, CSP compliance, accessibility
paths:
  - "force-app/main/default/webapplications/**/*"
---

# Images

**Guidelines:**
- Default to Unsplash when the user does not specify an image source; it is pre-configured in CSP and works in Salesforce without extra setup.
- Use URL format: `https://images.unsplash.com/photo-{PHOTO_ID}?w={WIDTH}&h={HEIGHT}&fit=crop&q=80&auto=format` (e.g. photo ID `1557683316-973673baf926`).
- If the user requests a different source, use it and inform: "Add CSP Trusted Site in Setup → Security → CSP Trusted Sites".
- Always add descriptive `alt` text; use `alt=""` only for decorative images.
- Avoid `placeholder.com`, `picsum.photos`, `via.placeholder.com` unless requested.
- CSP-approved domains: `images.unsplash.com` (primary), `source.unsplash.com`, `images.pexels.com`.
