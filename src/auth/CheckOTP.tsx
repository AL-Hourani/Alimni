





import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {InputOtp} from "@heroui/react";
import { Link } from "react-router-dom";
import { useState } from "react";


const CheckOTP = () => {

  const [value, setValue] = useState("");


  return (
    <div className="flex-center p-4 md:p-0 flex-col gap-y-4 md:gap-y-8 h-[100vh] relative">
         <div className="flex-center gap-x-4 h-16 absolute  right-1/2 translate-x-1/2 md:translate-x-0 md:right-10 top-5 md:top-10">
            <FontAwesomeIcon icon={faGraduationCap} className="text-3xl primary-color "/>
            <h2 className="text-white text-3xl font-bold leading-relaxed  ">علّمني</h2>
         </div>
         

         <div className="flex-center gap-x-4 h-16 absolute bottom-10 left-4 md:left-10 cursor-pointer">
            <FontAwesomeIcon icon={faPhone} className="warning-color"/>
            <h2 className="text-white text-md font-bold leading-relaxed  ">تواصل معنا</h2>
         </div>

         <div className="flex-center gap-x-4">
            <FontAwesomeIcon icon={faCheck} className=" text-2xl primary-color" />
            <h1 className="text-white text-2xl font-bold leading-relaxed  ">التحقق من البريد الالكتروني</h1>
        </div>

         <div className="md:w-1/3 w-full h-auto p-8 rounded-lg background-color primary-border flex-center flex-col gap-y-2">



         {/* otp code */}
      
             <div className=" md:w-[90%]">
    
             <InputOtp
               className=" flex-between w-full text-white rounded-md"
               length={6}
               value={value}
               onValueChange={setValue}
              //  variant="bordered"
             />
             </div>
        
        


            {/* sumbmit button */}
            <div className="md:w-[90%] w-full flex-center gap-x-4">
              <Link to={"/Home"} className="rounded-md w-full font-bold text-lg flex-center background-primary p-2">
                  تحقق 
              </Link>
            </div>
         </div>
         {/* re send code  */}
         <div className="flex-center gap-x-4">
            {/* <FontAwesomeIcon icon={faCheck} className=" text-2xl primary-color" /> */}
            <h1 className="text-white  leading-relaxed  light-color">الم تتلقى رمزا ؟</h1>
        </div>
        {/* /end */}
    </div>
  )
}

export default CheckOTP;





