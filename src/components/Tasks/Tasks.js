import React, { useContext } from 'react'
import { TasksContext } from '../../contexts/TasksContext'
import { ThemeContext } from '../../contexts/ThemeContext'
import BottomInfo from '../bottomInfo/BottomInfo'
import './Tasks.scss'

function Tasks() {
    const { tasks, setTasks } = useContext(TasksContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    const handleDelete = ({ id }) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const handleComplete = (task) => {
        setTasks(tasks.map((t) => (t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t)))
    }

    return (
        <div className='wrapper' style={{ background: theme.bdBg }}>
            <ul className='tasks-container' style={{ background: theme.bg, boxShadow: theme.bxSdw }}>
                {tasks.map((task) => {
                    return (
                        <li className='task' key={task.id} style={{ background: theme.bg }}>
                            <label>
                                <input onClick={() => handleComplete(task)} type="checkbox" />
                            </label>
                            <div className='task-delete-grp'>
                                <span
                                    style={{ color: theme.txt }}
                                    className={task.isCompleted ? "completed" : "in-complete"}>
                                    {task.task}</span>
                                <button className='delete'
                                    onClick={() => handleDelete(task)}>
                                    <img src='.././assets/icon-cross.svg' alt='delete' />
                                </button>
                            </div>

                        </li>)
                })}
            </ul>
            <BottomInfo />
        </div>

    )
}

export default Tasks