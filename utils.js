var style='block';
var body = document.getElementsByTagName("body")[0];
function func(id){
  switch (style){
    case 'none':
      style='block';
      break;
    case 'block': 
      style='none';
      break;
  }
  document.getElementById(id).style.display=style;
}

var x=true;

function show(show, hide){
    document.getElementById(show).style.display="block";
    document.getElementById(hide).style.display="none";
}




this.addEventListener('keydown', event=>{
  if (event.keyCode==72)
    show("help", "main");
})

this.addEventListener('keydown', event=>{
  if(event.keyCode==8)
    show("main", "help")
})

/*function font(increment){
  size-=increment;
  document.getElementsByClassName("pp").style.font-size=size;
}*/

function bg(){
  if (x){
    body.classList.remove("hasBackground");
    //body.style.fontFamily='Arial';
    x=false;
  }
  else{
    body.classList.add("hasBackground")
    //body.style.fontFamily='Halo';
    x=true;
  }
}

function tabs(show, hide, hide2){
  document.getElementById(show).style.display='block';
  document.getElementById(hide).style.display='none';
  document.getElementById(hide2).style.display='none';
}

function tabShow(show, hide, hide2, id){
  document.getElementById(show).style.display="block";
  document.getElementById(hide).style.display="none";
  document.getElementById(hide2).style.display="none";
  //document.getElementById(id).style.backgroundColor="lightgrey";
  //document.getElementById(id).style.fontColor="black";
}
