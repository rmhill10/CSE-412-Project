import 'antd/dist/antd.css';
import React, {useState} from 'react';

import {Button, Select, Slider, Typography} from "antd";
const {Option} = Select;
const {Title, Text} = Typography;

const SortComputerParts = () => {

   // This function will run when the user presses search
   const runQuery = e => {
      console.log("Run Query");
   }

   // All of these will get updated automatically when the user
   // uses the slider.
   const [filterData, setFilterData] = useState({
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

   // Labels each slider at the given points.
   // Ranges will need to change but i just used [0, 100] as the default
   const gpuPowermarks = {
      0: '0',
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

   // Every time a slider is edited, this function is called
   // and the corresponding hook (variable) gets changed
   const sliderOnChange = async (value, type) => {
      setFilterData({...filterData, [type + "lower_bound"]: value[0], [type + "upper_bound"]: value[1]});
   }

   return (
      <div style={{margin: "30px 0 "}}>
         <Select style={{width: 200}} defaultValue={'Type'}>
            <Option value="1">All</Option>
            <Option value="2">GPU</Option>
            <Option value="3">CPU</Option>
            <Option value="4">RAM</Option>
         </Select>
         <Select style={{width: 200}} defaultValue={'Manufacturer'}>
            <Option value="1">All</Option>
            <Option value="2">INTEL</Option>
            <Option value="3">AMD</Option>
            <Option value="4">NVIDIA</Option>
            <Option value="5">Gigabyte</Option>
            <Option value="6">MSI</Option>
            <Option value="7">Asus</Option>
            <Option value="8">EVGA</Option>
            <Option value="9">Zotac</Option>
            <Option value="10">Crucial</Option>
            <Option value="11">Samsung</Option>
            <Option value="12">Corsair</Option>
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
