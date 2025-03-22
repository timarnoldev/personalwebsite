"use client";
import { usePostHog } from "posthog-js/react";
import BlogEntry, { Blog } from "./articles/BlogEntry";
import Modal from "./modal";
import { useEffect } from "react";

export default function BlogModal(props: {blog:Blog, children: React.ReactElement}) {


    const posthog = usePostHog();

    return <Modal onOpen={()=>{
        posthog.capture("blog_modal_opened", {blog: props.blog.title})
    }} data={ <BlogEntry data={props.blog} ></BlogEntry>}>
        {props.children}
    </Modal>
}