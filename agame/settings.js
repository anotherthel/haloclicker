class Settings{
  constructor(autosaving, interval){
    this.autosaving=autosaving;
    this.interval=interval;
  }

  toggle(){
    if (this.autosaving)
      this.autosaving=false;
    else {
      this.autosaving=true;
    }
  }
  interval(x){
    this.interval=x;
  }

  tabs(show, h1, h2){
    document.getElementById(show).style.display="block";
    document.getElementById(h1).style.display="none";
    document.getElementById(h2).style.display="none";
  }
}
settings=new Settings(true, 30000)
