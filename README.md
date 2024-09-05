# YouTube Papaplatte Reaction Video Finder - Browser Extension
## Overview
This browser extension checks if Kevin Teller reacted to this video. When visiting a YouTube video, the extension analyzes the video page and displays a UI button that links to the reaction video of that particular YouTube video, if available.

## Features
Automatically scans the YouTube video page for reaction videos.
Displays a non-intrusive floating UI with a direct link to the reaction video.
Quick access to reaction videos directly from the current video page.

## How It Works
The extension extracts the current YouTube video URL.
It uses the getData() function to match the current video with reaction video data.
If a match is found, it displays a floating UI that allows the user to click a link to the reaction video.

## Setup and Installation

### 1. Clone or Download the Repository:

```bash 
git clone https://github.com/your-username/your-extension-repo.git
```

### 2. Load the Extension in Chrome (or any Chromium-based browser):
   1. Open Chrome and navigate to ```chrome://extensions/```.
   2. Enable Developer mode by toggling the switch at the top right.
   3. Click Load unpacked and select the folder containing your extension (the root folder with your manifest and JavaScript files).
   4. The extension will now be added to Chrome and can be activated by visiting any YouTube video.
### 3. Load the Extension in Firefox:

   1. Open Firefox and navigate to ```about:debugging#/runtime/this-firefox```.
   2. Click Load Temporary Add-on.
   3. Choose your manifest file from the root folder of the extension.
   4. The extension will now be available for use.
## Usage
### 1. Visit a YouTube Video:
   
Once the extension is loaded, simply visit any YouTube video page.

### 2. Reaction Video Button:
   
If a reaction video is available for the current YouTube video, a floating UI element will appear at the bottom right of the page with a link to the reaction video.
Click the link to open the reaction video in a new tab.

### 3. Close Button:

The floating UI has a close button (✖) to dismiss the reaction video link if you don't want to see it.
