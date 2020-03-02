var player={
  protons: {
    'amount': 0,
    'income': 1
  },
  electrons: {
    'amount': 0,
    'income': 0
  },
  neutrons: {
    'amount': 0,
    'income': 0
  }

}




function showval(id, content){
  return document.getElementById(id).innerHTML=parseInt(content.toFixed(2)).toLocaleString('en-US');
}
function c(id){
  return document.getElementById(id);
}

setInterval(function(){// function for income
  player.protons.amount+=player.protons.income/100;
  player.electrons.amount+=player.electrons.income/100;
  showval('protons', player.protons.amount);
  showval('electrons', player.electrons.amount);
}, 10)




function gainResource(res){
  res.amount+=1;
}


c('gainProton').onclick=gainResource(player.protons);
c('gainElectron').onclick=gainResource(player.protons);


function save(){
  window.localStorage.clear();
  var _player=JSON.stringify(player);
  localStorage.setItem('_player', _player);
  $.notify('Game saved.', "info");
}
