

import React from "react";
import { faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
   
  } from "@heroui/react";
  

  
  export default function Moduel({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: () => void }) {
   
  
    return (
      <>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="background-color text-white">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">طريقة الاشتراك
                  <FontAwesomeIcon icon={faMoneyBill1Wave} className="text-3xl primary-color "/>
                </ModalHeader>
                <ModalBody>
                  <p>
                      دورة في مادة رياضيات المرحلة الثانوية العامة
                  </p>
                  <p>
                      سعر الدورة حاليا 120000 الف
                  </p>
                   <span className="w-[96%] mx-auto h-1 rounded-lg light-bacground">

                   </span>
                  <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                    adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                    officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                    nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                    deserunt nostrud ad veniam.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    الغاء
                  </Button>
                  <Button color="success" className="font-bold" onPress={onClose}>
                    دفع
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }
  
