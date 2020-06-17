function calculTip() {
  var notaa = document.getElementById("notaa").value;
  var Optiuni = document.getElementById("Optiuni").value;
  var numOfPeople = document.getElementById("nrclient").value;

  if (notaa === "" || Optiuni == 0) {
    alert("Va rog sa introduceti suma");
    return;
  }

  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("Fiecare").style.display = "none";
  } else {
    document.getElementById("Fiecare").style.display = "block";
  }

  var total = (notaa * Optiuni) / numOfPeople;

  total = Math.round(total * 100) / 100;

  total = total.toFixed(2);

  document.getElementById("totalTips").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

document.getElementById("totalTips").style.display = "none";
document.getElementById("Fiecare").style.display = "none";

document.getElementById("calcul").onclick = function () {
  calculTip();
};
