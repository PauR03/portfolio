alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height) 

$(document).ready(function () {

    // Inicializar EmailJS con tus datos de servicio
    emailjs.init("7QPAIRXnbpcz5ZSMk");

    // Manejar el envío del formulario

    $("#contactMe").on("submit", (e) => {
        e.preventDefault();

        var name = $("#name").val()
        var email = $("#email").val()
        var message = $("#message").val()

        // Enviar el correo electrónico utilizando EmailJS
        var templateParams = {
            to_name: name,
            from_name: email,
            message: message
        };

        emailjs.send("service_wq8h2n4", "template_ilnmu9l", templateParams)
            .then(function (response) {
                alert("Correo electrónico enviado con éxito");
                $("#name, #email, #message").val("")
            }, function (error) {
                alert("Error al enviar el correo electrónico: " + error);
            });
    })
});
