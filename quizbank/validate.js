const fs=require('fs'),vm=require('vm'),path=require('path');
let bad=0;
for(const f of process.argv.slice(2)){
 const ctx={window:{}};vm.runInNewContext(fs.readFileSync(f,'utf8'),ctx);const B=ctx.window.QUIZ_BANK;
 const err=m=>{console.log(f+': '+m);bad++};
 if(!B)return err('no QUIZ_BANK');
 const uid=new Set((B.units||[]).map(u=>u.id));
 if(uid.size!==(B.units||[]).length)err('duplicate unit ids');
 if(!B.units||!B.units.length)err('bank needs a units list');
 B.topics.forEach(t=>{if(!t.unit||!uid.has(t.unit))err('topic '+t.id+' has missing/unknown unit '+t.unit)});
 if(new Set(B.topics.map(t=>t.id)).size!==B.topics.length)err('duplicate topic ids');
 const tid=new Set(B.topics.map(t=>t.id)),ids=new Set(),seen=new Set(),dist=[0,0,0,0],cnt={},nfig={n:0};
 B.questions.forEach((q,i)=>{const w='q#'+i+' ('+q.id+')';
  if(!q.id||ids.has(q.id))err(w+' bad/dup id');ids.add(q.id);
  if(!tid.has(q.topic))err(w+' unknown topic '+q.topic);cnt[q.topic]=(cnt[q.topic]||0)+1;
  if(!q.q||q.q.length<10)err(w+' short q');
  if(!Array.isArray(q.options)||q.options.length!==4||new Set(q.options.map(String)).size!==4)err(w+' options must be 4 distinct');
  if(![0,1,2,3].includes(q.answer))err(w+' answer index');else dist[q.answer]++;
  if(q.figure){if(!q.figure.src||!/\.(svg|png|jpe?g|webp)$/i.test(q.figure.src))err(w+' figure.src must be an .svg/.png/.jpg/.webp path');else if(!fs.existsSync(path.join(__dirname,q.figure.src)))err(w+' figure file not found: '+q.figure.src);if(!q.figure.alt||q.figure.alt.length<30)err(w+' figure needs alt text (30+ characters) that describes it without naming the answer');else nfig.n++}
  if(!q.explanation||q.explanation.length<40)err(w+' explanation too short');
  const all=[q.q,q.explanation,...(q.options||[])].join(' ');
  if(/\b(19|20)\d\d\b/.test(all))err(w+' contains a year');
  if(/past paper|specimen|SQA|June|Paper \d|mark scheme|examiner|Section [AB]\b/i.test(all))err(w+' mentions exam source');
  if(seen.has(q.q))err(w+' duplicate question text');seen.add(q.q)});
 const empty=B.topics.filter(t=>!cnt[t.id]);
 (B.units||[]).forEach(u=>{if(!B.topics.some(t=>t.unit===u.id))err('unit '+u.id+' has no topics')});
 console.log(f+': '+B.questions.length+' questions, '+B.topics.length+' topics in '+(B.units||[]).length+' units, '+nfig.n+' with figures, answer dist '+dist.join('/')+' per topic '+JSON.stringify(cnt));
 if(empty.length)console.log('   coverage gap (no questions yet, hidden from students): '+empty.map(t=>t.name).join(' | '));
}
process.exit(bad?1:0);
