# NIT MZ GDG Frontend (Projects & Events Pages)

This repository contains the front-end code for the Projects and Events pages of the NIT Mizoram Google Developer Students’ Club (GDG) website. Both sections are built using plain HTML, CSS, and vanilla JavaScript (where applicable). The goal is to present an attractive, responsive layout that showcases upcoming GDG events and spotlighted student projects.

---

## Table of Contents

1. [Overview](#overview)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [Folder Structure](#folder-structure)  
5. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation & Local Preview](#installation--local-preview)  
6. [How to Navigate](#how-to-navigate)  
7. [Contributing](#contributing)  
8. [License](#license)  
9. [Contact](#contact)

---

## Overview

The “GDG” repo hosts two separate front-end modules:

- **Events Page**: A static HTML/CSS layout listing upcoming and past GDG events, with date, time, venue, and brief descriptions.  
- **Projects Page**: A static HTML/CSS showcase of GDG-related student or community projects (e.g., hackathon winners, workshops, open-source demos).

Both pages are intended to integrate into a larger GDG site but can function independently as standalone, self-contained directories. Each folder contains its own HTML file(s), CSS styling, and any asset subfolders (images, icons, etc.).

---

## Features

- **Responsive Layout**  
  Both pages adapt to desktop and mobile viewports (using CSS media queries and flex/grid layouts).

- **Clean HTML/CSS**  
  Semantic HTML elements (`<header>`, `<section>`, `<article>`, `<footer>`) combined with modular CSS classes for easy maintenance.

- **Event Cards & Project Cards**  
  Each event/project is presented in a “card”–style component, showing:
  - Title  
  - Short description  
  - Date/Time (for events) or Project Tags (for projects)  
  - Image or placeholder  

- **Navigation Bar**  
  A simple top navbar that can be extended to link between “Home”, “Events”, and “Projects” (you can adapt it to your main site template).

- **Customizable Assets**  
  Images, icons, and colors can be swapped out quickly by replacing files in the `assets/` subfolders or editing variables in the CSS files.

---

## Technologies Used

- **HTML5**  
- **CSS3 (Flexbox / Grid / Media Queries)**  
- **Google Fonts & Font Awesome**  

> _No build tools, frameworks, or preprocessors are required. Everything is plain, static front-end code._

---



