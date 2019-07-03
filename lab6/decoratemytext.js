(function () {
    "use strict";
    var tm; 
    var stop = false;
    window.onload = function () {
        let btnBigger = document.getElementById("biggerdecorationId");
        btnBigger.onclick = to_start;
        let btnChangeFont = document.getElementById("biglatinfontId");
        btnChangeFont.onclick = biglatin;
        let chkBling = document.getElementById("blingId");
        chkBling.onchange = bling;
    }
    function biggerdecoration() {
        document.getElementById("size").style.fontSize = "24" + "px";
    }
    function bling(){
        var blingChecked = document.getElementById("blingId").checked;
        if(blingChecked){
            document.getElementById("size").style.fontWeight = "bold";
            document.getElementById("size").style.color = "green";
            document.getElementById("size").style.textDecoration = "underline";
            document.body.style.backgroundImage = "url('hundred-dollar-bill.jpg')";
        }else{
            document.getElementById("size").style.fontWeight = "normal";
            document.getElementById("size").style.color = "black";
            document.getElementById("size").style.textDecoration = "none";
            document.body.style.backgroundImage = "none";
        }
    }

    function biggerdecoration2(){
        var elem = document.getElementById("size");
        var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("font-size");
        document.getElementById("size").style.fontSize =  (parseFloat(theCSSprop) + 2) + "px";
    }

    function to_start(){
        if(!stop){
            tm=setInterval(biggerdecoration2, 500);
            stop = true;
        }
        else{
            window.clearInterval(tm); 
            stop = false;
        }
        
    }
    function biglatin(){
        document.getElementById("size").className += " changePigyLatin";
    }
})();

