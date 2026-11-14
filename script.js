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
        title: 
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

function speakCurrentSte() {
    stopSpeech();
    if(!narrationEnabled || activeDialog || document.hidden || !currentStep) return;
    const generation = speechGeneration;
    
}