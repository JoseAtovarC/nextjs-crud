import { createContext, useState, useContext } from "react";
import { useRouter } from "next/router";
import {v4 as uuid} from 'uuid'

export const TaskContext= createContext();

export const useTask= ()=>  useContext(TaskContext);

    

export const TaskProvider=({children})=>{


    const [tasks, setTasks] = useState([
        {id:uuid(),title:"first Task",description:"first description"},
    ])

    const updateTask = (id, updatedTask) =>
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      ),
    ]);

    const createTask=(title, description)=>{


            setTasks([...tasks,{title,description,id:uuid()}]);
           
    };

    const deleteTask = (id) =>
    setTasks([...tasks.filter((task) => task.id !== id)]);

    return (
        <TaskContext.Provider value={{tasks, createTask, updateTask, deleteTask}}>
            {children}
        </TaskContext.Provider>
    )
}