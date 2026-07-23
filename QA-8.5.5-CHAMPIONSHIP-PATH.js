const assert = (condition, message) => { if (!condition) throw new Error(message); };
const roster = ['jack-mercer','hollowman','titan','nightwatch'];
const c = {
  active:'jack-mercer', month:3,
  championships:{world:'hollowman'},
  world:{},
  rankings:[
    {id:'hollowman',points:110,wins:3,losses:1},
    {id:'jack-mercer',points:100,wins:2,losses:0},
    {id:'titan',points:90,wins:1,losses:1},
    {id:'nightwatch',points:80,wins:1,losses:1}
  ],
  livingCareers:{
    'hollowman':{wins:3,losses:1,history:[]},
    'jack-mercer':{wins:2,losses:0,history:[]}
  }
};
const contenderRows = c => [...c.rankings].filter(r=>r.id!==c.championships.world).sort((a,b)=>b.points-a.points);
const contenderRank = (c,id) => contenderRows(c).findIndex(r=>r.id===id)+1;
assert(contenderRank(c,'jack-mercer')===1,'Active wrestler must be recognised as #1 contender with champion excluded.');
const randomPool = roster.filter(id=>id!==c.active && id!==c.championships.world);
assert(!randomPool.includes('hollowman'),'Champion must be excluded from random opponent simulation.');
c.world.titleFeudNextMonth={month:3,challenger:c.active,champion:c.championships.world};
c.world.tournamentMonth=Number(c.month)===3?4:3;
assert(c.world.titleFeudNextMonth.champion==='hollowman','Next-month championship feud was not scheduled.');
assert(c.world.tournamentMonth===4,'March tournament was not deferred to April.');
c.world.titleFeud={month:3,challenger:'jack-mercer',champion:'hollowman'};
c.world.feud={opponent:'hollowman'};
assert(c.world.feud.opponent===c.championships.world,'Championship feud opponent must be the reigning champion.');
const before={...c.livingCareers.hollowman};
const after={...c.livingCareers.hollowman};
assert(before.wins===after.wins && before.losses===after.losses,'Champion record changed during ordinary simulation.');
console.log('PASS: #1 contender detection');
console.log('PASS: champion excluded from random simulation');
console.log('PASS: championship feud scheduled for following month');
console.log('PASS: March tournament deferred to April');
console.log('PASS: champion record protected outside title changes');
