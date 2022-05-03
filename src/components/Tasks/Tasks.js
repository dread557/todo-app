import React, { useContext } from 'react'
import { TasksContext } from '../../contexts/TasksContext'
import TaskList from './TaskList'

function Tasks() {
    const { tasks } = useContext(TasksContext)
    return (
        <div>
            <ul>
                {tasks.map((task) => {
                    return <TaskList task={task} />
                })}
            </ul>
        </div>
    )
}

export default Tasks