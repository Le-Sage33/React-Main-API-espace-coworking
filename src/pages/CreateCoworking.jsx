import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import { useEffect } from "react";

const CreateCoworking = () => {
  const navigate = useNavigate();

  // Si l'utilisateur n'est pas connecté, c'est-à-dire s'il n'a pas de jeton JWT dans le localStorage,
  // on le redirige vers la page de connexion.
  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      navigate("/login");
    }
  }, [navigate]);

  // je créé un event listener quand le formulaire est validé
  const handleSubmit = (event) => {
    // j'utilise l'objet event, fourni automatiquement par le navigateur
    // pour empêcher que la page soit rechargée (comportement par défaut)
    event.preventDefault();
    // On empêche le comportement par défaut du navigateur qui rechargerait la page.

    // On récupère les valeurs des champs du formulaire et on les stocke dans des variables.
    const name = event.target.name.value;
    const superficy = event.target.superficy.value;
    const capacity = event.target.capacity.value;
    const priceDay = event.target.priceDay.value;

    // On effectue une requête POST vers l'API pour créer un nouveau coworking.
    fetch("http://localhost:3002/api/coworkings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        superficy: superficy,
        capacity: capacity,
        price: {
          day: priceDay,
          hour: null,
          month: null,
        },
      }),
    })
      .then((response) => {
        // Si la réponse de l'API est 200, on affiche un message de succès dans la console.
        if (response.status === 200) {
          console.log("coworking créé"); 
        } else {
          // Sinon, on affiche un message d'erreur car la création du coworking a échoué.
          console.log("erreur la création du coworking a échoué"); 
        }
      })
      .catch((error) => {
        // En cas d'erreur lors de la requête, on affiche l'erreur dans la console.
        console.log(error); 
      });

  };


// Ce formulaire permet à l'utilisateur de saisir les informations nécessaires pour créer un nouveau coworking, telles que le nom, la superficie, la capacité et le prix au jour. Lorsque l'utilisateur clique sur le bouton "Créer le coworking", la fonction handleSubmit est appelée pour traiter les données saisies.
  return (
    <>
      <Header />

      <form onSubmit={handleSubmit}>
        {/* Champ de saisie du nom du coworking */}
        <div>
          <label htmlFor="name">Nom du coworking</label>
          <input type="text" name="name" /> 
        </div>
        {/* Champ de saisie de la superficie du coworking */}
        <div>
          <label htmlFor="superficy">Superficie</label>
          <input type="number" name="superficy" /> 
        </div>
        {/* Champ de saisie de la capacité du coworking */}
        <div>
          <label htmlFor="capacity">Capacité</label>
          <input type="number" name="capacity" /> 
        </div>
        {/* Champ de saisie du prix par jour du coworking */}
        <div>
          <label htmlFor="priceDay">Prix au jour</label>
          <input type="number" name="priceDay" /> 
        </div>
        {/* Bouton de soumission du formulaire */}
        <button type="submit">Créer le coworking</button> 
      </form>

    </>
  );
};

export default CreateCoworking;




