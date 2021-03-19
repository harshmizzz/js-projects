let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let billamount = document.getElementById("bill-amount").value;
  let tippercent = document.getElementById("tip-percentage").value;
  let tipamount = (document.getElementById("tip-amount").value =
    billamount * (tippercent / 100));
  let totalbill = (document.getElementById("total-bill").value =
    parseFloat(billamount) + parseFloat(tipamount));
});
