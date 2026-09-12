# SparkTheMind Organisation Website

SparkTheMind is a responsive, single-page website for an education-focused organisation empowering girls through school outreach, education support, and confidence-building programmes in Osun State, Nigeria.

The site uses React, Vite, Tailwind CSS, Lucide icons, DM Serif Display for editorial headlines, and Manrope for interface copy. The visual system is called **Editorial Hope**: warm cream surfaces, confident Spark Blue, human photography, asymmetric editorial layouts, and evidence-led storytelling.

## Run locally

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The local site will be available at the address shown by Vite, usually `http://localhost:5173`.

To run a production build locally:

```bash
pnpm build
pnpm preview
```

## GitHub upload

Create a new empty repository on GitHub. Do not add a second README, `.gitignore`, or license during repository creation because those files are already included here.

Then, from this project folder, run:

```bash
git init
git add .
git commit -m "Create SparkTheMind Organisation website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace `YOUR-USERNAME/YOUR-REPOSITORY` with your actual GitHub path. If Git asks for authentication, use GitHub Desktop, GitHub CLI, or a personal access token rather than a normal account password.

## Vercel connection

1. Go to [vercel.com](https://vercel.com) and sign in with the GitHub account that owns the repository.
2. Select **Add New → Project**.
3. Import the SparkTheMind GitHub repository.
4. Vercel should detect Vite. The included `vercel.json` sets the required values explicitly:

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Install command | `pnpm install --frozen-lockfile` |
| Build command | `pnpm build` |
| Output directory | `dist/public` |

5. Select **Deploy**.
6. After deployment, open the Vercel URL and test the navigation, images, form success state, and mobile layout.

This repository is self-contained for Vercel: the images are stored in `client/public/assets/` and referenced with `/assets/...` paths. No Manus-only storage path or environment variable is required for the current front end.

## Before launch

Replace the generated visual assets with approved SparkTheMind photographs when they are available. Confirm image consent and safeguarding requirements before publishing photographs of children or students.

The website currently uses **500+ girl students reached** as the impact figure. Confirm this figure with the organisation before publishing, because the earlier content brief also mentioned 1,000.

The contact form currently demonstrates a successful submission state in the browser, but it does not send email. Connect it to Formspree, Basin, a serverless function, or another approved form service before treating it as a live enquiry channel. Replace `hello@sparkthemind.org` with the organisation’s verified email address if that address is not active.

## Project structure

```text
client/
  public/
    assets/              # Portable images and spark mark
  src/
    pages/Home.tsx       # Main single-page website
    App.tsx              # Route and theme shell
    index.css            # Editorial Hope design system
vercel.json              # Vercel build and SPA rewrite configuration
ideas.md                 # Design direction and style decisions
README.md                # This handoff guide
```

## Content model

The homepage follows the recommended hierarchy:

> Mission is the “why.” Programmes are the “what.” Impact is the evidence.

The navigation anchors are **About**, **Programmes**, **Our Impact**, **Team**, and **Contact**. The main calls to action guide visitors toward discovering the organisation, inviting school outreach, supporting the mission, or starting a conversation.
