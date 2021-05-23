document.getElementById("btnHCN").onclick = function (){

    var canh1 = document.getElementById("txtNumber5").value ;
    var canh2 = document.getElementById("txtNumber6").value ;
    var dienTich = canh1 * canh2 ;
    var chuVi = (canh1 + canh2)*2 ;
    console.log (dienTich , chuVi);
    document.getElementById("divShowInfo4").innerHTML = "diện tích là:" + dienTich ;
    document.getElementById("divShowInfo5").innerHTML = "chu vi là:" + chuVi ;
}
document.getElementById("divShowInfo4").style.backgroundColor ="green";
document.getElementById("divShowInfo4").style.color ="yellow";
document.getElementById("divShowInfo4").style.fontSize="30px";
document.getElementById("divShowInfo5").style.backgroundColor ="green";
document.getElementById("divShowInfo5").style.color ="yellow";
document.getElementById("divShowInfo5").style.fontSize="30px";