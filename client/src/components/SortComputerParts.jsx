import 'antd/dist/antd.css';

import React, {Fragment} from 'react';
import {Button, Col, InputNumber, Row, Select, Space, Typography} from "antd";

const {Option} = Select;
const {Title, Text} = Typography;
const SortComputerParts = () => {


   return (
      <div style={{margin:"30px 0 "}}  >
         <form action="">
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
            <Button type={'primary'}>Search</Button>

            <Title style={{marginTop: '30px'}} level={4}>GPU Variables</Title>
            <Row>
               <Col md={12}>
                  <Space direction={'horizontal'}>
                     <Text>Power Lower Bound</Text>
                     <InputNumber id="power_lower_bound" type="number" value="0"/>
                  </Space>
               </Col>
               <Col md={12}>
                  <Space direction={'horizontal'}>Power Upper Bound
                     <InputNumber id="power_upper_bound" type="number" value="100"/>
                  </Space>
               </Col>
            </Row>
            <Row>
               <Col md={12}>
                  <Space direction={'horizontal'}>VRAM Lower Bound
                     <InputNumber id="vram_lower_bound" type="number" value="0"/>
                  </Space>
               </Col>
               <Col md={12}>
                  <Space direction={'horizontal'}>VRAM Upper Bound
                     <InputNumber id="vram_upper_bound" type="number" value="100"/>
                  </Space>
               </Col>
            </Row>
            <Row>
               <Col md={12}>
                  <Space direction={'horizontal'}>Memory Clock Lower Bound
                     <InputNumber id="memory_clock_lower_bound" type="number" value="0"/>
                  </Space>
               </Col>
               <Col md={12}>
                  <Space direction={'horizontal'}>Memory Clock Upper Bound
                     <InputNumber id="memory_clock_upper_bound" type="number" value="100"/>
                  </Space>
               </Col>
            </Row>

            <Title style={{marginTop: '30px'}} level={4}>CPU Variables</Title>
            <Row>
               <Col md={12}>
                  <Space direction={'horizontal'}>Cores Lower Bound
                     <InputNumber id="cores_lower_bound" type="number" value="0"/>
                  </Space>
               </Col>
               <Col md={12}>
                  <Space direction={'horizontal'}>Cores Upper Bound
                     <InputNumber id="cores_upper_bound" type="number" value="100"/>
                  </Space>
               </Col>
            </Row>
            <Row>
               <Col md={12}>
                  <Space direction={'horizontal'}>Clock Lower Bound
                     <InputNumber id="clock_lower_bound" type="number" value="0"/>
                  </Space>
               </Col>
               <Col md={12}>
                  <Space direction={'horizontal'}>Clock Upper Bound
                     <InputNumber id="clock_upper_bound" type="number" value="100"/>
                  </Space>
               </Col>
            </Row>

            <Title style={{marginTop: '30px'}} level={4}>RAM Variables</Title>
            <Row>
               <Col md={12}>
                  <Space direction={'horizontal'}>Clock Frequency Lower Bound
                     <InputNumber id="clock_frequency_lower_bound" type="number" value="0"/>
                  </Space>
               </Col>
               <Col md={12}>
                  <Space direction={'horizontal'}>Clock Frequency Upper Bound
                     <InputNumber id="clock_frequency_upper_bound" type="number" value="100"/>
                  </Space>
               </Col>
            </Row>
            <Row>
               <Col md={12}>
                  <Space direction={'horizontal'}>Capacity Lower Bound
                     <InputNumber id="capacity_lower_bound" type="number" value="0"/>
                  </Space>
               </Col>
               <Col md={12}>
                  <Space direction={'horizontal'}>Capacity Upper Bound
                     <InputNumber id="capacity_upper_bound" type="number" value="100"/>
                  </Space>
               </Col>
            </Row>
         </form>
      </div>
   )
}

export default SortComputerParts
