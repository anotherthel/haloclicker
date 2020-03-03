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
}
s=Settings(true, 30000)
