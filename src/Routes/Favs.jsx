import { Card } from "../components/card/Card";
import { useGlobalReduceStates } from "../utils/GlobalContextReducer";

export function Favs() {
  const { state } = useGlobalReduceStates();
  const favoriteDentists = state.dentist.filter((dentist) => state.favs.includes(dentist.id));

  return (
    <div className={`favs_cont ${state.darkMode && 'dark'}`}>
      <h2 style={{textAlign:'center', margin:'30px'}}>Dentist Favs</h2>
      <div className="home">
        {favoriteDentists.length === 0 ? (
          <p className={`text_fav ${state.darkMode && 'dark'}`}>There's no Dentist available to show</p>
        ) : (
          favoriteDentists.map((dentist) => (
            <Card key={dentist.id} datos={dentist} isFavPage={true}/>
          ))
        )}
      </div>
    </div>
  );
}
