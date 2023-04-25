let startButton;    // startボタン
let stopButton;     // stopボタン
let resetButton;    // resetボタン
let showTime;       // 表示時間

let timer;              // setTimeout, clearTimeoutで使用
let startTime;          // 開始時間
let elapsedTime = 0;    // 経過時間
let holdTime = 0;       // 一時停止用に時間を保持

window.onload = function () {
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    resetButton = document.getElementById("reset");
    showTime = document.getElementById("time");
}

// スタート
function start(){
    // 開始時間を現在の時刻に設定
    startTime = Date.now();

    // 時間計測
    measureTime();

    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
}

// ストップ
function stop(){
    // タイマー停止
    clearTimeout(timer);

    // 停止時間を保持
    holdTime += Date.now() - startTime;

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

// リセット
function reset(){
    // タイマー停止
    clearTimeout(timer);

    // 変数、表示を初期化
    elapsedTime = 0;
    holdTime = 0;
    showTime.textContent = "00:00.000";

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

// 時間を計測
function measureTime() {
    // タイマーを設定
    timer = setTimeout(function () {
        
        elapsedTime = Date.now() - startTime + holdTime;
        showTime.textContent = new Date(elapsedTime).toISOString().slice(14, 23);
        
        
        measureTime();
    });
}
