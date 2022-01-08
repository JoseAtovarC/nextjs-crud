import React, { useState } from 'react'
import Layout from '../components/Layout';
import { useTask } from '../contexts/TaskContext';
import { useRouter } from 'next/router';


export default function TaskForm() {

    const {  createTask, updateTask } = useTask();
    const router = useRouter();

    const [task, setTask] = useState({
        title: '',
        description: ''
    }
    );


    const HandleChange = e => {
        setTask({ ...task, [e.target.name]: e.target.value })
    };

    const HandleSubmit = e => {

        e.preventDefault()
        if(!router.query.id){
        createTask(task.title, task.description)
         } else {
            updateTask(router.query.id, task);
          }
        router.push("/")
    }

    console.log(router.query)

    return (
        <Layout>

            <form onSubmit={HandleSubmit}>
            <h1 className="text-3xl mb-7">
            {router.query.id ? "Edit Task" : "New Task"}
          </h1>

                <input type="text" placeholder='write a title'
                    className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
                    name='title'
                    onChange={HandleChange} />

                <textarea rows="2"
                    name='description'
                    onChange={HandleChange}
                    placeholder='write a description'
                    className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5" />

                <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30"
                    disabled={!task.title}>
                    Save
                </button>

            </form>
        </Layout>

    )
}
