window.onload = function(){
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    var baloons = document.querySelector(".heartBaloons");
    baloons.style.top = "-170vh";
};
function sendEmail(){
    emailjs.send("service_h7y6769","template_xgodgrc").then(alert("Apna email check kro"))
};