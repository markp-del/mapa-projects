# Clwydian Academy — website

A fast, hand-built static website for Clwydian Academy (trading name of Charlotte Eleanor Academy C.I.C.), designed for GitHub Pages with the custom domain **clwydianacademy.co.uk**.

No frameworks, no build tools, no database — every page is a plain HTML file you can open and edit in any text editor.

---

## 1 · What's in here

| Path | What it is |
|---|---|
| `index.html` | Home page |
| `courses/` | Courses hub + NVQ Level 2, NVQ Level 3, CPD pages |
| `funding/` | Fees & PLA funding (includes the FAQ) |
| `for-salons/` | Apprentice training & CPD for salon owners |
| `about/` | Mission, governance, leadership |
| `funders/` | Funders & partners page (full plan shared on request, not hosted) |
| `contact/` | Contact + register-interest form |
| `privacy/`, `404.html` | Privacy policy and not-found page |
| `cy/` | The complete Welsh-language site (mirrors every English page) |
| `assets/` | CSS, JavaScript, images, and the business plan PDF |
| `sitemap.xml`, `robots.txt` | Search engine files (already configured, bilingual) |
| `CNAME` | Tells GitHub Pages your custom domain |

### The Welsh version

Every page has a Welsh twin under `/cy/` (e.g. `/courses/` ↔ `/cy/cyrsiau/`), linked by the **Cymraeg / English** toggle in the header. Behind the scenes, hreflang tags and the sitemap tell Google which page to show Welsh-language searchers — searches like "cyrsiau trin gwallt" have almost no competition.

**Before launch:** have a fluent Welsh speaker read the `/cy/` pages. The translation is written to a high standard, but a native proofread (a "prawfddarllen") is cheap and Welsh Government assessors will notice the difference. To fix any wording, edit the matching `index.html` inside `cy/` — the text is plain HTML.

---

## 2 · Publish on GitHub Pages (15 minutes)

**Important:** this site is built to live at the *root* of a domain (links start with `/`). That works in two setups — pick one:

### Option A — straight to the custom domain (recommended)
1. Create a free account at github.com (if you don't have one).
2. Click **+** → **New repository**. Name it `clwydian-academy`, set it to **Public**, click **Create**.
3. On the repository page click **uploading an existing file**, then drag **the contents of this folder** (not the folder itself) into the window. Commit the upload. *Note: the `.nojekyll` file is hidden on Mac — press `Cmd+Shift+.` in Finder to see and include it.*
4. Go to **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**, Branch to **main** / **/ (root)**. Save.
5. Buy `clwydianacademy.co.uk` at any registrar (Cloudflare, Namecheap, GoDaddy — ~£10/yr).
6. In your registrar's DNS settings add:
   - **A records** for `@` (the bare domain) pointing to all four of: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **CNAME record** for `www` pointing to `YOURUSERNAME.github.io`
   (If these ever change, GitHub's Pages docs list the current values.)
7. Back in **Settings → Pages**, enter `clwydianacademy.co.uk` under *Custom domain*, wait for the DNS check, then tick **Enforce HTTPS**.

Done — the site is live at https://clwydianacademy.co.uk.

### Option B — preview first, domain later
GitHub's free `username.github.io/repo-name` addresses put the site in a sub-folder, which breaks root links. To preview without a domain, name the repository exactly `YOURUSERNAME.github.io` instead — the site then serves from the root at `https://YOURUSERNAME.github.io` and everything works. Attach the custom domain later using steps 5–7 above.

---

## 3 · After launch — the SEO jobs that actually matter

1. **Google Search Console** (search.google.com/search-console): add the domain, verify via DNS, and submit `https://clwydianacademy.co.uk/sitemap.xml`. This is how Google finds you fast.
2. **Bing Webmaster Tools**: import from Search Console — two clicks.
3. **Google Business Profile** (business.google.com): create a free listing for "Clwydian Academy", Deeside — this drives the local "hairdressing courses near me" searches that matter most. Use the same phone/email as the site.
4. **Social profiles**: when you create Facebook/Instagram/LinkedIn pages, add their URLs to the `sameAs` list in `_src/build.py` (or ask Claude to), so search engines connect them.
5. **Keep content moving**: Google rewards sites that change. Even a short news/update section added later helps.

---

## 4 · Everyday edits

- **Change wording**: open the page's `index.html`, find the text, edit, commit. GitHub Pages republishes automatically in ~1 minute.
- **The business plan is deliberately not hosted** — the funders page invites assessors to request it by email, protecting the document while keeping the page useful for applications.
- **When VTCT approval / Medr registration lands**: update the wording in three places — the "Centre status" rows on the two NVQ course pages, the chips on the home page ("VTCT centre approval in progress" → "VTCT Approved Centre"), and the two funding FAQs that mention it. Search the files for `in progress` to find them all.
- **Add the company number**: once the CIC is incorporated, append it to the legal line in the footer of every page (search for `constituted as a Community Interest Company`).
- **Photos**: when the academy is fitted out, real photography will lift the site further — swap the framed seal on the home page's "Named for the ridge" section and add photos to course pages. Keep meaningful `alt` text for SEO.

---

## 5 · The contact form

The register-interest form opens the visitor's own email app with everything pre-filled — zero setup, nothing stored, GDPR-friendly. If you'd rather messages arrive silently in your inbox without an email app:

1. Create a free form at formspree.io → you'll get a URL like `https://formspree.io/f/abcdwxyz`.
2. In `contact/index.html`, change `<form id="interest-form" class="form-grid mt-2">` to `<form action="https://formspree.io/f/abcdwxyz" method="POST" class="form-grid mt-2">` (removing the `id`), and the form will submit directly.

---

## 6 · Changing the domain

Everything is baked to `https://clwydianacademy.co.uk`. To change it: find-and-replace that URL across all files, and update the `CNAME` file. (The `_src` build folder your assistant kept can regenerate the whole site with a one-line change if you'd rather not find-replace.)
