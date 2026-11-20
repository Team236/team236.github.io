# Front page images

Everything you put in this folder shows up in the slideshow on the home page. Add a photo or video, wait a minute or two, and it's on the site. Delete it and it's gone. The four starter photos are just examples, so delete them whenever you like.

## About this folder

The folder has to be named exactly `front page images`: lowercase, with spaces. The home page looks for that name, and GitHub is case-sensitive, so `Front Page Images` or `front_page_images` won't be found. The photos and clips inside can have any names you like (see below).

## What you can add

| | Formats |
| --- | --- |
| Photos | `.jpg` `.jpeg` `.png` `.webp` `.avif` `.gif` `.svg` `.bmp` and iPhone `.heic` `.heif` |
| Video clips | `.mp4` `.mov` `.m4v` `.webm` `.ogv` (also tries `.mkv` `.3gp` `.avi`) |

Videos play without sound and move on to the next slide when they finish (or after 30 seconds, whichever comes first).

## Controlling the order and the caption

- **Order:** slides play in file name order. Start names with numbers to choose the order: `01-`, `02-`, `03-` ...
- **Caption:** the file name becomes the caption, minus the file type and any `01-` style number at the start. `03-2022-world-champions.jpg` shows as **2022 World Champions**. Use dashes or underscores between words.
- **No caption:** phone and camera names like `IMG_4821.JPG` or `PXL_20260312_1530.jpg` show no caption.
- **Hide a file without deleting it:** put an underscore in front of the name, like `_old-photo.jpg`.

## Tips for fast loading

- **Photos:** around 2000 pixels wide and under 1.5 MB is plenty. A 12 MB photo straight off a phone works but loads slowly.
- **Videos:** keep clips short (under about 15 seconds) and small (under 10 MB). GitHub's website only accepts files up to 25 MB.
- **Orientation:** every photo is zoomed in to fill the whole banner, so wide (landscape) photos work best. Portrait and square photos are cropped to their upper middle, and the left side of every photo fades into the page color behind the title, so keep the main subject toward the right.
- **iPhone videos:** if a clip doesn't show up, go to Settings > Camera > Formats and pick **Most Compatible**, or export it as `.mp4`. Some Firefox versions can't play the newer iPhone format.
- **HEIC photos** are converted in the visitor's browser, which takes a few extra seconds per photo. `.jpg` or `.webp` loads faster.

## If something doesn't show up

- Give it a minute or two. GitHub Pages takes a moment to publish new files.
- Check the file ends in one of the formats above and doesn't start with `_` or `.`.
- A file the browser can't open is skipped automatically, and the rest of the slideshow keeps going.
- Don't rename or delete `manifest.json` if it appears here. It's the backup list the optional workflow keeps up to date (see the main README).
