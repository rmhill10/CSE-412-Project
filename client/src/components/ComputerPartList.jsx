import React, {useEffect, useContext} from 'react';
import ComputerPartFinder from "../apis/ComputerPartFinder";
import {ComputerPartsContext} from '../context/ComputerPartsContext';
import {Table, Typography} from "antd";
import {v4 as uuid} from 'uuid'

const {Text, Link} = Typography;
const ComputerPartList = (props) => {

   const {computerPart, setComputerPart} = useContext(ComputerPartsContext);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await ComputerPartFinder.get("/")
            setComputerPart(response.data.data.computerPart);
            console.log(response);
         } catch (err) {
         }
      }

      fetchData();
   }, [])

   const columns = [
      {
         title: "Name",
         dataIndex: "name",
         key: "name",
         width: 300
      },
      {
         title: "Manufacturer",
         dataIndex: "manufacturer",
         key: "manufacturer",
         filters: [
            {
               text: "INTEL",
               value: "INTEL"
            },
            {
               text: "AMD",
               value: "AMD"
            },
            {
               text: "NVIDIA",
               value: "NVIDIA"
            },
            {
               text: "Gigabyte",
               value: "Gigabyte"
            },
            {
               text: "MSI",
               value: "MSI"
            },
            {
               text: "Asus",
               value: "Asus"
            },
            {
               text: "EVGA",
               value: "EVGA"
            },
            {
               text: "Zotac",
               value: "Zotac"
            },
            {
               text: "Crucial",
               value: "Crucial"
            },
            {
               text: "Samsung",
               value: "Samsung"
            },
            {
               text: "Corsair",
               value: "Corsair"
            },
         ],
         onFilter: (value, record) => record.manufacturer === value,

         width: 125

      },
      {
         title: "Type",
         dataIndex: "type",
         key: "type",
         filters: [
            {
               text: "GPU",
               value: "GPU"
            },
            {
               text: "CPU",
               value: "CPU"
            },
            {
               text: "RAM",
               value: "RAM"
            },
         ],
         onFilter: (value, record) => record.type === value,
         width: 100

      },
      {
         title: "Price ($)",
         dataIndex: "price",
         key: "price",
         sorter: (a, b) => a.price - b.price,
         width: 150

      },
      {
         title: "Website",
         dataIndex: "weburl",
         key: "weburl",
         render: weburl => <Link>{weburl}</Link>,
         width: 200
      },
   ]

   const data = computerPart && computerPart.map(part => {
         if (part.itemid < 200) {
            return (
               {
                  key: uuid(),
                  name: part.itemname,
                  manufacturer: part.name,
                  type: "GPU",
                  price: part.price,
                  weburl: part.weburl
               }
            )
         } else if (part.itemid < 300) {
            return (
               {
                  key: uuid(),
                  name: part.itemname,
                  manufacturer: part.name,
                  type: "CPU",
                  price: part.price,
                  weburl: part.weburl
               }
            )
         } else {
            return (
               {
                  key: uuid(),
                  name: part.itemname,
                  manufacturer: part.name,
                  type: "RAM",
                  price: part.price,
                  weburl: part.weburl
               }
            )
         }

      }
   )
   return (<Table scroll={{y: 600}} columns={columns} dataSource={data}/>)
}

export default ComputerPartList
