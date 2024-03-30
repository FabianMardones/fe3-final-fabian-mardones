import { useGlobalReduceStates } from "../../utils/GlobalContextReducer";
import "./Card.css";
import { Link } from "react-router-dom";


export function Card({ datos, isFavPage }) {

  const { state, dispatch } = useGlobalReduceStates();

  const isFavorite = state.favs.includes(datos.id);

  return (
    <div className="card-grid">
      <div className="card" key={datos.id}>
        <div className="imagen-dent">
          <img src="/images/doctor.jpg" alt="" />
          <Link to={`/detail/${datos.id}`} className={`name ${state.darkMode && "dark"}`}>
            {datos.name}
          </Link>
          <p className={`username ${state.darkMode && "dark"}`}>{datos.username}</p>
        </div>
        <div className="cont-btn">
          {isFavPage && isFavorite ? (
            <button className={`button-fav ${state.darkMode && "dark"}`}
            onClick={() => dispatch({type: "TOGGLE_FAVORITE", payload: datos.id})}>
              ❌
            </button>
          ): (
            <button
            className={`button-fav ${state.darkMode && "dark"}`}
            onClick={() => dispatch({type: "TOGGLE_FAVORITE", payload: datos.id})}
          >
            {isFavorite ? "❤️" : "⭐"}
          </button>
          )}
        </div>
      </div>
    </div>
  );
}
