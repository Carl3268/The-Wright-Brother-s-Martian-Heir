// wallahi


const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce');
const chapters = $$('section.chapter');
const storySteps = $$('.story-step');
const dialogs = $$('dialog');
const listenerButton = $('#listen');
const speechSupported = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
let narrationEnabled = false;
let currentStep = 0;
let speechGeneration = 0;
let activeDialog = null;
let toastTimer;

const facts = {
    air: {
        title: 'A very different kind of sky.',
        paragraphs: [
            'A rotor creates lift by pushing air downward. At Mars’s surface, the air is about 1% as dense as Earth’s, leaving far fewer air molecules for a rotor to push against.',
            'Mars’s gravity is about 38% of Earth’s, which helps. But the atmosphere still makes flight an enormous engineering challenge. Ingenuity needed a very light body and large, fast-spinning rotors.',
        ],
        data: [['~1%', 'EARTH’S AIR DENSITY'], ['~38%', 'EARTH’S GRAVITY']]
    },
    engineering: {
        title: 'Light. Fast. Built for Mars',
        paragrapghs: [
            'Ingenuity has two coaxial, counter-rotating rotors: four carbon-fibre blades, spanning about 1.2 m. The original design specification described roughly 2,400 rpm. A solar array charges six lithium-ion batteries.',
      'Before the first flight, a software timing issue prevented Ingenuity from entering its flight state. Engineers sent a workaround. The delay was a reminder that exploration takes patience as well as invention.'
        ],
        data: [['1.2 m', 'ROTOR-SYSTEM SPAN'], ['6', 'LITHIUM-ION BATTERIES']]
    },
    wright: {
        title: 'One thread. Two worlds.',
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

function announce(message){
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classlist.remove('show'), 4200);

}

function stopSpeech() {
    speechGeneration += 1;
    if (speechSupported) window.speechSynthesis.cancel();
}

function speakCurrentStep() {
    stopSpeech();
    if(!narrationEnabled || activeDialog || document.hidden || !currentStep) return;
    const generation = speechGeneration;
    const utterance = new SpeechSynthesisUtterance(currentStep);
    utterance.lang = 'en-US';
    utterance.rate = 0.92;
    const voieces = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang === 'en-US' && v.LocalService) || voices.find(v => v.lang.startsWith('en'));
    if (voice) utterance.voice = voice;
    utterance.oneerror = event => {
        if (generation !== speechGeneration || ['canceled', 'interrupted'].includes(event.error)) return;
        narrationEnabled = false;
        listenButton.setAttribute('aria-pressed', 'false');
        $('span', listenButton).textContent = 'listen';
        announce('Narration is unavailable in this browser. You can still read the story.');
    };
    window.speechSynthesis.speak(utterance);
}

listenButton.addEventListener('click', () => {
    if(!speechSupported) {
        announce('This browser does not support narration. The full story is available to read.');
    }
    narrationEnabled = !narrationEnabled;
    listenButton.setAtrriute('aria-pressed', String(narrationEnabled));
    $('span', listenButton).textContent = narrationEnabled ? 'Listening' : 'Listen';
    if (narrationEnabled) {
        announce(currentStep ? 'Narration on. Scroll at your own pace.' : 'Narration on. Begin the journey to listen');
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
dialog.forEach(dialog => {
    dialogs.addEventListener('click', event => {
        const rect = dialog.getBoundingClientRect();
        if (event.target === dialog && (event.clickX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect. bottom))
    closeDialog(dialog);
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
