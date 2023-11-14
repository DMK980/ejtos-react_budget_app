import React,{useContext} from "react";
import {AppContext} from "../context/AppContext"


const Currency_dropdown = ()=>{
    const {currency} = useContext(AppContext);
    const Currency_list = [
        ["$","Dollar"],
        ["£","Pound"],
        ["€","Euro"],
        ["₹","Ruppee"]
    ]
    return (
        <div className="alert alert-secondary">
            <select className="custom-select">
                <option defaultValue>Currency ({currency})</option>
                {Currency_list.map((cur,index)=>(<option key = {index}value={cur[0]}>{cur[0]} {cur[1]}</option>))}
            </select>
        </div>
    )
}

export default Currency_dropdown;