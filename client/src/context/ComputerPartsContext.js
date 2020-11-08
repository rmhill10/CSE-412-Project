import React, {useState, createContext} from "react";

export const ComputerPartsContext = createContext();

export const ComputerPartsContextProvider = props => {
    const[computerPart, setComputerPart] = useState([])

    return(
        <ComputerPartsContext.Provider value={{computerPart, setComputerPart}}>
            {props.children}
        </ComputerPartsContext.Provider>
    )
}