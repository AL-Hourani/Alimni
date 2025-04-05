import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import VideoPlayer from "../videos/Vedio";
import {Pagination} from "@heroui/react";
import {Chip} from "@heroui/react";
import vodiourl from "../assets/A1 English Listening Practice - Daily Routine(720P_HD).mp4"
import videour from "../assets/A1 English Listening Practice - New Year_s Resolutions(720P_HD).mp4"

const Displer = () => {
  const [paid , ispaid] = useState(false)
  return (
        <div className="text-white h-[100vh] overflow-y-auto">
          <div className="w-full h-16 ligth-border-bottom fixed left-0 top-0  z-50 background-color ">
            <div className="container mx-auto px-4  md:p-2 h-16  flex-start gap-x-4 ">
              <Link to={"/Courses"} className="flex-center">
                  <FontAwesomeIcon icon={faArrowRight} className="text-xl primary-color "/>
              </Link>
              <div className="flex-center gap-x-4 ">
                  <h2 className="text-white  font-bold leading-relaxed ">اسم الدورة</h2>
              </div>
            </div>
          </div>
          {/* info about the coures */}
          <div className="container mx-auto mt-16  p-4  md:flex  md:p-2 h-auto flex-between">
            <Chip color="success" className="light-bacground" startContent={<CheckIcon size={18} width={24} height={24} />} variant="faded">
              دورة رياضيات
            </Chip>
            <Chip color="success" className="light-bacground" startContent={<CheckIcon size={18} width={24} height={24} />} variant="faded">
               مدة الدورة 20 ساعة
            </Chip>
            <Chip color="success" className="light-bacground" startContent={<CheckIcon size={18} width={24} height={24} />} variant="faded">
               سعر الدورة 23000 الف
            </Chip>
            <Chip color={`${paid?"success":"danger"}`} className="light-bacground" startContent={<CheckIcon size={18} width={24} height={24} />} variant="faded">
                غير مدفوع
            </Chip>
          </div>
            {/* display videos  */}
          <div className="container mx-auto  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2  md:p-2">
              <VideoPlayer videoUrl={vodiourl} isPaid={paid}/>
              {/* {/* <VideoPlayer/> */}
              <VideoPlayer videoUrl={videour} isPaid={paid}/> 
          </div>

          {/* pagenations */}
          <Pagination loop showControls color="success" 
            className="flex-center my-10 "
            initialPage={1} total={20} />;
          
          {/* model for paid courese */}
         
           
      </div>
  )
}

export default Displer

export const CheckIcon = ({size, height, width, ...props}) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
        fill="currentColor"
      />
    </svg>
  );
};