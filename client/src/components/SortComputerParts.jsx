import React from 'react';


const SortComputerParts = () => {

    return (
        <div className="mb-4">
            <form action="">
                <div className="form-row">                   
                    <div className="col">
                        <select className="custom-select my-1 mr-sm-2">
                            <option disabled>Type</option>
                            <option value="1">GPU</option>
                            <option value="2">CPU</option>
                            <option value="3">RAM</option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="custom-select my-1 mr-sm-2">
                            <option disabled>Manufacturer</option>
                            <option value="1">INTEL</option>
                            <option value="2">AMD</option>
                            <option value="3">NVIDIA</option>
                            <option value="4">Gigabyte</option>
                            <option value="5">MSI</option>
                            <option value="6">Asus</option>
                            <option value="7">EVGA</option>
                            <option value="8">Zotac</option>
                            <option value="9">Crucial</option>
                            <option value="10">Samsung</option>
                            <option value="11">Corsair</option>
                        </select>
                    </div>
                    <button className="btn btn-primary">Sort</button>
                </div>
            </form>
        </div>
    )
}

export default SortComputerParts
