import { useEffect, useState } from "react";
import { DentistInfo } from "../components/DentistInfo";
import { useGlobalReduceStates } from "../utils/GlobalContextReducer";
import { useParams } from "react-router-dom";

export function Detail() {
  const { state } = useGlobalReduceStates();
  const [dentist, setDentist] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function fetchDentist() {
    
      const fetchedDentist = await state.getDentistById(params.dentistId);
      setDentist(fetchedDentist);
    }
    fetchDentist();
  }, [state.getDentistById, params.dentistId])

  return (
    <div className={`contacto_contenedor ${state.darkMode && "dark"}`}>
      {dentist && (
        <DentistInfo dentist={dentist} />
      )}
    </div>
  );
}
