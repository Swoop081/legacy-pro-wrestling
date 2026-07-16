const app=document.getElementById('app'),overlay=document.getElementById('overlay');
let S={team:[],streak:0,chem:0,momentum:0,wind:false,windAwarded:false};
let M=null,storyTimer=null;
const pick=(a,n=1)=>[...a].sort(()=>Math.random()-.5).slice(0,n);
const one=a=>a[Math.floor(Math.random()*a.length)];
const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
const rnd=(min,max)=>Math.random()*(max-min)+min;
const wait=ms=>new Promise(r=>setTimeout(r,ms));
function rel(a,b){return RELATIONSHIPS.find(r=>(r.a===a.id&&r.b===b.id)||(r.a===b.id&&r.b===a.id))}
function chemistry(a,b){let r=rel(a,b);return r?r.chemistry:Math.round((a.versatility+b.versatility)/2)}
function score(t){let[a,b]=t,av=k=>(a[k]+b[k])/2;return av('overall')*.3+av('tag')*.25+(chemistry(a,b)+S.chem)*.2+av('technique')*.1+av('power')*.05+av('speed')*.05+av('charisma')*.05+S.momentum}
function card(w,onclick='',compact=false){return `<article class="card${compact?' compact':''}" ${onclick?`onclick="${onclick}"`:''}><img src="${w.image}"><div class="name">${w.name}<small>${w.title} · ${w.faction}</small></div></article>`}
function render(x){app.innerHTML=x;document.getElementById('streak').textContent=S.streak}
function clearStoryTimer(){if(storyTimer){clearTimeout(storyTimer);storyTimer=null}}
function home(){clearStoryTimer();M=null;S={team:[],streak:0,chem:0,momentum:0,wind:false,windAwarded:false};render(`<section class="panel home"><h1>TAG TEAM <span>GAUNTLET</span></h1><p>Build a team and survive the Gauntlet. Matches now play as televised wrestling stories, pausing only when your decision can change the outcome.</p><button class="btn" onclick="start()">START GAUNTLET</button></section>`)}
function start(){let captain=one(WRESTLERS);S.team=[captain];window.opts=pick(WRESTLERS.filter(w=>w.id!==captain.id),2);render(`<section class="panel"><h1 class="title">Choose Your Partner</h1><p class="sub">Your first wrestler is ${captain.name}</p><div class="cards two">${opts.map((w,i)=>card(w,`partner(${i})`)).join('')}</div><div class="actions" style="max-width:320px;margin:25px auto">${card(captain)}</div></section>`)}
function partner(i){S.team.push(opts[i]);discover(()=>team())}
function discover(next){let r=rel(...S.team);if(r&&r.type==='legendary'){overlay.innerHTML=`<div class="overlay"><div class="discover"><p>LEGENDARY TEAM DISCOVERED</p><div class="pair">${card(S.team[0])}${card(S.team[1])}</div><h1>${r.teamName}</h1><button class="btn" id="continue">CONTINUE</button></div></div>`;document.getElementById('continue').onclick=()=>{overlay.innerHTML='';next()}}else next()}
function team(){clearStoryTimer();render(`<section class="panel"><h1 class="title">Your Team</h1><p class="sub">${rel(...S.team)?.teamName||S.team.map(x=>x.name).join(' & ')}</p><div class="cards two">${S.team.map(x=>card(x)).join('')}</div><div class="actions"><button class="btn" onclick="opponent()">FIND OPPONENT</button></div></section>`)}
function opponent(){let ids=new Set(S.team.map(x=>x.id)),eligible=WRESTLERS.filter(x=>!ids.has(x.id));S.opp=pick(eligible,2);render(`<section class="panel"><div class="build-stamp">MATCH BROADCAST REWRITE</div><h1 class="title">Tonight's Main Event</h1><div class="battle"><div><div class="cards">${S.team.map(x=>card(x)).join('')}</div></div><div class="vs">VS</div><div><div class="cards">${S.opp.map(x=>card(x)).join('')}</div></div></div><div class="actions"><button class="btn watch-btn" onclick="match()">▶ WATCH MATCH</button></div></section>`)}
function walkout(){let[a,b]=S.team,c=chemistry(a,b),risk=((100-(a.loyalty+b.loyalty)/2)*.0007)+Math.max(0,75-c)*.0008;if(rel(a,b)?.type==='rivalry')risk+=.018;if(rel(a,b)?.type==='legendary')risk*=.08;return Math.random()<risk?(a.loyalty<b.loyalty?a:b):null}

const PERSONALITY={
 'jack-mercer':['raises a fist and invites the opposition to hit harder','turns the exchange into a rough Southern brawl'],
 'victor-royale':['orders the ring around him with a royal gesture','slows the pace and dictates every movement'],
 'jett-valentine':['blows a kiss to the crowd and steals the spotlight','poses for the cameras before snapping back into the fight'],
 'revenant':['sits straight up as the arena lights flicker','walks through the punishment without expression'],
 'nightwatch':['appears from the blind side with perfect timing','raises the black bat from ringside and fixes a cold stare on the ring'],
 'titan':['grins for the cameras before landing a blockbuster shot','turns the arena into his personal main event'],
 'cameron-tremblay':['dissects the opponent with flawless technique','counters as though he planned the exchange three moves ago'],
 'hollowman':['slowly rises again, refusing to stay down','stalks forward while the front row backs away'],
 'damian-blackwell':['waits patiently, then strikes without warning','finds the smallest opening and exploits it'],
 'elias-crowe':['laughs through the pain and creates total chaos','pulls at the loose straps of the straitjacket and charges'],
 'el-rey-del-cielo':['springs into the air with impossible balance','turns the ropes into a launchpad'],
 'max-justice':['rallies the crowd and refuses to surrender','fights back for everyone who believes in him'],
 'primal':['lets out a roar and overwhelms the opposition','hunts the opponent across the ring'],
 'lucas-bennett':['shoots for a takedown with championship precision','turns the match into an elite wrestling clinic'],
 'marcus-king':['fires off a rapid street-fighting combination','feeds off the crowd and finishes the exchange standing tall'],
 'mateo-vega':['fakes one direction and attacks from another','distracts the referee just long enough to steal control'],
 'ryder-phoenix':['grabs the microphone at ringside and mouths off mid-match','turns a basic exchange into a sold-out concert moment'],
 'sterling-sinclair':['checks his hair after a perfectly executed counter','wrestles with effortless, expensive-looking confidence'],
 'dax-maddox':['finds another gear when everyone thinks he is finished','keeps grinding forward through sheer work rate'],
 'logan-steele':['cups an ear to the crowd and draws on their energy','powers back like the living legend he is']
};
const STORY_TYPES={
 classic:{name:'Classic Wrestling Match',min:12,max:16,decisions:2,bias:0},
 war:{name:'Back-and-Forth War',min:16,max:21,decisions:3,bias:0,nearFall:.18},
 comeback:{name:'Underdog Comeback',min:14,max:19,decisions:3,bias:-7,comeback:true},
 sprint:{name:'Fast Sprint',min:8,max:11,decisions:1,bias:2},
 domination:{name:'One-Sided Domination',min:8,max:13,decisions:1,bias:12},
 tagClinic:{name:'Tag Team Showcase',min:14,max:19,decisions:3,bias:0,tags:true},
 upset:{name:'Upset Special',min:12,max:17,decisions:2,bias:-4,upset:true}
};
const PHASES=[
 {id:'opening',label:'Opening Bell'},
 {id:'control',label:'Early Control'},
 {id:'shift',label:'Momentum Shift'},
 {id:'crisis',label:'Crisis Point'},
 {id:'climax',label:'Climax'},
 {id:'finish',label:'Finish'}
];
const MOVES={
 opening:['wins the opening lock-up','lands the first hard strike','shoots behind for an early takedown','backs the opponent into the corner','catches the opponent with a quick arm drag'],
 control:['cuts off the ring and takes control','lands a heavy clothesline','drives the opponent into the turnbuckles','wears the opponent down with a grinding hold','drops the opponent with a sudden slam'],
 shift:['counters at the last possible second','escapes and creates separation','fires back with a desperate combination','ducks a strike and changes the entire match','catches the opponent rushing in'],
 crisis:['survives a brutal sequence','reaches toward the corner but is dragged back','absorbs a huge impact and somehow keeps moving','finds a burst of energy from nowhere','gets trapped far from the tag rope'],
 climax:['connects with the biggest move of the match so far','launches into a frantic finishing sequence','catches the opponent flush and hooks the leg','turns a counter into a spectacular impact','empties the tank in one final surge']
};

function chooseStory(){
 const keys=['classic','war','comeback','sprint','domination','tagClinic','upset'];
 const weights=[28,24,13,10,8,11,6];let r=Math.random()*weights.reduce((a,b)=>a+b,0);
 for(let i=0;i<keys.length;i++){r-=weights[i];if(r<=0)return keys[i]}return 'classic';
}
function match(){
 clearStoryTimer();const q=walkout();if(q)return lose(`${q.name} walks away before the bell!`);
 const storyKey=chooseStory(),story=STORY_TYPES[storyKey],eventTarget=Math.round(rnd(story.min,story.max));
 const teamPower=score(S.team),oppPower=score(S.opp)+S.streak*.7;
 let hiddenEdge=(teamPower-oppPower)/7+story.bias+rnd(-8,8);
 if(story.upset)hiddenEdge=teamPower>=oppPower?rnd(-10,-3):rnd(3,10);
 M={storyKey,story,eventTarget,eventIndex:0,phaseIndex:0,activeP:0,activeO:0,playerControl:50+hiddenEdge,playerMom:12+S.momentum*2,oppMom:12+S.streak,log:[],highlights:[],nearFalls:0,finishers:0,tags:0,decisionsMade:0,nextDecisionAt:decisionPoints(eventTarget,story.decisions),waiting:false,ended:false,latest:'',winner:null,loser:null,turningPoint:'',bestMoment:'',mvp:null,matchSeconds:Math.round(rnd(330,900)),phaseLabel:'Opening Bell',auto:false,started:false};
 addBroadcast('broadcast',`${S.team[0].name} & ${S.team[1].name} face ${S.opp[0].name} & ${S.opp[1].name}.`);
 addBroadcast('phase','OPENING BELL');
 addBroadcast('normal',one(['The bell rings and both teams circle cautiously.','The crowd rises as the opening wrestlers lock up.','No feeling-out process—both teams charge immediately.','A tense stare-down gives way to the first exchange.']));
 renderMatch();
}
function decisionPoints(total,count){const pts=[];for(let i=1;i<=count;i++)pts.push(Math.round(total*(i/(count+1)))+Math.round(rnd(-1,1)));return [...new Set(pts)].filter(x=>x>1&&x<total-1).sort((a,b)=>a-b)}
function phaseForEvent(i,total){const p=i/total;if(p<.14)return 0;if(p<.34)return 1;if(p<.55)return 2;if(p<.72)return 3;if(p<.9)return 4;return 5}
function addBroadcast(type,text,meta={}){M.log.push({type,text,...meta});M.latest=text;if(meta.highlight){M.highlights.push(text);if(!M.bestMoment||meta.weight>=(M.bestWeight||0)){M.bestMoment=text;M.bestWeight=meta.weight||1}}}
function scheduleNext(ms=1550){clearStoryTimer();if(M&&M.auto&&!M.waiting&&!M.ended)storyTimer=setTimeout(()=>advanceStory(),ms)}
function broadcastIcon(type){return ({phase:'◆',broadcast:'📺',personality:'✦',tag:'🤝',nearfall:'2.9',finisher:'★',counter:'↺',choice:'▶',pin:'3',result:'🏆'}[type]||'●')}
function toggleBroadcast(){if(!M||M.ended)return;M.auto=!M.auto;M.started=true;renderMatch();if(M.auto)scheduleNext(350)}
function nextMoment(){if(!M||M.waiting||M.ended)return;M.started=true;advanceStory()}
function renderMatch(){
 const p=S.team[M.activeP],o=S.opp[M.activeO],control=clamp(M.playerControl,5,95),latest=M.log[M.log.length-1]||{type:'broadcast',text:'The broadcast is ready.'};
 const timeline=PHASES.map((x,i)=>`<div class="phase-step ${i<M.phaseIndex?'done':''} ${i===M.phaseIndex?'active':''}"><i></i><span>${x.label}</span></div>`).join('');
 render(`<section class="broadcast-screen">
 <div class="broadcast-banner"><span class="live-pill">● LIVE</span><div><small>TAG TEAM GAUNTLET PRESENTS</small><h1>${S.team.map(x=>x.name).join(' & ')} <em>VS</em> ${S.opp.map(x=>x.name).join(' & ')}</h1></div><span class="build-stamp">BROADCAST BUILD</span></div>
 <div class="phase-timeline">${timeline}</div>
 <div class="broadcast-scoreboard">
   <div class="corner player"><div class="corner-team">${S.team.map(x=>x.name).join(' & ')}</div><div class="legal">LEGAL: ${p.name}</div><div class="mini-meters"><span>MOMENTUM</span><b><i style="width:${M.playerMom}%"></i></b></div></div>
   <div class="control-dial"><strong>${Math.round(control)}</strong><span>CONTROL</span></div>
   <div class="corner enemy"><div class="corner-team">${S.opp.map(x=>x.name).join(' & ')}</div><div class="legal">LEGAL: ${o.name}</div><div class="mini-meters"><span>MOMENTUM</span><b><i style="width:${M.oppMom}%"></i></b></div></div>
 </div>
 <div class="broadcast-main">
   <aside class="wrestler-portrait left">${card(p,'',true)}</aside>
   <div class="broadcast-center">
     <div class="on-air-label"><span>${M.phaseLabel}</span><small>${M.story.name}</small></div>
     <article class="moment-card ${latest.type}"><div class="moment-icon">${broadcastIcon(latest.type)}</div><div><small>CURRENT MOMENT</small><h2>${latest.text}</h2></div></article>
     <div id="broadcastFeed" class="broadcast-ticker">${M.log.slice(-6,-1).reverse().map(e=>`<p class="${e.type}"><b>${broadcastIcon(e.type)}</b>${e.text}</p>`).join('')||'<p>The teams are entering the arena...</p>'}</div>
   </div>
   <aside class="wrestler-portrait right">${card(o,'',true)}</aside>
 </div>
 <div class="broadcast-footer"><span>Moment ${Math.min(M.eventIndex+1,M.eventTarget)} / ${M.eventTarget}</span><span>${formatTime(Math.round(M.matchSeconds*(M.eventIndex/Math.max(1,M.eventTarget))))}</span></div>
 ${M.waiting?decisionHTML():M.ended?'':`<div class="broadcast-controls"><button class="btn secondary" onclick="nextMoment()">NEXT MOMENT</button><button class="btn ${M.auto?'pause':'play'}" onclick="toggleBroadcast()">${M.auto?'Ⅱ PAUSE BROADCAST':'▶ AUTO-PLAY BROADCAST'}</button></div>`}
 </section>`);
}
function decisionHTML(){const d=getDecision();return `<div class="story-decision"><small>CRITICAL DECISION</small><h2>${d.title}</h2><p>${d.text}</p><div class="choice-grid">${d.options.map(x=>`<button class="choice" onclick="storyChoice('${x.id}')"><b>${x.name}</b><small>${x.desc}</small></button>`).join('')}</div></div>`}
function getDecision(){
 const p=S.team[M.activeP],partner=S.team[1-M.activeP],control=M.playerControl;
 if(M.phaseIndex>=4||M.playerMom>=67)return {title:`${p.name} has a chance to finish it`,text:`${p.finisher} is available, but the opponent may be waiting for it.`,options:[{id:'finisher',name:`Attempt ${p.finisher}`,desc:'Biggest possible reward—and risk.'},{id:'tag',name:`Tag ${partner.name}`,desc:'Bring in a fresh wrestler for the final stretch.'},{id:'pressure',name:'Keep the Pressure On',desc:'Protect the advantage and wait for a cleaner opening.'}]};
 if(control<42)return {title:'Your team is losing control',text:`${p.name} is being isolated. This decision could spark the comeback.`,options:[{id:'comeback',name:'Launch a Comeback',desc:'High risk, but a major momentum swing.'},{id:'tag',name:`Fight for the Tag`,desc:`Try to bring in ${partner.name}.`},{id:'survive',name:'Weather the Storm',desc:'Reduce risk and wait for a mistake.'}]};
 return {title:'A major opening appears',text:`${p.name} has the opposition off balance.`,options:[{id:'risk',name:'Create a Highlight',desc:'Attempt a spectacular sequence.'},{id:'tag',name:`Make the Tag`,desc:`Let ${partner.name} attack with fresh energy.`},{id:'control',name:'Control the Match',desc:'Stay disciplined and protect momentum.'}]};
}
async function advanceStory(){
 if(!M||M.ended||M.waiting)return;
 M.eventIndex++;
 const newPhase=phaseForEvent(M.eventIndex,M.eventTarget);
 if(newPhase!==M.phaseIndex){M.phaseIndex=newPhase;M.phaseLabel=PHASES[newPhase].label;addBroadcast('phase',PHASES[newPhase].label.toUpperCase());}
 if(M.nextDecisionAt.includes(M.eventIndex)){M.waiting=true;renderMatch();return}
 generateAutomaticBeat();renderMatch();
 if(M.eventIndex>=M.eventTarget)return resolveFinish();
 scheduleNext(M.phaseIndex>=4?1900:1550);
}
function eventWrestler(teamSide){return teamSide==='player'?S.team[M.activeP]:S.opp[M.activeO]}
function shiftControl(amount,reason){const before=M.playerControl;M.playerControl=clamp(M.playerControl+amount,5,95);if(Math.abs(M.playerControl-before)>=9&&!M.turningPoint)M.turningPoint=reason}
function generateAutomaticBeat(){
 const phase=PHASES[M.phaseIndex].id;let playerActs=Math.random()<(M.playerControl/100),actor=eventWrestler(playerActs?'player':'opp'),victim=eventWrestler(playerActs?'opp':'player');
 let amount=rnd(3,8)*(playerActs?1:-1);
 if(M.story.comeback&&M.phaseIndex<2)amount=-Math.abs(amount);if(M.story.comeback&&M.phaseIndex>=3)amount=Math.abs(amount)*1.35;
 if(M.storyKey==='domination')amount=Math.abs(amount)*(M.story.bias>0?1:-1);
 const move=one(MOVES[phase]||MOVES.control);
 addBroadcast('normal',`${actor.name} ${move}.`);
 shiftControl(amount,`${actor.name} changed the match by ${move}.`);
 if(playerActs)M.playerMom=clamp(M.playerMom+rnd(5,11),0,100);else M.oppMom=clamp(M.oppMom+rnd(5,11),0,100);
 if(Math.random()<.32){const line=one(PERSONALITY[actor.id]||['shows a glimpse of a unique fighting style']);addBroadcast('personality',`${actor.name} ${line}.`,{highlight:true,weight:1});}
 if((M.story.tags||Math.random()<.16)&&M.phaseIndex>0){
   if(playerActs){const old=actor;M.activeP=1-M.activeP;const fresh=S.team[M.activeP];addBroadcast('tag',`${old.name} makes the tag—${fresh.name} explodes into the match!`,{highlight:true,weight:1.3});shiftControl(5,`${fresh.name}'s hot tag changed the momentum.`)}
   else{const old=actor;M.activeO=1-M.activeO;const fresh=S.opp[M.activeO];addBroadcast('tag',`${old.name} tags out and ${fresh.name} storms through the ropes.`,{highlight:true,weight:1.2});shiftControl(-4,`${fresh.name}'s tag changed the momentum.`)}
   M.tags++;
 }
 if(M.phaseIndex>=3&&Math.random()<(.1+(M.story.nearFall||0))){createNearFall(playerActs)}
 if(M.phaseIndex>=4&&Math.random()<.18){attemptAIFinisher(playerActs)}
}
function createNearFall(playerSide){const attacker=eventWrestler(playerSide?'player':'opp'),defender=eventWrestler(playerSide?'opp':'player');M.nearFalls++;addBroadcast('nearfall',`${attacker.name} hooks the leg—ONE... TWO... ${defender.name} kicks out!`,{highlight:true,weight:2});}
function attemptAIFinisher(playerSide){const attacker=eventWrestler(playerSide?'player':'opp'),defender=eventWrestler(playerSide?'opp':'player');const success=Math.random()<.62;M.finishers++;
 if(success){addBroadcast('finisher',`${attacker.name} lands ${attacker.finisher} on ${defender.name}!`,{highlight:true,weight:2.8});shiftControl(playerSide?12:-12,`${attacker.name} landed ${attacker.finisher}.`);if(Math.random()<.66)createNearFall(playerSide)}else addBroadcast('counter',`${defender.name} escapes ${attacker.finisher} at the last possible second!`,{highlight:true,weight:2.2});
}
function storyChoice(id){if(!M||!M.waiting)return;M.waiting=false;M.decisionsMade++;const p=S.team[M.activeP],o=S.opp[M.activeO];
 if(id==='tag'){const old=p;M.activeP=1-M.activeP;const incoming=S.team[M.activeP];M.playerMom=clamp(M.playerMom+14,0,100);shiftControl(8,`${incoming.name}'s hot tag was the turning point.`);M.tags++;addBroadcast('choice',`${old.name} reaches the corner—${incoming.name} makes the hot tag and takes over!`,{highlight:true,weight:2});}
 else if(id==='finisher'){M.finishers++;const chance=.52+(p.technique+p.charisma-o.resilience)/520+(M.playerControl-50)/180;M.playerMom=clamp(M.playerMom-45,0,100);if(Math.random()<chance){shiftControl(15,`${p.name} hit ${p.finisher}.`);addBroadcast('finisher',`${p.name} hits ${p.finisher}! The entire arena rises!`,{highlight:true,weight:3.2});if(M.phaseIndex>=4&&Math.random()<.48){M.eventIndex=Math.max(M.eventIndex,M.eventTarget-1)}else createNearFall(true)}else{shiftControl(-14,`${o.name} countered ${p.finisher}.`);addBroadcast('counter',`${o.name} counters ${p.finisher}! The gamble backfires!`,{highlight:true,weight:2.5});}}
 else if(id==='comeback'){if(Math.random()<.62){shiftControl(18,`${p.name} launched an unforgettable comeback.`);M.playerMom=clamp(M.playerMom+22,0,100);addBroadcast('choice',`${p.name} digs deep and launches a furious comeback!`,{highlight:true,weight:2.5})}else{shiftControl(-7,`${p.name}'s comeback attempt was stopped.`);addBroadcast('counter',`${p.name} tries to rally, but ${o.name} cuts the comeback off.`)}}
 else if(id==='risk'){if(Math.random()<.62){shiftControl(13,`${p.name}'s spectacular risk paid off.`);M.playerMom=clamp(M.playerMom+18,0,100);addBroadcast('choice',`${p.name} creates a breathtaking highlight and changes the match!`,{highlight:true,weight:2.4})}else{shiftControl(-11,`${p.name}'s high-risk attempt failed.`);addBroadcast('counter',`${p.name} takes a huge risk—but crashes and burns!`,{highlight:true,weight:1.8})}}
 else if(id==='survive'){shiftControl(4,`${p.name} survived the opposition's strongest stretch.`);M.playerMom=clamp(M.playerMom+8,0,100);addBroadcast('choice',`${p.name} covers up, survives the storm, and waits for an opening.`)}
 else if(id==='pressure'||id==='control'){shiftControl(7,`${p.name} controlled the decisive stretch.`);M.playerMom=clamp(M.playerMom+10,0,100);addBroadcast('choice',`${p.name} stays disciplined and keeps the match under control.`)}
 renderMatch();scheduleNext(1650);
}
function resolveFinish(){
 if(M.ended)return;M.phaseIndex=5;M.phaseLabel='Finish';addBroadcast('phase','FINISH');
 const playerRating=score(S.team)+M.playerControl*.55+M.playerMom*.16+rnd(-6,6),oppRating=score(S.opp)+(100-M.playerControl)*.55+M.oppMom*.16+S.streak*.7+rnd(-6,6);
 const win=playerRating>=oppRating;const side=win?'player':'opp';const winnerTeam=win?S.team:S.opp,loserTeam=win?S.opp:S.team;
 let winner=winnerTeam[M.activeP],loser=loserTeam[M.activeO];if(!win){winner=winnerTeam[M.activeO];loser=loserTeam[M.activeP]}
 if(Math.random()<.48)winner=one(winnerTeam);if(Math.random()<.48)loser=one(loserTeam);
 M.finishers++;addBroadcast('finisher',`${winner.name} catches ${loser.name} with ${winner.finisher}!`,{highlight:true,weight:4});addBroadcast('pin','ONE... TWO... THREE!');addBroadcast('result',`${winnerTeam.map(x=>x.name).join(' & ')} win the match!`);
 M.ended=true;M.winner=winner;M.loser=loser;M.mvp=selectMVP(winnerTeam,winner);if(win)S.streak++;
 renderMatch();storyTimer=setTimeout(()=>showSummary(win),1500);
}
function selectMVP(team,finisherWinner){const sorted=[...team].sort((a,b)=>(b.overall+b.charisma+b.technique)-(a.overall+a.charisma+a.technique));return Math.random()<.65?finisherWinner:sorted[0]}
function showSummary(win){
 clearStoryTimer();const length=formatTime(M.matchSeconds),rating=clamp(2.15+M.highlights.length*.16+M.nearFalls*.28+M.finishers*.2+M.tags*.08+M.eventTarget*.055,1,5),rounded=Math.round(rating),stars='★'.repeat(rounded)+'☆'.repeat(5-rounded);
 const highlights=[...M.highlights].slice(-5);const story=buildSummaryStory();M.lossMessage=`${M.winner.name} wins after a ${rating.toFixed(1)}-star match.`;
 render(`<section class="panel match-result summary-panel"><h1 class="title" style="color:${win?'#65e98a':'#ff6b6b'}">${win?'You Win!':'You Lose'}</h1><div class="rating"><span>${stars}</span><strong>${rating.toFixed(1)} MATCH RATING · ${length}</strong></div><div class="summary-grid"><article><small>MATCH STORY</small><p>${story}</p></article><article><small>MATCH MVP</small><h2>${M.mvp.name}</h2><p>${M.mvp.title}</p></article><article><small>TURNING POINT</small><p>${M.turningPoint||'The match remained balanced until the final exchange.'}</p></article><article><small>BEST MOMENT</small><p>${M.bestMoment||`${M.winner.name} delivered ${M.winner.finisher} to end the match.`}</p></article></div><div class="highlight-reel"><h3>Broadcast Highlights</h3>${highlights.map(x=>`<p>${x}</p>`).join('')}</div><div class="actions">${win?`<button class="btn" onclick="rewards()">CHOOSE REWARD</button>`:`<button class="btn" onclick="handleLoss()">CONTINUE</button>`}</div></section>`)
}
function buildSummaryStory(){const winnerSide=M.winner&&S.team.some(x=>x.id===M.winner.id)?'Your team':'The opposition';const opener=M.storyKey==='comeback'?'The match became an underdog survival story':M.storyKey==='war'?'Both teams traded control in a relentless war':M.storyKey==='sprint'?'The contest exploded into a frantic sprint':M.storyKey==='domination'?'One team seized control early and refused to release it':M.storyKey==='tagClinic'?'Quick tags and team combinations defined the match':M.storyKey==='upset'?'The favourites were dragged into a dangerous upset attempt':'Both teams built the contest carefully through every phase';return `${opener}. ${M.turningPoint||'The decisive momentum swing came late'}. ${winnerSide} closed the story when ${M.winner.name} landed ${M.winner.finisher}.`}
function formatTime(total){const m=Math.floor(total/60),s=String(total%60).padStart(2,'0');return `${m}:${s}`}
function handleLoss(){lose(M.lossMessage)}
function rewards(){let r=[['wrestler','New Wrestler'],['chem','Chemistry Boost'],['momentum','Momentum Boost']];if(!S.windAwarded)r.push(['wind','Second Wind']);render(`<section class="panel"><h1 class="title">Choose Reward</h1><div class="rewards">${r.map(x=>`<article class="reward" onclick="reward('${x[0]}')"><h3>${x[1]}</h3></article>`).join('')}</div></section>`)}
function reward(t){if(t==='wrestler'){let ids=new Set(S.team.map(x=>x.id));S.offer=one(WRESTLERS.filter(x=>!ids.has(x.id)));render(`<section class="panel"><h1 class="title">New Wrestler</h1><div style="max-width:340px;margin:auto">${card(S.offer)}</div><div class="actions"><button class="btn" onclick="team()">KEEP TEAM</button><button class="btn" onclick="replace(0)">REPLACE ${S.team[0].name}</button><button class="btn" onclick="replace(1)">REPLACE ${S.team[1].name}</button></div></section>`)}else if(t==='chem'){S.chem+=5;team()}else if(t==='momentum'){S.momentum+=2;team()}else{S.wind=true;S.windAwarded=true;team()}}
function replace(i){S.team[i]=S.offer;discover(()=>team())}
function lose(msg){clearStoryTimer();if(S.wind){render(`<section class="panel home"><h1>SECOND WIND</h1><p>${msg}</p><button class="btn" onclick="useWind()">CONTINUE RUN</button></section>`)}else render(`<section class="panel home"><h1>GAUNTLET OVER</h1><p>${msg}</p><h2>FINAL STREAK: ${S.streak}</h2><button class="btn" onclick="home()">PLAY AGAIN</button></section>`)}
function useWind(){S.wind=false;rewards()}
home();
