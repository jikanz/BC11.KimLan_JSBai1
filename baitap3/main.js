document.getElementById("btnto").onclick = function () {

var usd = document.getElementById("txtNumber4").value;

var vnd = (usd) * 23500 ;
console.log ("đổi sang vnd là:" + vnd);

var currentFormat = new Intl.NumberFormat("vn-VN");
var totalFormat = currentFormat.format(vnd)
console.log("Total :" ,totalFormat +"VND");
document.getElementById("divShowInfo3").innerHTML = "usd đổi sang là :" + totalFormat +"VND";
}
document.getElementById("divShowInfo3").style.backgroundColor ="black";
document.getElementById("divShowInfo3").style.color ="red";
document.getElementById("divShowInfo3").style.fontSize="30px";