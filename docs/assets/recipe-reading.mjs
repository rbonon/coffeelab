// Illustrative layout fixtures. These are not imported recipes or historical records.
export const examples = {
  pour: { title: ['Pour Over · five pours', 'Coado · cinco despejos'], dose: 15, water: 250, temp: 96, steps: Array.from({length: 5}, (_, i) => ({ title: [`Pour ${i + 1}`, `Despejo ${i + 1}`], text: ['Add water gently, then allow it to drain. Follow the timing of your recipe on the scale.', 'Adicione a água suavemente e deixe escoar. Siga os tempos da sua receita no cronômetro da balança.'], add: 50, cumulative: (i + 1) * 50 })) },
  aero: { title: ['AeroPress · with bypass', 'AeroPress · com diluição'], dose: 20, water: 200, yield: 400, temp: 90, steps: [
    { title: ['Immerse', 'Infusão'], text: ['Add the brewing water. Use the scale timer to follow the recipe’s immersion interval.', 'Adicione a água de infusão. Acompanhe o intervalo de infusão da receita no cronômetro da balança.'] },
    { title: ['Press', 'Pressione'], text: ['Press gently into the cup. The intermediate yield may be left unmeasured.', 'Pressione suavemente sobre a xícara. Não é necessário medir o rendimento intermediário.'] },
    { title: ['Top up', 'Complete com água'], text: ['Add bypass water until the finished drink reaches the target. This is a final drink target, not a fixed bypass amount.', 'Complete até a meta final da bebida. A meta indica a bebida pronta, não uma quantidade fixa de água de diluição.'], final: 400 }
  ] },
  french: { title: ['French Press · reading example', 'Prensa francesa · exemplo'], dose: 20, water: 300, temp: 94, steps: [
    { title: ['Steep', 'Infusão'], text: ['Add water and follow the recipe’s steeping interval using your scale timer.', 'Adicione a água e acompanhe o tempo de infusão da receita no cronômetro da balança.'] },
    { title: ['Decant', 'Sirva'], text: ['Follow the recipe’s crust-handling and settling instructions, then decant gently.', 'Siga as instruções da receita para a crosta e o repouso. Depois, sirva suavemente.'] }
  ] },
  lever: { title: ['Manual Espresso · lever', 'Espresso manual · alavanca'], dose: 18, yield: 36, temp: 93, steps: [
    { title: ['Pre-infusion', 'Pré-infusão'], text: ['Follow your machine and recipe’s pre-infusion instructions. Timing must state whether pre-infusion is included.', 'Siga as instruções de pré-infusão da máquina e da receita. O tempo deve indicar se inclui a pré-infusão.'] },
    { title: ['Extract', 'Extraia'], text: ['Follow the written lever and pressure instructions. Watch the beverage yield on the scale.', 'Siga as instruções escritas de alavanca e pressão. Acompanhe o rendimento da bebida na balança.'] }
  ] },
  espresso: { title: ['Espresso · pump machine', 'Espresso · máquina com bomba'], dose: 18, yield: 36, temp: 93, steps: [
    { title: ['Prepare', 'Prepare'], text: ['Prepare the machine and puck according to the recipe. Use the scale for yield and timing.', 'Prepare a máquina e o bolo de café conforme a receita. Use a balança para rendimento e tempo.'] },
    { title: ['Extract', 'Extraia'], text: ['Follow the recipe’s pre-infusion and extraction instructions to the beverage target.', 'Siga as instruções de pré-infusão e extração até atingir a meta de bebida.'] }
  ] },
  partial: { title: ['Partial recipe', 'Receita parcial'], steps: [{ title: ['Instructions not added', 'Instruções ainda não adicionadas'], text: ['This example has a name and category only. Add instructions or quantities later; no targets are invented.', 'Este exemplo contém apenas nome e categoria. Adicione instruções e quantidades depois; nenhuma meta é inventada.'] }] },
  long: { title: ['Long instruction · continuation cards', 'Instrução longa · cartões de continuação'], dose: 15, water: 250, temp: 93, steps: [
    { title: ['Prepare · 1 of 3', 'Preparo · 1 de 3'], text: ['Rinse the filter and preheat the brewer. Discard the rinse water before adding coffee. Set the brewer on the scale and tare it.', 'Enxágue o filtro e aqueça o porta-filtro. Descarte a água do enxágue antes de adicionar o café. Coloque o conjunto na balança e zere.'] },
    { title: ['Prepare · 2 of 3', 'Preparo · 2 de 3'], text: ['Add the ground coffee and gently level the bed. Check the saved grinder-specific setting before you begin. Start the timer on your scale when the recipe indicates.', 'Adicione o café moído e nivele suavemente a superfície. Confira a regulagem salva para o seu moedor antes de começar. Inicie o cronômetro da balança no momento indicado pela receita.'] },
    { title: ['Prepare · 3 of 3', 'Preparo · 3 de 3'], text: ['Follow the written pouring sequence. Each addition and cumulative target must remain distinct. Continue manually when ready; advancing a card does not save a brew.', 'Siga a sequência escrita de despejos. A quantidade adicionada e a meta acumulada devem permanecer distintas. Avance quando desejar; mudar de cartão não salva uma extração.'] }
  ] }
};
export const weightValue = (g, unit) => unit === 'oz' ? g / 28.349523125 : g;
export const temperatureValue = (c, unit) => unit === 'F' ? c * 9 / 5 + 32 : c;
export const ratioValue = (dose, amount) => dose > 0 && amount != null ? amount / dose : null;

// The epoch prevents a late request from acquiring a lock after reading ends.
export class ReadingWakeLock {
  constructor(platform, onState) { this.platform = platform; this.onState = onState; this.active = false; this.lock = null; this.epoch = 0; this.pending = false; }
  async start() { this.active = true; await this.acquire(); }
  async acquire() {
    if (!this.active || this.pending || this.lock) return;
    if (!this.platform?.request) { this.onState('unavailable'); return; }
    const epoch = this.epoch;
    this.pending = true;
    this.onState('requesting');
    try {
      const lock = await this.platform.request('screen');
      if (!this.active || epoch !== this.epoch) { await lock.release(); return; }
      this.lock = lock;
      lock.addEventListener('release', () => {
        if (this.lock !== lock) return;
        this.lock = null;
        this.onState(this.active ? 'released' : 'off');
      });
      this.onState('active');
    } catch { if (this.active && epoch === this.epoch) this.onState('failed'); }
    finally {
      this.pending = false;
      // A user may exit and immediately start again while a request is pending.
      if (this.active && epoch !== this.epoch) void this.acquire();
    }
  }
  async stop() {
    this.active = false; this.epoch += 1;
    const lock = this.lock; this.lock = null;
    if (lock) { try { await lock.release(); } catch { /* Already released by platform. */ } }
    this.onState('off');
  }
}

if (typeof document !== 'undefined') {
  const $ = id => document.getElementById(id);
  let page = 0, reading = false, configuring = false;
  const pt = () => $('language').value === 'pt-BR';
  const t = pair => pair[pt() ? 1 : 0];
  const num = n => new Intl.NumberFormat($('language').value, {maximumFractionDigits: 2}).format(n);
  const mass = g => `${num(weightValue(g, $('weight').value))} ${$('weight').value}`;
  const wake = new ReadingWakeLock(globalThis.isSecureContext ? navigator.wakeLock : null, () => {});
  const labels = {
    'demo': ['Illustrative recipes', 'Receitas ilustrativas'],
    'setup-title': ['Coffee Lab', 'Coffee Lab'],
    'intro': ['Choose a recipe to begin.', 'Escolha uma receita para começar.'],
    'settings-title': ['Settings', 'Configurações'], 'settings-back': ['Back', 'Voltar'],
    'language-label': ['Language', 'Idioma'], 'method-label': ['Recipe', 'Receita'],
    'weight-label': ['Weight', 'Peso'], 'temperature-label': ['Temperature', 'Temperatura'],
    'start': ['Read recipe', 'Ler receita'], 'exit-label': ['Recipes', 'Receitas'],
    'reading-label': ['READING ONLY', 'SOMENTE LEITURA'], 'previous': ['Previous', 'Anterior'], 'next': ['Next', 'Próximo'],
    'wake-label': ['Keep screen awake while reading', 'Manter a tela acesa durante a leitura'],
    'scale-note': ['Use the timer on your scale. Nothing is recorded.', 'Use o cronômetro da balança. Nada é registrado.']
  };
  function render() {
    document.documentElement.lang = $('language').value;
    Object.entries(labels).forEach(([id,pair]) => $(id).textContent = t(pair));
    $('selected-recipe').textContent = t(examples[$('method').value].title);
    $('recipe-options').replaceChildren();
    for (const [key, recipe] of Object.entries(examples)) {
      const option = document.createElement('button');
      option.type = 'button'; option.textContent = t(recipe.title);
      option.setAttribute('aria-pressed', String(key === $('method').value));
      option.addEventListener('click', () => {
        $('method').value = key; page = 0; $('recipe-picker').open = false; render();
        document.querySelector('#recipe-picker summary').focus();
      });
      $('recipe-options').append(option);
    }
    $('setup').hidden = reading || configuring; $('configuration').hidden = !configuring; $('reader').hidden = !reading;
    $('open-settings').setAttribute('aria-label',t(['Settings','Configurações']));
    const recipe = examples[$('method').value];
    $('recipe-title').textContent = t(recipe.title);
    $('quantities').replaceChildren();
    function tile(label, value) {
      const el = document.createElement('div'); el.className = 'quantity';
      const name = document.createElement('span'); name.textContent = t(label);
      const val = document.createElement('strong'); val.textContent = value;
      el.append(name, val); $('quantities').append(el);
    }
    if (recipe.dose != null) tile(['Dose', 'Dose'], mass(recipe.dose));
    if (recipe.water != null) tile(['Brewing water', 'Água de infusão'], mass(recipe.water));
    if (recipe.yield != null) tile(['Final drink', 'Bebida final'], mass(recipe.yield));
    if (recipe.temp != null) tile(['Temperature', 'Temperatura'], `${num(temperatureValue(recipe.temp, $('temperature').value))} °${$('temperature').value}`);
    const basis = recipe.water ?? recipe.yield;
    if (ratioValue(recipe.dose, basis) != null) tile(recipe.water != null ? ['Dose : brewing water', 'Dose : água de infusão'] : ['Dose : drink', 'Dose : bebida'], `1:${num(ratioValue(recipe.dose, basis))}`);
    if (recipe.water != null && recipe.yield != null) tile(['Dose : final drink', 'Dose : bebida final'], `1:${num(ratioValue(recipe.dose, recipe.yield))}`);
    const step = recipe.steps[page];
    $('progress').textContent = t([`Instruction ${page+1} of ${recipe.steps.length}`, `Instrução ${page+1} de ${recipe.steps.length}`]);
    $('step-title').textContent = t(step.title); $('step-text').textContent = t(step.text);
    $('step-target').textContent = step.add != null ? t([`Add ${mass(step.add)} → reach ${mass(step.cumulative)}`, `Adicione ${mass(step.add)} → atinja ${mass(step.cumulative)}`]) : step.final != null ? t([`Final drink: ${mass(step.final)}`, `Bebida final: ${mass(step.final)}`]) : '';
    $('previous').disabled = page === 0; $('next').disabled = page === recipe.steps.length - 1;
    document.querySelector('.paging').setAttribute('aria-label',t(['Instruction pages','Páginas de instruções']));
  }
  document.querySelectorAll('select').forEach(el => el.addEventListener('change', () => { page = 0; render(); }));
  $('wake-enabled').addEventListener('change', () => { if (!$('wake-enabled').checked) void wake.stop(); });
  $('recipe-picker').addEventListener('keydown', event => { if (event.key === 'Escape') { $('recipe-picker').open = false; document.querySelector('#recipe-picker summary').focus(); } });
  $('open-settings').addEventListener('click', () => { configuring = true; render(); $('close-settings').focus(); });
  $('close-settings').addEventListener('click', () => { configuring = false; render(); $('open-settings').focus(); });
  $('start').addEventListener('click', () => { reading = true; page = 0; render(); $('instruction').focus({preventScroll:true}); if ($('wake-enabled').checked) void wake.start(); });
  $('exit').addEventListener('click', () => { reading = false; void wake.stop(); render(); $('start').focus(); });
  for (const [id,delta] of [['previous',-1],['next',1]]) $(id).addEventListener('click', () => { page += delta; render(); $('instruction').focus({preventScroll:true}); });
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && reading && $('wake-enabled').checked) void wake.acquire(); });
  window.addEventListener('pagehide', () => void wake.stop());
  render();
}
