

const radioBill = PhoneBill();

function radioBillTotal(){
    var checkedRadioBtn= document.querySelector(".billItemTypeRadio:checked");
    radioBill.action(checkedRadioBtn);

    callTotalTwoElement.innerHTML=radioBill.callTotal().toFixed(2);
    smsTotalTwoElement.innerHTML=radioBill.smsTotal().toFixed(2);
    totalTwoElement.innerHTML=radioBill.grandTotal().toFixed(2);


    totalTwoElement.classList.remove("warning","danger");
    totalTwoElement.classList.add(radioBill.totalStyle);
}
radioBillAddBtnElement.addEventListener("click",radioBillTotal);