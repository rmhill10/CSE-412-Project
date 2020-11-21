import 'antd/dist/antd.css';
import React, {useContext, useState} from 'react';

import {Button, Select, Slider, Typography} from "antd";
import {
   ALL,
   AMD,
   Asus, Corsair,
   CPU,
   Crucial,
   EVGA,
   Gigabyte,
   GPU,
   INTEL,
   MSI,
   NVIDIA,
   RAM,
   Samsung,
   Zotac
} from "../utils/constants";
import ComputerPartFinder from "../apis/ComputerPartFinder";
import {ComputerPartsContext} from "../context/ComputerPartsContext";

const {Option} = Select;
const {Title, Text} = Typography;


const SortComputerParts = () => {
   const {computerPart, setComputerPart} = useContext(ComputerPartsContext);


   // This function will run when the user presses search.
   // So here is where we'll make the API call using the
   // hooks' state variables
   const runQuery = async e => {
      try {
         // Test Query
         const response = await ComputerPartFinder.get("/ram/0/50000/0/50000");
         setComputerPart(response.data.data.computerPart);
      } catch (err) {
      }
   }

   // For the type drop-down filter. The table can actually do this filter
   // on its own on the frontend. Not sure if that's allowed tho
   const [type, setType] = useState('All');

   const typeOnChange = type => {
      setType(type);
   }

   // Same logic as above
   const [manufacturer, setManufacturer] = useState(ALL);

   const manufacturerOnChange = manufacturer => {
      setManufacturer(manufacturer);
   }

   // All of these will get updated automatically when the user
   // uses the slider. 'bounds' is an object, so retrieve these using bounds.power_lower_bound, etc
   const [bounds, setBounds] = useState({
      power_lower_bound: 0,
      power_upper_bound: 50,
      vram_lower_bound: 0,
      vram_upper_bound: 50,
      memory_clock_lower_bound: 0,
      memory_clock_upper_bound: 50,
      cores_lower_bound: 0,
      cores_upper_bound: 50,
      clock_lower_bound: 0,
      clock_upper_bound: 50,
      clock_frequency_lower_bound: 0,
      clock_frequency_upper_bound: 50,
      capacity_lower_bound: 0,
      capacity_upper_bound: 50
   })

   // Every time a slider is edited, this function is called
   // and the corresponding state variable gets changed
   const sliderOnChange = async (value, type) => {
      setBounds({...bounds, [type + "lower_bound"]: value[0], [type + "upper_bound"]: value[1]});
   }

   // Labels each slider at the given points.
   // Ranges will need to change but i just used [0, 100] as the default
   const gpuPowermarks = {
      0: 0,
      50: '50',
      100: '100'
   }
   const gpuVramMarks = {
      0: '0',
      50: '50',
      100: '100'
   }
   const gpuMemoryClockMarks = {
      0: '0',
      50: '50',
      100: '100'
   }
   const cpuCoresMarks = {
      0: '0',
      50: '50',
      100: '100'
   }
   const cpuClockMarks = {
      0: '0',
      50: '50',
      100: '100'
   }
   const ramClockFrequencyMarks = {
      0: '0',
      50: '50',
      100: '100'
   }
   const ramCapacityMarks = {
      0: '0',
      50: '50',
      100: '100'
   }


   return (


      <div style={{margin: "30px 0 "}}>
         <Select onChange={chosenType => typeOnChange(chosenType)}
                 style={{width: 200}} defaultValue={'Type'}>
            <Option value={ALL}>All</Option>
            <Option value={GPU}>GPU</Option>
            <Option value={CPU}>CPU</Option>
            <Option value={RAM}>RAM</Option>
         </Select>
         <Select onChange={chosenManufacturer => manufacturerOnChange(chosenManufacturer)}
                 style={{width: 200}} defaultValue={'Manufacturer'}>
            <Option value={ALL}>All</Option>
            <Option value={INTEL}>INTEL</Option>
            <Option value={AMD}>AMD</Option>
            <Option value={NVIDIA}>NVIDIA</Option>
            <Option value={Gigabyte}>Gigabyte</Option>
            <Option value={MSI}>MSI</Option>
            <Option value={Asus}>Asus</Option>
            <Option value={EVGA}>EVGA</Option>
            <Option value={Zotac}>Zotac</Option>
            <Option value={Crucial}>Crucial</Option>
            <Option value={Samsung}>Samsung</Option>
            <Option value={Corsair}>Corsair</Option>
         </Select>
         <Button onClick={(e => runQuery(e))} type={'primary'}>Search</Button>

         <Title style={{margin: '30px 0 20px 0'}} level={4}>GPU Variables</Title>
         <div style={{margin: '0 0 40px 0'}}>
            <Text>Select Power Range</Text>
            <Slider min={0} max={100} marks={gpuPowermarks} onChange={value => sliderOnChange(value, "power_")} range
                    defaultValue={[0, 50]}/>
         </div>
         <div style={{margin: '0 0 40px 0'}}><Text>Select VRAM Range</Text>
            <Slider marks={gpuVramMarks} onChange={value => sliderOnChange(value, "vram_")} range
                    defaultValue={[0, 50]}/>
         </div>
         <div style={{margin: '0 0 40px 0'}}><Text>Select Memory Clock Range</Text>
            <Slider marks={gpuMemoryClockMarks} onChange={value => sliderOnChange(value, "memory_clock_")} range
                    defaultValue={[0, 50]}/>
         </div>


         <Title style={{margin: '30px 0 20px 0'}} level={4}>CPU Variables</Title>
         <div style={{margin: '0 0 40px 0'}}>
            <Text style={{marginTop: '10px'}}>Select Cores Range</Text>
            <Slider marks={cpuCoresMarks} onChange={value => sliderOnChange(value, "cores_")} range
                    defaultValue={[0, 50]}/>
         </div>
         <div style={{margin: '0 0 40px 0'}}>
            <Text style={{marginTop: '10px'}}>Select Clock Range</Text>
            <Slider marks={cpuClockMarks} onChange={value => sliderOnChange(value, "clock_")} range
                    defaultValue={[0, 50]}/>
         </div>


         <Title style={{margin: '30px 0 20px 0'}} level={4}>RAM Variables</Title>
         <div style={{margin: '0 0 40px 0'}}>
            <Text style={{marginTop: '10px'}}>Select Clock Frequency Range</Text>
            <Slider marks={ramClockFrequencyMarks} onChange={value => sliderOnChange(value, "clock_frequency_")} range
                    defaultValue={[0, 50]}/>
         </div>
         <div style={{margin: '0 0 40px 0'}}>
            <Text style={{marginTop: '10px'}}>Select Capacity Range</Text>
            <Slider marks={ramCapacityMarks} onChange={value => sliderOnChange(value, "capacity_")} range
                    defaultValue={[0, 50]}/>
         </div>
      </div>
   )
}

export default SortComputerParts
