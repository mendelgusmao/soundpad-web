<h1 align="center">Soundpad Web 🎙️</h1>

<div align="center">
  <img src="https://badgen.net/badge/Language/TypeScript/blue"/>
  <img src="https://badgen.net/badge/Framework/NextJS/orange"/>
  <br><br>
  <img src="./public/icon-512x512.png" alt="Icon" width=160>
  <br><br>
</div>

> Web-based remote control interface for [Soundpad](https://store.steampowered.com/app/629520/Soundpad/).<br>

## What? Why?

Soundpad is a paid `soundboard` for Windows, capable of playing media through the microphone.<br>
Hotkeys can get bound to specific sounds. However, if (like me) you are using a small keyboard or have a lot of sounds, starting sounds can quickly become frustrating.<br><br>
This project aims to simplify this by offering a remote control interface usable from a mobile device or another computer.

## Brief Description

Soundpad Web uses Soundpad's piped [Remote Control Interface](https://www.leppsoft.com/soundpad/en/rc/) to send control commands to the program.<br>
Sounds are automatically fetched from Soundpad and get categorized by their parent directories.

### Extra

* Dark/light modes

### Changes in this fork:

* On some older devices (for example, running Android 6.0.1), when using the PWA application, it opened in portrait orientation (I use Sony Xperia Z3 Tablet Compact and it is very inconvenient to use this web panel in portrait orientation) - the PWA manifest was changed so that blocking in one orientation or another did not occur (by [frsvme](https://github.com/frsvme))
* Buttons for Start or Stop Microphone/Speakers recording (by [frsvme](https://github.com/frsvme))
* The logic of downloading playlists and audio files has been slightly redesigned, so that when recording stops - files appear in the web-panel instantly (by [asoco](https://github.com/asoco))


## Requirements

To get started with <b>Soundpad Web</b>, you need:

* [Node.js](https://nodejs.org/it/)
* [Soundpad](https://store.steampowered.com/app/629520/Soundpad/) (Version 4.0.1+ (tested specifically on this version))

## Setup

```sh
git clone https://github.com/sonodima/soundpad-web/
cd soundpad-web
npm install
```

## Start development server

```sh
npm run dev
```

The web interface is then accessible with the displayed port.
