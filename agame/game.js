var player={
  protons: {
    'amount': 0,
    'income': 0
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

setInterval(function(){// function for updateview
  player.protons.amount+=player.protons.income;
  player.electrons.amount+=player.electrons.income;
  player.neutrons.amount+=player.neutrons.income;
  showval('protons', player.protons.amount);
  showval('electrons', player.electrons.amount);
  showval('neutrons', player.neutrons.amount);
}, 10)




function gainResource(res){
  res.amount+=1;
}




function save(){
  window.localStorage.clear();
  var _player=JSON.stringify(player);
  localStorage.setItem('_player', _player);
  $.notify('Game saved.', "info");
}
