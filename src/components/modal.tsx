"use client";
import { X } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {

    children: ReactNode;
    data?: ReactNode;
    onOpen?: () => void;
    onClose?: () => void;
    external_open?: boolean
}

export default function Modal({ children, data, onOpen, onClose, external_open }: ModalProps) {

    const [open, setOpen] = useState(false)
    const [rollup, setRollup] = useState(true)



    useEffect(() => {
        if (external_open) {
            setOpen(true);
            document.documentElement.style.overflowY = "hidden"
            setRollup(true);
            setTimeout(() => {
                setRollup(false);
            }, 100);
        } else {
            setOpen(false);
            document.documentElement.style.overflowY = "auto"
        }
    }, [external_open]);



   const close = useCallback(() => {

        setRollup(true);
        setTimeout(() => {
            setOpen(false);
            setTimeout(() => {
                document.documentElement.style.overflowY = "auto"
                if(onClose)
                    onClose();
            }, 100);
        }, 500);
    },[onClose]);

    function openModal() {
        setOpen(true);
        document.documentElement.style.overflowY = "hidden"

        setRollup(true);
        setTimeout(() => {
            setRollup(false);
            if(onOpen)
                onOpen();
        }, 100);
    }

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                close();
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [close]);


    if(children && !React.isValidElement(children)){
        console.error("Modal children must be a valid react element " + data?.title);
        console.error(typeof children);
        
    }


    return <>

        {children && (React.isValidElement(children) && React.cloneElement(children as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
            onClick: () => {
                openModal();
            },
            onKeyDown: (e: React.KeyboardEvent) => {
                if (e.key === 'Enter') {
                    openModal();
                }
            },  
            tabIndex: 0,
            role: "button",
            "aria-label": "Open Modal",
            "aria-expanded": open,
            "aria-haspopup": "dialog",
            "aria-controls": "modal",
            "aria-modal": "true",
            "aria-labelledby": "modal-title",
            "aria-describedby": "modal-description",
        }))}


        {
            open &&
            ReactDOM.createPortal(<>

                <div onClick={close} tabIndex={-1} className={"inset-0 fixed z-100 overscroll-contain overflow-y-auto flex justify-center  transition-all duration-500 " + (rollup ? "backdrop-blur-none bg-transparent" : "backdrop-blur-lg bg-[#00000080]")}>
                    <div onClick={(e) => {
                        e.stopPropagation();
                    }} className={(rollup && "mt-[40vh] scale-80 opacity-0") + ' transition-all duration-500 sm:w-[88%] xl:w-[68%] max-w-300 bg-white relative h-fit rounded-4xl my-10 flex flex-col'}>

                        <div className='overflow-hidden rounded-4xl m-0 p-0'>
                           {data}
                        </div>


                        <div className="absolute overflow-visible h-full mr-5 mt-5 self-end ">
                            <div onClick={close} tabIndex={0} className='sticky top-5  p-2 bg-gray-200 rounded-full cursor-pointer'>
                                <X />
                            </div>
                        </div>

                    </div>
                </div></>,
                document.body
            )
        }




    </>

}