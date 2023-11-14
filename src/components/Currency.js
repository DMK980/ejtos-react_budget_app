import React,{/*useContext*/} from "react";
//import AppContext from "./context/AppContext";

const Currency_dropdown = ()=>{
    //const {currency,dispatch} = useContext(AppContext);
    const Currency_list = {
        "$": "Dollar",
        "£": "Pound",
        "€": "Euro",
        "₹":"Ruppee"
    }
    return (
        <div>
            <select>
                {Currency_list.map((cur)=>(<option value={cur}>{cur} {cur.value}</option>))}
            </select>
        </div>
    )
}

export default Currency_dropdown;