import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";
import { useTask } from "../contexts/TaskContext";
import Link from "next/link";

export default function Layout({ children }) {
    const { tasks } = useTask();
    const router = useRouter();
    return (
        <div className="h-screen bg-gray-900 text-white">
            <header className="flex items-center bg-gray-800 px-28 py-5">

                <Link href="/">
                    <a>
                        <h1 className="font-black text-lg">Task App</h1>
                    </a>

                </Link>

                <span className="ml-2 text-gray-400 font-bold">
                    {tasks.length} tasks
                </span>

                <div className="flex-grow text-right">
                    <button className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray font-bold rounded-sm inline-flex items-center"
                        onClick={() => router.push("/TaskForm")}>
                        <AiOutlinePlus className="mr-2" />
                        Add Task</button>
                </div>
            </header>

            <main className="h-5/6 px-28 py-10">
                {children}
            </main>

        </div>
    )
}
