document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Por favor, completa todos los campos.");
        } else {
            // Simulamos el envío del formulario (puedes agregar aquí tu lógica de envío)
            alert("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.");
            
            // Limpiamos los campos del formulario
            form.reset();
        }
    });
});
