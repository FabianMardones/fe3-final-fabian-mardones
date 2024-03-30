import { Card } from "../components/card/Card"
import { useGlobalReduceStates } from "../utils/GlobalContextReducer"

export function Home(){

    const { state } = useGlobalReduceStates()
    console.log(state);

    return(
        <div className={`body ${state.darkMode && "dark"}`}>
        <h2 className={`title_home ${state.darkMode && "dark"}`}>Home</h2>
        <div className={`home ${state.darkMode && "dark"}`}>
            {
                state.dentist && state.dentist.map((dentist) => (
                    <Card key={dentist.id} datos={dentist}/>
                ))
            }
        </div>
        </div>
    )
}