import {useGlobalReduceStates} from "../utils/GlobalContextReducer"

export function DentistInfo({dentist}) {

    const {name, email, phone, website, id} = dentist
    const {state} =useGlobalReduceStates()
  return (
    <div className={`detail-dentist ${state.darkMode && "dark"}`}>
        <h2>Detail Dentist {id}</h2>
      <table>
        <tbody>
          <tr>
            <th className={`${state.darkMode && "dark"}`}>Name</th>
            <th className={`${state.darkMode && "dark"}`}>Email</th>
            <th className={`${state.darkMode && "dark"}`}>Phone</th>
            <th className={`${state.darkMode && "dark"}`}>Website</th>
          </tr>
          <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
