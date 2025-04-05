
import React from "react";

import Navbar from "../Home/Navbar"
import {Pagination} from "@heroui/react";


const Community = () => {
  return (
    <div className="text-white relative">
        <Navbar/>
        <Pagination loop showControls className="primary-color absolute bottom-0 left-0"  initialPage={1} total={5} />;
    </div>
  )
}

export default Community