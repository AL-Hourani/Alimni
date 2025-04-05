

import React from "react";
import Navbar from "../Home/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {Input} from "@heroui/react";
import { Link } from "react-router-dom";;
import { motion } from "framer-motion";



const Payment = () => {
  return (
    <div className="">
        <Navbar/>
        <div className=" h-auto flex-center flex-col mt-28">
        <div className="md:w-1/2 w-full h-auto p-8 rounded-lg background-color flex-center flex-col gap-y-2">
        
        
        {/* phone */}
        <Input
                className="md:w-[90%] w-full  text-white relative light-bacground rounded-md"
                placeholder="ادخل رقم الهاتف"
                type="text"
                variant="bordered"
                startContent={
                    <div className=" absolute cursor-pointer left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                       <FontAwesomeIcon icon={faPhone} className="light-color" />
                    </div>
                }
            />
        {/* phone */}
        <Input
                className="md:w-[90%] w-full  text-white relative light-bacground rounded-md"
                placeholder="اعادة ادخال رقم الهاتف"
                type="text"
                variant="bordered"
                startContent={
                    <div className=" absolute cursor-pointer left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                       <FontAwesomeIcon icon={faPhone} className="light-color" />
                    </div>
                }
            />


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
                      شحن الحساب
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
                      التراجع
                  </Link>
             </motion.div>
        </div>

</div>
{/*  */}
                    {/* end */}
</div>
</div>
  )
}

export default Payment