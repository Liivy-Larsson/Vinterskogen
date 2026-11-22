
    
function myFunktion () {
    //Hämta alla fem kryssrutor
    var check1 = document.getElementById("bok");
    var check2 = document.getElementById("tygger");
    var check3 = document.getElementById("knappar");
    var check4 = document.getElementById("Ul");
    var check5 = document.getElementById("fantasi");
    
    var Text = document.getElementById("klart-meddelande");
    if (check1.checked == true && check2.checked == true && check3.checked == true && check4.checked == true && check5.checked == true) {
        Text.style.display = "block";
   } else {
        Text.style.display = "none";
    
   } 
}
