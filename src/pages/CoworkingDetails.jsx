import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../layout/Header";
import { Link } from "react-router-dom";

const CoworkingDetails = () => {
  // je créé un state pour stocker un coworking
  const [coworking, setCoworking] = useState(null);

  // je récupère l'id présent dans l'url
  const { id } = useParams();

  // j'utilise useEffect, pour executer l'appel à l'api
  // une seule fois, au chargement du composant
  useEffect(() => {
    // je fais un appel fetch, vers l'url de l'api pour récupérer
    //  un coworking en fonction de l'id présent dans l'URL
    fetch(`http://localhost:3002/api/coworkings/${id}`)
      .then((responseJson) => responseJson.json())
      .then((responseJs) => {
        // si j'ai une réponse de l'api, je stocke le coworking
        // renvoyé dans le state
        setCoworking(responseJs.data);
      });
  }, [id]);

  return (
    <div>
      <Header />
      {coworking ? (
        <>
          <h1>Détail du coworking</h1>
          <div>
            <h1>{coworking.name}</h1>
            <p>Superficie : {coworking.superficy}</p>
            <p>Capacity : {coworking.capacity}</p>

            {/* Étant donné que l'adresse n'est pas obligatoire,je vérifie qu'elle existe avant de l'afficher*/}
            {coworking.address && (
              <p>
                Adresse : {coworking.address.number} {coworking.address.street} - {coworking.address.postCode},{" "}
                {coworking.address.city}
              </p>
            )}

            <br></br>
            <Link to="/admin/coworkings">Retour à la liste des coworkings</Link>
          </div>
        </>
      ) : (
        <p>Pas de coworking trouvé</p>
      )}
    </div>

  );
};

export default CoworkingDetails;