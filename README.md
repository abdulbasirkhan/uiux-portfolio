# Abdul Basir Khan — Portfolio starter

A **Modern & Playful** custom Astro portfolio with content editable through free **Pages CMS**, hosted on **GitHub Pages**.

## What's in this first draft

- Responsive homepage with playful hero, selected work, additional work, About, and Contact.
- Seven starter projects built from your previously shared portfolio (not stock samples).
- Dedicated project routes, including three pillars and extra screens for PSEB.
- Editable content and project imagery through `.pages.yml` for Pages CMS.
- GitHub Actions publishing workflow.

**Draft status:** Not all projects have complete process documentation, and no measured business impacts are claimed without evidence. Verify client permissions and remove confidential or personal information before making the repository public.

## Preview on your computer

1. Install Node.js (22+ recommended).
2. Unzip this folder; open a terminal in it.
3. Run `npm install` and then `npm run dev`.
4. Visit the localhost address shown, typically `http://localhost:4321`.

## Publish for free

1. Create a **public GitHub repository** (for example `ux-portfolio`). Do not upload confidential material to a public repository.
2. Upload the entire project contents, including hidden `.pages.yml` and `.github` directory, to the repository root on the `main` branch. GitHub's web uploader supports drag-and-drop files, but uploading the full folder structure is generally easier using GitHub Desktop.
3. In **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source.
4. In **Actions**, confirm the `Publish portfolio` workflow succeeds. You can trigger `workflow_dispatch` manually if needed.
5. The URL should be `https://YOUR-USERNAME.github.io/REPO-NAME/`.
6. At https://app.pagescms.org, sign in with GitHub, install the GitHub app with access to this repository, and open it. The CMS reads `.pages.yml`.
7. Try editing a project title, save, and check GitHub Actions. A new deploy should run from the saved commit.

Note: the repository name is set automatically as the Astro base path in the workflow. Local previews use `/`.

## Editable areas

- **Homepage & About:** `src/data/site.json`
- **Projects:** individual JSON files under `src/data/projects/`
- **Project images:** `public/images/`

Each newly created project in Pages CMS becomes a new page at `/work/<filename>/` after deployment. The CMS config controls fields such as title, summary, tagline, card image, featured flag, and order. New images upload into `public/images`.

## Important next steps

- Review the visual language, copy and layout together.
- Replace PDF-sourced project collages with high-resolution Figma exports.
- Build out longer case studies, process artifacts, and results.
- Check public-sharing permissions before deploying client/government screenshots.
- Correct contact details and social URL as needed in Pages CMS.

Pages CMS documentation: https://pagescms.org/docs/configuration/
Astro / GitHub Pages: https://docs.astro.build/en/guides/deploy/github/

## Hero customization (v0.2)

In `src/data/site.json`, edit `heroBackgroundStart` and `heroBackgroundEnd` to choose the background gradient; both must be six-digit hex colors (such as `#342D55`). Set `heroBackgroundImage` to an uploaded image path such as `/images/hero-texture.jpg` to overlay an image with a colored gradient. Use `heroBackgroundPosition` to control placement (for example, `center` or `right center`). `heroTextColor` changes the main hero heading color.

After connecting Pages CMS, these fields appear under **Homepage & About**. Until then, you can change them directly in the JSON file. The development server updates as you save.

Version 0.2 also removes repetitive microheadings and simplifies case-study titles.

## Version 0.3: About section and glass accents
- About section has editable headline, 3 separate text fields, a portrait slot, photo positioning, and two background colors in Pages CMS.
- Upload an optimized portrait under `public/images/` via Pages CMS and select it in Homepage & About. Until then, a typographic placeholder is displayed (no invented portrait).
- Glass sculptures are CSS-only, require no Three.js, and animate only via transforms. Toggle `showGlassObjects` in Pages CMS.
- For fast loading: export portrait as WebP around 900px wide, ideally below 200 KB; use optimized images for project covers.
- Design inspired by general editorial/personal storytelling ideas in the supplied reference, not a copy of its graphics or assets.

## Version 0.4: Ready for CMS setup
- The About portrait can be added **later**. If absent, the ABK placeholder remains.
- Removed decorative CSS glass/ring/3D elements.
- Added `heroVisualImage` in Homepage & About CMS settings. Upload an optimized PNG, WebP, JPEG, or SVG image to replace the current hero illustration. Leave it blank to retain the original illustration. Edit `heroVisualPosition` and `heroVisualAlt` as desired.
- `heroBackgroundImage` edits the entire hero **background**; `heroVisualImage` edits the **right-side illustration**. They are separate.
- Pages CMS can edit images and content; replacing the visual with an interactive 3D component or video would require code changes.
- Do not publicly publish sensitive government/admin screenshots without permission.
