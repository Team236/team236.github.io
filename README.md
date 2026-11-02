# [team236.github.io](https://team236.github.io)

### A 'modern' website for FIRST Robotics Team 236, the TechnoTicks

[![Live site](https://img.shields.io/badge/live%20site-team236.github.io-5a7df5)](https://team236.github.io)
[![License: MIT](https://img.shields.io/badge/license-MIT-8b5cf6)](LICENSE)
![Hosted on GitHub Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-1e40af)
![No build step](https://img.shields.io/badge/build%20step-none-success)

This is the website for FIRST Robotics Team 236, the 'TechnoTicks.' It's a plain static site: no framework, no bundler, nothing to install. Edit an HTML file, push it, and GitHub Pages does the rest.

~~Proudly using no plug-ins and junk in the back end (- 'tick toc'); just pure, sweet, HTML and minimal CSS.~~

It started as pure HTML and has since been enhanced with some vibe coding done with AI (see [Credits](#credits)).

> **Heads up:** Be careful when touching the code. MY CODE IS BAD AND WILL BREAK. (Woody)

---

## What's on the site

| Page | File | What it is |
| --- | --- | --- |
| Home | `index.html` | The landing page |
| About Us | `about_us.html` | Who we are, our mission, and our Hall of Fame status |
| New Members | `New_members.html` | The slideshow with everything a new member needs to know |
| Contact Us | `Contact_Us.html` | How to reach the team |
| Robot Archive | `Robot_archive.html` | Every robot since 1999: game info, photos, stats links and 3D models |
| Links | `Links.html` | Our social media |
| Bash@theBeach | `bash.html` | Bash @ the Beach, our off-season FIRST Robotics event aimed at training new team members |

A few pages aren't in the top bar. They're experiments and leftovers:

| File | What it is |
| --- | --- |
| `Countdown.html` | The Kickoff countdown page (not linked from the nav) |
| `First count down clock.html` | The original "Tick Toc" countdown clock |
| `3D.html` | A `<model-viewer>` 3D model demo |
| `test1.html`, `wtestscode.html` | Older test pages / early alpha of the new site |
| `404.html` | The "page not found" page |

## Features

- **Dark and light mode.** *Cool Look* (dark, animated gradient with a frosted-glass feel) is the default and *EasyRead* (light, high contrast) is the other. Switch with the round sun/moon button in the top right corner.
- **Floating nav.** The nav buttons sit inside the top banner. Scroll down and they pop out into their own floating bar (the banner itself scrolls away), with the sun/moon button tucked into its right end. The page you're on is highlighted, and on small screens the bar swipes sideways.
- **Robot Archive.** One card per season, with a sticky "jump to a season" bar, photos or embedded slideshows, and links to Statbotics, The Blue Alliance and 3D models. Each card has a copy-link button for sharing a specific year.
- **Clean URLs.** Links don't use `.html`, so the About page is `/about_us`, not `/about_us.html`. GitHub Pages serves both.
- **Mobile friendly.** The pages are responsive and work on phones.
- **Respects reduced motion.** On the Robot Archive and About Us pages, fade-in animations switch off for visitors who ask for less motion.

## How it's built

- Static HTML, with the CSS and JavaScript written right inside each page. There's no build step.
- [Tailwind CSS](https://tailwindcss.com) loaded from its CDN, plus a little custom CSS per page.
- [Font Awesome 6](https://fontawesome.com) icons and the [Roboto](https://fonts.google.com/specimen/Roboto) font, both loaded from CDNs.
- Hosted on [GitHub Pages](https://pages.github.com), straight from the `main` branch.

Because of the CDNs, the site needs an internet connection to look right.

## Working on it

### Preview locally

There's nothing to build. Open `index.html` in a browser, or run a tiny local server from the repo root:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

Note that the nav bar and footer links are absolute (`https://team236.github.io/...`), so clicking them while previewing locally takes you to the **live** site. To check a page, open its file directly.

### Editing on GitHub

You don't need Git installed. Open any file on GitHub, click the pencil icon to edit, then commit. To add or replace files, use **Add file → Upload files** on the main page. Changes go live a minute or two after you commit.

### Adding a new robot to the archive

1. **Add the photo** to the repo root as `YYYY.webp`, with a `YYYY.png` fallback (for example `2027.webp` and `2027.png`). Optimized `.webp` files keep the page fast.
2. **Add a chip** to the jump bar near the top of `Robot_archive.html` (newest first):

   ```html
   <li><a class="ra-chip" href="#y2027" data-target="y2027"><b>2027</b><span>Game Name</span></a></li>
   ```

3. **Add a card** at the top of the `<div class="ra-list">` (newest first), using an existing card as a template:

   ```html
   <article class="rc has-media" id="y2027">
     <div class="rc-media">
       <picture>
         <source srcset="2027.webp" type="image/webp">
         <img src="2027.png" alt="Team 236's robot from the 2027 season (Game Name)" width="800" height="1000" loading="lazy" decoding="async">
       </picture>
     </div>
     <div class="rc-content">
       <div class="rc-head">
         <h2 class="rc-title"><span class="rc-year">2027</span><span class="rc-game">Game Name</span></h2>
         <button class="rc-copy" type="button" data-id="y2027" aria-label="Copy link to 2027 Game Name"><i class="fas fa-link" aria-hidden="true"></i></button>
       </div>
       <div class="rc-robot"><i class="fas fa-robot" aria-hidden="true"></i><div>
         <span class="rc-robot-label">Team 236's Robot</span><span class="rc-robot-name">"Robot Name"</span>
       </div></div>
       <div class="rc-body">
         <p>One-line summary of the game.</p>
         <p>Teams score points by:</p>
         <ul><li>Something</li><li>Something else</li></ul>
       </div>
       <div class="rc-links">
         <a class="rc-link" href="https://www.statbotics.io/team/236/2027" target="_blank" rel="noopener"><i class="fas fa-chart-line" aria-hidden="true"></i>Statbotics</a>
         <a class="rc-link" href="https://www.thebluealliance.com/team/236/2027" target="_blank" rel="noopener"><i class="fas fa-trophy" aria-hidden="true"></i>Blue Alliance</a>
         <span class="rc-link off" aria-disabled="true"><i class="fas fa-cube" aria-hidden="true"></i>View in 3D <small>(not available)</small></span>
       </div>
     </div>
   </article>
   ```

   No photo yet? Drop the `has-media` class and the `rc-media` block. For a Google Slides slideshow or an Instagram post, use an `<iframe>` inside `rc-media` instead of the `<picture>`, as the 2025 and 2026 cards do.

### Changing the look

- The **Cool Look / EasyRead** themes are defined by the `body.theme-coolLook` and `body.theme-easyRead` rules in each page's `<style>` block. The theme code was copied into every page, so a theme change has to be made on each one.
- The Robot Archive and About Us pages use shared color variables (`--ra-card`, `--ra-text`, `--ra-accent` and so on) at the top of their custom CSS. Change those to recolor the cards.
- Pages with the theme toggle each include a small script at the bottom that switches themes. It does not remember your choice between visits.

### Adding a page

1. Copy an existing page (`about_us.html` is a good template) and change its content.
2. Add it to the nav buttons **on every page** (inside the `<nav class="site-nav">` in the header), using the extensionless URL (`https://team236.github.io/your_page`). Give the button for the page itself the `nav-current` class and `aria-current="page"` so it's highlighted.
3. File names are case-sensitive on GitHub Pages: `Robot_archive` works, `robot_archive` doesn't.

## Repo layout

```
.
├── index.html, about_us.html, ...   the pages (see above)
├── style.css                        placeholder (the CSS lives inside each page)
├── YYYY.webp / YYYY.png             robot photos, one per season
├── robot-hero.webp                  banner photo on the Robot Archive
├── Logo.png, favicon.ico, ...       logos and banners
├── 404.html                         page not found
├── LICENSE                          MIT
└── SECURITY.md
```

## Credits

Code by Woody, Mike, and GitHub user ko-sako "Kayo Osako."

Thanks to the Deepsite AI model for code help. In addition, some code was made with help from Deepseek AI.

Thanks,
Woody (self-proclaimed head website coder)

## License

[MIT](LICENSE) © 2024 Team 236 - TechnoTicks
