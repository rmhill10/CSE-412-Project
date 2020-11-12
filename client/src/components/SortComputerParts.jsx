import React from 'react';


const SortComputerParts = () => {

    return (
        <div className="mb-4">
            <form action="">
                <div className="form-row">                   
                    <div className="col">
                        <select className="custom-select my-1 mr-sm-2">
                            <option disabled>Type</option>
                            <option value="1">All</option>
                            <option value="2">GPU</option>
                            <option value="3">CPU</option>
                            <option value="4">RAM</option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="custom-select my-1 mr-sm-2">
                            <option disabled>Manufacturer</option>
                            <option value="1">All</option>
                            <option value="2">INTEL</option>
                            <option value="3">AMD</option>
                            <option value="4">NVIDIA</option>
                            <option value="5">Gigabyte</option>
                            <option value="6">MSI</option>
                            <option value="7">Asus</option>
                            <option value="8">EVGA</option>
                            <option value="9">Zotac</option>
                            <option value="10">Crucial</option>
                            <option value="11">Samsung</option>
                            <option value="12">Corsair</option>
                        </select>
                    </div>
                    <button className="btn btn-primary">Sort</button>
                </div>
            </form>
        </div>
    )
}

export default SortComputerParts
