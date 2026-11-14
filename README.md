# Aevum: supplied-audio integration

Based on Carl3268/The-Wright-Brother-s-Martian-Heir commit f1420ef (downloaded directly from GitHub for this task). Original HTML, English text, Vietnamese text, layout, logo, assets and listening-on default are preserved. The edits are the audio player, an audio-source note, and assets/audio/. No framework, build step, API key or paid service is required.

## Upload

Extract martian-heir-source.zip. Upload its contents into the same repository root, preserving folders. Replace script.js and styles.css; add assets/audio/ (both vi and en) plus audio-manifest.json and AUDIO-MAPPING.csv. HTML files are included from your repository unchanged. Commit to the branch your Cloudflare/Netlify deployment follows. This session could read the public repository but could not push: GitHub authentication is unavailable. No commit was pushed to your GitHub repository.

## Playback

The 9 Vietnamese files cover the first 9 story scenes. The 14 English files form ordered playlists for 10 scenes. Details are in audio-manifest.json and AUDIO-MAPPING.csv. All 23 files are included and byte-identical to the uploads.

English recordings are alternate-script versions, not exact readings of the page text. The player and visible page note identify this. In Voice settings, select Browser voice to hear the displayed text verbatim, or Your supplied recording to use the uploads. Speed works for both; pitch controls only browser speech, preserving the recorded voices.

Missing Vietnamese recordings: scene-10 (scouting), chapter-5 (final flight), scene-12 (legacy).
Missing English topic recordings: chapter-4 (failed tilt sensor), scene-10 (scouting). The comparison/communications clips are grouped on scene-3 as an alternate version of the introduction, not the displayed first-person self-introduction. Energy use is on chapter-2 (cold nights), while the winter/clock-reset clip is on scene-8.

The English dust, navigation-error and ending recordings contain different explanations/claims from the fact-checked page text, including the fixed 22-minute delay, six-day storm/joint-shaking description and weather-station ending. These audio files were not altered or represented as NASA-verified narration. The five-years retrospective is included as supplied. Automated English transcription was used to inspect topics; it has recognition errors and is not a certified verbatim transcript.

Page changes, language changes, dialogs, tab hiding and closing stop the previous audio. Multi-clip pages advance to the next clip only, never turn the book automatically. Stale media events cannot start old clips. If playback is blocked, click Listen to grant browser playback permission. Failed recordings fall back to a matching-language browser voice if available. Missing scenes use browser speech; if that language is unavailable on the device, the page remains readable and explains the missing voice.

## Checks performed

- All 23 MP3s fully decoded with ffmpeg; MP3 codec/sample rates/channels/durations recorded with ffprobe.
- SHA-256 checks confirm all original uploaded bytes are unchanged.
- All files mapped once to a playlist; every manifest file exists.
- JavaScript syntax, HTML IDs/ARIA/local assets checked.
- Player logic tested with simulated media/DOM: Vietnamese mapping, English playlist order, source selection, language changes, page interruption, stale events, speed/pitch, autoplay rejection, network fallback, missing-scene fallback.
- No real-browser or physical iPhone/iPad test was possible in this session; audible quality and visual layout remain unverified on those devices.

The ZIP is also a buildless static deployment folder; index.html must be at the hosting root. Do not upload the ASR work environment or model: those are not part of this package.
