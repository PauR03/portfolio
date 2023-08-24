let puedeEnviar = true
let idiomaActual = "es"
$(document).ready(function () {

    // Inicializar EmailJS con tus datos de servicio
    emailjs.init("7QPAIRXnbpcz5ZSMk");

    // Manejar el envío del formulario

    $("#contactMe").on("submit", (e) => {
        e.preventDefault();
        if (puedeEnviar) {
            puedeEnviar = false

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
                    puedeEnviar = true
                }, function (error) {
                    alert("Error al enviar el correo electrónico: " + error);
                });
        }

    })

    $("#root>header main img").click((e) => {
        cargarDatos()
    })
});

function cargarDatos(){
    if(idiomaActual === "es") {
        $("#root>header main img").attr("src","./img/spain.png")
        idiomaActual = "en"
    }else{
        $("#root>header main img").attr("src","./img/uk.png")
        idiomaActual = "es"
    }

    $.getJSON("./"+idiomaActual+".json", (data) => {
        
        $("#root>header main nav a").each((i,e) => {
            // $("#root>header main nav a")[i].innerHTML = data.menu[i]
            $(e).text(data.menu[i])
        })

        $("#inicio h1").text(data.inicio.presentacion)
        $("#inicio span").text(data.inicio.oficio)
        $("#inicio .cv").text(data.inicio.descargar)

        $("#sobreMi h1").text(data.sobreMi.titulo)

        $("#sobreMi p").each((i,e) => {
            $(e).text(data.sobreMi.parrafos[i])
        })
    }
    );
}