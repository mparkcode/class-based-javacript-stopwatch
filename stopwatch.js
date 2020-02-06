class StopWatch {

  constructor(totalTime, totalTimeDisplay, currentLapTime, currentLapTimeDisplay, startButton, lapButton, resetButton, lapTimes){
    this.totalTime = totalTime;
    this.totalTimeDisplay = totalTimeDisplay;
    this.currentLapTime = currentLapTime;
    this.currentLapTimeDisplay = currentLapTimeDisplay;
    this.startButton = startButton;
    this.lapButton = lapButton;
    this.resetButton = resetButton;
    this.lapTimes = lapTimes;
    this.operating = false;

    this.startButton.addEventListener('click', this.start);
    this.lapButton.addEventListener('click', this.lap);
    this.resetButton.addEventListener('click', this.reset);
  }

  start = () => {
    if(!this.operating){
      this.count()
      this.interval = setInterval(this.count, 10)
      this.operating = true;
      this.startButton.innerHTML = `<i class="fas fa-pause"></i>`;
    } else {
      clearInterval(this.interval)
      this.startButton.innerHTML = `<i class="fas fa-play"></i>`;
      this.operating = false;
    }
  }

  count = () => {
    this.currentTotalTimer = this.currentTotalTimer + 0.01
    this.totalTimeDisplay.value = this.convertSecondsToTime(this.totalTime.value)
    this.currentLapTimer = this.currentLapTimer + 0.01
    this.currentLapTimeDisplay.value = this.convertSecondsToTime(this.currentLapTime.value)
  }

  lap = () => {
    if(this.operating){
      const lapLi = document.createElement('li')
      lapLi.innerHTML = this.currentLapTimeDisplay.value;
      this.lapTimes.appendChild(lapLi)
      this.currentLapTimer = 0
    }
  }

  reset = () => {
    this.operating = true;
    this.start();
    this.currentTotalTimer = 0
    this.currentLapTimer = 0
    this.totalTimeDisplay.value = this.convertSecondsToTime(this.totalTime.value)
    this.currentLapTimeDisplay.value = this.convertSecondsToTime(this.currentLapTime.value)
    while(this.lapTimes.firstChild){
      this.lapTimes.removeChild(this.lapTimes.firstChild);
    } 
  }

  get currentTotalTimer(){
    return parseFloat(this.totalTime.value)
  }

  set currentTotalTimer(time){
    this.totalTime.value = time.toFixed(2)
  }

  get currentLapTimer(){
    return parseFloat(this.currentLapTime.value)
  }

  set currentLapTimer(time){
    this.currentLapTime.value = time.toFixed(2)
  }

  convertSecondsToTime = (time) => {
    const dateObj = new Date(time * 1000);
    const hours = dateObj.getUTCHours(); 
    const minutes = dateObj.getUTCMinutes(); 
    const seconds = dateObj.getSeconds();
    const milliseconds = dateObj.getMilliseconds();

    const timeString = hours.toString().padStart(2, '0') 
      + ':' + minutes.toString().padStart(2, '0') 
      + ':' + seconds.toString().padStart(2, '0')
      + ':' + milliseconds.toString().padStart(3, '0');

    return timeString;
  }
}