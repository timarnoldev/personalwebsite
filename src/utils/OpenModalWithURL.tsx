"use client";

import BlogEntry, { Blog } from "@/components/articles/BlogEntry";
import Modal from "@/components/modal";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function OpenModalWithURL(props: {
    blogs:Array<Blog>
}) {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, []);
    const searchParams = useSearchParams();
    const openModal = searchParams.get("open");

    if(openModal){
        const blog = props.blogs.find((blog) => blog.slug === openModal);
        if(blog){
            return <Modal external_open={open} data={<BlogEntry data={blog} ></BlogEntry>} />     
        }
    }

    return <div></div>;
    


};