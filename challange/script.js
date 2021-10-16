let message = document.getElementById("message");

phoneDict=["0852", "0853", "0811", "0812", "0813"];
function checkPhone(){
    let phoneNumber = document.getElementById("phoneNumber");
    console.log(phoneNumber.value)
    isTelkomsel = phoneDict.includes(phoneNumber.value.substring(0, 4))
    
    if(isTelkomsel){
        phoneNumber.style.borderColor = "green";
        message.innerHTML="Nomor benar"
    }else{
        phoneNumber.style.borderColor = "red";
        message.innerHTML="Nomor salah"
    }
}