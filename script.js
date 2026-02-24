(function(){
    emailjs.init("n0soVGVeDQbceATNb");
})();

document.getElementById("contact-form")
.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_bcud33a", "template_v1rtq2f", this)
    .then(function() {
        document.getElementById("success-msg").innerHTML = "Message Sent Successfully!";
        document.getElementById("contact-form").reset();
    }, function(error) {
        alert("Failed to send message. Please try again.");
    });
});