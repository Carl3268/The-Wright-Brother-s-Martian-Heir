/* Team AEVUM — vanilla JavaScript, no build step or third-party dependencies. */
'use strict';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const bookPages = $$('[data-book-page]');
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
  "landing": {
    "title": "Một chiếc “cần cẩu” trên bầu trời?",
    "paragraphs": [
      "Sky Crane là giai đoạn cuối trong chuỗi hạ cánh của Perseverance: sau tấm chắn nhiệt và dù, một tầng có động cơ giảm tốc rồi hạ rover bằng ba dây cáp nylon. Sau khi rover chạm đất, dây được cắt và tầng hạ cánh bay ra xa.",
      "Ingenuity vẫn nằm dưới bụng rover lúc đó. Phải đến ngày 3.4.2021, trực thăng mới được đặt xuống mặt đất. Hai lần tách rời này là hai sự kiện khác nhau."
    ],
    "data": [
      [
        "18.02",
        "2021 / ROVER HẠ CÁNH"
      ],
      [
        "03.04",
        "2021 / ĐẶT TRỰC THĂNG XUỐNG"
      ]
    ]
  },
  "cold": {
    "title": "Chiếc chăn của một robot nhỏ.",
    "paragraphs": [
      "Tấm pin nhận ánh sáng ban ngày, sạc cho sáu pin lithium-ion. Năng lượng ấy không chỉ dùng để bay: bộ sưởi còn bảo vệ các linh kiện trong đêm lạnh.",
      "Không khí Sao Hỏa rất loãng. Dù trọng lực yếu hơn Trái Đất, Ingenuity vẫn cần cơ thể rất nhẹ và cánh quạt lớn, quay nhanh để tạo lực nâng."
    ],
    "data": [
      [
        "~1%",
        "MẬT ĐỘ KHÔNG KHÍ SO VỚI TRÁI ĐẤT"
      ],
      [
        "6",
        "PIN LITHIUM-ION"
      ]
    ]
  },
  "eyes": {
    "title": "Vì sao những viên đá lại chỉ đường?",
    "paragraphs": [
      "Máy ảnh định vị đen trắng chụp mặt đất. Máy tính so sánh các chi tiết qua nhiều ảnh để ước tính chuyển động, kết hợp với cảm biến quán tính và máy đo độ cao bằng laser. Máy ảnh màu ghi cảnh vật cho nhóm trên Trái Đất.",
      "Một bề mặt có chi tiết dễ theo dõi hơn một vùng cát quá đều màu. Hãy thử nhìn một bức tường trơn, rồi nhìn bức tường có họa tiết khi cậu bước ngang qua: nơi nào giúp cậu nhận ra chuyển động dễ hơn?"
    ],
    "data": [
      [
        "ĐEN TRẮNG",
        "GIÚP ĐỊNH VỊ"
      ],
      [
        "MÀU",
        "GHI LẠI CẢNH VẬT"
      ]
    ]
  },
  "anomaly": {
    "title": "Lỡ một bức ảnh, lệch một nhịp.",
    "paragraphs": [
      "Ở chuyến bay 6, ngày 22.5.2021, một trục trặc làm mất ảnh định vị khoảng 54 giây sau khi cất cánh. Các ảnh sau đó bị xử lý với mốc thời gian không đúng, khiến máy tính hiểu nhầm chuyển động và liên tục điều chỉnh.",
      "Ingenuity nghiêng qua lại hơn 20 độ nhưng vẫn hạ cánh an toàn nhờ khả năng chịu sai lệch của hệ thống điều khiển. Cũng như khi các trang sách bị xếp lộn thứ tự, chỉ một nhịp sai cũng có thể khiến việc hiểu câu chuyện trở nên khó khăn."
    ],
    "data": [
      [
        "54 giây",
        "THỜI ĐIỂM XẢY RA LỖI"
      ],
      [
        ">20°",
        "GÓC CHAO NGHIÊNG"
      ]
    ]
  },
  "dust": {
    "title": "Vì sao bụi có thể làm tớ “đói”?",
    "paragraphs": [
      "Đợt bão bụi đầu năm 2022 khiến lượng ánh nắng tới tấm pin của Ingenuity giảm khoảng 18%. Không khí cũng thay đổi, làm điều kiện bay kém an toàn. Nhóm đã hoãn chuyến bay 19.",
      "Tớ gọi ánh nắng là “bữa sáng” trong câu chuyện. Thật ra, pin mặt trời biến năng lượng ánh sáng thành điện. Vì vậy, trời nhiều bụi không chỉ khiến khó nhìn: nó còn làm một robot dùng năng lượng mặt trời có ít điện hơn."
    ],
    "data": [
      [
        "~18%",
        "ÁNH NẮNG TỚI PIN GIẢM"
      ],
      [
        "CHỜ",
        "MỘT QUYẾT ĐỊNH AN TOÀN"
      ]
    ]
  },
  "winter": {
    "title": "Tớ không quên bạn, chỉ quên giờ hẹn.",
    "paragraphs": [
      "Khi thiếu năng lượng trong đêm lạnh, máy tính có thể tắt và đồng hồ đặt lại. Khi hoạt động trở lại, Ingenuity không còn đúng lịch liên lạc dự kiến với Perseverance. Đội điều khiển kéo dài thời gian rover lắng nghe để tìm lại tín hiệu.",
      "“Quên giờ hẹn” là cách kể gần gũi về một lần đặt lại đồng hồ, không phải mất toàn bộ bộ nhớ. Tương tự, thời gian tín hiệu tới Trái Đất thay đổi theo khoảng cách hai hành tinh, không cố định 22 phút."
    ],
    "data": [
      [
        "ĐỒNG HỒ",
        "ĐẶT LẠI SAU KHI TẮT"
      ],
      [
        "ROVER",
        "CẦU NỐI VỀ TRÁI ĐẤT"
      ]
    ]
  },
  "sensor": {
    "title": "Một cảm biến khác sẵn sàng giúp sức.",
    "paragraphs": [
      "Cảm biến đo độ nghiêng giúp xác định tư thế trước khi cất cánh. Khi nó ngừng hoạt động năm 2022, nhóm sửa phần mềm để dùng dữ liệu từ các gia tốc kế trong bộ đo quán tính IMU.",
      "IMU là bộ cảm biến riêng. Bộ xử lý của Ingenuity dùng công nghệ cùng dòng với điện thoại thông minh, nhưng không nên nhầm bộ xử lý đó với một cảm biến cân bằng tích hợp trong chip."
    ],
    "data": [
      [
        "IMU",
        "BỘ ĐO QUÁN TÍNH"
      ],
      [
        "PHẦN MỀM",
        "MỘT CÁCH THÍCH NGHI MỚI"
      ]
    ]
  },
  "legacy": {
    "title": "Ở lại, vẫn có điều để trao đi.",
    "paragraphs": [
      "Chuyến bay cuối diễn ra ngày 18.1.2024. Sau hư hại cánh quạt, Ingenuity không thể bay nữa. Địa hình ít chi tiết là một khó khăn với hệ thống định vị bằng hình ảnh; những bài học từ lần hạ cánh cuối giúp các kỹ sư hiểu thêm giới hạn của công nghệ này.",
      "Ngày 16.4.2024, nhóm xác nhận bản cập nhật cho phép Ingenuity hoạt động như một trạm thử nghiệm cố định, lưu dữ liệu tại chỗ. Điều đó khác với một trạm khí tượng đang liên tục gửi dữ liệu về Trái Đất."
    ],
    "data": [
      [
        "72",
        "CHUYẾN BAY ĐÃ THỰC HIỆN"
      ],
      [
        "17 km",
        "TỔNG QUÃNG ĐƯỜNG ĐÃ BAY"
      ]
    ]
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

// Vietnamese voices may arrive asynchronously. Never fall back to an English voice.
const voiceSelect = $('#voice-select');
const pitchSlider = $('#voice-pitch');
const rateSlider = $('#voice-rate');
let selectedVoiceURI = '';
let voicePreviewing = false;
function vietnameseVoices() {
  return speechSupported ? window.speechSynthesis.getVoices().filter(v => /^vi(?:[-_]|$)/i.test(v.lang)) : [];
}
function preferredVoice(voices = vietnameseVoices()) {
  const selected = voices.find(v => v.voiceURI === selectedVoiceURI);
  if (selected) return selected;
  const score = voice => {
    let value = voice.default ? 1 : 0;
    if (/HoaiMy|Hoài\s*My|Hoai My/i.test(voice.name)) value += 100;
    else if (/Linh|vi-vn-x-vif|Google.*Vi|Vietnamese.*Google/i.test(voice.name)) value += 50;
    if (voice.localService) value += 2;
    return value;
  };
  return [...voices].sort((a, b) => score(b) - score(a))[0] || null;
}
function refreshVoiceOptions() {
  const voices = vietnameseVoices();
  voiceSelect.replaceChildren(new Option('Tự chọn giọng phù hợp', ''));
  voices.forEach(voice => voiceSelect.add(new Option(voice.name, voice.voiceURI)));
  if (voices.some(v => v.voiceURI === selectedVoiceURI)) voiceSelect.value = selectedVoiceURI;
  else selectedVoiceURI = '';
  const chosen = preferredVoice(voices);
  $('#voice-status').textContent = !speechSupported
    ? 'Trình duyệt này chưa hỗ trợ đọc. Cậu vẫn có thể đọc và tải toàn bộ lời kể.'
    : chosen ? `Giọng sẵn sàng: ${chosen.name}. Tông mặc định đã được nâng nhẹ.`
    : 'Chưa tìm thấy giọng tiếng Việt. Cậu có thể bật/cài giọng tiếng Việt trong cài đặt giọng nói của thiết bị rồi mở lại trang.';
  $('#voice-preview').disabled = !chosen;
}
function setNarrationEnabled(value) {
  narrationEnabled = value;
  listenButton.setAttribute('aria-pressed', String(value));
  $('span', listenButton).textContent = value ? 'Đang kể' : 'Nghe kể';
}
// Speak sentence by sentence, to keep long scenes reliable on desktop and mobile.
function speakText(text, narrator = 'ingenuity', preview = false) {
  stopSpeech();
  const voice = preferredVoice();
  if (!speechSupported || !voice) {
    setNarrationEnabled(false);
    announce('Chưa có giọng tiếng Việt trên thiết bị. Cậu vẫn có thể đọc hoặc tải lời kể nhé.');
    return;
  }
  const generation = speechGeneration;
  const sentences = text.match(/[^.!?…]+(?:[.!?…]+|$)/g) || [text];
  let index = 0;
  voicePreviewing = preview;
  function nextSentence() {
    if (generation !== speechGeneration || document.hidden || (!preview && (!narrationEnabled || activeDialog))) return;
    if (index >= sentences.length) { voicePreviewing = false; return; }
    const utterance = new SpeechSynthesisUtterance(sentences[index++].trim());
    utterance.lang = 'vi-VN';
    utterance.voice = voice;
    utterance.rate = Number(rateSlider.value);
    utterance.pitch = Math.max(0.9, Number(pitchSlider.value) - (narrator === 'guide' ? 0.06 : 0));
    utterance.volume = 1;
    utterance.onend = nextSentence;
    utterance.onerror = event => {
      if (generation !== speechGeneration || ['canceled', 'interrupted'].includes(event.error)) return;
      voicePreviewing = false;
      setNarrationEnabled(false);
      announce('Giọng đọc đang không khả dụng. Cậu thử giọng khác ở nút “Giọng”, hoặc tiếp tục đọc nhé.');
    };
    window.speechSynthesis.speak(utterance);
  }
  nextSentence();
}
function speakCurrentStep() {
  if (!narrationEnabled || activeDialog || document.hidden || !currentStep || !speechSupported) { stopSpeech(); return; }
  speakText(currentStep.dataset.speech, currentStep.dataset.narrator);
}
listenButton.addEventListener('click', () => {
  if (!speechSupported || !preferredVoice()) {
    refreshVoiceOptions();
    openDialog('voice');
    return;
  }
  setNarrationEnabled(!narrationEnabled);
  if (narrationEnabled) {
    announce(currentStep ? 'Tớ kể trang này nhé. Cậu lật trang theo nhịp của mình thôi.' : 'Đã bật giọng kể. Mở sách rồi chọn trang đầu để nghe nhé.');
    speakCurrentStep();
  } else { stopSpeech(); announce('Tạm dừng giọng kể.'); }
});
voiceSelect.addEventListener('change', () => {
  selectedVoiceURI = voiceSelect.value;
  refreshVoiceOptions();
  if (voicePreviewing) speakText('Chào cậu! Tớ là Ingenuity. Mình cùng khám phá Sao Hỏa nhé.', 'ingenuity', true);
});
function updateVoiceLabels() {
  const pitch = Number(pitchSlider.value);
  $('#pitch-value').value = `${pitch >= 1.12 ? 'Nhẹ & trong' : 'Tự nhiên'} · ${pitch.toFixed(2).replace('.', ',')}`;
  $('#rate-value').value = `${Number(rateSlider.value).toFixed(2).replace('.', ',')}×`;
}
[pitchSlider, rateSlider].forEach(slider => slider.addEventListener('input', updateVoiceLabels));
$('#voice-preview').addEventListener('click', () => speakText('Chào cậu! Tớ là Ingenuity. Nhỏ thôi, nhưng tớ có một giấc mơ thật lớn. Đi cùng tớ nhé?', 'ingenuity', true));
if (speechSupported) window.speechSynthesis.addEventListener('voiceschanged', refreshVoiceOptions);
refreshVoiceOptions();
updateVoiceLabels();

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
      voicePreviewing = false;
      stopSpeech();
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

/* Bookmarks and chapter links open their page before moving focus. */
$$('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
  const index = bookPageFromHash(link.hash);
  if (index < 0) return;
  event.preventDefault();
  const parentDialog = link.closest('dialog');
  if (parentDialog) closeDialog(parentDialog);
  finishPageTurn();
  showBookPage(index, { focus: true });
}));

/* A small static book reader. All story pages remain in the HTML for printing. */
const bookSpread = $('#book-spread');
const bookReader = $('#reader');
const compactBook = window.matchMedia('(max-width: 760px)');
let currentBookPage = 0;
let isTurning = false;
let turnTimer;
let pointerStart = null;

function bookPageFromHash(hash) {
  if (!hash || hash === '#home') return 0;
  const element = document.getElementById(hash.slice(1));
  const page = element?.closest('[data-book-page]');
  return page ? bookPages.indexOf(page) : -1;
}
function pageCounter(page, index, compact = compactBook.matches) {
  if (page.dataset.kind === 'cover') return 'Bìa sách';
  if (page.dataset.kind === 'contents') return 'Mục lục';
  const number = index - 1;
  return compact ? `Trang ${number} / 13` : `Trang ${number * 2 - 1}–${number * 2} / 26`;
}
function updateBookControls() {
  if (!bookPages.length) return;
  const page = bookPages[currentBookPage];
  $('#book-prev').disabled = currentBookPage === 0;
  $('#book-next').disabled = currentBookPage === bookPages.length - 1;
  $('#book-counter').textContent = pageCounter(page, currentBookPage);
  const folio = $('.paper-footer>span:last-child', page);
  if (folio && currentBookPage >= 2) folio.textContent = String(compactBook.matches ? currentBookPage - 1 : (currentBookPage - 1) * 2).padStart(2, '0');
  $('#book-chapter-label').textContent = page.dataset.kind === 'cover' ? 'Một câu chuyện của AEVUM'
    : page.dataset.kind === 'contents' ? 'Năm chương · một người bạn nhỏ'
    : page.dataset.kind === 'ending' ? 'Hết chuyện, chưa hết ước mơ'
    : `Chương ${page.dataset.chapter} · ${$('.illustration-caption p', page).textContent}`;
  const nextText = page.dataset.kind === 'cover' ? 'Mở sách' : page.dataset.kind === 'contents' ? 'Bắt đầu nhé' : 'Trang tiếp';
  $('span', $('#book-next')).textContent = nextText;
  $('#book-next').setAttribute('aria-label', page.dataset.kind === 'cover' ? 'Mở cuốn sách' : 'Mở trang tiếp theo');
  $('#book-progress-fill').style.transform = `scaleX(${currentBookPage / (bookPages.length - 1)})`;
  $('#book-status').textContent = `${$('#book-counter').textContent}. ${$('#book-chapter-label').textContent}.`;
}
function finishPageTurn() {
  clearTimeout(turnTimer);
  $$('.page-turn', bookSpread).forEach(layer => layer.remove());
  bookPages.forEach(page => page.classList.remove('arriving', 'cover-arriving'));
  isTurning = false;
}
function animatePageTurn(previous, direction) {
  if (motionReduced.matches) return;
  if (!compactBook.matches && previous.dataset.kind !== 'cover') {
    const original = direction > 0 ? $('.book-prose', previous) : $('.book-page', previous);
    if (original) {
      const layer = document.createElement('div');
      layer.className = `page-turn${direction < 0 ? ' backward' : ''}`;
      layer.setAttribute('aria-hidden', 'true');
      layer.inert = true;
      const copy = original.cloneNode(true);
      copy.removeAttribute('id');
      $$('[id]', copy).forEach(element => element.removeAttribute('id'));
      $$('a,button,input,select,textarea,[tabindex]', copy).forEach(element => element.tabIndex = -1);
      layer.append(copy);
      bookSpread.append(layer);
    }
  }
  isTurning = true;
  turnTimer = setTimeout(finishPageTurn, compactBook.matches ? 360 : 600);
}
function showBookPage(index, { animate = true, focus = false, scroll = true, updateHash = true } = {}) {
  if (!Number.isInteger(index) || index < 0 || index >= bookPages.length) return false;
  if (isTurning) return false;
  const previous = bookPages[currentBookPage];
  const next = bookPages[index];
  const direction = index >= currentBookPage ? 1 : -1;
  stopSpeech();
  voicePreviewing = false;
  bookPages.forEach((page, position) => page.hidden = position !== index);
  currentBookPage = index;
  bookSpread.classList.toggle('is-cover', next.dataset.kind === 'cover');
  if (animate && previous !== next) {
    next.classList.add(next.dataset.kind === 'cover' ? 'cover-arriving' : 'arriving');
    animatePageTurn(previous, direction);
  }
  $$('img', next).forEach(img => img.loading = 'eager');
  // Warm the next illustration without loading the whole book up front.
  const nextImage = bookPages[index + 1]?.querySelector('img');
  if (nextImage) { const image = new Image(); image.src = nextImage.getAttribute('src'); }
  currentStep = $('.story-step', next);
  updateBookControls();
  if (updateHash) history.replaceState(null, '', `#${next.id}`);
  if (focus) {
    const target = $('h1,h2', next) || bookReader;
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
  if (scroll && bookReader.getBoundingClientRect().top < -15) {
    bookReader.scrollIntoView({ behavior: motionReduced.matches ? 'auto' : 'smooth', block: 'start' });
  }
  speakCurrentStep();
  return true;
}
$('#book-prev').addEventListener('click', () => showBookPage(currentBookPage - 1));
$('#book-next').addEventListener('click', () => showBookPage(currentBookPage + 1));
$$('[data-book-go]').forEach(button => button.addEventListener('click', () => {
  const index = bookPages.findIndex(page => page.id === button.dataset.bookGo);
  showBookPage(index, { focus: true });
}));
document.addEventListener('keydown', event => {
  if (activeDialog || event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.target.closest('input,select,textarea,[contenteditable="true"]')) return;
  const selection = window.getSelection?.();
  if (selection && !selection.isCollapsed) return;
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    showBookPage(currentBookPage + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
bookSpread.addEventListener('pointerdown', event => {
  if (event.pointerType !== 'touch' || activeDialog || event.target.closest('a,button,input,select,textarea')) return;
  pointerStart = { x: event.clientX, y: event.clientY, time: event.timeStamp };
});
bookSpread.addEventListener('pointerup', event => {
  if (!pointerStart) return;
  const start = pointerStart;
  pointerStart = null;
  const x = event.clientX - start.x;
  const y = event.clientY - start.y;
  if (event.timeStamp - start.time < 900 && Math.abs(x) > 65 && Math.abs(x) > Math.abs(y) * 1.6) {
    showBookPage(currentBookPage + (x < 0 ? 1 : -1));
  }
});
bookSpread.addEventListener('pointercancel', () => pointerStart = null);
compactBook.addEventListener?.('change', () => { finishPageTurn(); updateBookControls(); });
function followBookHash() {
  const page = bookPageFromHash(window.location.hash);
  if (page >= 0) { finishPageTurn(); showBookPage(page, { animate: false, scroll: false, updateHash: false }); }
}
window.addEventListener('hashchange', followBookHash);
window.addEventListener('popstate', followBookHash);
document.addEventListener('visibilitychange', () => document.hidden ? stopSpeech() : speakCurrentStep());
window.addEventListener('pagehide', stopSpeech);
if (bookPages.length) {
  bookSpread.classList.add('enhanced');
  $('.book-navigation').hidden = false;
  const startPage = bookPageFromHash(window.location.hash);
  showBookPage(startPage >= 0 ? startPage : 0, { animate: false, scroll: false, updateHash: false });
}


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
  $('#mass-value').value = `${mass.toFixed(1).replace('.', ',')} kg`;
  $('#earth-weight').replaceChildren(document.createTextNode(`${(mass * 9.81).toFixed(1).replace('.', ',')} `));
  $('#mars-weight').replaceChildren(document.createTextNode(`${(mass * 3.71).toFixed(1).replace('.', ',')} `));
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
    rotors: 'Đúng rồi! Cánh lớn, quay nhanh đẩy được nhiều không khí hơn xuống dưới. Thân nhẹ cũng giúp tớ bay. Cậu vừa nghĩ như một kỹ sư đấy!',
    heavy: 'Mình thử nghĩ thêm nhé: thân nặng sẽ cần nhiều lực nâng hơn. Còn bộ phận nào có thể đẩy được nhiều không khí xuống dưới?',
    pilot: 'Ý tưởng thú vị! Nhưng tín hiệu mất nhiều phút mới tới Sao Hỏa, nên không thể lái trực tiếp từ Trái Đất. Cậu thử nghĩ về cánh quạt nhé.'
  };
  feedback.textContent = explanations[value] || 'Cậu chọn một ý tưởng trước nhé.';
});
