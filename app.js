const billAmount = document.querySelector("#billAmt");

const cashGiven = document.querySelector("#cash-given");


const checkButton = document.querySelector("#checkBtn");

const message = document.querySelector("#errorMsg");

const nextBtn = document.querySelector("#nextBtn");

const cashGivenDiv = document.querySelector(".cashGivenInput")

const noOfNotes = document.querySelectorAll(".noOf-Notes");

const availableDenominations = [2000 ,500 ,100 ,20 ,5 ,1];



//-----------------------------------




checkButton.addEventListener("click", function checkBillAndCash()
{
    hideError();

//done to clear the msg after changing the value

if((billAmount.value) > 0)
{
if((cashGiven.value) >= (billAmount.value))
{
const amountToBeReturned = cashGiven.value - billAmount.value;

calculateChange(amountToBeReturned);

}
else
{
    displayMessage("Cash Given must be greater than bill amount");

}
}

else
{
    displayMessage("Invalid Entry");
}

});



function calculateChange (amountToBeReturned)
{
//goes over all the available notes
    for(let i = 0; i < availableDenominations.length ; i++)
    {

        //no of notes needed for the denomination
        const totalNoOfNotes = Math.trunc(amountToBeReturned / availableDenominations[i]);

     amountToBeReturned = amountToBeReturned % availableDenominations[i];
// displaying
     noOfNotes[i].innerText = totalNoOfNotes;
    }


}


function displayMessage(display)
{
    message.style.display = "block"
    message.innerText = display; 
}

function hideError(){
    message.style.display = "none";
}