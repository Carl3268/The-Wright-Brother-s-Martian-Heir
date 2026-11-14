/* Team AEVUM — vanilla JavaScript, no build step or third-party dependencies. */
'use strict';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const chapters = $$('.chapter');
const storySteps = $$('.story-step');
const dialogs = $$('dialog');
const listenButton = $('#listen');
const speechSupported = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
let narrationEnabled = false;
let currentStep = null;
let speechGeneration = 0;
let activeDialog = null;
let toastTimer;

const facts = {
  air: {
    title: 'A very different kind of sky.',
    paragraphs: [
      'A rotor creates lift by pushing air downward. At Mars’s surface, the air is about 1% as dense as Earth’s, leaving far fewer air molecules for a rotor to push against.',
      'Mars’s gravity is about 38% of Earth’s, which helps. But the atmosphere still makes flight an enormous engineering challenge. Ingenuity needed a very light body and large, fast-spinning rotors.'
    ],
    data: [['~1%', 'EARTH’S AIR DENSITY'], ['~38%', 'EARTH’S GRAVITY']]
  },
  engineering: {
    title: 'Light. Fast. Built for Mars.',
    paragraphs: [
      'Ingenuity has two coaxial, counter-rotating rotors: four carbon-fibre blades, spanning about 1.2 m. The original design specification described roughly 2,400 rpm. A solar array charges six lithium-ion batteries.',
      'Before the first flight, a software timing issue prevented Ingenuity from entering its flight state. Engineers sent a workaround. The delay was a reminder that exploration takes patience as well as invention.'
    ],
    data: [['1.2 m', 'ROTOR-SYSTEM SPAN'], ['6', 'LITHIUM-ION BATTERIES']]
  },
  wright: {
    title: 'One thread. Two worlds.',
    paragraphs: [
      'On December 17, 1903, the Wright brothers made the first powered, controlled flight on Earth at Kitty Hawk, North Carolina. More than a century later, Ingenuity carried a tiny piece of fabric from their Flyer 1, secured beneath its solar panel.',
      'Ingenuity’s first flight on April 19, 2021 rose about 3 m. It hovered, turned, and landed. Because Earth–Mars radio signals take several minutes, its computers, sensors, and downward-facing camera handled flight autonomously. Engineers sent the plan in advance.'
    ],
    data: [['1903', 'KITTY HAWK, EARTH'], ['2021', 'JEZERO CRATER, MARS']]
  },
  scout: {
    title: 'The value of another perspective.',
    paragraphs: [
      'After its original technology-demonstration phase, Ingenuity began an operations demonstration. Aerial images helped the Perseverance team assess areas of interest and identify safer routes.',
      'Ingenuity was not a science rover and did not carry a dedicated science instrument. Its primary role was to demonstrate flight and provide useful aerial reconnaissance. Its mission eventually totalled 72 flights and 17.0 km.'
    ],
    data: [['5', 'ORIGINAL FLIGHT TARGET'], ['72', 'FINAL FLIGHT COUNT']]
  },
  legacy: {
    title: 'A final flight. An open sky.',
    paragraphs: [
      'Ingenuity’s final flight occurred on January 18, 2024. NASA confirmed damage to at least one rotor blade after landing, and Ingenuity could no longer fly. The mission’s end was announced on January 25.',
      'The helicopter remains in Jezero Crater. Its lessons in design, testing, autonomous navigation, and operations can guide future aerial explorers. “Abandoned, but not forgotten” is our storytelling theme: hardware may stay behind, while its contribution carries forward.'
    ],
    data: [['18 JAN', '2024 / FINAL FLIGHT'], ['25 JAN', '2024 / MISSION END ANNOUNCED']]
  }
};

function announce(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 4200);
}

function stopSpeech() {
  speechGeneration += 1;
  if (speechSupported) window.speechSynthesis.cancel();
}

function speakCurrentStep() {
  stopSpeech();
  if (!narrationEnabled || activeDialog || document.hidden || !currentStep || !speechSupported) return;
  const generation = speechGeneration;
  const utterance = new SpeechSynthesisUtterance(currentStep.dataset.speech);
  utterance.lang = 'en-US';
  utterance.rate = 0.92;
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find(v => v.lang === 'en-US' && v.localService) || voices.find(v => v.lang.startsWith('en'));
  if (voice) utterance.voice = voice;
  utterance.onerror = event => {
    if (generation !== speechGeneration || ['canceled', 'interrupted'].includes(event.error)) return;
    narrationEnabled = false;
    listenButton.setAttribute('aria-pressed', 'false');
    $('span', listenButton).textContent = 'Listen';
    announce('Narration is unavailable in this browser. You can still read the full story.');
  };
  window.speechSynthesis.speak(utterance);
}

listenButton.addEventListener('click', () => {
  if (!speechSupported) {
    announce('This browser does not support narration. The full story is available to read.');
    return;
  }
  narrationEnabled = !narrationEnabled;
  listenButton.setAttribute('aria-pressed', String(narrationEnabled));
  $('span', listenButton).textContent = narrationEnabled ? 'Listening' : 'Listen';
  if (narrationEnabled) {
    announce(currentStep ? 'Narration on. Scroll at your own pace.' : 'Narration on. Begin the journey to listen.');
    speakCurrentStep();
  } else {
    stopSpeech();
    announce('Narration off.');
  }
});

function openDialog(name) {
  const dialog = $(`#${name}-dialog`);
  if (!dialog) return;
  if (activeDialog) activeDialog.close();
  activeDialog = dialog;
  document.body.classList.add('has-dialog');
  stopSpeech();
  dialog.showModal();
  dialog.scrollTop = 0;
}

function closeDialog(dialog) {
  if (dialog?.open) dialog.close();
}

$$('[data-dialog]').forEach(button => button.addEventListener('click', () => openDialog(button.dataset.dialog)));
$$('[data-close]').forEach(button => button.addEventListener('click', () => closeDialog(button.closest('dialog'))));
dialogs.forEach(dialog => {
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) closeDialog(dialog);
  });
  dialog.addEventListener('close', () => {
    if (activeDialog === dialog) {
      activeDialog = null;
      document.body.classList.remove('has-dialog');
      speakCurrentStep();
    }
  });
});

$$('[data-fact]').forEach(button => button.addEventListener('click', () => {
  const fact = facts[button.dataset.fact];
  if (!fact) return;
  $('#fact-title').textContent = fact.title;
  const body = $('#fact-body');
  body.replaceChildren();
  fact.paragraphs.forEach(text => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    body.append(paragraph);
  });
  const data = document.createElement('div');
  data.className = 'fact-data';
  fact.data.forEach(([number, description]) => {
    const cell = document.createElement('div');
    const value = document.createElement('strong');
    const label = document.createElement('span');
    value.textContent = number;
    label.textContent = description;
    cell.append(value, label);
    data.append(cell);
  });
  body.append(data);
  openDialog('fact');
}));

/* Chapter links close their dialog before navigating to the story. */
$$('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
  const destination = document.getElementById(link.hash.slice(1));
  if (!destination) return;
  event.preventDefault();
  const parentDialog = link.closest('dialog');
  if (parentDialog) closeDialog(parentDialog);
  history.replaceState(null, '', link.hash);
  destination.scrollIntoView({ behavior: motionReduced.matches ? 'instant' : 'smooth', block: 'start' });
  // Navigation should move keyboard reading focus to its destination.
  destination.setAttribute('tabindex', '-1');
  destination.focus({ preventScroll: true });
}));

/* Update the chapter rail and reading line once per animation frame. */
let scrollScheduled = false;
function updateReadingPosition() {
  scrollScheduled = false;
  $('.site-header').classList.toggle('is-scrolled', window.scrollY > 80);
  const viewport = window.innerHeight;
  const storyRect = $('#story').getBoundingClientRect();
  const withinStory = storyRect.top < viewport * 0.4 && storyRect.bottom > viewport * 0.5;
  $('.story-progress').classList.toggle('is-visible', withinStory);
  let activeChapter = null;
  if (withinStory) activeChapter = chapters.find(chapter => {
    const rect = chapter.getBoundingClientRect();
    return rect.top <= viewport * 0.5 && rect.bottom > viewport * 0.5;
  });
  $$('[data-progress]').forEach(link => {
    const active = link.dataset.progress === activeChapter?.dataset.chapter;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'step');
    else link.removeAttribute('aria-current');
  });
  const fullHeight = document.documentElement.scrollHeight - viewport;
  const ratio = fullHeight > 0 ? Math.max(0, Math.min(1, window.scrollY / fullHeight)) : 0;
  $('#reading-progress-fill').style.transform = `scaleX(${ratio})`;
  const nextStep = withinStory ? storySteps.find(step => {
    const rect = step.getBoundingClientRect();
    return rect.top <= viewport * 0.6 && rect.bottom > viewport * 0.6;
  }) || null : null;
  if (nextStep !== currentStep) {
    currentStep = nextStep;
    speakCurrentStep();
  }
}
function scheduleReadingUpdate() {
  if (scrollScheduled) return;
  scrollScheduled = true;
  window.requestAnimationFrame(updateReadingPosition);
}
window.addEventListener('scroll', scheduleReadingUpdate, { passive: true });
window.addEventListener('resize', scheduleReadingUpdate, { passive: true });
document.addEventListener('visibilitychange', () => document.hidden ? stopSpeech() : speakCurrentStep());
window.addEventListener('pagehide', stopSpeech);
updateReadingPosition();

/* Mission lab: two accessible activities with immediate, local feedback. */
const labTabs = $$('.lab-tabs [role="tab"]');
function selectLabTab(tab, focus = false) {
  labTabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
  if (focus) tab.focus();
}
labTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectLabTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = labTabs[(index + 1) % labTabs.length];
    if (event.key === 'ArrowLeft') next = labTabs[(index - 1 + labTabs.length) % labTabs.length];
    if (event.key === 'Home') next = labTabs[0];
    if (event.key === 'End') next = labTabs[labTabs.length - 1];
    if (next) { event.preventDefault(); selectLabTab(next, true); }
  });
});

const massSlider = $('#mass');
function updateWeights() {
  const mass = Number(massSlider.value);
  $('#mass-value').value = `${mass.toFixed(1)} kg`;
  $('#earth-weight').replaceChildren(document.createTextNode(`${(mass * 9.81).toFixed(1)} `));
  $('#mars-weight').replaceChildren(document.createTextNode(`${(mass * 3.71).toFixed(1)} `));
  ['#earth-weight', '#mars-weight'].forEach(selector => {
    const unit = document.createElement('small');
    unit.textContent = 'N';
    $(selector).append(unit);
  });
}
massSlider.addEventListener('input', updateWeights);
updateWeights();

$('#engineer-form').addEventListener('submit', event => {
  event.preventDefault();
  const value = new FormData(event.currentTarget).get('design');
  const feedback = $('#quiz-feedback');
  const explanations = {
    rotors: 'Exactly. Large, fast-spinning rotors push more of that thin air downward. A light body helps too. Ingenuity combined both to make flight possible.',
    heavy: 'Try again. A heavier body needs more lift, so keeping the helicopter light helps. What could push more of the thin Martian air downward?',
    pilot: 'Try again. Radio signals take minutes to reach Mars, so a pilot on Earth cannot steer live. Ingenuity flies autonomously. Think about the rotor blades.'
  };
  feedback.textContent = explanations[value] || 'Choose a design idea first.';
});
