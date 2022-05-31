import React, { useContext, useState } from 'react'
import { TasksContext } from '../../contexts/TasksContext'
import { ThemeContext } from '../../contexts/ThemeContext'
import './AddTaskForm.scss'

function AddTaskForm() {
    const { addTask } = useContext(TasksContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    const [input, setInput] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(input)
        setInput("")
    }
    const onInputChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                placeholder="Create a new todo..."
                onChange={onInputChange}
                required
                style={{ background: theme.bg, color: theme.txt }}
            />
        </form>
    )
}

export default AddTaskForm