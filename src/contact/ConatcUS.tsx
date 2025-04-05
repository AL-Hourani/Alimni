
import React,{useState , useMemo} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import {Input} from "@heroui/react";
import { motion } from "framer-motion";
import {Textarea} from "@heroui/react";



const ConatcUS = () => {
      const [value, setValue] = useState("");
      const validateEmail = (value: string): RegExpMatchArray | null => 
        value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
        
        const isInvalid = useMemo((): boolean => {
          if (value === "") return false;
          
          return validateEmail(value) ? false : true;
        }, [value]);
        
  return (
    <div className="text-white h-[100vh] relative">
      <div className="top-0 w-full md:p-8 p-4 absolute left-0 flex-between">
        <Link to={"/Login"} className="flex-center">
            <FontAwesomeIcon icon={faArrowRight} className="text-xl primary-color "/>
        </Link>
        <div className="flex-center gap-x-4 ">
            <FontAwesomeIcon icon={faGraduationCap} className="text-3xl primary-color "/>
            <h2 className="text-white text-3xl font-bold leading-relaxed  ">علّمني</h2>
        </div>
      </div>
        <div className="flex-center flex-col gap-y-6 h-screen">
                <div className="flex-center gap-x-4">
                      <FontAwesomeIcon icon={faComment} className=" text-3xl primary-color" />
                      <h1 className="text-white text-2xl font-bold leading-relaxed  ">تواصل معنا</h1>
                  </div>
                  <div className="flex-center">
                      <p className="light-color">لأي استفسار، لا تتردد في التواصل معنا.</p>
                  </div>
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

                        {/* ثةشهم */}
                                 {/* email */}
                                 <Input
                                        className="md:w-[90%] w-full text-white relative light-bacground rounded-md"
                                        color={isInvalid ? "danger" : "success"}
                                        errorMessage="الرجاء ادخال ايميل صحيح"
                                        placeholder="ادخل البريد الالكتروني"
                                        isInvalid={isInvalid}
                                        type="email"
                                        value={value}
                                        variant="bordered"
                                        onValueChange={setValue}
                                        startContent={
                                            <div className="absolute left-3 top-1/2 light-bacground transform -translate-y-1/2 pointer-events-none">
                                               <FontAwesomeIcon icon={faEnvelope} className="light-color" />
                                            </div>
                                          }
                                    />

        
                 {/* question */}
                 <Textarea className="md:w-[90%] w-full  text-white relative light-bacground rounded-md" label="" placeholder="اكتب نص المشكلة" />

        
        
        
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
                                   الرجوع
                              </Link>
                         </motion.div>
                    </div>
        </div>
    </div>
  </div>
  )
}

export default ConatcUS