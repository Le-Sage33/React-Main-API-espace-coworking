import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          {/*Lien vers la page d'accueil ("/")*/}
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* Lien vers la liste des espaces de coworking pour l'administrateur ("/admin/coworkings")*/}
          <li>
            <Link to="/admin/coworkings">Admin : Liste des Espaces de Coworking</Link>
          </li>

          {/*Lien vers la page de création d'un nouvel espace de coworking pour l'administrateur ("/admin/create-coworking")*/}
          <li>
            <Link to="/admin/create-coworking">Admin : Créer un Nouvel Espace de Coworking</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;