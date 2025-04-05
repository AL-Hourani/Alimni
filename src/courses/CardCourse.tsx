


import React from "react";
import { motion } from "framer-motion";
import {Progress} from "@heroui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import {Chip} from "@heroui/react";

// import { faLockOpen } from "@fortawesome/free-solid-svg-icons";

import {Card,
     CardHeader,
     CardBody, 
     CardFooter, 
     
} from "@heroui/react";



const CardCourse = ({ onOpen }: { onOpen: () => void }) => {

  return (
    <Card className="max-w-[300px] card-shadow background-color p-0  rounded-md cursor-pointer">
      <CardHeader className="flex-center w-full   text-white ">
         {/* <img src={imgurl} alt="" className="object-cover" /> */}
          <FontAwesomeIcon icon={faLock} className="text-xl primary-color "/>
          <Chip color="success" className="light-bacground" startContent={<CheckIcon size={18} width={24} height={24} />} variant="faded">
            Free
          </Chip>

      </CardHeader>
   
      <CardBody className="p-4">
        <p className="text-white">دورة رياضيات الوحدة الخامسة في كتاب الجبر</p>
        <div className="flex-between">
            <p className="light-color">سعر الدورة :</p>
            <span className="text-xl light-color">1000 الف</span>
        </div>
      </CardBody>
      <span className="w-[96%] my-2 mx-auto h-[2px] rounded-lg light-bacground"></span>
      {/* progress bar */}
      <Progress
      classNames={{
        base: "w-[96%] my-2 mx-auto ",
        track: "drop-shadow-md border border-default",
        label: "tracking-wider font-medium text-white ",
        value: "text-foreground/60",
      }}
      label="مستوى تقدمك"
      color="warning"
      radius="sm"
      showValueLabel={true}
      size="sm"
      value={65}
    />
      
  
      <CardFooter className=" p-4 gap-x-2">
         <motion.div
               whileTap={{ scale: 0.9 }}
               transition={{ duration: 0.2 }}
               className="w-1/2"
            >
          <Link to={"/Courses/displer"}  className="rounded-md font-medium text-base  flex-center w-full light-color ligth-border p-2 text-white">
             عرض
          </Link>
          </motion.div>
          <motion.div
               whileTap={{ scale: 0.9 }}
               transition={{ duration: 0.2 }}
               className="w-1/2"
            >
          <button onClick={onOpen} className="rounded-md font-medium text-base  flex-center w-full light-color ligth-border p-2 text-white">
              الاشتراك
          </button>
          </motion.div>
      </CardFooter>
    </Card>
  );
}


export default CardCourse;

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