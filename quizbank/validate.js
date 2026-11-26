const fs=require('fs'),vm=require('vm');
let bad=0;
for(const f of process.argv.slice(2)){
 const ctx={window:{}};vm.runInNewContext(fs.readFileSync(f,'utf8'),ctx);const B=ctx.window.QUIZ_BANK;
 const err=m=>{console.log(f+': '+m);bad++};
 if(!B)return err('no QUIZ_BANK');
 const tid=new Set(B.topics.map(t=>t.id)),ids=new Set(),seen=new Set(),dist=[0,0,0,0],cnt={};
 B.questions.forEach((q,i)=>{const w='q#'+i+' ('+q.id+')';
  if(!q.id||ids.has(q.id))err(w+' bad/dup id');ids.add(q.id);
  if(!tid.has(q.topic))err(w+' unknown topic '+q.topic);cnt[q.topic]=(cnt[q.topic]||0)+1;
  if(!q.q||q.q.length<10)err(w+' short q');
  if(!Array.isArray(q.options)||q.options.length!==4||new Set(q.options.map(String)).size!==4)err(w+' options must be 4 distinct');
  if(![0,1,2,3].includes(q.answer))err(w+' answer index');else dist[q.answer]++;
  if(!q.explanation||q.explanation.length<40)err(w+' explanation too short');
  const all=[q.q,q.explanation,...(q.options||[])].join(' ');
  if(/\b(19|20)\d\d\b/.test(all))err(w+' contains a year');
  if(/past paper|specimen|SQA|June|Paper \d|mark scheme|examiner|Section [AB]\b/i.test(all))err(w+' mentions exam source');
  if(seen.has(q.q))err(w+' duplicate question text');seen.add(q.q)});
 B.topics.forEach(t=>{if(!cnt[t.id])err('topic '+t.id+' has no questions')});
 console.log(f+': '+B.questions.length+' questions, '+B.topics.length+' topics, answer dist '+dist.join('/')+' per topic '+JSON.stringify(cnt));
}
process.exit(bad?1:0);
