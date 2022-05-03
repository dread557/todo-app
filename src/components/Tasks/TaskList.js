import React from 'react'

function TaskList({ task }) {
    return (
        <li key={task.id}>
            <input type="checkbox" />
            <span>{task.task}</span>
        </li>
    )
}

export default TaskList