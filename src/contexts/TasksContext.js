import React, { createContext, useState } from 'react'

export const TasksContext = createContext()


function TasksContextProvider(props) {
    const [tasks, setTasks] = useState([
        { task: 'Complete Online javasipt course', isCompleted: false, id: 1 },
        { task: 'jog around the park 3x', isCompleted: false, id: 2 },
        { task: '10 minutes meditation', isCompleted: false, id: 3 },
        { task: 'Read for one hour', isCompleted: false, id: 4 },
        { task: 'pick uo groceries', isCompleted: false, id: 5 },
        { task: 'Complete to do App on frontend Mentor', isCompleted: false, id: 6 },
    ])
    return (
        <TasksContext.Provider value={{ tasks, setTasks }}>
            {props.children}
        </TasksContext.Provider>
    )
}

export default TasksContextProvider