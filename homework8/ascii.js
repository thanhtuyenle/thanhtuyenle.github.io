(function () {
    "use strict";
    let timer;
    let animations = [];
    let t = 0;
    let speed = 300;

    window.onload = function () {
        let btn = document.getElementById("start_btn");
        btn.onclick = start;
        btn = document.getElementById("stop_btn");
        btn.onclick = stop;
        let animation = document.getElementById("animation");
        animation.onchange = changeAnimation;
        let size = document.getElementById("size");
        size.onchange = changeFont;
        let speed = document.getElementById("speed");
        speed.onchange = changeSpeed;
    }
    function start() {
        let e = document.getElementById("animation").value;
        if (e === "") {
            return;
        }
        timer = setInterval(loop, speed);
        enableButton(true);
    }

    function stop() {
        clearInterval(timer);
        enableButton(false);
    }

    function loop() {
        let displayVal = "";
        if (animations.length !== 0) {
            if (animations[t] === undefined) {
                t = 0;
            }
            displayVal = animations[t];
        }
        document.getElementById('display').value = displayVal;
        t++;
    }

    function enableButton(x) {
        document.getElementById('start_btn').disabled = x;
        document.getElementById('stop_btn').disabled = !x;
    }

    function changeFont() {
        let e = document.getElementById("size").value;
        document.getElementById('display').style.fontSize = e + "pt";
    }

    function changeAnimation() {
        let e = document.getElementById("animation").value;
        if (e === "") {
            animations = [];
            return;
        }

        animations = ANIMATIONS[e].split("=====\n");
        t = 0;
    }

    function changeSpeed() {
        let e = document.getElementById("speed");
        let stop = document.getElementById("stop_btn");
        clearInterval(timer);
        if (e.checked) {
            speed = 50;
        }
        else {
            speed = 300;
        }
        if (stop.disabled) {
            return;
        }
        timer = setInterval(loop, speed);
    }
})();