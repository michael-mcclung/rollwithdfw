# Roll With DFW — Tenant Hub

Static one-page site for tenants of **Roll With DFW** (one rental home in the DFW area).

Tenants can:

- **Pay Rent** and **Request a Repair** via [Innago](https://auth.innago.com/login) (tenant login)
- **Email Mac** at `rollwithdfw@gmail.com`
- Call the **emergency repair line** for urgent issues

This site is HTML/CSS only: no forms, no backend, no trackers, no secrets.

## Changing contact details

Edit `index.html` (and `404.html` if needed):

| What | Where |
| --- | --- |
| Phone | Search for `tel:+14697835078` and the visible `469-783-5078` |
| Email | Search for `mailto:rollwithdfw@gmail.com` and the visible address |
| Innago login | Search for `https://auth.innago.com/login` |
| Rent due date | Look for the HTML comment `TODO: Add rent due date` in the FAQ |

## Netlify deploy

`netlify.toml` publishes the repo root (`.`) with **no build command** and **no Angular plugin**.

Netlify auto-deploys the default branch (`main`) to **https://www.rollwithdfw.com**.

Merging a PR into `main` replaces the live site. Do not merge until Mac approves.

## Roll back to the sushi app

The previous Angular + Java sushi-review app is preserved:

- Annotated tag: `sushi-app-archive-2026-10-30`
- Branch: `archive/sushi-app`

To restore that codebase onto a branch (do **not** force-push `main` without Mac’s approval):

```bash
git fetch origin
git checkout -b restore-sushi sushi-app-archive-2026-10-30
# or: git checkout archive/sushi-app
```

Restoring production would mean deploying that archived tree back through Netlify on `main` only after Mac approves a PR.

## Local preview

```bash
python3 -m http.server 8080
# open http://127.0.0.1:8080/
```

## Accessibility & privacy

- Mobile-first layout, semantic landmarks, visible focus styles
- WCAG AA contrast targets for text and buttons
- No external JavaScript, analytics, or third-party embeds
