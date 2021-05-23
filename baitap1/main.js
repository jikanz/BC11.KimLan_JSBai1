document.getElementById("btnNhan").onclick = function () {

var luong1Ngay = document.getElementById("txtNumber1").value;

var SoNgayLam = document.getElementById("txtNumber2").value;

var tongLuong = parseInt(luong1Ngay) * parseInt(SoNgayLam) ;
console.log ("tong lương là:" + tongLuong);

document.getElementById("divShowInfo").innerHTML = "Tổng lương là :" + tongLuong;
}

document.getElementById("divShowInfo").style.backgroundColor ="red";
document.getElementById("divShowInfo").style.color ="white";
document.getElementById("divShowInfo").style.fontSize="30px";