"use client";
import { X } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
    children: ReactNode;
}

export default function Modal({ children }: ModalProps) {

    const [open, setOpen] = useState(false)

    function close() {
        setOpen(false);
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

    return <>


        {React.isValidElement(children) && React.cloneElement(children as React.ReactElement<any>, {
            onClick: () => {
                setOpen(true);
            }
        })}


        {
            open && 
            ReactDOM.createPortal(<>
               
                    <div onClick={close} tabIndex={-1} className="inset-0 fixed z-100 overscroll-contain overflow-y-scroll flex justify-center bg-[#00000080] backdrop-blur-lg">
                        <div onClick={(e) => {
                            e.stopPropagation();
                        }} className='w-[88%] max-w-300 bg-white h-[200vh] overflow-hidden rounded-4xl my-10 border-2 border-gray-500 flex flex-col'>


                            <div className="absolute overflow-visible h-[120dvh] mr-5 mt-5 self-end">
                                <div onClick={close} className='sticky top-5  p-2 bg-gray-200 rounded-full cursor-pointer'>
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