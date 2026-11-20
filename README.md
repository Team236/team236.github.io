# [team236.github.io](https://team236.github.io)

### A 'modern' website for FIRST Robotics Team 236, the TechnoTicks

[![Live site](https://img.shields.io/badge/live%20site-team236.github.io-5a7df5)](https://team236.github.io)
[![License: MIT](https://img.shields.io/badge/license-MIT-8b5cf6)](LICENSE)
![Hosted on GitHub Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-1e40af)
![No build step](https://img.shields.io/badge/build%20step-none-success)

This is the website for FIRST Robotics Team 236, the 'TechnoTicks.' It's a plain static site: no framework, no bundler, nothing to install. Edit an HTML file, push it, and GitHub Pages does the rest.

~~Proudly using no plug-ins and junk in the back end (- 'tick toc'); just pure, sweet, HTML and minimal CSS.~~

It started as pure HTML and has since been enhanced with some vibe coding done with AI.

> **Heads up:** Be careful when touching the code. MY CODE IS BAD AND WILL BREAK. (Woody)

---

## What's on the site

| Page | File | What it is |
| --- | --- | --- |
| Home | `index.html` | The landing page: a slideshow of photos and videos, live numbers and season results from The Blue Alliance, our mission, and the latest robot |
| About Us | `about_us.html` | Who we are, our mission, and our Hall of Fame status |
| New Members | `New_members.html` | The slideshow with everything a new member needs to know |
| Contact Us | `Contact_Us.html` | How to reach the team |
| Robot Archive | `Robot_archive.html` | Every robot since 1999: game info, photos, stats links and 3D models |
| Links | `Links.html` | Our social media |
| Bash@theBeach | `bash.html` | Bash @ the Beach, now a *FIRST* LEGO League (FLL) event where younger students learn robotics, with a photo gallery |

A few pages aren't in the top bar. They're experiments and leftovers:

| File | What it is |
| --- | --- |
| `Countdown.html` | The Kickoff countdown page (not linked from the nav) |
| `First count down clock.html` | The original "Tick Toc" countdown clock |
| `3D.html` | A `<model-viewer>` 3D model demo |
| `test1.html`, `wtestscode.html` | Older test pages / early alpha of the new site |
| `404.html` | The "page not found" page: the water game GIF, a Google search box for the site, and links home. GitHub shows it at any broken address, so it uses root-based paths like `/brighter%20banner.jpg` instead of relative ones |

## Features

- **Dark and light mode.** *Cool Look* (dark, animated gradient with a frosted-glass feel) is the default and *EasyRead* (light, high contrast) is the other. Switch with the round sun/moon button in the top right corner.
- **Front page slideshow.** The home page plays every photo and video clip in the `front page images` folder. It fills the top of the page behind the logo and nav, then pulls in to a rounded card as you scroll. Drop files in and they appear on the site, with captions taken from the file names. It handles `.jpg`, `.png`, `.webp`, `.avif`, `.gif`, iPhone `.heic`, and `.mp4`, `.mov` and `.webm` clips. See [the front page slideshow](#the-front-page-slideshow) below.
- **Live stats from The Blue Alliance.** The numbers bar and the "On the field" results on the home page are pulled straight from [The Blue Alliance](https://www.thebluealliance.com) (TBA), so they update themselves. See [the live numbers section](#live-numbers-and-results-from-the-blue-alliance) below.
- **Floating nav.** The nav buttons sit inside the top banner. Scroll down and they pop out into their own floating bar (the banner itself scrolls away), with the sun/moon button tucked into its right end. The page you're on is highlighted, and on small screens the bar swipes sideways.
- **Bash @ the Beach gallery.** The Bash page shows a photo grid of everything in the `bash images` folder, with a full-screen viewer (arrows, swipe, Esc to close). It finds the files the same way the front page slideshow does. See `bash images/README.md`.
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

### The front page slideshow

The big banner on the home page is a slideshow of everything in the **`front page images`** folder.

- **Add or remove media:** upload photos and clips to that folder on GitHub (**Add file → Upload files**), or delete them. A minute or two later the site updates. No code changes needed.
- **Order and captions:** slides play in file name order, and the file name becomes the caption. Start names with `01-`, `02-` to set the order. Put `_` in front of a name to hide a file. More tips are in `front page images/README.md`.
- **Formats:** photos (`.jpg .jpeg .png .webp .avif .gif .svg .bmp .heic .heif`) and clips (`.mp4 .mov .m4v .webm .ogv`). A file the browser can't open is skipped, not shown broken.
- **How it finds the files:** a static site can't list a folder by itself, so the page asks GitHub's public API what's in it. That only allows about 60 lookups an hour per network, so the page remembers the answer for 5 minutes.
- **Optional backup list:** to keep the slideshow working when lots of people visit at once (a school or event wifi), add the workflow file `.github/workflows/front-page-manifest.yml`. It writes `front page images/manifest.json` whenever the folder changes, and the page falls back to that list if GitHub says "slow down". On GitHub: **Add file → Create new file**, type `.github/workflows/front-page-manifest.yml` as the name, and paste the contents in. Then open **Settings → Actions → General → Workflow permissions** and choose **Read and write permissions**.
- **If everything fails**, the banner shows a few built-in robot photos instead of an empty box.
- **Settings:** the folder name, the repo name, how long each photo stays up (6.5 seconds), and the longest a clip plays (30 seconds) are the first few lines of the slideshow script at the bottom of `index.html`.
- **How it's laid out:** at the very top the slideshow is full-width and sits behind the header (the logo, nav buttons and sun/moon toggle float over it). As you scroll, it narrows to the width of the rest of the page, rounds its corners and gets an outline and shadow, and the header's background fades in. On phones the header is too tall to sit over the photos, so the slideshow starts just under it and still rounds into a card. This is all done by the "the slideshow starts as the page background..." part of the script at the bottom of `index.html`. The header sits in a lightly tinted, softly blurred bar even over the photos, and the slideshow is slightly see-through so the page's own colors show through. To make the photos more or less see-through, change `--fp-see` (a number from 0 to 1, where 1 is solid) in `index.html`; it's set to `0.86` in dark mode and `0.9` in light mode. The dark base, the purple/blue glows and the dark fades behind the title are controlled together by `--fp-veil` (1 is the strongest, 0 removes them); it's `0.45` in dark mode and `0.4` in light mode.
- **Controls:** arrows, a pause button, and clickable progress bars. Swipe on a phone, or use the left and right arrow keys. The slideshow pauses when you hover over it, and it doesn't autoplay for visitors who've asked their device for reduced motion.

### Live numbers and results from The Blue Alliance

Nothing on the home page's stats bar or results section is typed in by hand. When someone opens the page, it asks TBA's API about team 236.

- **The numbers bar:** *Competing since* (the team's rookie year), *Seasons* (years the team took part), *Events* (official events: regionals, districts and championships, not offseason), *Event wins* (event-winner awards at those official events) and *Awards* (every award TBA lists). A tile with a zero (or missing) value is left out rather than shown as 0. The year in the banner's "Since 1999" line comes from TBA too.
- **On the field:** the events from the latest season that has started, each with dates, place, a result line written by TBA (like the rank and playoff outcome) and award badges, plus a link to the event on TBA. If TBA already lists events for next season, they appear below under "Up next" with an "Upcoming" tag. Offseason events show up here too, but they don't count toward the numbers bar.
- **What isn't here:** TBA doesn't track Hall of Fame status, and the robot name and game ("T.U.B.", "Rebuilt") aren't in TBA either, so the "Latest robot" section is still plain text in `index.html`.
- **The API key:** it sits in the first lines of the script at the bottom of `index.html` (`TBA_KEY`). It's a read-only key made just for this website, so it's fine that it's public. If anyone ever misuses it, create a new one on your TBA account page and paste it over the old one. The team number is `TBA_TEAM` just below it.
- **How often it updates:** each visitor's browser keeps the answer for 10 minutes, so a refresh doesn't ask TBA again. If TBA can't be reached, the page shows the last numbers that browser saw. If it has never seen any, the numbers bar and results section quietly disappear and the rest of the page is unaffected.

### Adding a new robot to the archive

1. **Add the photo** to the `RobotPhotos` folder as `YYYY.webp`, with a `YYYY.png` fallback (for example `2027.webp` and `2027.png`). Optimized `.webp` files keep the page fast.
2. **Add a chip** to the jump bar near the top of `Robot_archive.html` (newest first):

   ```html
   <li><a class="ra-chip" href="#y2027" data-target="y2027"><b>2027</b><span>Game Name</span></a></li>
   ```

3. **Add a card** at the top of the `<div class="ra-list">` (newest first), using an existing card as a template:

   ```html
   <article class="rc has-media" id="y2027">
     <div class="rc-media">
       <picture>
         <source srcset="RobotPhotos/2027.webp" type="image/webp">
         <img src="RobotPhotos/2027.png" alt="Team 236's robot from the 2027 season (Game Name)" width="800" height="1000" loading="lazy" decoding="async">
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
├── RobotPhotos/                     robot photos for the Robot Archive (YYYY.webp + YYYY.png)
├── robot-hero.webp                  banner photo on the Robot Archive
├── front page images/               photos and videos for the home page slideshow
├── bash images/                     photos and clips for the Bash @ the Beach gallery
├── .github/workflows/               optional: keeps the slideshow's backup list up to date
├── Logo.png, favicon.ico, ...       logos and banners
├── 404.html                         page not found
├── LICENSE                          MIT
└── SECURITY.md
```

## Credits

Code by Woody, Mike, and GitHub user ko-sako "Kayo Osako."

Thanks,
Woody (self-proclaimed head website coder)

## License

[MIT](LICENSE) © 2024 Team 236 - TechnoTicks
