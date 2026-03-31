document.getElementById("donationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let plz = document.getElementById("plz").value;

    if (!/^[0-9]{5}$/.test(plz)) {
        document.getElementById("message").innerText = "Ungültige PLZ!";
        return;
    }

    document.getElementById("message").innerText = "Spende erfolgreich registriert!";
});
