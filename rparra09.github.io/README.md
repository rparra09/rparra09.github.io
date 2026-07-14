# Richelle Parra — Data Governance Portfolio

Live at **[rparra09.github.io](https://rparra09.github.io)** · Fast, responsive, no frameworks — plain HTML/CSS/JS.

## Publish (drag & drop, ~2 minutes)

1. Go to **github.com/rparra09/rparra09.github.io** (if the repo doesn't exist: **New repository**, name it exactly `rparra09.github.io`, set **Public**, click **Create**).
2. Click **Add file → Upload files**.
3. Drag **all files in this folder** (including this README) into the upload area.
4. Commit message: `Launch portfolio` → click **Commit changes** (to the `main` branch).
5. Wait 1–2 minutes, then visit **https://rparra09.github.io**. Done.

If the page doesn't appear: repo **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `/ (root)` → Save.

## Files

| File | What it is |
|---|---|
| `index.html` | Homepage — hero, about, experience, work, article, certifications, contact |
| `work-ai-governance.html` | Case study placeholder — AI Governance |
| `work-privacy-compliance.html` | Case study placeholder — Privacy & Compliance |
| `work-eu-ai-act.html` | Case study placeholder — EU AI Act & ISO/IEC 22989 |
| `styles.css` | All styling, light + dark themes |
| `app.js` | Theme toggle, animations, filters, mobile menu |
| `Richelle-Parra-Resume.pdf` | Resume download (replace anytime — keep the same filename) |
| `headshot.jpg` | Profile photo (if missing, the site shows a clean "RP" placeholder) |

## Editing later (all on github.com — click a file, then the ✏️ pencil)

- **Fill a case study**: open a `work-*.html` file. Each section has a dashed "Coming soon" box — replace each `<div class="placeholder">…</div>` with your paragraphs (`<p>…</p>`). Delete the `status-banner` div in the hero when the page is finished.
- **Add a certification**: in `index.html`, copy any `<article class="cert-card">…</article>` block and edit its text, date, and link. Set `data-cat` to `governance`, `iso`, or `data`.
- **Add an article**: in `index.html`, duplicate the `<a class="article-card">…</a>` block inside the Writing section.
- **Update the resume**: upload a new PDF named exactly `Richelle-Parra-Resume.pdf`.
- **Preview locally**: just double-click `index.html` — it works offline.
