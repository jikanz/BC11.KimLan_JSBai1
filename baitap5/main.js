document.getElementById ("btnTong").onclick = function() {
 var number1 = document.getElementById ("txtNumber7").value ;
 var chục =Math.floor( number1/10);
 var đơnVị=Math.floor( number1%10);
 var tong = chục + đơnVị ;
 console.log(tong) ;
 document.getElementById ("divShowInfo6").innerHTML = "tong là :" + tong ;
 
}



document.getElementById("divShowInfo6").style.backgroundColor ="pink";
document.getElementById("divShowInfo6").style.color ="white";
document.getElementById("divShowInfo6").style.fontSize="30px";