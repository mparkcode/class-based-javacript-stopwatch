const totalTime = document.querySelector('#totalTime');
const totalTimeDisplay = document.querySelector('#totalTimeDisplay');
const currentLapTime = document.querySelector('#currentLapTime');
const currentLapTimeDisplay = document.querySelector('#currentLapTimeDisplay');
const startButton = document.querySelector('#start');
const lapButton = document.querySelector('#lap');
const resetButton = document.querySelector('#reset');
const lapTimes = document.querySelector('#lapTimes')

const stopWatch = new StopWatch(totalTime, totalTimeDisplay, currentLapTime, currentLapTimeDisplay, startButton, lapButton, resetButton, lapTimes)