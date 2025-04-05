import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"



const NotifyPage = () => {
  return (
    <div className="text-white h-[100vh] ">
      <div className="w-full h-16 ligth-border-bottom">
        <div className="container mx-auto px-4  md:p-2 h-16  flex-start gap-x-4 ">
          <Link to={"/Home"} className="flex-center">
              <FontAwesomeIcon icon={faArrowRight} className="text-xl primary-color "/>
          </Link>
          <div className="flex-center gap-x-4 ">
              <h2 className="text-white  font-bold leading-relaxed  ">الاشعارات</h2>
          </div>
        </div>
      </div>
      الاشعارات
  </div>
  )
}

export default NotifyPage