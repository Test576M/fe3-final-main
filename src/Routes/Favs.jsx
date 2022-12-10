import React from "react";
import Card, {getFavStorage} from "../Components/Card";



const Favs = () => {
  const LocalFavs = getFavStorage();
  return (
    <>
      <h1>Dentistas favoritos</h1>
      <div className="card-grid container">
        {LocalFavs.length
          ? LocalFavs.map((dentistaFav) => (
              <Card {...dentistaFav} key={dentistaFav.id} />
            ))
          : null}
      </div>
    </>
  );
};
//aca.. los favoritos 
export default Favs;
