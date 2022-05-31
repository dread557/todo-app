import React, { createContext, useState } from 'react'

export const TasksContext = createContext()


function TasksContextProvider(props) {
    const [tasks, setTasks] = useState([])
    const addTask = (task) => {
        setTasks([...tasks, { task: task, isCompleted: false, id: tasks.length + 1 }])
    }
    return (
        <TasksContext.Provider value={{ tasks, addTask, setTasks }}>
            {props.children}
        </TasksContext.Provider>
    )
}

export default TasksContextProvider