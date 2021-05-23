document.getElementById("btnTb").onclick = function () {
var number = document.getElementById("txtNumber3").value;
var chụcNghìn =Math.floor(number/10000)
var nghìn =Math.floor(number%10000/1000)
var trăm =Math.floor( number%10000%1000/100);
var chục =Math.floor( number%10000%1000%100/10);
var đơnVị=Math.floor( number%10000%1000%100%10);
var tB = (trăm +chục + đơnVị +chụcNghìn +nghìn)/5;
console.log (chụcNghìn,nghìn,trăm,chục,đơnVị)
console.log ("Trung bình là:" + tB);
document.getElementById("divShowInfo2").innerHTML = "Trung bình là :" + tB;
}
document.getElementById("divShowInfo2").style.backgroundColor ="yellow";
document.getElementById("divShowInfo2").style.color ="blue";
document.getElementById("divShowInfo2").style.fontSize="30px";