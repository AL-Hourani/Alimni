
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {faBell} from "@fortawesome/free-solid-svg-icons"
import {faListUl} from "@fortawesome/free-solid-svg-icons"
import { Link , useLocation } from "react-router-dom"
import { faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"
import {Input} from "@heroui/react";
import Moduel from "../courses/Moduel";
import { useDisclosure } from "@heroui/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  RadioGroup,
  Radio,
} from "@heroui/react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";




// nav in mobile





const Navbar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const location = useLocation(); // لتحديد الصفحة النشطة
   const [activeIndex, setActiveIndex] = useState<number | null>(null);
   const menuItems = [
    { name: "المجتمع", path: "/Community" },
    { name: "الدورات", path: "/Courses" },
    { name: "مقالات", path: "/Articles" },
    { name: "المشاركين", path: "/Participants" },
    { name: "المعلمين", path: "/Teachers" },
    { name: "اسئلة", path: "/Questions" },
    { name: "شحن حسابك", path: "/Payment" },
    { name: "أبحاث علمية", path: "/abhas" }
  ];
  
  return (
    <div className="ligth-border-bottom fixed w-screen  top-0  z-50 background-color h-16 md:h-28">
        <div className="container mx-auto px-4  md:p-2 h-16 flex-between">
          <Link to={"/Home"}>
            <FontAwesomeIcon icon={faGraduationCap} className="text-2xl primary-color "/>
          </Link>
          <div className="flex-center gap-x-3 rounded-md light-bacground px-8 py-2">
              <span className="text-white">رصيدك الحالي</span>
              <span className="light-color">50000</span>
              <span className="light-color">الف</span>
              <FontAwesomeIcon icon={faMoneyBill1Wave} className="text-xl primary-color "/>
            </div>
            <Input
                className=" w-1/2  hidden md:block text-white relative light-bacground rounded-md"
                placeholder="ابحث هنا"
                type="search"
                variant="bordered"
                startContent={
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                       <FontAwesomeIcon icon={faSearch} className="light-color" />
                    </div>
                  }
            />

            {/* drop down user  */}
              <Dropdown>
                <DropdownTrigger>
                  <Button className="capitalize flex-center gap-x-2" color="success" variant="bordered">
                    <FontAwesomeIcon icon={faUser} className="light-color" />
                    اسم المستخدم
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Dropdown Variants" className="light-color" color="default" variant="flat">
                  <DropdownItem key="new">تعديل الملف الشخصي</DropdownItem>
                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem>
                  <DropdownItem key="delete" className="text-danger" color="danger">
                    تسجيل الخروج
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

            {/* end ddrop down user  */}

          <div className="flex-center gap-x-6 ">
             <FontAwesomeIcon icon={faSearch} className="light-color md:text-lg md:hidden block   cursor-pointer" />
             <Link to={"/Notifations"}>
                  <FontAwesomeIcon icon={faBell} className="light-color md:text-lg cursor-pointer" />
             </Link>
             <FontAwesomeIcon onClick={onOpen} icon={faListUl} className="light-color md:text-lg md:hidden block  cursor-pointer" />
             <Moduel isOpen={isOpen} onOpenChange={onOpenChange}/>
          </div>

        </div>
        <div className="container mx-auto hidden md:block lg:block  h-12">
            <ul className=" w-3/4 h-full flex-between ">
            {menuItems.map((item, index) => (
                <Link
                key={index}
                to={item.path}
                className={`cursor-pointer h-full flex-center light-color ${
                    location.pathname === item.path || activeIndex === index ? "li-active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                >
                {item.name}
                </Link>
            ))}
            </ul>
        </div>

        


    </div>
  )
}

export default Navbar




// nav in mobile 
  

