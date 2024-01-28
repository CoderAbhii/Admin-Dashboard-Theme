let guestNo2 = document.getElementById("adult_two");
let guestNo3 = document.getElementById("adult_three");
let guestNo4 = document.getElementById("adult_four");
let guestNo5 = document.getElementById("adult_five");


function guestFunction() {
    var inputGuestNo = document.getElementById("noOfGuest").value;
    console.log(inputGuestNo);
    if(inputGuestNo == 1){
        adult_two.style.display = "none";
        adult_three.style.display = "none";
        adult_four.style.display = "none";
        adult_five.style.display = "none";
       
    }
    if(inputGuestNo == 2){
        adult_two.style.display = "flex";

        adult_three.style.display = "none";
        adult_four.style.display = "none";
        adult_five.style.display = "none";
       
    }
    if(inputGuestNo == 3){
        adult_two.style.display = "flex";
        adult_three.style.display = "flex";

        adult_four.style.display = "none";
        adult_five.style.display = "none";
       
    }
    if(inputGuestNo == 4){
        adult_two.style.display = "flex";
        adult_three.style.display = "flex";
        adult_four.style.display = "flex";
 
        adult_five.style.display = "none";
       
    }
    if(inputGuestNo == 5){
        adult_two.style.display = "flex";
        adult_three.style.display = "flex";
        adult_four.style.display = "flex";
        adult_five.style.display = "flex";
    }
}