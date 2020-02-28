
/*
*/

let save_='';
let checked=false;

var test=0;

let autosaving=true;

// units: amount, cost, atk, def, upcost(metal), upcost(ore)
//
//player, housing, game, income
var ff={
    money: 20,
    income: 0,
    cpc: 1,
    marines: [0, 5, 1, 1, 10, 15],
    odsts: [0, 30, 3, 2, 25, 30],
    spartans: [0, 1000, 25, 5, 100, 150],
    bought: false,
    housing: 0,
    troops: 0,

  camps:{
    housing: 1,
    cost: 10
  },
  barracks:{
    housing: 3,
    cost: 25
  },
  bases: {
    housing: 20,
    cost: 250
  },

    wins: 0,
    losses: 0,
    ties: 0,
    chance: 0,
    basic_factory: [0, 75, 1],// income: amount, cost, $/sec
    tier2_factory: [0, 250, 2],
    tier3_factory: [0, 1000, 5],
    shipments: [0, 5000, 10],

    tick: 1000,
    _cost: 1000,
    font: 'Halo',
    times: 0,

    /*metal: 0,
    ore: 0,
    miners: 0,
    metalW: 0,

    metalHousing: 0,
    metalReq: 10,
    oreReq: 15,
    mineHousing: 0

    metalWorker:{
      cost: 10,
      amount: 0
    }*/

    ore: {
      'amount': 0,
      'workers': 0,
      'fact': 0,
      'factCost': 20,
      'cpc': 0,
      'max': 50
    },
    steel: {
      'amount': 0,
      'workers': 0,
      'fact': 0,
      'factCost': 25,
      'cpc': 0,
      'max': 50
    }

}

var max=100;
var req=25000;

var x=0;







var isMobile = false; //initiate as false
// device detection
let elem=document.getElementById("main");
if (elem.style.display==='none'){
    let ff=document.createElement("p");
    ff.innerHTML="This game was not optimized for mobile.";
}

function clickll(){
    ff.money+=1;
    showval('money', ff.money);
}


function showval(a, b){
    return document.getElementById(a).innerHTML=b.toLocaleString('en-US');
}
let now=Date.now();
let goal=now+1000;// 10 seconds
function click(){
    now=Date.now();
    if (now>=goal){
        goal+=1000
        ff.money+=1;
        updateview();
    }
}

setInterval(function(){
    ff.money+=ff.income;
    updateview();
}, 1000);

function updateview()
{
    //ff stats
    showval('money', ff.money);
    showval('income', ff.income);

    //marine stats
    showval('marines', ff.marines[0]);//units
    showval('marinecost', ff.marines[1]);
    //odst stats
    showval('odsts', ff.odsts[0]);
    showval('odstcost', ff.odsts[1]);

    //spartans
    showval('spartans', ff.spartans[0]);
    showval('spartancost', ff.spartans[1]);
    //factory stats

    showval('f1', ff.basic_factory[0]);

    showval('f2', ff.tier2_factory[0]);


    showval('f3', ff.tier3_factory[0]);

    showval('f4', ff.shipments[0]);
    //equip stats
    showval('atk1', ff.marines[2]);
    showval('def1', ff.marines[3]);
    showval('atk2', ff.odsts[2]);
    showval('def2', ff.odsts[3]);
    showval('atk3', ff.spartans[2]);
    showval('def3', ff.spartans[3]);

    //showval('tick', ff.tick);
    //console.log(ff.tick)
    //showval('tickcost', ff._cost);


    //misc again
    showval('pop', ff.troops);
    showval('maxpop', ff.housing);

    showval('campcost', ff.camps.cost);
    showval('barrackcost', ff.barracks.cost);
    showval('basecost', ff.bases.cost);


    showval('pres', req);

    //resources
    //showval('playerMetal', ff.steel.amount);
    //document.getElementById('playerMetal').innerText=ff.steel.amount;
    showval('playerOre', ff.ore.amount);
    showval('playerMetal', ff.steel.amount);
    showval('metalPerSec', ff.steel.cpc);

    showval('orePerSec', ff.ore.cpc);

    showval('metalFact', ff.steel.fact);

    showval('maxMetal', ff.steel.max);
    showval('maxOre', ff.ore.max);

}

function checkPrestige(){
  if (ff.money>=req&&!checked){
    var dec=prompt("Would you like to prestige? Bonuses: +1 income/sec, starting money +10%. Type 'yes' to prestige.")
    if (dec==='yes'){
      checked=true;
      prestige();
    }
    checked=true;

  }
}
setInterval(checkPrestige, 500)

function clickPrestige(){
  if (ff.money>=req)
    prestige();
}

function prestige()
{
  ff={
    money: 20,
    income: 0,
    cpc: 1,
    marines: [0, 5, 1, 1, 10, 15],
    odsts: [0, 30, 3, 2, 25, 30],
    spartans: [0, 1000, 25, 5, 100, 150],
    bought: false,
    housing: 0,
    troops: 0,

  camps:{
    housing: 1,
    cost: 10
  },
  barracks:{
    housing: 3,
    cost: 25
  },
  bases: {
    housing: 20,
    cost: 250
  },

    wins: 0,
    losses: 0,
    ties: 0,
    chance: null,
    basic_factory: [0, 75, 1],// income: amount, cost, $/sec
    tier2_factory: [0, 250, 2],
    tier3_factory: [0, 1000, 5],
    shipments: [0, 5000, 10],

    tick: 1000,
    _cost: 1000,
    font: 'Halo',

    /*metal: 0,
    ore: 0,
    miners: 0,
    metalW: 0,

    metalHousing: 0,
    metalReq: 10,
    oreReq: 15,
    mineHousing: 0

    metalWorker:{
      cost: 10,
      amount: 0
    }*/

    ore: {
      'amount': 0,
      'workers': 0,
      'fact': 0,
      'cpc': 0,
    },
    steel: {
      'amount': 0,
      'workers': 0,
      'fact': 0,
      'cpc': 0
    }

}

//req=25000;
    ff.income=ff.times;
    req=parseInt((req*1.5).toFixed(0));
    ff.money=parseFloat((ff.money*1.1).toFixed(2));
    updateview();
    updateBattleStats();
}


function checkButtons(){
  if (ff.money<ff.marines[1])
    document.getElementById("marinebutton").disabled=true;
  if (ff.money>=ff.marines[1])
    document.getElementById("marinebutton").disabled=false;
  if (ff.money<ff.odsts[1])
    document.getElementById("odstbutton").disabled=true;
  if (ff.money>=ff.odsts[1])
    document.getElementById("odstbutton").disabled=false;
  if (ff.money<ff.spartans[1])
    document.getElementById("spartanbutton").disabled=true;
  if (ff.money>=ff.spartans[1])
    document.getElementById("spartanbutton").disabled=false;
  if (ff.steel.amount<ff.basic_factory[1])
    document.getElementById("fact1").disabled=true;
  if (ff.steel.amount>=ff.basic_factory[1])
    document.getElementById("fact1").disabled=false;
  if (ff.steel.amount<ff.tier2_factory[1])
    document.getElementById("fact2").disabled=true;
  if (ff.steel.amount>=ff.tier2_factory[1])
    document.getElementById("fact2").disabled=false;
  if (ff.steel.amount<ff.tier3_factory[1])
    document.getElementById("fact3").disabled=true;
  if (ff.steel.amount>=ff.tier3_factory[1])
    document.getElementById("fact3").disabled=false;
  if (ff.steel.amount<ff.shipments[1])
    document.getElementById("fact4").disabled=true;
  if (ff.steel.amount>=ff.shipments[1])
    document.getElementById("fact4").disabled=false;


  if (ff.steel.amount<ff.marines[4]&&ff.ore.amount<ff.marines[5])
    document.getElementById("up1").disabled=true;
  if (ff.steel.amount>=ff.marines[4]&&ff.ore.amount>=ff.marines[5])
    document.getElementById("up1").disabled=false;
  if (ff.steel.amount<ff.odsts[4]&&ff.ore.amount<ff.odsts[5])
    document.getElementById("up2").disabled=true;
  if (ff.steel.amount>=ff.odsts[4]&&ff.ore.amount>=ff.odsts[5])
    document.getElementById("up2").disabled=false;
  if (ff.steel.amount<ff.spartans[4]&&ff.ore.amount<ff.spartans[5])
    document.getElementById("up3").disabled=true;
  if (ff.steel.amount>=ff.spartans[4]&&ff.ore.amount>=ff.spartans[5])
    document.getElementById("up3").disabled=false;
  if (ff.money<ff.camps.cost)
    document.getElementById("h1").disabled=true;
  if (ff.money>=ff.camps.cost)
    document.getElementById("h1").disabled=false;
  if (ff.money<ff.barracks.cost)
    document.getElementById("h2").disabled=true;
  if (ff.money>=ff.barracks.cost)
    document.getElementById("h2").disabled=false;
  if (ff.money<ff.bases.cost)
    document.getElementById("h3").disabled=true;
  if (ff.money>=ff.bases.cost)
    document.getElementById("h3").disabled=false;

  if (ff.money<10)
    document.getElementById('miner').disabled=true;
  if (ff.money>=10)
    document.getElementById('miner').disabled=false;
  if (ff.money<15)
    document.getElementById('metalC').disabled=true;
  if (ff.money>=15)
    document.getElementById('metalC').disabled=false;

  if (ff.steel.amount<ff.steel.max)
    document.getElementById('upgradeMetalStorage').disabled=true;
  if (ff.steel.amount>=ff.steel.max)
    document.getElementById('upgradeMetalStorage').disabled=false;
  if (ff.ore.amount<ff.ore.max)
    document.getElementById('upgradeOreStorage').disabled=true;
  if (ff.ore.amount>=ff.ore.max)
    document.getElementById('upgradeOreStorage').disabled=false;
}
setInterval(checkButtons, 100)

function updateBattleStats()
{
    showval('wins', ff.wins);
    showval('defeats', ff.losses);
    showval('ties', ff.ties);
    showval('chance', ff.chance);
    showval('max', max);
}



function buy_unit(unit){//unit means ff.marines ex. cost is marine.cost
    if (ff.money>=unit[1]&&ff.troops<ff.housing){
        ff.money-=unit[1];
        ff.money=parseFloat(ff.money.toFixed(2));
        unit[0]+=1;
        //console.log(ff.marines)
        unit[1]*=1.85;
        unit[1]=parseFloat(unit[1].toFixed(2));
        //console.log(unit[1], ff.marines[1]);
        ff.troops++;
        updateview();
        ff.chance=ff.marines[0]+(3*ff.odsts[0])+(5*ff.spartans[0])+(ff.marines[3]+ff.odsts[3]+ff.spartans[3]);
        updateBattleStats();
        ff.bought=true;
        //document.getElementById("123").disabled=false;
    }
}

function buy_housing(unit){
  if (ff.money>=unit.cost){
    ff.money-=unit.cost;
    unit.cost*=1.5;
    unit.cost=parseFloat(unit.cost.toFixed(2));
    ff.housing+=unit.housing;
    updateview();
    updateBattleStats();
  }
}


function buy_production(type){
    if (ff.steel.amount>=type[1]){
        ff.steel.amount-=type[1];
        type[0]+=1;
        //console.log(type[0], ff.basic_factory[0])
        //type[1]*=1.75;
        //type[1]=parseFloat(type[1].toFixed(2));
        ff.income+=type[2];
        ff.income=parseFloat(ff.income.toFixed(2));
        ff.cpc+=1;
        updateview();
        //document.getElementById(id+1).style.display="block";
        ff.cpc += type[2];
    }
}



function gainResource(x, id, id2){
  if (x.amount<x.max){
    var time=10;
    move(id, id2)
    x.amount+=1;
    updateview();
  }
}

function buyWorker(type){
  if (type.workers>=type.fact*10)
    return;
  var costc;
  if (type==ff.steel)
    costc=15;
  if (type==ff.ore)
    costc=10
  if (ff.money>=costc){
    ff.money-=costc;
    type.workers+=1;
    type.cpc+=1;
    updateview();
  }
}

setInterval(function(){
  ff.steel.amount+=ff.steel.cpc;
  ff.ore.amount+=ff.ore.cpc;
  updateview();
}, 1000)

function buildFactory(type){
  if (type.amount>=type.workers*10){
  type.amount-=type.workers*10;
  type.fact+=1;
  updateview();}
}



function win(){
    ff.money+=ff.cpc*ff.cpc;
    ff.money=parseFloat(ff.money.toFixed(2));
    updateview();
}

function lose(){
    ff.money+=0.00;
    ff.money=parseFloat(ff.money.toFixed(2));
    updateview();
}

function tie(){
    ff.money+=0.005*ff.money;
    ff.money=parseFloat(ff.money.toFixed(2));
    updateview();
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var i = 0;
function move(id, id2) {
  document.getElementById(id2).disabled=true;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById(id);
    var width = 1;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        document.getElementById(id2).disabled=false;
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
var ii=0
function move2(id) {
  //document.getElementById(id2).disabled=true;
  if (ii == 0) {
    ii = 1;
    var elem = document.getElementById(id);
    var width = 1;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        //document.getElementById(id2).disabled=false;
        ii = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function battle()
{
    if (ff.bought)//has to have bought something
    {
      //for (var i=100; i>0; i--){
        //document.getElementById("bar").style.width=i+'%';
        //sleep(1);
      //}
        //ff.food-=ff.troops;
        move2("how");
        let num=Math.random()*max;
        num=parseFloat(num.toFixed(2));
        var chance=ff.marines[0]+(3*ff.odsts[0])+(15*ff.spartans[0])+(ff.odsts[3]+ff.spartans[3]);
        ff.chance=chance;
        if (num<chance){
            ff.wins+=1;
            win();
        }else if (num===chance){
            ff.ties+=1;
            tie();
        }else{
            ff.losses+=1;
            lose();
        }
        updateBattleStats();
        //document.getElementById("bar").style.width=100+'%';
        if (ff.chance>max){
            max*=10;
            ff.cpc+=1;
            if (ff.income>0){ff.income+=0.1*ff.income;
            $.notify("Your income has been increased by 10%.", "info")}
            else {ff.income+=1;
            $.notify("Your income has increased by 1.", "info")}
            updateBattleStats();
            updateview();
        }
    }
}
setInterval(battle, 500);


function tick(){
  if (player.money>=ff._cost){
    player.money-=ff._cost;
    ff._cost=parseFloat(ff._cost*1.5.toFixed(2));
    ff.tick*=0.98;

  }
}



/*function save()
{   window.localStorage.clear();
    window.localStorage.setItem('ff', ff);
    window.localStorage.setItem('game', game);
    window.localStorage.setItem('income', income);
    window.localStorage.setItem('bought', bought);
    alert("Game saved.\nUse 'load' to load ff.");
    console.log('saved.')
}

function load(){
    ff=localStorage.getItem('ff');
    game=localStorage.getItem('game');
    income=localStorage.getItem('income');
    bought=localStorage.getItem('bought');
    updateBattleStats();
    updateview();
}*/


// change
function reset()
{
     ff={
    money: 20,
    income: 0,
    cpc: 1,
    marines: [0, 5, 1, 1, 10, 15],
    odsts: [0, 30, 3, 2, 25, 30],
    spartans: [0, 1000, 25, 5, 100, 150],
    bought: false,
    housing: 0,
    troops: 0,

  camps:{
    housing: 1,
    cost: 10
  },
  barracks:{
    housing: 3,
    cost: 25
  },
  bases: {
    housing: 20,
    cost: 250
  },

    wins: 0,
    losses: 0,
    ties: 0,
    chance: null,
    basic_factory: [0, 75, 1],// income: amount, cost, $/sec
    tier2_factory: [0, 250, 2],
    tier3_factory: [0, 1000, 5],
    shipments: [0, 5000, 10],

    tick: 1000,
    _cost: 1000,
    font: 'Halo',
    times: 0,

    /*metal: 0,
    ore: 0,
    miners: 0,
    metalW: 0,

    metalHousing: 0,
    metalReq: 10,
    oreReq: 15,
    mineHousing: 0

    metalWorker:{
      cost: 10,
      amount: 0
    }*/

    ore: {
      'amount': 0,
      'workers': 0,
      'fact': 0,
      'cpc': 0
    },
    steel: {
      'amount': 0,
      'workers': 0,
      'fact': 0,
      'cpc': 0
    }

}
max=100;
req=25000;

    updateBattleStats();
    updateview();
    save();
}






// change
function save()
{
    var _ff=JSON.stringify(ff);
    window.localStorage.clear();
    window.localStorage.setItem('_ff', _ff);
    //console.log('Game saved.');
    $.notify("Game saved.", "success");
}

function autosave()
{
    if (!autosaving){return;}
    var _ff=JSON.stringify(ff);
    window.localStorage.clear();
    window.localStorage.setItem('_ff', _ff);
    //console.log('Game saved.');
    $.notify("Game saved.", "success");
}
setInterval(autosave, 30000);

function toggle()
{
    if (autosaving){autosaving=false}
    else{
        autosaving=true;
    }
    console.log(autosaving);
    var x;
    if (autosaving)
      x='enabled';
    else {
      x='disabled'
    }
    $.notify(`Autosaving ${x}`, "info")
}

function load(){
    if (localStorage.getItem('_ff')===null){
        console.log('No save file found.');
        Swal.fire({
            title: 'No save file found.',
            icon: 'error'
        })
        return;
    }
    try{ff=JSON.parse(localStorage.getItem('_ff'));
    updateBattleStats();
    updateview();
    $.notify("Game loaded.", "info");}
    catch(e){
      Swal.fire({
            title: 'No save file found.',
            icon: 'error'
        })
    }
}


function upgrade(unit){
  if (ff.steel.amount>=unit[4]&&ff.ore.amount>=unit[5]&&unit[0]>0){
    ff.steel.amount-=unit[4];
    ff.ore.amount-=unit[5]
    unit[3]*=1.1;
    unit[2]*=1.05;
    unit[3]=parseFloat(unit[3].toFixed(2));
    unit[2]=parseFloat(unit[2].toFixed(2));
    updateview();
    updateBattleStats();
  }
}

function upgradeStorage(y){
  if (y.amount>=y.max){
    y.amount=0;
    y.max*=2;
    updateview();
  }
}

this.addEventListener('keydown', event => {
  if (event.keyCode == 77) {// m
    buy_unit(ff.marines);
  }
})
this.addEventListener('keydown', event => {
  if (event.keyCode == 79) {// o
    buy_unit(ff.odsts);
  }
})
this.addEventListener('keydown', event => {
  if (event.keyCode == 83) {// s
    buy_unit(ff.spartans);
  }
})

this.addEventListener('keydown', event => {
  if (event.keyCode == 65) {// a
    buy_housing(ff.camps);
  }
})

this.addEventListener('keydown', event => {
  if (event.keyCode == 66) {// b
    buy_housing(ff.barracks);
  }
})
this.addEventListener('keydown', event => {
  if (event.keyCode == 67) {// c
    buy_housing(ff.bases);
  }
})


function export_()
{
  var _ff=btoa(JSON.stringify(ff));
  //save_=_player+'>>'+_game+'>>'+_income+'>>'+_max+'>>'+_req;
  //console.log(save_);
  // that would not be good
  //document.getElementById('saved').innerHTML=save_;
  var txt=document.getElementById('saveExport');
  txt.value=_ff;
  txt.select();
  document.execCommand('copy');
  $.notify("Save copied.", "info")
}

function import_(){
  cc=1;
  cc=prompt("Are you sure? Current save will be overwritten.");
  if (true){
    try{ff=JSON.parse(atob(cc))
    updateview();
    updateBattleStats();
    console.log(JSON.stringify(ff));}
    catch(e){
      return
    }
  }
}
function check(){
  return localStorage.getItem('_ff')==null
}

// auto load save?
/*if (autosaving)
  window.onload=load();*/
window.onload=function(){
  var x=check();
  if (x)
    $.notify("Use 'load game' to load previous game.", "info")
}

this.addEventListener('keydown', event=>{
  if (event.keyCode==17){
    this.addEventListener('keydown', event=>{
      if (event.keyCode==16)
        save();
    })
  }

})
/*
function metal(){
  ff.metal+=1;
  updateview();
  //console.log(ff.money);
}

function ore(){
  ff.ore+=1;
  udpateview();
}

function metalFactory(){
  if (ff.metal>=ff.metalReq&&ff.ore>=ff.oreReq){
    ff.metal-=ff.metalReq;
    ff.ore-=ff.oreReq;
    ff.metalHousing+=10;
    ff.metalReq+=5;
    ff.oreReq+=10;
    updateview();
  }
}

function oreMine(){
  if (!ff.ore>=10)
    return;
  ff.ore-=10;
  ff.mineHousing+=15;
  updateview();
}*/
