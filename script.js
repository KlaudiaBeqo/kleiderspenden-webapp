document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let item = document.getElementById("item").value.trim();
    let message = document.getElementById("message");

    // Validation
    if (name === "" || email === "" || item === "") {
        message.style.color = "red";
        message.innerText = "Bitte alle Felder ausfüllen!";
        return;
    }

    if (!email.includes("@")) {
        message.style.color = "red";
        message.innerText = "Bitte eine gültige E-Mail eingeben!";
        return;
    }

    // Success
    message.style.color = "green";
    message.innerText = "Danke " + name + "! Deine Spende wurde erfolgreich registriert.";
});

alert("Spende erfolgreich!");
