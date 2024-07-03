import Button from "@/component/ui/Button";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type propsType = {
    className?: string;
    lists: Array<{
        title: string,
        url: string,
        icon: string,
    }>;
}

export default function Sidebar(props:propsType){
    const [show, setShow] = useState(true);
    const { lists } =  props;
    return (
        <aside className="h-100">
            <nav className={show ? "h-full flex flex-col bg-white border-r shadow-sm w-60" : "h-full flex flex-col w-20 border-r"}>
                <div className="p-4 pb-2 flex justify-between items-center">
                    <span className={`text-2xl font-bold ${show ? "" : "hidden w-0"}`}>Moview</span>
                    <Button type="button" className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100" onClick={() => setShow(!show)}>
                        {show ? <ChevronFirst size={20}/> : <ChevronLast size={20}/>}
                    </Button>
                </div>
                <ul className="flex-1 p-3">
                    {lists.map((list,index)=>(
                            <Link
                                href={list.url} 
                                key={index} 
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    <i className={`bx ${list.icon} bx-sm`}></i>
                                    <span className={`ml-3 text-lg ${show ? "" : "hidden w-0"}`}>{list.title}</span>
                            </Link>
                        ))}
                </ul>
                <div className="border-t flex p-3">
                    <Image src="/profile.jpg" width={40} height={40} alt="profile"/>
                    <div className="flex justify-between items-center w-52 ml-3">
                        <div className={`leading-4 ${show ? "" : "hidden w-0"}`}>
                            <h4 className="font-semibold">Kenny key</h4>
                            <span className="text-xs text-gray-500">kennykey682@gmail.com</span>
                        </div>
                        <MoreVertical size={20} className={show ? "" : "hidden"}/>
                    </div>
                </div>
            </nav>
        </aside>
    )
}