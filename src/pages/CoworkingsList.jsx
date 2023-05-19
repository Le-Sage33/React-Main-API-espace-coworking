import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import { Link, useNavigate } from "react-router-dom";

const CoworkingsList = () => {
  // créé un state coworkingsData pour pouvoir stocker les données récupérées
  // depuis l'API, à savoir la liste des coworkings
  // par défaut (donc au premier chargement du composant), le state
  // contient un tableau vide
  const [coworkingsData, setCoworkingsData] = useState([]);

  // je récupère la fonction navigate du react router
  const navigate = useNavigate();

  // je fais l'appel fetch vers l'url de mon api (qui est en local)
  // et qui renvoie un json contenant la liste des coworkings en BDD
  // quand l'appel est terminé, je stocke les données récupérées
  // dans le state, ce qui force mon composant à se recharger

  useEffect(() => {
    fetch("http://localhost:3002/api/coworkings")
      .then((coworkingsDataJson) => {
        return coworkingsDataJson.json();
      })
      .then((coworkingsDataJs) => {
        setCoworkingsData(coworkingsDataJs.data);
      });
  }, []);

  const handleDeleteClick = (coworking) => {
    const token = localStorage.getItem("jwt");

      // Je fais un appel fetch vers l'URL de mon API avec la méthode DELETE
      // et je passe l'id du coworking à supprimer en paramètre de l'URL.
      fetch("http://localhost:3002/api/coworkings/" + coworking.id, {
      method: "DELETE",
      // Si l'URL de mon API nécessite une authentification,
      // je lui passe le JWT stocké en localStorage dans le header
      // de la requête.
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      // Quand le fetch est terminé, je recharge la page actuelle grâce
      // à la fonction navigate du React Router.
      .then(() => {
        navigate(0);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <>
      <Header />
      <h1>Admin : Liste des coworkings</h1>

      {/*Je boucle sur le state coworkingsData, qui contient la liste des coworkings.*/}
      {coworkingsData.map((coworking) => {
        return (
          <div key={coworking.id}>
            <h2>{coworking.name}</h2>
            <p>Superficie : {coworking.superficy}</p>

            {/* 
              Je créé un lien (grâce au React Router)
              vers la page de détail du coworking
              et je lui passe en paramètre l'id du coworking actuel.
            */}
            <Link to={`/admin/coworkings/${coworking.id}`}>Voir le coworking</Link>
            <br></br>
            <Link to={`/admin/coworkings/${coworking.id}/update`}>Modifier le coworking</Link>
            <br></br>

            {/* 
              Je créé un bouton avec un event listener
              et je passe le coworking actuel en paramètre de la fonction handleDeleteClick.
              */}
            <button onClick={() => handleDeleteClick(coworking)}>Supprimer le coworking</button>
          </div>
        );
      })}
    </>

  );
};

export default CoworkingsList;