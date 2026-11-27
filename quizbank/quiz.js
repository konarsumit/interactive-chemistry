(function(){
'use strict';
var B=window.QUIZ_BANK; if(!B){document.body.textContent='Question bank not found.';return;}
var $=function(s){return document.querySelector(s)};
var LET='ABCD', state={topic:'all',kind:'all',count:10,qs:[],i:0,score:0,log:[],answered:false};
function isW(q){return q.type==='written'}
function kindOK(q){return state.kind==='all'||(state.kind==='wr')===isW(q)}
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
var figEl=null;
function ensureFig(){if(figEl)return figEl;var qt=$('#qtext');figEl=el('figure','fig hidden');var im=el('img');im.decoding='async';figEl.appendChild(im);figEl.appendChild(el('figcaption'));qt.parentNode.insertBefore(figEl,qt.nextSibling);return figEl}
function topicName(id){for(var i=0;i<B.topics.length;i++)if(B.topics[i].id===id)return B.topics[i].name;return id}
function unitOf(tid){for(var i=0;i<B.topics.length;i++)if(B.topics[i].id===tid)return B.topics[i].unit;return null}
function pool(t){var L;if(t==='all')L=B.questions.slice();else if(String(t).indexOf('u:')===0){var u=t.slice(2);L=B.questions.filter(function(q){return unitOf(q.topic)===u})}else L=B.questions.filter(function(q){return q.topic===t});return L.filter(kindOK)}
document.title=B.title+' – Quiz Bank';
$('#title').textContent=B.title;$('#sub').textContent=B.subtitle||'';
var th=$('#theme');try{var sv=localStorage.getItem('qb-theme');if(sv)document.documentElement.dataset.theme=sv}catch(e){}
th.onclick=function(){var d=document.documentElement,cur=d.dataset.theme||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');var n=cur==='dark'?'light':'dark';d.dataset.theme=n;try{localStorage.setItem('qb-theme',n)}catch(e){}};
/* setup */
var tbox=$('#topics');
function tbtn(id,name,n,cls){var b=el('button','topic'+(cls?' '+cls:''));b.type='button';b.setAttribute('aria-pressed',String(state.topic===id));
 b.appendChild(el('span','t',name));b.appendChild(el('span','n',n+' question'+(n===1?'':'s')));
 b.onclick=function(){state.topic=id;drawTopics();drawCount()};return b}
function drawTopics(){tbox.textContent='';
 var grid=el('div','topics');grid.appendChild(tbtn('all','All topics (mixed)',pool('all').length,'allbtn'));tbox.appendChild(grid);
 var units=B.units&&B.units.length?B.units:[{id:null,name:''}];var ul=B.unitLabel||'Unit';
 units.forEach(function(u){
  var ts=B.topics.filter(function(t){return (t.unit||null)===u.id&&pool(t.id).length>0});if(!ts.length)return;
  var sec=el('section','unit');
  if(u.id){var h=el('div','unithead');h.appendChild(el('h3',null,u.name));h.appendChild(el('span','ulab',ul));sec.appendChild(h);
   if(ts.length>1)sec.appendChild(tbtn('u:'+u.id,'Whole '+ul.toLowerCase()+' (mixed)',pool('u:'+u.id).length,'wholeunit'))}
  var g=el('div','topics');ts.forEach(function(t){g.appendChild(tbtn(t.id,t.name,pool(t.id).length))});sec.appendChild(g);tbox.appendChild(sec)})}
var hasW=B.questions.some(isW),hasM=B.questions.some(function(q){return !isW(q)});
if(hasW&&hasM){var tr=el('div','qtype'),tl=el('h2',null,'Question type');var tseg=el('div','seg');tseg.setAttribute('role','group');tseg.setAttribute('aria-label','Question type');
 [['all','All types'],['mc','Multiple choice'],['wr','Written (self-marked)']].forEach(function(p){var b=el('button',null,p[1]);b.type='button';b.setAttribute('aria-pressed',String(state.kind===p[0]));b.onclick=function(){state.kind=p[0];Array.prototype.forEach.call(tseg.children,function(x,i){x.setAttribute('aria-pressed',String(['all','mc','wr'][i]===state.kind))});if(state.topic!=='all'&&pool(state.topic).length===0)state.topic='all';drawTopics();drawCount()};tseg.appendChild(b)});
 tr.appendChild(tl);tr.appendChild(tseg);var firstH=$('#setup h2');firstH.parentNode.insertBefore(tr,firstH)}
var cbox=$('#counts');
var sbar=el('div','startbar'),sinfo=el('div','sbinfo'),sstart=$('#start'),crow=cbox.parentNode,setupEl=$('#setup'),h2s=setupEl.querySelectorAll('h2');
h2s.forEach(function(h){if(/How many/.test(h.textContent))h.classList.add('hidden')});crow.classList.add('hidden');
sbar.appendChild(sinfo);var sc=el('div','sbcount');sc.appendChild(el('span','sblab','Questions:'));sc.appendChild(cbox);sbar.appendChild(sc);sbar.appendChild(sstart);setupEl.appendChild(sbar);
function selName(){var t=state.topic;if(t==='all')return 'All topics (mixed)';if(String(t).indexOf('u:')===0){var u=t.slice(2);for(var i=0;i<B.units.length;i++)if(B.units[i].id===u)return 'Whole '+(B.unitLabel||'unit').toLowerCase()+': '+B.units[i].name}return topicName(t)}
function drawCount(){cbox.textContent='';var n=pool(state.topic).length;
 [5,10,20,'All'].forEach(function(c){var v=c==='All'?n:c;if(c!=='All'&&v>=n&&c!==5)return;var b=el('button',null,c==='All'?'All ('+n+')':String(c));b.type='button';
  var sel=(c==='All')?state.count===n&&state.countAll:state.count===c&&!state.countAll;b.setAttribute('aria-pressed',String(!!sel));
  b.onclick=function(){state.count=v;state.countAll=(c==='All');drawCount()};cbox.appendChild(b)});
 if(!cbox.querySelector('[aria-pressed=true]')&&cbox.firstChild){state.countAll=false;state.count=Math.min(5,n);cbox.firstChild.setAttribute('aria-pressed','true')}
 $('#start').disabled=n===0;sinfo.textContent='';sinfo.appendChild(el('span','sbl','Selected'));sinfo.appendChild(el('strong',null,selName()));sinfo.appendChild(el('span','sbn',n+' question'+(n===1?'':'s')))}
function show(id){['setup','quiz','result'].forEach(function(s){$('#'+s).classList.toggle('hidden',s!==id)});window.scrollTo(0,0)}
function start(list){state.qs=list;state.i=0;state.score=0;state.log=[];show('quiz');render()}
$('#start').onclick=function(){var p=shuffle(pool(state.topic));start(p.slice(0,Math.min(state.count,p.length)))};
/* quiz */
function render(){var q=state.qs[state.i];state.answered=false;
 $('#prog').textContent='Question '+(state.i+1)+' of '+state.qs.length;$('#bar').style.width=(state.i/state.qs.length*100)+'%';
 $('#qtopic').textContent=topicName(q.topic)+(isW(q)?' · Written · '+q.marks+' mark'+(q.marks===1?'':'s'):'');$('#qtext').textContent=q.q;
 var fg=ensureFig(),fim=fg.querySelector('img'),fcp=fg.querySelector('figcaption');
 if(q.figure&&q.figure.src){fim.src=q.figure.src;fim.alt=q.figure.alt||'';fcp.textContent=q.figure.caption||'';fcp.classList.toggle('hidden',!q.figure.caption);fg.classList.remove('hidden')}else{fg.classList.add('hidden');fim.removeAttribute('src');fim.alt=''}
 var wb=ensureWr();wb.textContent='';state.cur=null;
 if(isW(q)){$('#opts').classList.add('hidden');wb.classList.remove('hidden');renderWritten(q,wb);$('#fb').className='fb hidden';$('#next').classList.add('hidden');$('#next').textContent=state.i===state.qs.length-1?'See results':'Next question';return}
 $('#opts').classList.remove('hidden');wb.classList.add('hidden');
 var order=shuffle([0,1,2,3]);state.order=order;var ul=$('#opts');ul.textContent='';
 order.forEach(function(oi,k){var li=el('li');var b=el('button','opt');b.type='button';b.dataset.k=k;
  b.appendChild(el('span','l',LET[k]));b.appendChild(el('span','x',q.options[oi]));b.appendChild(el('span','m',''));
  b.onclick=function(){pick(k)};li.appendChild(b);ul.appendChild(li)});
 $('#fb').className='fb hidden';$('#next').classList.add('hidden');
 $('#next').textContent=state.i===state.qs.length-1?'See results':'Next question'}
var wrEl=null;
function ensureWr(){if(wrEl)return wrEl;wrEl=el('div','wr hidden');var o=$('#opts');o.parentNode.insertBefore(wrEl,o.nextSibling);return wrEl}
function renderWritten(q,wb){
 var ta=el('textarea','wans');ta.rows=5;ta.placeholder='Write your answer here (optional). It stays on your screen and is not saved.';ta.setAttribute('aria-label','Your answer');wb.appendChild(ta);
 var hint=el('p','whint','Write your answer (or work it out on paper), then open the marking guide and tick the marks you earned.');wb.appendChild(hint);
 var rb=el('button','btn','Show marking guide and model answer');rb.type='button';wb.appendChild(rb);
 var gd=el('div','guide hidden');wb.appendChild(gd);
 rb.onclick=function(){if(state.answered)return;state.answered=true;rb.classList.add('hidden');hint.classList.add('hidden');gd.classList.remove('hidden');
  var entry={q:q,written:true,got:0,max:q.marks,good:false,missed:q.points.map(function(p){return p.t}),text:ta.value};state.log.push(entry);
  gd.appendChild(el('h3',null,'Marking guide'));gd.appendChild(el('p','gsub','Tick each mark you earned. Be honest: this is how you find out what to revise.'));
  var ul=el('ul','pts'),tot=el('div','gtot');
  function upd(){var g=0,miss=[];Array.prototype.forEach.call(ul.querySelectorAll('input'),function(c,i){if(c.checked)g+=q.points[i].m;else miss.push(q.points[i].t)});entry.got=g;entry.missed=miss;entry.good=g===q.marks;tot.textContent='You scored '+g+' / '+q.marks;tot.className='gtot'+(entry.good?' full':'')}
  q.points.forEach(function(p){var li=el('li'),lb=el('label'),ck=el('input');ck.type='checkbox';ck.onchange=upd;lb.appendChild(ck);lb.appendChild(el('span','pt',p.t));lb.appendChild(el('b','pm','['+p.m+']'));li.appendChild(lb);ul.appendChild(li)});
  gd.appendChild(ul);gd.appendChild(tot);upd();
  var md=el('div','model');md.appendChild(el('h3',null,'Model answer'));md.appendChild(el('p',null,q.model));gd.appendChild(md);
  if(q.explanation){var tp=el('div','wtip');tp.appendChild(el('b',null,'Tip: '));tp.appendChild(document.createTextNode(q.explanation));gd.appendChild(tp)}
  $('#next').classList.remove('hidden');gd.scrollIntoView({behavior:'smooth',block:'nearest'})}}
function pick(k){if(state.answered)return;state.answered=true;var q=state.qs[state.i];
 var chosen=state.order[k],good=chosen===q.answer,btns=document.querySelectorAll('#opts .opt');
 btns.forEach(function(b,kk){b.disabled=true;var oi=state.order[kk];
  if(oi===q.answer){b.classList.add('correct');b.querySelector('.m').textContent='✓ Correct'}
  else if(kk===k){b.classList.add('wrong');b.querySelector('.m').textContent='✗ Incorrect'}});
 if(good)state.score++;
 state.log.push({q:q,good:good,chosen:q.options[chosen]});
 var fb=$('#fb');fb.className='fb '+(good?'ok':'no');fb.textContent='';
 fb.appendChild(el('b','h',good?'✓ Correct':'✗ Not quite – the answer is '+LET[state.order.indexOf(q.answer)]));
 fb.appendChild(el('p',null,q.explanation));fb.setAttribute('role','status');
 $('#next').classList.remove('hidden');$('#next').focus()}
$('#next').onclick=function(){if(state.i<state.qs.length-1){state.i++;render()}else finish()};
document.addEventListener('keydown',function(e){if($('#quiz').classList.contains('hidden'))return;var tg=e.target&&e.target.tagName;if(tg==='TEXTAREA'||tg==='INPUT')return;var cq=state.qs[state.i];if(cq&&isW(cq))return;var k=LET.indexOf(e.key.toUpperCase());if(e.key.length===1&&k>-1&&!state.answered){pick(k)}else if(e.key>='1'&&e.key<='4'&&!state.answered){pick(+e.key-1)}});
/* result */
function finish(){show('result');
 var mc=state.log.filter(function(l){return !l.written}),wr=state.log.filter(function(l){return l.written});
 var got=mc.filter(function(l){return l.good}).length,max=mc.length;wr.forEach(function(l){got+=l.got;max+=l.max});
 var p=max?Math.round(got/max*100):0;
 $('#score').textContent=got+' / '+max+(wr.length?' marks':'');$('#pct').textContent=p+'%';
 var wg=0,wm=0;wr.forEach(function(l){wg+=l.got;wm+=l.max});
 var split=(mc.length&&wr.length)?' Multiple choice '+mc.filter(function(l){return l.good}).length+'/'+mc.length+' · Written '+wg+'/'+wm+' marks.':'';
 $('#msg').textContent=(p>=80?'Excellent work.':p>=60?'Good progress – review the ones you missed.':'Keep practising – read each explanation, then try again.')+split;
 var rv=$('#review');rv.textContent='';
 state.log.forEach(function(l){var d=el('div','rv'+(l.good?' ok':''));d.appendChild(el('p','q',(l.good?'✓ ':'✗ ')+l.q.q));
  if(l.q.figure&&l.q.figure.src){var ri=el('img','rvfig');ri.src=l.q.figure.src;ri.alt=l.q.figure.alt||'';d.appendChild(ri)}
  if(l.written){d.appendChild(el('p','a','Written: '+l.got+' / '+l.max+' marks'));
   if(l.got<l.max){d.appendChild(el('p','a','Marks to revise:'));var ul=el('ul','rvpts');l.missed.forEach(function(t){ul.appendChild(el('li',null,t))});d.appendChild(ul);d.appendChild(el('p','a','Model answer: '+l.q.model))}}
  else{d.appendChild(el('p','a',(l.good?'Your answer: ':'Your answer: '+l.chosen+' · Correct: ')+(l.good?l.chosen:l.q.options[l.q.answer])));
   if(!l.good)d.appendChild(el('p','a',l.q.explanation))}
  rv.appendChild(d)});
 $('#retry').classList.toggle('hidden',state.log.every(function(l){return l.good}))}
$('#retry').onclick=function(){start(shuffle(state.log.filter(function(l){return!l.good}).map(function(l){return l.q})))};
$('#again').onclick=function(){start(shuffle(state.qs))};
$('#home').onclick=function(){show('setup')};
$('#quit').onclick=function(){show('setup')};
state.countAll=false;drawTopics();drawCount();show('setup');
})();
