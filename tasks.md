Task ID: T-0001
Title: Initialize Eburon Docs App
Status: DONE
Owner: Miles
Related repo or service: eburon-docs
Branch: main
Created: 2025-11-28 19:55
Last updated: 2025-11-28 20:15

START LOG

Timestamp: 2025-11-28 19:55
Current behavior or state:
- Directory is empty.
- No docs app exists.

Plan and scope for this task:
- Initialize a new Next.js app in the current directory.
- Configure Tailwind CSS and TypeScript.
- Set up the folder structure for docs.
- Implement the requested layouts and components.
- Add the specific MDX content for "Prompting Eburon Voice v1".

Files or modules expected to change:
- All initial project files (package.json, app/, etc.)

Risks or things to watch out for:
- Ensure MDX is configured correctly for Next.js App Router.

WORK CHECKLIST

- [x] Code changes implemented according to the defined scope
- [x] No unrelated refactors or drive-by changes
- [x] Configuration and environment variables verified
- [x] Database migrations or scripts documented if they exist
- [x] Logs and error handling reviewed

END LOG

Timestamp: 2025-11-28 20:15
Summary of what actually changed:
- Initialized Next.js 15 app with TypeScript and Tailwind CSS.
- Configured MDX with @next/mdx and @tailwindcss/typography.
- Implemented global layout, docs layout, and CopyPageMenu component.
- Created "Prompting Eburon Voice v1" MDX page.
- Created landing page and docs redirect.
- NOTE: Disabled rehype-slug plugin due to Next.js 16 serialization issues; heading IDs are currently manual or missing.

Files actually modified:
- package.json
- next.config.mjs
- mdx-components.tsx
- app/layout.tsx
- app/page.tsx
- app/globals.css
- app/docs/layout.tsx
- app/docs/page.tsx
- app/docs/best-practices/prompting/eburon-voice-v1/page.mdx
- components/CopyPageMenu.tsx

How it was tested:
- Ran `npm run build` to verify compilation and static generation.
- Verified file structure matches request.

Test result:
- PASS (Build successful)

Known limitations or follow-up tasks:
- Fix rehype-slug integration to enable auto-generated heading IDs for TOC.
- Wire up "Copy page" to real markdown source.

------------------------------------------------------------

Task ID: T-0002
Title: Integrate Qwen Image Edit Tool
Status: DONE
Owner: Miles
Related repo or service: eburon-docs
Branch: main
Created: 2025-11-28 22:55
Last updated: 2025-11-28 23:00

START LOG

Timestamp: 2025-11-28 22:55
Current behavior or state:

- Qwen-Image-Edit-next-scene repo cloned to documentation directory.
- No integration exists yet.

Plan and scope for this task:

- Create startup script for the Python Gradio service.
- Add .env.local.example with HF_TOKEN placeholder.
- Create new docs page at app/docs/tools/image-edit/page.mdx.
- Update app/docs/layout.tsx to add Tools section to sidebar.
- Embed Gradio UI using iframe.

Files or modules expected to change:

- scripts/start-image-edit.sh (new)
- .env.local.example (new)
- app/docs/tools/image-edit/page.mdx (new)
- app/docs/layout.tsx (modify)

Risks or things to watch out for:

- User needs HF_TOKEN environment variable set.
- GPU requirements may not be met locally.
- Python dependencies may conflict with user's environment.

WORK CHECKLIST

- [x] Code changes implemented according to the defined scope
- [x] No unrelated refactors or drive-by changes
- [x] Configuration and environment variables verified
- [x] Database migrations or scripts documented if they exist
- [x] Logs and error handling reviewed

END LOG

Timestamp: 2025-11-28 23:00
Summary of what actually changed:

- Created startup script at scripts/start-image-edit.sh with venv setup and dependency installation.
- Created .env.local.example with HF_TOKEN placeholder and usage instructions.
- Created comprehensive docs page at app/docs/tools/image-edit/page.mdx with embedded iframe, setup instructions, usage guide, and troubleshooting.
- Updated app/docs/layout.tsx to add Tools section to sidebar navigation.
- Fixed MDX iframe style syntax (string to object format).

Files actually modified:

- scripts/start-image-edit.sh (new)
- .env.local.example (new)
- app/docs/tools/image-edit/page.mdx (new)
- app/docs/layout.tsx (modified)
- tasks.md (updated)

How it was tested:

- Ran `npm run build` to verify compilation and static generation.
- Made script executable with chmod +x.
- Verified file structure and iframe syntax.

Test result:

- PASS (Build successful, all pages rendered)

Known limitations or follow-up tasks:

- User needs to manually start the Python service using the script.
- Requires HF_TOKEN environment variable to be set.
- GPU recommended for reasonable performance.
- May want to add a health check or service status indicator later.

