const express = require('express');
const app = express();
app.use(express.json());

const API_KEY = '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';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

app.post('/api', async (req, res) => {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: { message: err.message } });
  }
});

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Siamak Kalhor — AI Business Consultant</title>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--navy:#0d1117;--navy2:#161b27;--navy3:#1e2535;--red:#E94560;--red2:#c73652;--gold:#c9a84c;--off:#f7f8fc;--gray2:#dde1ec;--gray3:#9aa3bb;--text:#1a1f2e}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;background:linear-gradient(135deg,#0d1117 0%,#1a1f35 50%,#0d1117 100%);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:1.5rem}
.wrap{width:100%;max-width:800px;border-radius:20px;overflow:hidden;box-shadow:0 32px 80px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.06)}
.banner{background:var(--navy);position:relative;overflow:hidden}
.banner::before{content:'';position:absolute;top:-60px;right:-60px;width:220px;height:220px;border-radius:50%;background:radial-gradient(circle,rgba(233,69,96,.18) 0%,transparent 70%);pointer-events:none}
.bi{display:flex;align-items:center;gap:20px;padding:24px 28px 20px;position:relative;z-index:1}
.ava{width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,var(--red) 0%,var(--red2) 100%);display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:800;color:#fff;flex-shrink:0;border:3px solid rgba(255,255,255,.12);position:relative}
.ava::after{content:'';position:absolute;bottom:3px;right:3px;width:13px;height:13px;border-radius:50%;background:#22c55e;border:2px solid var(--navy)}
.bn{flex:1}.bn .name{font-size:22px;font-weight:700;color:#fff;letter-spacing:-.3px;margin-bottom:3px}
.bn .ttl{font-size:13px;color:var(--gold);font-weight:500;letter-spacing:.5px;margin-bottom:8px}
.tags{display:flex;flex-wrap:wrap;gap:5px}
.tag{font-size:10px;padding:3px 9px;border-radius:20px;background:rgba(255,255,255,.07);color:rgba(255,255,255,.65);border:1px solid rgba(255,255,255,.1)}
.tag.hot{background:rgba(233,69,96,.2);color:#ff8fa3;border-color:rgba(233,69,96,.3)}
.bst{display:flex;flex-direction:column;gap:6px;align-items:flex-end;flex-shrink:0}
.sp{font-size:11px;color:rgba(255,255,255,.5);display:flex;align-items:center;gap:5px}
.sp strong{color:rgba(255,255,255,.85);font-weight:600}
.sdot{width:6px;height:6px;border-radius:50%;background:#22c55e}
.lb{background:var(--navy2);padding:10px 20px;display:flex;gap:6px;border-bottom:1px solid rgba(255,255,255,.06);overflow-x:auto}
.lb::-webkit-scrollbar{display:none}
.lbtn{flex:1;min-width:68px;padding:7px 6px;font-size:12px;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:rgba(255,255,255,.55);cursor:pointer;font-family:inherit;font-weight:500;transition:all .15s;text-align:center}
.lbtn:hover:not(.active){background:rgba(255,255,255,.08);color:rgba(255,255,255,.85)}
.lbtn.active{background:var(--red);border-color:var(--red);color:#fff;font-weight:600}
.ss{background:var(--navy3);padding:10px 20px;display:flex;gap:8px;overflow-x:auto;border-bottom:1px solid rgba(255,255,255,.06)}
.ss::-webkit-scrollbar{display:none}
.sc{display:flex;align-items:center;gap:5px;font-size:11px;color:rgba(255,255,255,.5);white-space:nowrap;padding:4px 10px;border-radius:20px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);cursor:pointer;transition:all .15s;font-family:inherit}
.sc:hover{background:rgba(233,69,96,.15);color:#ff8fa3;border-color:rgba(233,69,96,.3)}
.cb{height:380px;overflow-y:auto;background:var(--off);padding:20px;display:flex;flex-direction:column;gap:14px;scroll-behavior:smooth}
.cb::-webkit-scrollbar{width:4px}
.cb::-webkit-scrollbar-thumb{background:var(--gray2);border-radius:4px}
.msg{display:flex;gap:10px;align-items:flex-end;animation:fu .2s ease}
.msg.user{flex-direction:row-reverse}
@keyframes fu{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.ma{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0}
.ma.ai{background:var(--navy);color:var(--red)}
.ma.user{background:var(--red);color:#fff;font-size:13px}
.bubble{max-width:78%;padding:12px 16px;font-size:14px;line-height:1.7;white-space:pre-wrap;word-wrap:break-word}
.bubble.ai{background:#fff;border:1px solid var(--gray2);border-radius:4px 16px 16px 16px;box-shadow:0 2px 8px rgba(0,0,0,.05);color:var(--text)}
.bubble.user{background:var(--navy);color:#fff;border-radius:16px 4px 16px 16px}
.bubble.thinking{color:var(--gray3);font-style:italic}
.sb{background:var(--navy2);padding:6px 20px;font-size:12px;color:rgba(255,255,255,.4);min-height:28px;display:flex;align-items:center;gap:6px;border-top:1px solid rgba(255,255,255,.06)}
.sb.rec{color:#ff8fa3}.sb.err{color:#fca5a5}
.pd{width:7px;height:7px;border-radius:50%;background:#22c55e;flex-shrink:0;animation:bl 2s infinite}
.pd.red{background:var(--red);animation:bl .8s infinite}
@keyframes bl{0%,100%{opacity:1}50%{opacity:.3}}
.qr-wrap{display:flex;gap:6px;flex-wrap:wrap;padding:8px 18px 10px;background:var(--navy2)}
.qr{font-size:12px;padding:5px 12px;border-radius:20px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:rgba(255,255,255,.55);cursor:pointer;font-family:inherit;transition:all .15s;white-space:nowrap}
.qr:hover{background:rgba(233,69,96,.2);color:#ff8fa3;border-color:rgba(233,69,96,.35)}
.ins{background:var(--navy2);padding:12px 18px;border-top:1px solid rgba(255,255,255,.06)}
.ir{display:flex;gap:8px;align-items:flex-end;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:8px 8px 8px 14px;transition:border-color .15s}
.ir:focus-within{border-color:rgba(233,69,96,.5);background:rgba(255,255,255,.08)}
textarea{flex:1;background:transparent;border:none;outline:none;resize:none;font-size:14px;color:#fff;font-family:inherit;line-height:1.5;padding:4px 0;min-height:22px;max-height:100px}
textarea::placeholder{color:rgba(255,255,255,.3)}
.br{display:flex;gap:6px;align-items:center;flex-shrink:0}
.ib{width:38px;height:38px;border-radius:10px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.07);color:rgba(255,255,255,.6);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;transition:all .15s}
.ib:hover{background:rgba(255,255,255,.14);color:#fff}
.ib.rec{background:var(--red);border-color:var(--red);color:#fff;animation:pu .8s infinite}
@keyframes pu{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
.sb-btn{width:38px;height:38px;border-radius:10px;background:var(--red);border:none;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;transition:all .15s}
.sb-btn:hover{background:var(--red2);transform:scale(1.04)}
.ft{background:var(--navy);padding:10px 20px;display:flex;justify-content:space-between;align-items:center;border-top:1px solid rgba(255,255,255,.05)}
.fl{display:flex;gap:12px}
.fb{font-size:11px;color:rgba(255,255,255,.35);background:none;border:none;cursor:pointer;font-family:inherit;display:flex;align-items:center;gap:4px;transition:color .15s;padding:0}
.fb:hover{color:rgba(255,255,255,.7)}
.fl2{display:flex;align-items:center;gap:5px;font-size:11px;color:rgba(255,255,255,.35);cursor:pointer}
.fl2 input{cursor:pointer;accent-color:var(--red)}
.mh{background:var(--navy);padding:5px 20px 10px;font-size:11px;color:rgba(255,255,255,.2);text-align:center}
@media(max-width:480px){.bst{display:none}.bi{padding:18px 16px;gap:12px}.ava{width:56px;height:56px;font-size:20px}.bn .name{font-size:17px}}
</style>
</head>
<body>
<div class="wrap">
  <div class="banner">
    <div class="bi">
      <div class="ava">SK</div>
      <div class="bn">
        <div class="name">Siamak Kalhor</div>
        <div class="ttl">AI Marketing &amp; Business Strategy Consultant</div>
        <div class="tags">
          <span class="tag hot">🔥 LLMO Specialist</span>
          <span class="tag">S.C.A.L.E. Model</span>
          <span class="tag">Brand Authority</span>
          <span class="tag">Legal Tech</span>
          <span class="tag">Healthcare Mktg</span>
        </div>
      </div>
      <div class="bst">
        <div class="sp"><span class="sdot"></span><strong>Available Now</strong></div>
        <div class="sp">📍 <strong>Los Angeles, CA</strong></div>
        <div class="sp">🌐 <strong>5 Languages</strong></div>
        <div class="sp">📞 <strong>323-657-7752</strong></div>
      </div>
    </div>
  </div>
  <div class="lb">
    <button class="lbtn active" onclick="setLang('en-US','English','en')" id="btn-en">🇺🇸 English</button>
    <button class="lbtn" onclick="setLang('fr-FR','French','fr')" id="btn-fr">🇫🇷 Français</button>
    <button class="lbtn" onclick="setLang('es-ES','Spanish','es')" id="btn-es">🇪🇸 Español</button>
    <button class="lbtn" onclick="setLang('fa-IR','Farsi','fa')" id="btn-fa">🇮🇷 فارسی</button>
    <button class="lbtn" onclick="setLang('hy-AM','Armenian','hy')" id="btn-hy">🇦🇲 Հայerեն</button>
  </div>
  <div class="ss">
    <button class="sc" onclick="quickAsk('What is LLMO and why does my business need it?')">🤖 LLMO</button>
    <button class="sc" onclick="quickAsk('Explain the S.C.A.L.E. Model for my business.')">📈 S.C.A.L.E.</button>
    <button class="sc" onclick="quickAsk('How do I audit my brand and fix what is broken?')">🔍 Brand Audit</button>
    <button class="sc" onclick="quickAsk('Tell me about Mosaic legal software for law firms.')">⚖️ Legal Tech</button>
    <button class="sc" onclick="quickAsk('How do I improve my Google Business Profile?')">📍 Google GBP</button>
    <button class="sc" onclick="quickAsk('Best marketing for healthcare practices?')">🏥 Healthcare</button>
    <button class="sc" onclick="quickAsk('How do I beat competition in AI search?')">🏆 Competition</button>
    <button class="sc" onclick="quickAsk('How do I generate more referrals?')">🤝 Referrals</button>
  </div>
  <div class="cb" id="cb" aria-live="polite"></div>
  <div class="sb" id="sb"><span class="pd" id="sd"></span><span id="st">Ready — ask anything or pick a topic above</span></div>
  <div class="qr-wrap">
    <button class="qr" onclick="quickAsk('Is my business visible to AI right now?')">🔎 Am I AI-visible?</button>
    <button class="qr" onclick="quickAsk('What is the first step to grow my business?')">🚀 First growth step</button>
    <button class="qr" onclick="quickAsk('What makes Mosaic different from Clio?')">⚖️ Mosaic vs Clio</button>
    <button class="qr" onclick="quickAsk('How do I get more Google reviews safely?')">⭐ More reviews</button>
  </div>
  <div class="ins">
    <div class="ir">
      <textarea id="ui" rows="1" placeholder="Ask anything about marketing, brand, or business…" onkeydown="hk(event)" oninput="ar(this)"></textarea>
      <div class="br">
        <button class="ib" id="mb" onclick="tv()" title="Voice input">🎙️</button>
        <button class="sb-btn" onclick="send()" title="Send">➤</button>
      </div>
    </div>
  </div>
  <div class="ft">
    <div class="fl">
      <button class="fb" onclick="clr()">🗑 Clear</button>
      <button class="fb" onclick="window.open('https://siamakkalhor.com','_blank')">🌐 siamakkalhor.com</button>
      <button class="fb" onclick="window.open('tel:3236577752')">📞 Call Siamak</button>
    </div>
    <label class="fl2"><input type="checkbox" id="asp" checked> 🔊 Auto-speak</label>
  </div>
  <div class="mh" id="mh">🎙️ Voice works best in Chrome · Click mic → speak · 5 languages</div>
</div>
<script>
const LP={en:'Respond in English.',fr:'Réponds UNIQUEMENT en français.',es:'Responde ÚNICAMENTE en español.',fa:'فقط به فارسی پاسخ بده. از خط فارسی استفاده کن.',hy:'Պetq e pataskhanis MIAYН hayerеnov.'};
const LG={
en:"👋 Hello! I'm Siamak Kalhor's AI business consultant.\n\nI specialize in:\n• LLMO — making your brand visible to AI like ChatGPT & Gemini\n• The S.C.A.L.E. Model — my proven 5-step growth framework\n• Brand audits & positioning strategy\n• Healthcare & legal marketing\n• Mosaic — AI software for personal injury law firms\n\nWhat business challenge can I help you solve today?",
fr:"👋 Bonjour! Je suis le consultant IA de Siamak Kalhor.\n\nSpécialités:\n• LLMO — visibilité IA\n• Modèle S.C.A.L.E.\n• Audits de marque\n• Marketing santé et juridique\n\nQuel défi puis-je résoudre?",
es:"👋 ¡Hola! Soy el consultor IA de Siamak Kalhor.\n\nEspecialidades:\n• LLMO — visibilidad en IA\n• Modelo S.C.A.L.E.\n• Auditorías de marca\n• Marketing de salud y legal\n\n¿Qué desafío puedo resolver?",
fa:"👋 سلام! من مشاور هوش مصنوعی سیامک کلهر هستم.\n\nتخصص‌ها:\n• LLMO — دیده شدن در هوش مصنوعی\n• مدل S.C.A.L.E.\n• ممیزی برند\n• بازاریابی پزشکی و حقوقی\n\nامروز چه چالشی دارید؟",
hy:"👋 Barev! Yes Siamak Kalhor-i AI khorrhdatun em.\n\nMasnahardutyan ոloртner:\n• LLMO\n• S.C.A.L.E. Model\n• Apranishi awdit\n• Bzhshkakan yev iravakan marketing\n\nAysor inch xndir ownis?"
};
const SYS=`You are Siamak Kalhor's AI business consultant. Speak with authority, warmth, directness. CRITICAL: Always respond ONLY in the language specified at end of each message. You represent Siamak Kalhor Consulting, Los Angeles. siamakkalhor.com | 323-657-7752. Give specific actionable advice.

EXPERTISE:
1. LLMO: Making businesses visible in AI (ChatGPT,Claude,Gemini,Perplexity). 5 pillars: Definitional Authority, Named Frameworks, Entity Signal Consistency, Citable Long-Form Content, Authority Ecosystem.
2. S.C.A.L.E. MODEL: S=Scan(AI Deep Scan audit), C=Clarify(positioning), A=Amplify(LLMO+SEO+GBP), L=Leverage(referrals+partnerships), E=Evaluate(KPIs).
3. MOSAIC LEGAL (mosaic-lilac.vercel.app): PI law firm AI platform. Overlay on Clio/Filevine. 24/7 multilingual intake, AI demand letters with CourtListener citation check, records orchestration Day21/35, SB37 compliance, CCP999 timing.
4. BRAND: 7 signs dying online: AI can't describe you, inconsistent info, zero reviews, stale site, no framework, broken social, generic homepage.
5. HEALTHCARE: Dr. Asal Houshiarnejad PsyD case — bilingual Farsi-English pediatric neuropsychologist, UCLA+Barrow, Calabasas. HIPAA: never confirm patient received services.
6. COMPETITIVE: "Competitor isn't smarter — they're more visible." Every referral Googles you. AI authority compounds.`;

let lang='en-US',lc='en',ln='English',rec=null,isRec=false,isBusy=false,hist=[],ti=null;

window.addEventListener('load',()=>{addMsg('ai',LG.en);checkMic();if(window.speechSynthesis)window.speechSynthesis.getVoices();});

function checkMic(){const SR=window.SpeechRecognition||window.webkitSpeechRecognition;const h=document.getElementById('mh');if(!h)return;if(!SR)h.textContent='⚠️ Voice needs Chrome or Edge.';else if(!window.isSecureContext)h.textContent='⚠️ Voice requires HTTPS.';}

function setLang(code,name,short){lang=code;lc=short;ln=name;document.querySelectorAll('.lbtn').forEach(b=>b.classList.remove('active'));document.getElementById('btn-'+short)?.classList.add('active');const ph={en:'Ask anything…',fr:'Posez votre question…',es:'Haga su pregunta…',fa:'سوال خود را بپرسید…',hy:'Հartsrek dzer hartsə…'};const inp=document.getElementById('ui');if(inp)inp.placeholder=ph[short]||'Ask anything…';addMsg('ai',LG[short]||LG.en);setSt('Language: '+name,'');}

function quickAsk(t){const i=document.getElementById('ui');if(i){i.value=t;ar(i);}send();}
function ar(el){el.style.height='auto';el.style.height=Math.min(el.scrollHeight,100)+'px';}
function hk(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send();}}
function clr(){hist=[];const c=document.getElementById('cb');if(c)c.innerHTML='';addMsg('ai',LG[lc]||LG.en);setSt('Cleared','');}
function addMsg(role,text){const c=document.getElementById('cb');if(!c)return;const w=document.createElement('div');w.className='msg '+role;const a=document.createElement('div');a.className='ma '+role;a.textContent=role==='ai'?'SK':'👤';const b=document.createElement('div');b.className='bubble '+role;b.textContent=text;w.appendChild(a);w.appendChild(b);c.appendChild(w);c.scrollTop=c.scrollHeight;}
function showThink(){const c=document.getElementById('cb');if(!c)return;const w=document.createElement('div');w.className='msg ai';w.id='tw';const a=document.createElement('div');a.className='ma ai';a.textContent='SK';const b=document.createElement('div');b.className='bubble ai thinking';b.id='tb';b.textContent='Thinking…';w.appendChild(a);w.appendChild(b);c.appendChild(w);c.scrollTop=c.scrollHeight;let d=0;ti=setInterval(()=>{const el=document.getElementById('tb');if(el)el.textContent='Thinking'+'.'.repeat((d++%3)+1);},450);}
function rmThink(){if(ti){clearInterval(ti);ti=null;}document.getElementById('tw')?.remove();}
function setSt(text,type){const bar=document.getElementById('sb');const txt=document.getElementById('st');const dot=document.getElementById('sd');if(!bar||!txt||!dot)return;txt.textContent=text;bar.className='sb'+(type?' '+type:'');dot.className='pd'+(type==='rec'?' red':'');}

async function send(){
  if(isBusy)return;
  const inp=document.getElementById('ui');if(!inp)return;
  const text=inp.value.trim();if(!text)return;
  inp.value='';inp.style.height='auto';
  addMsg('user',text);
  const aug=text+'\n\n[LANGUAGE INSTRUCTION: '+(LP[lc]||LP.en)+']';
  hist.push({role:'user',content:aug});
  isBusy=true;setSt('Consulting…','');showThink();
  try{
    const res=await fetch('/api',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:1000,system:SYS,tools:[{type:'web_search_20250305',name:'web_search'}],messages:hist})});
    const data=await res.json();
    rmThink();
    if(!res.ok){addMsg('ai','⚠️ '+(data.error?.message||'Error '+res.status)+'\n\nCall Siamak: 323-657-7752');hist.pop();isBusy=false;setSt('Error','err');return;}
    let reply=data.content?.filter(b=>b.type==='text').map(b=>b.text).join('\n').trim()||'Please try again or call Siamak: 323-657-7752';
    hist[hist.length-1].content=text;
    hist.push({role:'assistant',content:reply});
    addMsg('ai',reply);
    setSt('Ready — '+new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}),'');
    const spk=document.getElementById('asp');
    if(spk?.checked)speak(reply);
  }catch(err){rmThink();addMsg('ai','⚠️ Error: '+err.message+'\n\nCall Siamak: 323-657-7752');hist.pop();setSt('Error','err');}
  isBusy=false;
}

function speak(text){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const clean=text.replace(/[*_\`#\[\]⚠️👋•🔥📍🌐📞🔎🚀⭐⚙️]/g,'').substring(0,700);const u=new SpeechSynthesisUtterance(clean);u.lang=lang;u.rate=0.93;const voices=window.speechSynthesis.getVoices();const pre=lang.split('-')[0];u.voice=voices.find(v=>v.lang===lang)||voices.find(v=>v.lang.startsWith(pre))||null;u.onstart=()=>setSt('🔊 Speaking…','');u.onend=()=>setSt('Ready','');u.onerror=()=>setSt('Ready','');window.speechSynthesis.speak(u);}

function tv(){const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){setSt('⚠️ Voice needs Chrome or Edge','err');return;}if(!window.isSecureContext){setSt('⚠️ Voice requires HTTPS','err');return;}if(isRec){rec?.stop();return;}navigator.mediaDevices.getUserMedia({audio:true}).then(startRec).catch(err=>{setSt('⚠️ Mic blocked — click 🔒 in browser → allow mic → refresh','err');});}
function startRec(){const SR=window.SpeechRecognition||window.webkitSpeechRecognition;rec=new SR();rec.lang=lang;rec.interimResults=false;rec.maxAlternatives=1;rec.onstart=()=>{isRec=true;document.getElementById('mb')?.classList.add('rec');setSt('🎙️ Listening in '+ln+'…','rec');};rec.onresult=e=>{const t=e.results[0][0].transcript;const i=document.getElementById('ui');if(i){i.value=t;ar(i);}setSt('Heard: "'+t.substring(0,50)+'"','');setTimeout(send,350);};rec.onerror=e=>{setSt('⚠️ '+(e.error==='not-allowed'?'Mic blocked':e.error==='no-speech'?'No speech':e.error),'err');stopRec();};rec.onend=stopRec;rec.start();}
function stopRec(){isRec=false;document.getElementById('mb')?.classList.remove('rec');}
if(window.speechSynthesis)window.speechSynthesis.addEventListener('voiceschanged',()=>{});
</script>
</body>
</html>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Siamak AI Consultant running on port ' + PORT));
