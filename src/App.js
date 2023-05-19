import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoworkingsList from "./pages/CoworkingsList";
import CreateCoworking from "./pages/CreateCoworking";
import CoworkingDetails from "./pages/CoworkingDetails";
import UpdateCoworking from "./pages/UpdateCoworking";
import Login from "./pages/Login";

function App() {
  // j'ai installé le react router
  // et j'ai créé deux routes (donc deux pages)
  // une pour la page d'accueil qui affiche le composant Home
  // une pour la page coworkings qui affiche le composant CoworkingsList

  return (
    <BrowserRouter>
      <Routes>
        {/*Définition des routes de l'application  */}

        {/* Route pour la page d'accueil, affiche le composant Home*/}
        <Route path="/" element={<Home />} />

        {/* Route pour la liste des espaces de coworking, affiche le composant CoworkingsList*/}
        <Route path="/coworkings" element={<CoworkingsList />} />

        {/* Route pour les détails d'un espace de coworking spécifique, affiche le composant CoworkingDetails L'identifiant de l'espace de coworking est passé dans l'URL en tant que paramètre (:id).*/}
        <Route path="/coworkings/:id" element={<CoworkingDetails />} />

        {/* Route pour la page de connexion, affiche le composant Login avec le formulaire de connexion*/}
        <Route path="/login" element={<Login />} />

        {/* Routes spécifiques à l'administration des espaces de coworking*/}

        {/* Route pour la liste des espaces de coworking (administration), affiche le composant CoworkingsList*/}
        <Route path="/admin/coworkings" element={<CoworkingsList />} />

        {/* Route pour la création d'un nouvel espace de coworking (administration), affiche le composant CreateCoworking*/}
        <Route path="/admin/create-coworking" element={<CreateCoworking />} />

        {/* Route pour les détails d'un espace de coworking spécifique (administration), affiche le composant CoworkingDetails L'identifiant de l'espace de coworking est passé dans l'URL en tant que paramètre (:id).*/}
        <Route path="/admin/coworkings/:id" element={<CoworkingDetails />} />

        {/* Route pour la mise à jour d'un espace de coworking spécifique (administration), affiche le composant UpdateCoworking L'identifiant de l'espace de coworking est passé dans l'URL en tant que paramètre (:id).*/}
        <Route path="/admin/coworkings/:id/update" element={<UpdateCoworking />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;
