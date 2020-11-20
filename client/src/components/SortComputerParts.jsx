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
                    <button className="btn btn-primary">Search</button>
                </div>
                &nbsp;
                <h2>GPU Variables</h2>
                <div className="form-row">
                    <h5>Power Lower Bound</h5>&nbsp;
                    <div>
                        <input id="power_lower_bound" type="number" value="0"></input>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <h5>Power Upper Bound</h5>&nbsp;
                    <div>
                        <input id="power_upper_bound" type="number" value="100"></input>
                    </div>
                </div>
                &nbsp;
                <div className="form-row">
                    <h5>VRAM Lower Bound</h5>&nbsp;
                    <div>
                        <input id="vram_lower_bound" type="number" value="0"></input>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <h5>VRAM Upper Bound</h5>&nbsp;
                    <div>
                        <input id="vram_upper_bound" type="number" value="100"></input>
                    </div>
                </div>
                &nbsp;
                <div className="form-row">
                    <h5>Memory Clock Lower Bound</h5>&nbsp;
                    <div>
                        <input id="memory_clock_lower_bound" type="number" value="0"></input>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <h5>Memory Clock Upper Bound</h5>&nbsp;
                    <div>
                        <input id="memory_clock_upper_bound" type="number" value="100"></input>
                    </div>
                </div>
                &nbsp;
                <h2>CPU Variables</h2>
                &nbsp;
                <div className="form-row">
                    <h5>Cores Lower Bound</h5>&nbsp;
                    <div>
                        <input id="cores_lower_bound" type="number" value="0"></input>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <h5>Cores Upper Bound</h5>&nbsp;
                    <div>
                        <input id="cores_upper_bound" type="number" value="100"></input>
                    </div>
                </div>
                &nbsp;
                <div className="form-row">
                    <h5>Clock Lower Bound</h5>&nbsp;
                    <div>
                        <input id="clock_lower_bound" type="number" value="0"></input>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <h5>Clock Upper Bound</h5>&nbsp;
                    <div>
                        <input id="clock_upper_bound" type="number" value="100"></input>
                    </div>
                </div>&nbsp;
                <h2>RAM Variables</h2>
                &nbsp;
                <div className="form-row">
                    <h5>Clock Frequency Lower Bound</h5>&nbsp;
                    <div>
                        <input id="clock_frequency_lower_bound" type="number" value="0"></input>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                    <h5>Clock Frequency Upper Bound</h5>&nbsp;
                    <div>
                        <input id="clock_frequency_upper_bound" type="number" value="100"></input>
                    </div>
                </div>
                &nbsp;
                <div className="form-row">
                    <h5>Capacity Lower Bound</h5>&nbsp;
                    <div>
                        <input id="capacity_lower_bound" type="number" value="0"></input>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <h5>Capacity Upper Bound</h5>&nbsp;
                    <div>
                        <input id="capacity_upper_bound" type="number" value="100"></input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SortComputerParts
