
const form = document.getElementById("form");
const log = document.getElementById("log");

const handleSubmit = async (event) => {
    const formData = new FormData(event.target);
    try {
        const response = await fetch(`http://127.0.0.1:3000/api/upload/`, {
            method: "POST",
            mode: 'cors',
            body: formData,
        });

        if (!response.ok) {
            throw new Error("Échec de la requête. Statut : " + response.status);
        }

        const data = await response.json();

        console.log(data)

    } catch (error) {
        console.error(`Erreur lors de la requête :${error}`);
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le formulaire d'être soumis normalement

    // Récupérer les données du formulaire
    handleSubmit(event)

});