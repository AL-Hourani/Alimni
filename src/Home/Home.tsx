
import React from "react";
import Navbar from "./Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="text-white flex-center flex-col h-screen">
      <Navbar/>

        <div className="flex-center gap-x-4 h-16 p-4 md:top-10">
           <FontAwesomeIcon icon={faGraduationCap} className="text-3xl primary-color "/>
            <h2 className="text-white text-3xl font-bold leading-relaxed  ">علّمني</h2>
        </div>
      <div className="container mx-auto px-4  md:p-2 h-16 ">
          <p className="mx-auto text-2xl  w-fit">تعلم اليوم، اصنع مستقبلك غدًا!</p>
      </div>
      <div className="container mx-auto px-4 light-color  md:p-2 h-16 ">
          <p className="mx-auto justify-items-center  w-fit">تعلم من أي مكان، في أي وقت، مع دورات مصممة خصيصًا لمساعدتك على اكتساب المهارات التي تحتاجها.</p>
      </div>
      <div className="container   mx-auto px-4 flex-center light-color  md:p-2 h-16 ">
           <motion.div
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              >
            <Link to={"/Courses"}  className="background-primary  py-2 text-lg px-12 font-medium backgound-text">
                هيا نبدأ ! 
            </Link>
           </motion.div>
      </div>
    </div>
  )
}

export default Home