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
         // const response = await ComputerPartFinder.get(`/ram/${bounds.clock_frequency_lower_bound}/${bounds.clock_frequency_upper_bound}/${bounds.capacity_lower_bound}/${bounds.capacity_upper_bound}`);
         // setComputerPart((response.data.data.computerPart));

         // Do this to merge different queries
         
         if(type==GPU)
         {
            const response = await ComputerPartFinder.get(`/gpus/${bounds.power_lower_bound}/${bounds.power_upper_bound}/${bounds.vram_lower_bound}/${bounds.vram_upper_bound}/${bounds.memory_clock_lower_bound}/${bounds.memory_clock_upper_bound}`);
            setComputerPart((response.data.data.computerPart));
         }
         else if(type==CPU)
         {
            const response = await ComputerPartFinder.get(`/cpus/${bounds.cores_lower_bound}/${bounds.cores_upper_bound}/${bounds.clock_lower_bound}/${bounds.clock_upper_bound}`);
            setComputerPart((response.data.data.computerPart));
         }
         else if(type==RAM)
         {
            const response = await ComputerPartFinder.get(`/ram/${bounds.clock_frequency_lower_bound}/${bounds.clock_frequency_upper_bound}/${bounds.capacity_lower_bound}/${bounds.capacity_upper_bound}`);
            setComputerPart((response.data.data.computerPart));
         }
         else
         {
            const response = await ComputerPartFinder.get(`/ram/${bounds.clock_frequency_lower_bound}/${bounds.clock_frequency_upper_bound}/${bounds.capacity_lower_bound}/${bounds.capacity_upper_bound}`);
            const response2 = await ComputerPartFinder.get(`/gpus/${bounds.power_lower_bound}/${bounds.power_upper_bound}/${bounds.vram_lower_bound}/${bounds.vram_upper_bound}/${bounds.memory_clock_lower_bound}/${bounds.memory_clock_upper_bound}`);
            const response3 = await ComputerPartFinder.get(`/cpus/${bounds.cores_lower_bound}/${bounds.cores_upper_bound}/${bounds.clock_lower_bound}/${bounds.clock_upper_bound}`);
            const mergedArray = response.data.data.computerPart.concat(
               response2.data.data.computerPart, response3.data.data.computerPart);
            setComputerPart(mergedArray);
         }
         
      } catch (err) {
      }
   }

   // For the type drop-down filter. The table can actually do this filter
   // on its own on the frontend. Not sure if that's allowed tho
   const [type, setType] = useState(ALL);

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
      power_lower_bound: 15,
      power_upper_bound: 195,
      vram_lower_bound: 0.5,
      vram_upper_bound: 16,
      memory_clock_lower_bound: 600,
      memory_clock_upper_bound: 1125,
      cores_lower_bound: 4,
      cores_upper_bound: 34,
      clock_lower_bound: 2.8,
      clock_upper_bound: 3.5,
      clock_frequency_lower_bound: 800,
      clock_frequency_upper_bound: 2400,
      capacity_lower_bound: 1,
      capacity_upper_bound: 16
   })

   // Every time a slider is edited, this function is called
   // and the corresponding state variable gets changed
   const sliderOnChange = async (value, type) => {
      setBounds({...bounds, [type + "lower_bound"]: value[0], [type + "upper_bound"]: value[1]});
   }

   // Labels each slider at the given points.
   const gpuPowermarks = {
      15: '15',
      195: '195',
      374: '374'
   }
   const gpuVramMarks = {
      0.5: '0.5',
      16: '16',
      32: '32'
   }
   const gpuMemoryClockMarks = {
      600: '600',
      1125: '1125',
      1650: '1650'
   }
   const cpuCoresMarks = {
      4: '4',
      34: '34',
      64: '64'
   }
   const cpuClockMarks = {
      2.8: '2.8',
      3.5: '3.5',
      4.1: '4.1'
   }
   const ramClockFrequencyMarks = {
      800: '800',
      2400: '2400',
      4000: '4000'
   }
   const ramCapacityMarks = {
      1: '1',
      8: '8',
      16: '16',
      32: '32'
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
            <Text>Power (W)</Text>
            <Slider tipFormatter={value => `${value} W`} step={5} min={15} max={374} marks={gpuPowermarks}
                    onChange={value => sliderOnChange(value, "power_")} range
                    defaultValue={[15, 195]}/>
         </div>
         <div style={{margin: '0 0 40px 0'}}>
            <Text>VRAM (GB)</Text>
            <Slider tipFormatter={value => `${value} GB`} step={0.5} min={0.5} max={32} marks={gpuVramMarks}
                    onChange={value => sliderOnChange(value, "vram_")} range
                    defaultValue={[0.5, 16]}/>
         </div>
         <div style={{margin: '0 0 40px 0'}}>
            <Text>Memory Clock (MHz)</Text>
            <Slider tipFormatter={value => `${value} MHz`} step={20} min={600} max={1650} marks={gpuMemoryClockMarks}
                    onChange={value => sliderOnChange(value, "memory_clock_")} range
                    defaultValue={[600, 1125]}/>
         </div>


         <Title style={{margin: '30px 0 20px 0'}} level={4}>CPU Variables</Title>
         <div style={{margin: '0 0 40px 0'}}>
            <Text style={{marginTop: '10px'}}>Cores</Text>
            <Slider tipFormatter={value => `${value} cores`} min={4} max={64} step={2} marks={cpuCoresMarks} onChange={value => sliderOnChange(value, "cores_")}
                    range
                    defaultValue={[4, 34]}/>
         </div>
         <div style={{margin: '0 0 40px 0'}}>
            <Text style={{marginTop: '10px'}}>Clock (GHz)</Text>
            <Slider tipFormatter={value => `${value} GHz`} step={0.1} min={2.8} max={4.1} marks={cpuClockMarks}
                    onChange={value => sliderOnChange(value, "clock_")} range
                    defaultValue={[2.8, 3.5]}/>
         </div>


         <Title style={{margin: '30px 0 20px 0'}} level={4}>RAM Variables</Title>
         <div style={{margin: '0 0 40px 0'}}>
            <Text style={{marginTop: '10px'}}>Clock Frequency (GHz)</Text>
            <Slider tipFormatter={value => `${value} GHz`} step={50} min={800} max={4000} marks={ramClockFrequencyMarks}
                    onChange={value => sliderOnChange(value, "clock_frequency_")} range
                    defaultValue={[800, 2400]}/>
         </div>
         <div style={{margin: '0 0 40px 0'}}>
            <Text style={{marginTop: '10px'}}>Capacity (GB)</Text>
            <Slider tipFormatter={value => `${value} GB`}  min={1} max={32} marks={ramCapacityMarks} onChange={value => sliderOnChange(value, "capacity_")}
                    range
                    defaultValue={[1, 16]}/>
         </div>
      </div>
   )
}

export default SortComputerParts
