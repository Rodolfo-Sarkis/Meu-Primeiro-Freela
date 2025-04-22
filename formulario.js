document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const submitButton = form.querySelector("button");

    // Função para validação do formulário
    function validateForm() {
        let isValid = true;

        // Validação de nome
        if (nameInput.value.trim() === "") {
            nameInput.classList.add("error");
            isValid = false;
        } else {
            nameInput.classList.remove("error");
        }

        // Validação de email
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add("error");
            isValid = false;
        } else {
            emailInput.classList.remove("error");
        }

        // Validação de mensagem
        if (messageInput.value.trim() === "") {
            messageInput.classList.add("error");
            isValid = false;
        } else {
            messageInput.classList.remove("error");
        }

        return isValid;
    }

    // Evento de envio do formulário
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (validateForm()) {
            alert("¡Gracias por tu mensaje! Te responderemos pronto.");
            form.reset();
        } else {
            alert("Por favor, completa todos los campos correctamente.");
        }
    });

    // Efeito de foco nos campos
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener("focus", function () {
            input.classList.add("focus");
        });
        input.addEventListener("blur", function () {
            input.classList.remove("focus");
        });
    });
});
