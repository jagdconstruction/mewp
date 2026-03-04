const PROJECT_OPTIONS = [
  "  ",
  "69th St. Transfer Bridge",
  "BA-2024-RE-102-CM Mid-Hudson Bridge",
  "BRX9579 - Boston Road Bridge",
  "BW96 & VN12 - Whitestone Hellman Platforms",
  "C35311 - Dyre Ave. Line",
  "D214898 - TANE22-29 Restani T&M",
  "D264324 - Westchester County Field Metalizing",
  "D264965 - Highway bridge repair W&W",
  "D265046 - Highway bridge repair W&W",
  "D265307 - WO03",
  "D265343 - Bove W&W 2",
  "Devon Bridge",
  "DMB-25-01",
  "FCC 2056",
  "Gold Star Memorial Bridge",
  "Governors Island",
  "Grand Concourse",
  "GW 244.289 Lemoine Ave",
  "GWB Cables",
  "HB1070MD - Macombs Dam Bridge",
  "HBKBQE - NYCDOT Bove",
  "K7279 & K6176 Gordie Howe",
  "Park Avenue",
  "Pulaski 8B",
  "QBB-2017",
  "RK90",
  "Sandy Relief",
  "VN81X",
  "VN-84B - Verrazzano Bridge Ramps Brooklyn",
  "Warehouse"
];
const SHIFT_OPTIONS = ["  ", "Day Shift", "Night Shift"];
const UNIT_OPTIONS = [
  "  ",
  "Type 3 – Telescopic Boom (Straight Boom) – Diesel",
  "Type 3 – Articulating Boom (Knuckle Boom) – Diesel",
  "Type 3 – Rough Terrain Scissor Lift (Diesel)"
];

const SECTIONS = [
  {
    id: 'powerOff',
    title: 'Power Off Checks',
    blocks: [
      { type: 'item', exportIndex: 0, label: '1) Wheels/Tires/Tracks' },
      { type: 'item', exportIndex: 1, label: '2) Lights/Strobes' },
      { type: 'heading', label: '3) Engine/Battery' },
      { type: 'item', exportIndex: 2, label: 'a) Cover panel(s)' },
      { type: 'item', exportIndex: 3, label: 'b) Debris' },
      { type: 'item', exportIndex: 4, label: 'c) Belts/Hoses' },
      { type: 'item', exportIndex: 5, label: 'd) Air filter indicator' },
      { type: 'item', exportIndex: 6, label: 'e) Wires/Cables/Terminals' },
      { type: 'item', exportIndex: 7, label: 'f) Battery-Batteries clean/dry/secure' },
      { type: 'heading', label: '4) Fluids' },
      { type: 'item', exportIndex: 8, label: 'a) Engine oil (Level / Leaks)' },
      { type: 'item', exportIndex: 9, label: 'b) Engine coolant (Level / Leaks)' },
      { type: 'item', exportIndex: 10, label: 'c) Hydraulic oil (Level / Leaks)' },
      { type: 'item', exportIndex: 11, label: 'd) Fuel/Battery (Level / Leaks)' },
      { type: 'heading', label: '5) Hydraulics' },
      { type: 'item', exportIndex: 12, label: 'a) Cylinders/Rods/Pin locks' },
      { type: 'item', exportIndex: 13, label: 'b) Hoses/Lines/Fittings' },
      { type: 'item', exportIndex: 14, label: '6) Capacity decal/plate' },
      { type: 'item', exportIndex: 15, label: '7) Applicable inspection notices' },
      { type: 'item', exportIndex: 16, label: '8) Counterweight/Counterweight bolt(s)' },
      { type: 'item', exportIndex: 17, label: '9) Accessory plugs & cables' },
      { type: 'item', exportIndex: 18, label: '10) Boom/Lift arms/Extending structure' },
      { type: 'item', exportIndex: 19, label: '11) Power track' },
      { type: 'item', exportIndex: 20, label: '12) Safety prop' },
      { type: 'item', exportIndex: 21, label: '13) Work platform/Guardrails/Anchor points' },
      { type: 'item', exportIndex: 22, label: '14) OEM/Approved options/accessories' },
      { type: 'item', exportIndex: 23, label: "15) Manufacturer's operation manuals" },
      { type: 'item', exportIndex: 24, label: '16) Decals/Plates/Markings' },
      { type: 'item', exportIndex: 25, label: '17) Personal protective equipment (as required)' },
      { type: 'item', exportIndex: 26, label: '18) Housekeeping' },
      { type: 'item', exportIndex: 27, label: '19) Other' }
    ]
  },
  {
    id: 'powerOn',
    title: 'Power On Checks',
    blocks: [
      { type: 'item', exportIndex: 28, label: '20) Unit starts & runs properly' },
      { type: 'item', exportIndex: 29, label: '21) Instruments/System warning indicators' },
      { type: 'item', exportIndex: 30, label: '22) Fuel/Charge level' },
      { type: 'item', exportIndex: 31, label: '23) Audible/Visual warning devices' },
      { type: 'heading', label: '24) Function controls' },
      { type: 'item', exportIndex: 32, label: 'a) Control markings' },
      { type: 'item', exportIndex: 33, label: 'b) Drive' },
      { type: 'item', exportIndex: 34, label: 'c) Steering' },
      { type: 'item', exportIndex: 35, label: 'd) Braking' },
      { type: 'item', exportIndex: 36, label: 'e) Work platform' },
      { type: 'item', exportIndex: 37, label: 'f) Slewing (turret rotate)' },
      { type: 'item', exportIndex: 38, label: 'g) Boom/Jib/Lift arms' },
      { type: 'item', exportIndex: 39, label: 'h) Accessories/Optional equipment' },
      { type: 'item', exportIndex: 40, label: 'i) Function-enable (deadman) devices' },
      { type: 'item', exportIndex: 41, label: '25) Emergency/Auxiliary controls' },
      { type: 'item', exportIndex: 42, label: '26) Safety interlocks' },
      { type: 'item', exportIndex: 43, label: '27) Other' }
    ]
  },
  {
    id: 'worksite',
    title: 'Worksite Inspection',
    blocks: [
      { type: 'item', exportIndex: 44, label: '28) Drop-offs or holes' },
      { type: 'item', exportIndex: 45, label: '29) Bumps & floor/Ground obstructions' },
      { type: 'item', exportIndex: 46, label: '30) Debris' },
      { type: 'item', exportIndex: 47, label: '31) Overhead obstructions' },
      { type: 'item', exportIndex: 48, label: '32) Electrical conductors' },
      { type: 'item', exportIndex: 49, label: '33) Hazardous locations' },
      { type: 'item', exportIndex: 50, label: '34) Slopes' },
      { type: 'item', exportIndex: 51, label: '35) Ground/Surface & support conditions' },
      { type: 'item', exportIndex: 52, label: '36) Pedestrian/Vehicle traffic' },
      { type: 'item', exportIndex: 53, label: '37) Weather conditions' },
      { type: 'item', exportIndex: 54, label: '38) Other possible hazards' },
      { type: 'item', exportIndex: 55, label: '39) Other' }
    ]
  }
];

const EXPORT = {
  pageSize: { w: 612, h: 792 },
  templateFile: 'mewp_template.pdf',
  font: {
    regular: 11,
    small: 10,
    tiny: 9,
    title: 14
  },
  fields: {
    project: [71.9135, 684.482, 315.821, 698.468],
    reportDate: [342.291, 684.29, 445.165, 697.338],
    shift: [474.407, 684.29, 572.97, 698.139],
    unit: [133.165, 668.971, 315.961, 683.651],
    notes: [67.6582, 143.197, 574.92, 193.44],
    printedName: [31.9185, 57.39, 198.064, 71.239],
    signature: [201.967, 50, 424.84, 76],
    filledDate: [438.941, 57.39, 537.485, 71.239]
  },
  checkboxGroups: [
    // Power off 1-2
    [[260.4835, 646.975], [282.298, 646.975], [304.3175, 646.975]],
    [[260.4835, 632.28], [282.298, 632.28], [304.3175, 632.28]],
    // 3a-3f
    [[260.4185, 604.049], [282.2325, 604.049], [304.2525, 604.049]],
    [[260.4185, 589.544], [282.2325, 589.544], [304.2525, 589.544]],
    [[260.4185, 575.5635], [282.2325, 575.5635], [304.2525, 575.5635]],
    [[260.4185, 561.583], [282.2325, 561.583], [304.2525, 561.583]],
    [[260.4185, 547.602], [282.2325, 547.602], [304.2525, 547.602]],
    [[260.4185, 533.1255], [282.2325, 533.1255], [304.2525, 533.1255]],
    // 4a-4d
    [[260.4765, 504.816], [282.291, 504.816], [304.3105, 504.816]],
    [[260.4765, 490.8355], [282.291, 490.8355], [304.3105, 490.8355]],
    [[260.4765, 476.8545], [282.291, 476.8545], [304.3105, 476.8545]],
    [[260.4765, 462.5245], [282.291, 462.5245], [304.3105, 462.5245]],
    // 5a-19
    [[260.4765, 433.748], [282.291, 433.748], [304.3105, 433.748]],
    [[260.4765, 419.533], [282.291, 419.533], [304.3105, 419.533]],
    [[260.4765, 405.2045], [282.291, 405.2045], [304.3105, 405.2045]],
    [[260.4765, 390.0005], [282.291, 390.0005], [304.3105, 390.0005]],
    [[260.4765, 374.8255], [282.291, 374.8255], [304.3105, 374.8255]],
    [[260.4765, 360.554], [282.291, 360.554], [304.3105, 360.554]],
    [[260.4765, 347.0685], [282.291, 347.0685], [304.3105, 347.0685]],
    [[260.4765, 332.622], [282.291, 332.622], [304.3105, 332.622]],
    [[260.4765, 318.1755], [282.291, 318.1755], [304.3105, 318.1755]],
    [[260.4765, 303.7285], [282.291, 303.7285], [304.3105, 303.7285]],
    [[260.4765, 289.69], [282.291, 289.69], [304.3105, 289.69]],
    [[260.4765, 275.5055], [282.291, 275.5055], [304.3105, 275.5055]],
    [[260.4765, 261.5685], [282.291, 261.5685], [304.3105, 261.5685]],
    [[260.4765, 246.9035], [282.291, 246.9035], [304.3105, 246.9035]],
    [[260.4765, 232.8355], [282.291, 232.8355], [304.3105, 232.8355]],
    [[260.4765, 218.622], [282.291, 218.622], [304.3105, 218.622]],
    // power on 20-23
    [[519.147, 647.1], [541.516, 647.1], [563.885, 647.1]],
    [[519.147, 632.4055], [541.516, 632.4055], [563.885, 632.4055]],
    [[519.147, 618.524], [541.516, 618.524], [563.885, 618.524]],
    [[519.147, 604.136], [541.516, 604.136], [563.885, 604.136]],
    // 24a-27
    [[519.147, 575.418], [541.516, 575.418], [563.885, 575.418]],
    [[519.147, 561.437], [541.516, 561.437], [563.885, 561.437]],
    [[519.147, 547.4565], [541.516, 547.4565], [563.885, 547.4565]],
    [[519.147, 532.98], [541.516, 532.98], [563.885, 532.98]],
    [[519.147, 519.0285], [541.516, 519.0285], [563.885, 519.0285]],
    [[519.147, 504.6995], [541.516, 504.6995], [563.885, 504.6995]],
    [[519.147, 490.719], [541.516, 490.719], [563.885, 490.719]],
    [[519.147, 476.738], [541.516, 476.738], [563.885, 476.738]],
    [[519.147, 462.408], [541.516, 462.408], [563.885, 462.408]],
    [[519.147, 447.698], [541.516, 447.698], [563.885, 447.698]],
    [[519.147, 433.6315], [541.516, 433.6315], [563.885, 433.6315]],
    [[519.147, 419.4165], [541.516, 419.4165], [563.885, 419.4165]],
    // worksite 28-39
    [[519.147, 374.942], [541.516, 374.942], [563.885, 374.942]],
    [[519.147, 360.6705], [541.516, 360.6705], [563.885, 360.6705]],
    [[519.147, 347.185], [541.516, 347.185], [563.885, 347.185]],
    [[519.147, 332.7385], [541.516, 332.7385], [563.885, 332.7385]],
    [[519.147, 318.292], [541.516, 318.292], [563.885, 318.292]],
    [[519.147, 303.845], [541.516, 303.845], [563.885, 303.845]],
    [[519.147, 289.8065], [541.516, 289.8065], [563.885, 289.8065]],
    [[519.147, 275.389], [541.516, 275.389], [563.885, 275.389]],
    [[519.147, 261.452], [541.516, 261.452], [563.885, 261.452]],
    [[519.147, 247.02], [541.516, 247.02], [563.885, 247.02]],
    [[519.147, 232.952], [541.516, 232.952], [563.885, 232.952]],
    [[519.147, 218.7385], [541.516, 218.7385], [563.885, 218.7385]]
  ]
};

const state = {
  project: PROJECT_OPTIONS[0],
  reportDate: todayISO(),
  shift: SHIFT_OPTIONS[0],
  unit: UNIT_OPTIONS[0],
  notes: '',
  printedName: '',
  filledDate: todayISO(),
  signature: null,
  sections: SECTIONS.map(section => ({
    collapsed: false,
    items: section.blocks.filter(b => b.type === 'item').map(block => ({
      label: block.label,
      status: '',
      photos: []
    }))
  }))
};

const els = {
  project: document.getElementById('project'),
  reportDate: document.getElementById('reportDate'),
  shift: document.getElementById('shift'),
  unit: document.getElementById('unit'),
  sections: document.getElementById('sections'),
  notes: document.getElementById('notes'),
  printedName: document.getElementById('printedName'),
  filledDate: document.getElementById('filledDate'),
  sigBtn: document.getElementById('sigBtn'),
  sigPreview: document.getElementById('sigPreview'),
  photoPicker: document.getElementById('photoPicker'),
  sigModal: document.getElementById('sigModal'),
  sigCanvas: document.getElementById('sigCanvas'),
  sigClose: document.getElementById('sigClose'),
  sigClear: document.getElementById('sigClear'),
  sigCancel: document.getElementById('sigCancel'),
  sigSave: document.getElementById('sigSave')
};

let photoTarget = null; // {sectionIndex, itemIndex}
let sigDrawing = false;
let sigLast = null;

init();

function init() {
  renderSelect(els.project, PROJECT_OPTIONS, state.project);
  renderSelect(els.shift, SHIFT_OPTIONS, state.shift);
  renderSelect(els.unit, UNIT_OPTIONS, state.unit);
  els.reportDate.value = state.reportDate;
  els.filledDate.value = state.filledDate;
  wireTopLevel();
  renderSections();
  updateSigPreview();
}

function renderSelect(el, options, selected) {
  el.innerHTML = options.map(v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join('');
  el.value = selected;
}

function wireTopLevel() {
  document.body.addEventListener('click', onBodyClick);
  document.body.addEventListener('input', onBodyInput);
  document.body.addEventListener('change', onBodyChange);

  els.project.addEventListener('change', () => state.project = els.project.value);
  els.shift.addEventListener('change', () => state.shift = els.shift.value);
  els.unit.addEventListener('change', () => state.unit = els.unit.value);
  els.reportDate.addEventListener('change', () => {
    const prev = state.reportDate;
    state.reportDate = els.reportDate.value;
    if (!state.filledDate || state.filledDate === prev) {
      state.filledDate = state.reportDate;
      els.filledDate.value = state.filledDate;
    }
  });
  els.notes.addEventListener('input', () => state.notes = els.notes.value);
  els.printedName.addEventListener('input', () => state.printedName = els.printedName.value);
  els.filledDate.addEventListener('change', () => state.filledDate = els.filledDate.value);

  els.photoPicker.addEventListener('change', handlePhotoPicked);
  els.sigBtn.addEventListener('click', openSignatureModal);
  els.sigClose.addEventListener('click', closeSignatureModal);
  els.sigCancel.addEventListener('click', closeSignatureModal);
  els.sigClear.addEventListener('click', clearSignatureCanvas);
  els.sigSave.addEventListener('click', saveSignatureFromCanvas);

  els.sigCanvas.addEventListener('pointerdown', onSigPointerDown);
  els.sigCanvas.addEventListener('pointermove', onSigPointerMove);
  els.sigCanvas.addEventListener('pointerup', onSigPointerUp);
  els.sigCanvas.addEventListener('pointerleave', onSigPointerUp);
}

function onBodyClick(e) {
  const actionBtn = e.target.closest('[data-action]');
  if (actionBtn) {
    const action = actionBtn.getAttribute('data-action');
    if (action === 'reset') doReset();
    if (action === 'save') doSave();
    return;
  }

  const toggle = e.target.closest('[data-toggle-section]');
  if (toggle) {
    const sectionIndex = Number(toggle.getAttribute('data-toggle-section'));
    state.sections[sectionIndex].collapsed = !state.sections[sectionIndex].collapsed;
    renderSections();
    return;
  }

  const statusBtn = e.target.closest('[data-status]');
  if (statusBtn) {
    const [sectionIndex, itemIndex, status] = statusBtn.getAttribute('data-status').split(':').map((v,i)=> i<2 ? Number(v) : v);
    const item = state.sections[sectionIndex].items[itemIndex];
    item.status = item.status === status ? '' : status;
    renderSections();
    return;
  }

  const attachBtn = e.target.closest('[data-attach]');
  if (attachBtn) {
    const [sectionIndex, itemIndex] = attachBtn.getAttribute('data-attach').split(':').map(Number);
    photoTarget = { sectionIndex, itemIndex };
    els.photoPicker.click();
    return;
  }

  const removeBtn = e.target.closest('[data-remove-photo]');
  if (removeBtn) {
    const [sectionIndex, itemIndex, photoIndex] = removeBtn.getAttribute('data-remove-photo').split(':').map(Number);
    state.sections[sectionIndex].items[itemIndex].photos.splice(photoIndex, 1);
    renderSections();
    return;
  }
}

function onBodyInput(e) {
  // no-op for this form
}

function onBodyChange(e) {
  // placeholder for future use
}

function renderSections() {
  els.sections.innerHTML = SECTIONS.map((section, sectionIndex) => {
    const view = state.sections[sectionIndex];
    const photoCount = view.items.reduce((sum, item) => sum + item.photos.length, 0);
    const blocksHtml = section.blocks.map(block => {
      if (block.type === 'heading') {
        return `<div class="item-group-title">${escapeHtml(block.label)}</div>`;
      }
      const itemIdx = itemIndexForExport(sectionIndex, block.exportIndex);
      const item = view.items[itemIdx];
      const okCls = item.status === 'ok' ? 'active ok' : '';
      const arCls = item.status === 'ar' ? 'active ar' : '';
      const naCls = item.status === 'na' ? 'active na' : '';
      const thumbs = item.photos.map((photo, photoIndex) => `
        <div class="photo-chip">
          <img src="${photo.dataURL}" alt="attached photo" />
          <button class="btn small danger remove-photo" type="button" data-remove-photo="${sectionIndex}:${itemIdx}:${photoIndex}">Remove</button>
        </div>
      `).join('');
      return `
        <div class="item-row">
          <div class="item-label">${escapeHtml(block.label)}</div>
          <div class="item-controls">
            <div class="seg">
              <button class="seg-btn ${okCls}" type="button" data-status="${sectionIndex}:${itemIdx}:ok">OK</button>
              <button class="seg-btn ${arCls}" type="button" data-status="${sectionIndex}:${itemIdx}:ar">AR</button>
              <button class="seg-btn ${naCls}" type="button" data-status="${sectionIndex}:${itemIdx}:na">N/A</button>
            </div>
            <div class="photo-wrap">
              <button class="btn small" type="button" data-attach="${sectionIndex}:${itemIdx}">Attach photo</button>
              <span class="badge">${item.photos.length}</span>
            </div>
          </div>
          <div class="photo-list">${thumbs}</div>
          <div class="item-note">Photos save to separate photo pages. Max 6 photos per PDF page.</div>
        </div>
      `;
    }).join('');
    return `
      <section class="card section-card">
        <div class="section-head">
          <div class="section-title">
            <h3>${escapeHtml(section.title)}</h3>
            <span class="badge">${photoCount} photo${photoCount === 1 ? '' : 's'}</span>
          </div>
          <div class="section-actions">
            <button class="btn small toggle-btn" type="button" data-toggle-section="${sectionIndex}">${view.collapsed ? 'Show' : 'Hide'}</button>
          </div>
        </div>
        ${view.collapsed ? '' : blocksHtml}
      </section>
    `;
  }).join('');
}

function itemIndexForExport(sectionIndex, exportIndex) {
  const firstExportIndex = SECTIONS.slice(0, sectionIndex).reduce((sum, s) => sum + s.blocks.filter(b => b.type === 'item').length, 0);
  return exportIndex - firstExportIndex;
}

async function handlePhotoPicked() {
  const files = Array.from(els.photoPicker.files || []);
  els.photoPicker.value = '';
  if (!files.length || !photoTarget) return;
  const { sectionIndex, itemIndex } = photoTarget;
  photoTarget = null;

  for (const file of files) {
    try {
      const photo = await normalizeImageFile(file);
      state.sections[sectionIndex].items[itemIndex].photos.push(photo);
    } catch (err) {
      console.error(err);
      alert('One of the selected images could not be read.');
    }
  }
  renderSections();
}

function normalizeImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxEdge = 1800;
        const scale = Math.min(1, maxEdge / Math.max(img.width, img.height));
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL('image/jpeg', 0.9);
        resolve({ dataURL, bytes: dataURLToBytes(dataURL), mime: 'image/jpeg' });
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function dataURLToBytes(dataURL) {
  const base64 = dataURL.split(',')[1] || '';
  const bin = atob(base64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function isoToMMDDYYYY(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${m}/${d}/${y}`;
}

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function setDisabled(disabled) {
  document.querySelectorAll('button, input, select, textarea').forEach(el => {
    if (el.closest('.modal')) return;
    el.disabled = disabled;
  });
}

function openSignatureModal() {
  els.sigModal.classList.remove('hidden');
  setupSigCanvas();
}

function closeSignatureModal() {
  els.sigModal.classList.add('hidden');
}

function setupSigCanvas() {
  const canvas = els.sigCanvas;
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.floor(rect.width * dpr);
  canvas.height = Math.floor(180 * dpr);
  canvas.style.height = '180px';
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, rect.width, 180);
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#111';
  if (state.signature) {
    const img = new Image();
    img.onload = () => {
      const r = canvas.getBoundingClientRect();
      const ctx2 = canvas.getContext('2d');
      ctx2.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx2.drawImage(img, 0, 0, r.width, 180);
    };
    img.src = state.signature;
  }
}

function sigGetPos(ev) {
  const r = els.sigCanvas.getBoundingClientRect();
  return { x: ev.clientX - r.left, y: ev.clientY - r.top };
}

function onSigPointerDown(ev) {
  ev.preventDefault();
  sigDrawing = true;
  sigLast = sigGetPos(ev);
  try { els.sigCanvas.setPointerCapture(ev.pointerId); } catch (_) {}
}
function onSigPointerMove(ev) {
  if (!sigDrawing) return;
  ev.preventDefault();
  const pos = sigGetPos(ev);
  const ctx = els.sigCanvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(sigLast.x, sigLast.y);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
  sigLast = pos;
}
function onSigPointerUp(ev) {
  if (!sigDrawing) return;
  ev.preventDefault();
  sigDrawing = false;
  sigLast = null;
}

function clearSignatureCanvas() {
  const canvas = els.sigCanvas;
  const ctx = canvas.getContext('2d');
  const r = canvas.getBoundingClientRect();
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, r.width, 180);
}

function saveSignatureFromCanvas() {
  const canvas = els.sigCanvas;
  const tmp = document.createElement('canvas');
  const r = canvas.getBoundingClientRect();
  tmp.width = Math.floor(r.width);
  tmp.height = 180;
  const ctx = tmp.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, tmp.width, tmp.height);
  ctx.drawImage(canvas, 0, 0, tmp.width, tmp.height);
  state.signature = tmp.toDataURL('image/png');
  updateSigPreview();
  closeSignatureModal();
}

function updateSigPreview() {
  if (state.signature) {
    els.sigPreview.innerHTML = `<img src="${state.signature}" alt="signature preview" />`;
  } else {
    els.sigPreview.textContent = 'No signature saved';
  }
}

function doReset() {
  if (!confirm('Reset the MEWP inspection form?')) return;
  state.project = PROJECT_OPTIONS[0];
  state.reportDate = todayISO();
  state.shift = SHIFT_OPTIONS[0];
  state.unit = UNIT_OPTIONS[0];
  state.notes = '';
  state.printedName = '';
  state.filledDate = state.reportDate;
  state.signature = null;
  state.sections.forEach(section => {
    section.collapsed = false;
    section.items.forEach(item => {
      item.status = '';
      item.photos = [];
    });
  });
  els.project.value = state.project;
  els.reportDate.value = state.reportDate;
  els.shift.value = state.shift;
  els.unit.value = state.unit;
  els.notes.value = state.notes;
  els.printedName.value = state.printedName;
  els.filledDate.value = state.filledDate;
  updateSigPreview();
  renderSections();
}

async function doSave() {
  setDisabled(true);
  try {
    const templateBytes = await fetch(EXPORT.templateFile).then(r => r.arrayBuffer());
    const { PDFDocument, StandardFonts, rgb } = PDFLib;
    const outDoc = await PDFDocument.create();
    const templateDoc = await PDFDocument.load(templateBytes);
    const [templatePage] = await outDoc.copyPages(templateDoc, [0]);
    outDoc.addPage(templatePage);
    const page = outDoc.getPage(0);
    const helv = await outDoc.embedFont(StandardFonts.Helvetica);
    const helvBold = await outDoc.embedFont(StandardFonts.HelveticaBold);

    drawFieldText(page, state.project, EXPORT.fields.project, helvBold, 11, { align: 'left' });
    drawFieldText(page, isoToMMDDYYYY(state.reportDate), EXPORT.fields.reportDate, helvBold, 11, { align: 'center' });
    drawFieldText(page, state.shift, EXPORT.fields.shift, helvBold, 11, { align: 'center' });
    drawFieldText(page, state.unit, EXPORT.fields.unit, helvBold, 10, { align: 'left' });
    drawMultiline(page, state.notes, EXPORT.fields.notes, helv, 10, 12);
    drawFieldText(page, state.printedName, EXPORT.fields.printedName, helvBold, 11, { align: 'center' });
    drawFieldText(page, isoToMMDDYYYY(state.filledDate), EXPORT.fields.filledDate, helvBold, 11, { align: 'center' });

    if (state.signature) {
      const sigBytes = dataURLToBytes(state.signature);
      const sigImg = await outDoc.embedPng(sigBytes);
      drawImageContain(page, sigImg, rectToBox(EXPORT.fields.signature));
    }

    const flatItems = state.sections.flatMap(sec => sec.items);
    flatItems.forEach((item, idx) => {
      if (!item.status) return;
      const coords = EXPORT.checkboxGroups[idx];
      if (!coords) return;
      const statusIndex = item.status === 'ok' ? 0 : item.status === 'ar' ? 1 : 2;
      const [x, y] = coords[statusIndex];
      page.drawText('X', {
        x: x - 3.5,
        y: y - 5,
        size: 12,
        font: helvBold,
        color: rgb(0, 0, 0)
      });
    });

    const allPhotos = collectAllPhotos();
    if (allPhotos.length) {
      const photosPerPage = 6;
      for (let i = 0; i < allPhotos.length; i += photosPerPage) {
        const chunk = allPhotos.slice(i, i + photosPerPage);
        const photoPage = outDoc.addPage([EXPORT.pageSize.w, EXPORT.pageSize.h]);
        await drawPhotoAttachmentPage(photoPage, chunk, outDoc, helv, helvBold, i / photosPerPage + 1);
      }
    }

    const bytes = await outDoc.save();
    downloadBlob(new Blob([bytes], { type: 'application/pdf' }), makeFilename());
  } catch (err) {
    console.error(err);
    alert('Could not create the PDF. Please try again.');
  } finally {
    setDisabled(false);
  }
}

function collectAllPhotos() {
  const photos = [];
  state.sections.forEach((sectionState, sectionIndex) => {
    const labels = SECTIONS[sectionIndex].blocks.filter(b => b.type === 'item').map(b => b.label);
    sectionState.items.forEach((item, itemIndex) => {
      item.photos.forEach(photo => {
        photos.push({ header: labels[itemIndex], photo });
      });
    });
  });
  return photos;
}

async function drawPhotoAttachmentPage(page, photos, outDoc, font, fontBold, pageNumber) {
  const marginX = 34;
  const top = 748;
  page.drawText('Pre-use Inspection: Mobile Elevating Work Platforms', {
    x: marginX,
    y: top,
    size: 16,
    font: fontBold,
    color: PDFLib.rgb(0, 0, 0)
  });
  page.drawText(`Photo attachments${pageNumber > 1 ? ` (page ${pageNumber})` : ''}`, {
    x: marginX,
    y: top - 22,
    size: 10,
    font,
    color: PDFLib.rgb(0.35, 0.35, 0.35)
  });

  const slots = [
    { x: 34, y: 492, w: 260, h: 200 },
    { x: 318, y: 492, w: 260, h: 200 },
    { x: 34, y: 266, w: 260, h: 200 },
    { x: 318, y: 266, w: 260, h: 200 },
    { x: 34, y: 40, w: 260, h: 200 },
    { x: 318, y: 40, w: 260, h: 200 }
  ];

  photos.forEach(asyncPlaceholder => {}); // no-op to keep formatter stable

  photos.forEach((entry, idx) => {
    const slot = slots[idx];
    const title = wrapLine(entry.header, 240, fontBold, 11);
    page.drawText(title, { x: slot.x, y: slot.y + slot.h - 14, size: 11, font: fontBold });
    page.drawRectangle({ x: slot.x, y: slot.y, width: slot.w, height: slot.h - 26, borderColor: PDFLib.rgb(0.85,0.85,0.85), borderWidth: 1 });
  });

  for (let idx = 0; idx < photos.length; idx++) {
    const entry = photos[idx];
    const slot = slots[idx];
    const box = { x: slot.x + 6, y: slot.y + 6, w: slot.w - 12, h: slot.h - 38 };
    let img;
    if ((entry.photo.mime || '').includes('png')) img = await outDoc.embedPng(entry.photo.bytes);
    else img = await outDoc.embedJpg(entry.photo.bytes);
    drawImageContain(page, img, box);
  }
}

function rectToBox(rect) {
  const [x1, y1, x2, y2] = rect;
  return { x: x1, y: y1, w: x2 - x1, h: y2 - y1 };
}

function drawFieldText(page, value, rect, font, size, opts = {}) {
  if (!value) return;
  const [x1, y1, x2, y2] = rect;
  const width = x2 - x1;
  const text = String(value).trim();
  const fitted = fitTextToWidth(text, width - 6, font, size, 7);
  const drawSize = fitted.size;
  const drawText = fitted.text;
  const textWidth = font.widthOfTextAtSize(drawText, drawSize);
  let x = x1 + 3;
  if (opts.align === 'center') x = x1 + (width - textWidth) / 2;
  if (opts.align === 'right') x = x2 - textWidth - 3;
  const y = y1 + ((y2 - y1) - drawSize) / 2 + 1;
  page.drawText(drawText, { x, y, size: drawSize, font, color: PDFLib.rgb(0,0,0) });
}

function fitTextToWidth(text, maxWidth, font, startSize, minSize) {
  let size = startSize;
  let cleaned = String(text || '').replace(/\s+/g, ' ').trim();
  while (size > minSize) {
    if (font.widthOfTextAtSize(cleaned, size) <= maxWidth) return { text: cleaned, size };
    size -= 0.5;
  }
  // truncate with ellipsis
  const ell = '…';
  let lo = 0, hi = cleaned.length;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    const sub = cleaned.slice(0, mid) + ell;
    if (font.widthOfTextAtSize(sub, minSize) <= maxWidth) lo = mid;
    else hi = mid - 1;
  }
  return { text: cleaned.slice(0, lo) + ell, size: minSize };
}

function drawMultiline(page, value, rect, font, size, lineHeight) {
  if (!value) return;
  const [x1, y1, x2, y2] = rect;
  const maxWidth = x2 - x1 - 8;
  const maxLines = Math.floor((y2 - y1 - 6) / lineHeight);
  const lines = wrapParagraph(String(value), maxWidth, font, size).slice(0, maxLines);
  lines.forEach((line, idx) => {
    const y = y2 - 4 - size - idx * lineHeight;
    page.drawText(line, { x: x1 + 4, y, size, font, color: PDFLib.rgb(0,0,0) });
  });
}

function wrapParagraph(text, maxWidth, font, size) {
  const out = [];
  const paras = String(text).split(/\r?\n/);
  paras.forEach(paragraph => {
    const words = paragraph.split(/\s+/).filter(Boolean);
    if (!words.length) {
      out.push('');
      return;
    }
    let line = words.shift();
    words.forEach(word => {
      const test = `${line} ${word}`;
      if (font.widthOfTextAtSize(test, size) <= maxWidth) line = test;
      else {
        out.push(line);
        line = word;
      }
    });
    out.push(line);
  });
  return out;
}

function wrapLine(text, maxWidth, font, size) {
  const fitted = fitTextToWidth(text, maxWidth, font, size, 8);
  return fitted.text;
}

function drawImageContain(page, image, box) {
  const pad = 2;
  const bx = box.x + pad;
  const by = box.y + pad;
  const bw = box.w - pad * 2;
  const bh = box.h - pad * 2;
  const scale = Math.min(bw / image.width, bh / image.height);
  const w = image.width * scale;
  const h = image.height * scale;
  const x = bx + (bw - w) / 2;
  const y = by + (bh - h) / 2;
  page.drawImage(image, { x, y, width: w, height: h });
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(url);
    a.remove();
  }, 1000);
}

function makeFilename() {
  const project = (state.project || 'MEWP').replace(/[^\w-]+/g, '_').replace(/_+/g, '_').slice(0, 40);
  const date = (state.reportDate || todayISO()).replace(/-/g, '');
  return `MEWP_Inspection_${project || 'Project'}_${date}.pdf`;
}
