"use client";
import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import BlogEntry, { Blog } from './articles/BlogEntry';

interface ModalProps {
    children: ReactNode;
    data?: Blog
}

export default function Modal({ children, data }: ModalProps) {

    const [open, setOpen] = useState(false)
    const [rollup, setRollup] = useState(true)

    function close() {
        setRollup(true);
        setTimeout(() => {
            setOpen(false);
            setTimeout(() => {
                document.documentElement.style.overflowY = "auto"
            }, 100);
        }, 500);
    }

    function openModal() {
        setOpen(true);
        document.documentElement.style.overflowY = "hidden"

        setRollup(true);
        setTimeout(() => {
            setRollup(false);
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
    }, []);

    if(!React.isValidElement(children)){
        console.error("Modal children must be a valid react element " + data?.title);
        
    }

    return <>


        {React.isValidElement(children) && React.cloneElement(children as React.ReactElement<any>, {
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
            "aria-label": "Open Blog Post",
            "aria-expanded": open,
            "aria-haspopup": "dialog",
            "aria-controls": "modal",
            "aria-modal": "true",
            "aria-labelledby": "modal-title",
            "aria-describedby": "modal-description",
            "aria-hidden": !open,
            "data-testid": "modal-trigger"

        })}


        {
            open &&
            ReactDOM.createPortal(<>

                <div onClick={close} tabIndex={-1} className={"inset-0 fixed z-100 overscroll-contain overflow-y-auto flex justify-center  transition-all duration-500 " + (rollup ? "backdrop-blur-none bg-transparent" : "backdrop-blur-lg bg-[#00000080]")}>
                    <div onClick={(e) => {
                        e.stopPropagation();
                    }} className={(rollup && "mt-[40vh] scale-80 opacity-0") + ' transition-all duration-500 sm:w-[88%] xl:w-[68%] max-w-300 bg-white relative h-fit rounded-4xl my-10 flex flex-col'}>

                        <div className='overflow-hidden rounded-4xl m-0 p-0'>
                            <BlogEntry data={data!} ></BlogEntry>
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