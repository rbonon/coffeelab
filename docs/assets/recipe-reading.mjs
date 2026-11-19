import { renderBrowse } from './browse-pages.mjs?v=vo-zico-purchase-1';
import { sourceRecipes } from './source-recipes.mjs?v=vo-zico-purchase-1';
// Illustrative layout fixtures. These are not imported recipes or historical records.
const illustrativeExamples = {
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
export const examples = { ...sourceRecipes, ...illustrativeExamples };
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
  let reading = false, configuring = false, screen = 'home', detail = null, photo = null;
  const pt = () => $('language').value === 'pt-BR';
  const t = pair => pair[pt() ? 1 : 0];
  const num = n => new Intl.NumberFormat($('language').value, {maximumFractionDigits: 2}).format(n);
  const mass = g => `${num(weightValue(g, $('weight').value))} ${$('weight').value}`;
  const wake = new ReadingWakeLock(globalThis.isSecureContext ? navigator.wakeLock : null, () => {});
  const labels = {
    'demo': ['From your recipe journal', 'Do seu caderno de receitas'],
    'setup-title': ['Coffee Lab', 'Coffee Lab'],
    'intro': ['Choose a recipe to begin.', 'Escolha uma receita para começar.'],
    'settings-title': ['Settings', 'Configurações'],
    'language-label': ['Language', 'Idioma'], 'method-label': ['Recipe', 'Receita'],
    'weight-label': ['Weight', 'Peso'], 'temperature-label': ['Temperature', 'Temperatura'],
    'start': ['Read recipe', 'Ler receita'],
    'preparation-title': ['Preparation', 'Preparação'], 'time-label': ['Time', 'Tempo'], 'action-label': ['Action', 'Etapa'], 'water-label': ['Water', 'Água'],
    'wake-label': ['Keep screen awake while reading', 'Manter a tela acesa durante a leitura'],
  };
  function render() {
    document.documentElement.lang = $('language').value;
    Object.entries(labels).forEach(([id,pair]) => $(id).textContent = t(pair));
    $('selected-recipe').textContent = t(examples[$('method').value].title);
    $('recipe-options').replaceChildren();
    for (const [key, recipe] of Object.entries(sourceRecipes)) {
      const option = document.createElement('button');
      option.type = 'button'; option.textContent = t(recipe.title);
      option.setAttribute('aria-pressed', String(key === $('method').value));
      option.addEventListener('click', () => {
        $('method').value = key; $('recipe-picker').open = false; render();
        document.querySelector('#recipe-picker summary').focus();
      });
      $('recipe-options').append(option);
    }
    $('setup').hidden = reading || configuring || screen !== 'home'; $('configuration').hidden = !configuring; $('reader').hidden = !reading;
    $('browse').hidden = reading || configuring || screen === 'home';
    $('main-navigation').hidden = reading || configuring;
    document.body.classList.toggle('browsing', !reading && !configuring);
    const destinations = {home:['Home','Início'],recipes:['Recipes','Receitas'],journal:['Journal','Diário'],library:['Library','Biblioteca']};
    document.querySelectorAll('[data-screen]').forEach(button => {
      button.textContent=t(destinations[button.dataset.screen]);
      const current = screen === 'detail' ? detail.origin : screen;
      if(button.dataset.screen === current)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');
    });
    $('main-navigation').setAttribute('aria-label',t(['Main navigation','Navegação principal']));
    if (!$('browse').hidden) renderBrowse($('browse'),{screen,detail,go,read,openPhoto,t,mass});
    $('close-photo').setAttribute('aria-label',t(['Close photo','Fechar foto']));
    if (photo) {
      $('photo-full').src=photo.src;$('photo-full').alt=photo.alt;$('photo-title').textContent=photo.caption;
      if (!$('photo-viewer').open) $('photo-viewer').showModal();
    } else if ($('photo-viewer').open) $('photo-viewer').close();
    $('open-settings').setAttribute('aria-label',t(['Settings','Configurações']));
    const recipe = examples[$('method').value];
    $('recipe-title').textContent = t(recipe.title);
    $('recipe-context').textContent = '';
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
    $('preparation-notes').replaceChildren();
    const preparation = [...(recipe.preparation ?? [])];
    for (const note of preparation) {
      const item = document.createElement('li'); item.textContent = note; $('preparation-notes').append(item);
    }
    $('preparation').hidden = !preparation.length;
    $('schedule').replaceChildren();
    for (const step of recipe.steps.filter(step => step.phase !== 'preparation')) {
      const row = document.createElement('tr');
      const when = document.createElement('td'); when.textContent = step.time ?? t(['Before', 'Antes']);
      const action = document.createElement('td'); action.textContent = step.readingText ?? t(step.text);
      const target = document.createElement('td');
      if (step.cumulative != null) {
        const total = document.createElement('strong'); total.textContent = mass(step.cumulative);
        const addition = document.createElement('small'); addition.textContent = `+${mass(step.add)}`;
        target.append(total, addition);
      } else if (step.final != null) target.textContent = mass(step.final);
      row.append(when, action, target); $('schedule').append(row);
    }
    $('technique-note').textContent = recipe.technique ?? '';
    $('instruction').setAttribute('aria-label',t(['Complete brewing schedule', 'Sequência completa de preparo']));
  }
  function snapshot() { return {reading, configuring, screen, detail, photo, recipe: $('method').value}; }
  function restore(route) {
    if (!examples[route.recipe]) route = {...route, recipe:'hoffmann-stardust', screen:route.reading ? 'recipes' : route.screen, reading:false};
    const wasReading = reading;
    ({reading, configuring, screen, detail, photo=null} = route);
    $('method').value = route.recipe;
    render(); window.scrollTo(0, route.scrollY ?? 0);
    history.replaceState(history.state, '', `#${routeHash(route)}`);
    if (wasReading && !reading) void wake.stop();
    if (reading && !wasReading && $('wake-enabled').checked) void wake.start();
  }
  function routeHash(route) {
    const detailSlug = route.detail?.record.name?.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'') ?? 'registro';
    return route.photo ? 'photo' : route.configuring ? 'settings' : route.reading ? `recipe/${route.recipe}` : route.screen === 'detail' ? `${route.detail.origin}/${detailSlug}` : route.screen;
  }
  function navigate(route) {
    const current = history.state?.coffeeLab;
    if (JSON.stringify(snapshot()) === JSON.stringify(route)) return;
    history.replaceState({...history.state, coffeeLab: {...current, ...snapshot(), scrollY: window.scrollY}}, '');
    const hash = routeHash(route);
    history.pushState({coffeeLab: {...route, depth: (current?.depth ?? 0) + 1, scrollY: 0}}, '', `#${hash}`);
    restore(route);
  }
  function go(next, selected=null) { navigate({...snapshot(), screen:next, detail:selected, reading:false, configuring:false}); }
  function read(key) { navigate({...snapshot(), recipe:key, reading:true, configuring:false}); $('instruction').focus({preventScroll:true}); }
  function openPhoto(image) { navigate({...snapshot(), photo:image}); }
  $('close-photo').addEventListener('click',()=>history.back());
  $('photo-viewer').addEventListener('cancel',event=>{event.preventDefault();history.back();});
  window.addEventListener('popstate', event => { if (event.state?.coffeeLab) restore(event.state.coffeeLab); });
  const savedRoute = history.state?.coffeeLab;
  if (savedRoute && examples[savedRoute.recipe]) restore(savedRoute);
  else history.replaceState({...history.state, coffeeLab: {...snapshot(), depth:0, scrollY:0}}, '', '#home');
  document.querySelectorAll('[data-screen]').forEach(button=>button.addEventListener('click',()=>go(button.dataset.screen)));
  document.querySelectorAll('select').forEach(el => el.addEventListener('change', () => { render(); }));
  $('wake-enabled').addEventListener('change', () => { if (!$('wake-enabled').checked) void wake.stop(); });
  $('recipe-picker').addEventListener('keydown', event => { if (event.key === 'Escape') { $('recipe-picker').open = false; document.querySelector('#recipe-picker summary').focus(); } });
  $('open-settings').addEventListener('click', () => { navigate({...snapshot(), configuring:true}); $('settings-title').focus(); });
  $('start').addEventListener('click', () => read($('method').value));
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && reading && $('wake-enabled').checked) void wake.acquire(); });
  window.addEventListener('pagehide', () => void wake.stop());
  window.addEventListener('pageshow', () => { if (reading && $('wake-enabled').checked) void wake.start(); });
  render();
}
