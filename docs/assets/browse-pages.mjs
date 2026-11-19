import { sourceRecipes } from './source-recipes.mjs';
import { libraryData } from './library-data.mjs?v=user-ratings-1';
export function renderBrowse(root, {screen, detail, go, read, t, mass}) {
  root.replaceChildren();
  function el(tag, text, cls) { const node=document.createElement(tag); if(text) node.textContent=text; if(cls)node.className=cls; return node; }
  function heading(text) { const title=el('h1',text);title.id='browse-title';root.append(title); }
  function row(title, subtitle, action, rating=null) {
    const button=el('button',null,'browse-row');button.append(el('span',title,'row-title'));if(subtitle)button.append(el('span',subtitle,'row-subtitle'));
    if (ratingLabel(rating)) {
      button.classList.add('rated-row');
      const badge=el('span',null,'rating-icon');badge.setAttribute('role','img');badge.setAttribute('aria-label',ratingLabel(rating));badge.title=ratingLabel(rating);
      const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
      for(const [key,value] of Object.entries({viewBox:'0 0 24 24',width:'22',height:'22',fill:'none',stroke:'currentColor','stroke-width':'1.5','stroke-linecap':'round','stroke-linejoin':'round','aria-hidden':'true'}))svg.setAttribute(key,value);
      const path=document.createElementNS('http://www.w3.org/2000/svg','path');
      path.setAttribute('d',rating==='okay'?'M6 12h12':'M7 10H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3V10l4-7c.7-1 2-.4 2 1l-1 6h6a2 2 0 0 1 2 2.4l-1.4 6A2 2 0 0 1 16.6 20H7');
      if(rating==='did_not_enjoy')path.setAttribute('transform','rotate(180 12 12)');
      svg.append(path);badge.append(svg);button.append(badge);
    }
    button.addEventListener('click',action);root.append(button);
  }
  function field(label, value) { if(value==null || value==='')return;const line=el('dl',null,'detail-field');line.append(el('dt',label),el('dd',String(value)));root.append(line); }
  const coffeeName=key=>libraryData.coffees.find(c=>c.source_key===key)?.name ?? key;
  const ratingLabel=value=>({enjoyed:t(['Enjoyed','Gostei']),did_not_enjoy:t(["Didn't enjoy",'Não gostei']),okay:t(['Okay','Foi ok'])})[value] ?? null;
  const duration=n=>`${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}`;
  if(screen==='detail') {
    const collection = {execution:libraryData.executions,coffee:libraryData.coffees,equipment:libraryData.equipment}[detail.kind];
    const record = collection?.find(item=>item.source_key===detail.record.source_key) ?? detail.record;
    heading(record.name ?? `${record.source_key} · ${coffeeName(record.coffee_key)}`);
    if(detail.kind==='execution') {
      field(t(['Coffee','Café']),coffeeName(record.coffee_key));
      field(t(['Rating','Avaliação']),ratingLabel(record.quick_rating));
      field(t(['Date','Data']),record.date ? record.date.split('-').reverse().join('/') : t(['Not recorded','Não registrada']));
      const q=record.quantities;
      field(t(['Dose used','Dose utilizada']),q.dose_g==null?null:mass(q.dose_g));
      field(t(['Brewing water used','Água utilizada na extração']),q.brewing_water_g==null?null:mass(q.brewing_water_g));
      field(t(['Elapsed time','Tempo total']),q.elapsed_seconds==null?null:duration(q.elapsed_seconds));
      field(t(['Grinder','Moedor']),q.grinder_setting?`JX-Pro · ${q.grinder_setting}`:null);
      if(record.tasting_description){root.append(el('h2',t(['Observations','Observações'])));root.append(el('p',record.tasting_description,'source-note'));if(record.tasting_description_scope)root.append(el('small',t(['Shared comparison of both coffees.','Comparação compartilhada entre os dois cafés.'])));}
      if(record.source_aliases.length)field(t(['Earlier identifier','Identificação anterior']),record.source_aliases.join(', '));
      if(sourceRecipes[record.recipe_key])row(t(['Open recipe','Abrir receita']),null,()=>read(record.recipe_key));
    } else if(detail.kind==='coffee') {
      field(t(['Origin','Origem']),record.origin);field(t(['Processing','Processo']),record.processing);field(t(['Variety','Variedade']),record.variety);field(t(['Producer','Produtor']),record.producer);
      field(t(['Packaging descriptors','Descritores da embalagem']),record.packaging_descriptors?.join(' · '));
      root.append(el('h2',t(['Historical bag','Lote histórico'])));
      root.append(el('p',t(['Physical bag details still need reconciliation.','Os detalhes dos pacotes físicos ainda precisam ser conferidos.']),'source-note'));
      for(const bag of libraryData.bags.filter(b=>b.coffee_key===record.source_key)){
        field(t(['Roast date','Data de torra']),bag.roast_date??t(['Not recorded','Não registrada']));field(t(['Manufacture date','Data de fabricação']),bag.manufacture_date);field(t(['Best before','Validade']),bag.best_before_date);field(t(['Original weight','Peso original']),bag.bag_weight_g==null?null:mass(bag.bag_weight_g));field(t(['Retailer','Loja']),bag.retailer);
      }
      for(const [key,recipe] of Object.entries(sourceRecipes).filter(([key])=>record.source_key==='stardust'?key==='hoffmann-stardust':key!=='hoffmann-stardust'))row(t(recipe.title),t(['Read recipe','Ler receita']),()=>read(key));
    } else {field(t(['Type','Tipo']),record.type==='grinder'?t(['Grinder','Moedor']):t(['Brewer','Porta-filtro']));field(t(['Model','Modelo']),record.model);}
    return;
  }
  if(screen==='recipes') {
    heading(t(['Recipes','Receitas']));root.append(el('p',t(['Recipes from your coffee conversations.','Receitas das suas conversas sobre café.']),'page-intro'));
    for(const [key,r] of Object.entries(sourceRecipes))row(t(r.title),`${mass(r.dose)} · ${mass(r.water)} · V60`,()=>read(key));
  } else if(screen==='journal') {
    heading(t(['Journal','Diário']));root.append(el('p',t(['Selected recorded brews.','Extrações registradas para lembrar e comparar.']),'page-intro'));
    for(const r of [...libraryData.executions].reverse())row(`${r.source_key} · ${coffeeName(r.coffee_key)}`,`${duration(r.quantities.elapsed_seconds)} · ${mass(r.quantities.brewing_water_g)} ${t(['brewing water','de água'])}`,()=>go('detail',{kind:'execution',record:r,origin:'journal'}),r.quick_rating);
  } else if(screen==='library') {
    heading(t(['Library','Biblioteca']));root.append(el('h2',t(['Coffees','Cafés'])));
    for(const r of libraryData.coffees)row(r.name,[r.origin,r.processing].filter(Boolean).join(' · '),()=>go('detail',{kind:'coffee',record:r,origin:'library'}));
    root.append(el('h2',t(['Equipment','Equipamentos'])));
    for(const r of libraryData.equipment)row(r.name,r.type==='grinder'?t(['Grinder','Moedor']):t(['Brewer','Porta-filtro']),()=>go('detail',{kind:'equipment',record:r,origin:'library'}));
  }
}
