var player={
  protons: 0,
  electrons: 0,
  neutrons: 0

}



function save(){
  window.localStorage.clear();
  var _player=JSON.stringify(player);
  localStorage.setItem('_player', _player);
  $.notify('Game saved.', "info");
}
