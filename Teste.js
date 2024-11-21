document.addEventListener("DOMContentLoaded", function() {
    console.log("Le site est prêt !");
    
    // Exemple de fonctionnalité simple
    const button = document.createElement("button");
    button.textContent = "Cliquez-moi";
    button.addEventListener("click", () => alert("Bouton cliqué !"));
    document.body.appendChild(button);
});