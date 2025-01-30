window.onload = function () {
    drawFireworks();
    lastTime = new Date();
    animationEffect();
    let audio = document.getElementById('bgm');
    document.querySelector("body").onclick = function () {
        if (!autoPlayFlag) {
            audio.play();
            autoPlayFlag = true;
        }
    }
};

