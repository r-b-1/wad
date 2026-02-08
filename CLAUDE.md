# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website built with plain HTML and CSS, hosted on GitHub Pages at https://r-b-1.github.io/wad/

## Architecture

- **Static site**: No build process, frameworks, or dependencies - just HTML/CSS/JavaScript
- **Shared styling**: All CSS is centralized in `index.css` to avoid duplication across pages
- **Live clock feature**: Each page includes a JavaScript clock widget that updates in real-time
- **Pages**:
  - `index.html` - Main landing page with personal bio and lake photo
  - `current-projects.html` - Project showcase including Bloc Party app and ISS orbit widget
  - `personal-hobbies.html` - Personal interests, GitHub projects, and sports commentary

## Design Philosophy

- **Minimalistic aesthetic**: Clean, simple design with a cream color palette (`rgb(255, 252, 240)` background)
- **No bloat**: Don't create unnecessary files or add features that weren't requested
- **Consolidated styling**: Keep all shared CSS in `index.css` to maintain DRY principle and make HTML files more readable
- **No emoji usage**: Unless explicitly requested by the user

## Development

No build process needed. Simply edit the HTML/CSS files and open them in a browser, or push to the `main` branch to deploy via GitHub Pages.
