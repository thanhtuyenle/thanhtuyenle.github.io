function calcTip(){
    let subtotal = document.getElementById("subtotal").value;
    let tippercent = document.getElementById("tip").value;
    let total = parseFloat(subtotal) + parseFloat(tippercent*subtotal/100);
    document.getElementById("total").innerHTML = total;
}