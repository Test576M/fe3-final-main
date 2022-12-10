import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";



export const getFavStorage = () => {
  const localData = localStorage.getItem("favs");
  return localData ? JSON.parse(localData) : [];
};
//logica para agregar a favoritos
const setFavStorage = (dentista) => {
  const StorageFavorito = getFavStorage();
  const FavoritosEnlistados = StorageFavorito.filter((fav) => {
    return fav.id === dentista.id;
  });
  if (FavoritosEnlistados.length === 0) {
    StorageFavorito.push(dentista);
    localStorage.setItem("favs", JSON.stringify(StorageFavorito));
    alert("dentista agregado exitosamente");
  } else {
    alert("este dentista ya fue agregado a favoritos");
  }
};
//logica para eliminar de favoritos
const removeFavStorage = (id) => {
  const StorageFavorito = getFavStorage();
  const index = StorageFavorito.findIndex((fav) => fav.id === id);
  if (index !== -1) {
    StorageFavorito.splice(index, 1);
    localStorage.setItem("favs", JSON.stringify(StorageFavorito));
    alert("dentista eliminado exitosamente");
  } else {
    alert("Error, no sé que hiciste pero por favor deja de tocar cosas que me rompes el proyecto");
  }
};


//por aca metemos un poco del cambio de tema
const Card = ({ name, username, id }) => {
  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;


  const isFavorited = (id) => {
    const LocalData = getFavStorage();
    const FavoritosEnlistados = LocalData.filter((fav) => {
      return fav.id === id;
    });
    return FavoritosEnlistados.length === 1;
  };

  const addFav = () => {
    setFavStorage({ name, username, id });
  };
  const removeFav = () => {
    removeFavStorage(id);
  };
  const favorite = isFavorited(id);

  //aca se meten los procesos de agregar y eliminar a favoritos, a su vez que viene con el agregar y sacar de local storage
  return (
    <div className={`card ${isDarkMode ? "dark" : "light"}`}>
      <img src="/images/doctor.jpg" alt="doctor placeholder" />
      <Link to={`/dentista/${id}`}>
        <h5>{name}</h5>
      </Link>
      <p>{username}</p>
      <button onClick={favorite ? removeFav : addFav} className={`${isDarkMode ? "dark" : "light"}`} >
        {favorite ? "❌ Eliminar de favoritos" : "⭐ Añadir a favoritos"} 
      </button>
    </div>
  );
};

export default Card;
