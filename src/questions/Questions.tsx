
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons";

import {Input} from "@heroui/react";
import { Link } from "react-router-dom";;
import { motion } from "framer-motion";
import {Select, SelectItem} from "@heroui/react";
import React from "react";
import Navbar from "../Home/Navbar"
import {Textarea} from "@heroui/react";

const Questions = () => {
  const animals = [
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
    <div>
         <Navbar/>
        <div className=" h-screen flex-center">
          <div className="md:w-1/2 w-full h-auto p-8 rounded-lg background-color flex-center flex-col gap-y-2">
        
        
                    {/* name */}
                    <Input
                            className="md:w-[90%] w-full  text-white relative light-bacground rounded-md"
                            placeholder="ادخل الاسم"
                            type="text"
                            variant="bordered"
                            startContent={
                                <div className=" absolute cursor-pointer left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                   <FontAwesomeIcon icon={faUser} className="light-color" />
                                </div>
                            }
                        />


                        {/* select  */}
                        <Select
                              className="md:w-[90%] w-full  text-white relative light-bacground rounded-md"
                              items={animals}
                              label="المادة"
                              placeholder="اختر اسم المادة"
                            >
                              {(animal) => <SelectItem>{animal.label}</SelectItem>}
                        </Select>
        
                 {/* question */}
                 <Textarea className="md:w-[90%] w-full  text-white relative light-bacground rounded-md" label="سؤال" placeholder="اكتب نص السؤال هنا" />

        
        
        
                    {/* sumbmit button */}
                    <div className="md:w-[90%] w-full flex-center flex-col md:flex-row gap-y-2 md:gap-x-4">
                           {/* زر تسجيل الدخول */}
                          <motion.div
                              whileTap={{ scale: 0.9 }}
                              transition={{ duration: 0.2 }}
                              className="w-full md:w-1/2"
                            >
                              <Link
                                to={"/Community"}
                                className="rounded-md font-bold text-lg flex-center w-full background-primary p-2"
                              >
                                 ارسال
                              </Link>
                            </motion.div>
        
                            {/* زر إنشاء حساب */}
                                <motion.div
                                  whileTap={{ scale: 0.9 }}
                                  transition={{ duration: 0.2 }}
                                  className="w-full md:w-1/2"
                                >
                                    <Link
                                      to={"/Login"}
                                      className="rounded-md font-bold text-lg flex-center w-full ligth-border p-2 text-white"
                                    >
                                 تسجيل الدخول
                              </Link>
                         </motion.div>
                    </div>
        </div>
    </div>
  </div>
  );
}

export default Questions