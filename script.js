document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let item = document.getElementById("item").value;

    document.getElementById("message").innerText =
        "Danke " + name + "! Deine Spende (" + item + ") wurde registriert.";
});
