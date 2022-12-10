
import { ContextGlobal } from "../Components/utils/global.context";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";


const Detail = () => {
  const { id } = useParams();
  const [dentista, setDentista] = useState(undefined);
  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDentista(data);
       }); }, [id]);
  return (
    <>
      <h1>Detalles del Dentista {dentista?.name} </h1>
      {dentista ? (
        <section>

          <div className="detailDentista">

            <div className={`card ${isDarkMode ? "dark" : "light"}`}>

              <div>
                <img src="/images/doctor.jpg" alt="doctor placeholder" />
              </div>

              <div>
                <ul>
                  <li>Nombre: {dentista.name}</li>
                  <li>Email: {dentista.email}</li>
                  <li>Celular: {dentista.phone}</li>
                  <li>Website: {dentista.website}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
//es dificil documentar cuando es bastante obvio lo que esta pasando
export default Detail;
