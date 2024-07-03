# Changelog

## 1.0.6 Changelog

**New Guides**

- Pterodactyl Panel Installation
- Pterodactyl Webserver Config
- Pterodactyl Wings Installation
- Pterodactyl Example .env
- Nginx Proxy Manager Installation and Configuration
- Ubuntu Server Installation

**Untracked**

- Created `_meta.json` inside `server-hosting` directory
- Created `_meta.json` inside `pterodactyl` directory
- Added `prettier` and `prettier-plugin-tailwindcss` to devDependencies
- Added `prettier.config.js`

**Modified**

- `theme.config.tsx`
  - Added metadata (WIP)
  - Updated repo base url
  - Updated logo
  - Updated footer
- Updated `favicon.ico`
- Added `favicon.png`
- Renamed `STYLE_GUIDELINES.md` to `STYLE_GUIDELINES.mdx`
- Updated `STYLE_GUIDELINES`
  - `STYLE_GUIDELINES` - callout boxes should use `<Callout>`
  - Added more examples
- Added HHN colors to `tailwind.config.js` and `globals.css`
- Added `prettier.config.js`
- Added custom `blockquote` classes to `globals.css`
- Added `server-hosting` directory
- Updated Key Sections links in `index.mdx`
- Moved Contributor guide out of its folder
- Changed most `>` callouts to the custom `<blockquote>` with colors.
- Removed `>` from infront of `**_NOTE:_**`
- Renamed `next.config.mjs`
- Renamed `_app.tsx` to `_app.mdx`
- Updated root `_meta.json`
- Added custom 404 page
- Updated `index.mdx` links

**Removed**

- `proxmox.mdx`
- `truenas.mdx`
- Contributor `_meta.json`
- `EditLink` component
- Removed `banner` from `theme.config.tsx`

**Bug fixes**

- Tailwind CSS styles now apply

**Full Changelog**:
[1.0.5...1.0.6](https://github.com/famlam-ca/hhn-documentation/compare/1.0.5...1.0.6)

## 1.0.5 Changelog

**Modified**

- `**_NOTE_**:` to appear in callout boxes
- Formatting in various guides

**New Guides**

- Installing WSL 2 with Ubuntu

**Full Changelog**:
[1.0.4...1.0.5](https://github.com/famlam-ca/hhn-documentation/compare/1.0.4...1.0.5)

## 1.0.4 Changelog

**Modified**

- `7. **Copy ISO Files to USB Drive**` info block

**Bug fixes**

- Become a Contributor link did not redirect correctly

**Full Changelog**:
[1.0.3...1.0.4](https://github.com/famlam-ca/hhn-documentation/compare/1.0.3...1.0.4)

## 1.0.3 Changelog

**Added**

- Content for CODE_OF_CONDUCT.md
- CHANGELOG.md

**New Guides**

- How to Install Docker CLI on an Ubuntu Node
- Barebones Setup for Docker CLI

### What's Changed

- First Merge of Docker stuff by @DesPartedNecturm in
  https://github.com/famlam-ca/hhn-documentation/pull/2

### New Contributors

- @DesPartedNecturm made their first contribution in
  https://github.com/famlam-ca/hhn-documentation/pull/2

**Full Changelog**:
[1.0.2...1.0.3](https://github.com/famlam-ca/hhn-documentation/compare/1.0.2...1.0.3)

## 1.0.2 Changelog

**Added**

- CONTRIBUTING.md
- CODE_OF_CONDUCT.md
- STYLE_GUIDELINES.md
- Contribute section to README
- `_app.tsx`
- Docker and Contribute section to index

**New Guides**

- Guide to Becoming a Contributor
- Style Guide

**Bug Fixes**

- Removed `gitTimestamp: true`
- Corrected typo: changed `quests` to `guests` in Proxmox setup guide

**Full Changelog**:
[1.0.1...1.0.2](https://github.com/famlam-ca/hhn-documentation/compare/1.0.1...1.0.2)

## 1.0.1 Changelog

**Added**

- Tailwind CSS
- Image file hhn-docs.png for README.md
- edit-link.tsx

**New Guides**

- How to Contribute (Coming soon)

**Bug Fixes**

- Fixed issue with "Edit this page on GitHub" link not redirecting to the
  correct GitHub URL.

**Full Changelog**:
[1.0.0...1.0.1](https://github.com/famlam-ca/hhn-documentation/compare/1.0.0...1.0.1)

## 1.0.0 Changelog

Initial Commit

**New Guides**

- Creating a Bootable USB Drive using Rufus
- Creating a Bootable USB Drive using Ventoy
- Introduction to Proxmox
- Proxmox Setup Guide
- Disk Passthrough on Proxmox
- Enabling Nested Virtualization on Proxmox
- Clustering Proxmox with Three Nodes
- TrueNAS Scale Setup Guide on Proxmox

**Full Changelog**:
[1.0.0](https://github.com/famlam-ca/hhn-documentation/commits/1.0.0)
