

import React,{useState} from "react";

import Navbar from "../Home/Navbar"
import CardCourse from "./CardCourse"
import { useDisclosure } from "@heroui/react";
import Moduel from "./Moduel";
import {Select, SelectItem} from "@heroui/react";
import {Tabs, Tab, Card, CardBody} from "@heroui/react";

// import {}


const Courese = () => {
  const courese  =[]
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const materials = [
    {key: "arabic", label: "عربي"},
    {key: "english", label: "انجليزي"},
    {key: "", label: "علوم"},
    {key: "lion", label: "Lion"},
    {key: "tiger", label: "Tiger"},
    {key: "giraffe", label: "Giraffe"},
    {key: "dolphin", label: "Dolphin"},
    {key: "penguin", label: "Penguin"},
    {key: "zebra", label: "Zebra"},
    {key: "shark", label: "Shark"},
    {key: "whale", label: "Whale"},
    {key: "otter", label: "Otter"},
    {key: "crocodile", label: "Crocodile"},
];
  



  return (
    <div className="">
        <Navbar/>
        <div className="grid grid-cols-1 mt-16 md:mt-28 overflow-y-auto sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 container mx-auto  p-2 gap-4">
            {/* فرز حسب */}
          <div className="container mx-auto p-4   flex-between  md:p-2 md:flex hidden col-span-1 lg:col-span-4">
            <div className="md:w-1/4 w-full ">
                 {/* select  */}
                   <Select
                        className=" w-full  text-white relative light-bacground rounded-md"
                        items={materials}
                        label="المادة"
                        color="primary"
                       
                        placeholder="  اختر اسم المادة او المقرر"
                    >
                    {(material) => 

                        <SelectItem className="light-bacground">{material.label}</SelectItem>
                       }
                  </Select>
            </div>
            <div className="md:w-1/4 w-full">
                   {/* select  */}
                      <Select
                        className=" w-full text-white relative light-bacground rounded-md"
                        items={materials}
                        label="السعر"
                        color="primary"
                        placeholder="حدد السعر"
                    >
                    {(material) => <SelectItem>{material.label}</SelectItem>}
                  </Select>
            </div>
            <div className="md:w-1/4 w-full">
                   {/* select  */}
                   <Select
                        className=" w-full text-white relative  light-bacground  rounded-md"
                        items={materials}
                        label="السعر"
                        color="primary"
                        placeholder="اختر اسم المادة"
                    >
                    {(material) => <SelectItem>{material.label}</SelectItem>}
                  </Select>
            </div>
          </div>

        

          {/* end */}
           
            <CardCourse  onOpen={onOpen}/>
            
            <CardCourse  onOpen={onOpen}/>
            <CardCourse  onOpen={onOpen}/>
            <CardCourse  onOpen={onOpen}/>
         
    

            <Moduel isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
    </div>
  )
}

export default Courese