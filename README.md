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

## Requirements

To get started with <b>Soundpad Web</b>, you need:

* [Node.js](https://nodejs.org/it/)
* [Soundpad](https://store.steampowered.com/app/629520/Soundpad/) (version 4.0.1+)

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

## Start development server via .bat

To use the file «launch_nonsteam.bat» - create any folder in the program directory «SoundPad.exe» (for example, a folder named «web») and place all the contents of this repository in the created folder.
<br />Otherwise, just launch the «SoundPad» application, and then run the «launch_web.bat» file

NOTE: Launching the web panel via the .bat file is only possible after you have run `npm install` in this project's directory.

## Credits

* [sonodima](https://github.com/sonodima) - original author
* [frsvme](https://github.com/frsvme) - added start and stop microphone/speakers recording
* [asoco](https://github.com/asoco) - redesigned the playlist and audio files downloading logic
