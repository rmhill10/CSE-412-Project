import React, {useEffect, useContext} from 'react';
import ComputerPartFinder from "../apis/ComputerPartFinder";
import { ComputerPartsContext } from '../context/ComputerPartsContext';

const ComputerPartList = (props) => {

    const{computerPart, setComputerPart} = useContext(ComputerPartsContext);

    useEffect(() => {
        const fetchData = async () =>{
            try
            {
                const response = await ComputerPartFinder.get("/")
                setComputerPart(response.data.data.computerPart);
                console.log(response);
            } catch(err){}
        }

        fetchData();
    },[])

    return (
        <div className="list-group">
            <table className="table table-hover dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Price</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {computerPart && computerPart.map(part => {
                        if(part.itemid < 200)
                        {
                            return(
                                <tr key={part.itemid}>
                                <td>{part.itemname}</td>
                                <td>GPU</td>                           
                                <td>Price</td>
                                <td>Website</td>
                                </tr>
                            )
                        }
                        else if (part.itemid < 300)
                        {
                            return(
                                <tr key={part.itemid}>
                                <td>{part.itemname}</td>
                                <td>CPU</td>                           
                                <td>Price</td>
                                <td>Website</td>
                                </tr>
                            )
                        }
                        else
                        {
                            return(
                                <tr key={part.itemid}>
                                <td>{part.itemname}</td>
                                <td>RAM</td>                           
                                <td>Price</td>
                                <td>Website</td>
                                </tr>
                            )
                        }
                                    
                    })}
                    {/* <tr>
                        <td>RTX 2080 TI TEST VERSION</td>
                        <td>GPU</td>
                        <td>$10000</td>
                        <td>amazon.com</td>
                    </tr>
                    <tr>
                        <td>RTX 2080 TI TEST VERSION</td>
                        <td>GPU</td>
                        <td>$10000</td>
                        <td>amazon.com</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default ComputerPartList
