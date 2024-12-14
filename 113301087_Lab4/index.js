// 音效檔案
var w = new Audio('sounds/crash.mp3');
var a = new Audio('sounds/kick-bass.mp3');
var s = new Audio('sounds/snare.mp3');
var d = new Audio('sounds/tom-1.mp3');
var j = new Audio('sounds/tom-2.mp3');
var k = new Audio('sounds/tom-3.mp3');
var l = new Audio('sounds/tom-4.mp3');

// 按鈕點擊事件
var buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML; // 獲取按鈕的內容
    playSound(buttonInnerHTML); // 播放對應音效
    buttonAnimation(buttonInnerHTML); // 添加動畫效果
  });
}

// 鍵盤按下事件
document.addEventListener("keydown", function (event) {
  var keyPressed = event.key.toLowerCase(); // 獲取鍵盤按鍵
  playSound(keyPressed); // 播放對應音效
  buttonAnimation(keyPressed); // 添加動畫效果
});

// 播放音效函式
function playSound(key) {
  switch (key) {
    case "w":
      w.currentTime = 0; // 重置音效播放進度
      w.play();
      break;
    case "a":
      a.currentTime = 0;
      a.play();
      break;
    case "s":
      s.currentTime = 0;
      s.play();
      break;
    case "d":
      d.currentTime = 0;
      d.play();
      break;
    case "j":
      j.currentTime = 0;
      j.play();
      break;
    case "k":
      k.currentTime = 0;
      k.play();
      break;
    case "l":
      l.currentTime = 0;
      l.play();
      break;
  }
}

// 按鈕動畫函式
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey); // 選取按下的按鈕
  if (activeButton) {
    activeButton.classList.add("pressed"); // 添加動畫類別
    setTimeout(function () {
      activeButton.classList.remove("pressed"); // 0.1秒後移除類別
    }, 100);
  }
}
