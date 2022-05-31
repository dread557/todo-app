import React, { useContext } from 'react'
import { TasksContext } from '../../contexts/TasksContext'
import { ThemeContext } from '../../contexts/ThemeContext'
import './BottomInfo.scss'

function BottomInfo() {
    const { tasks } = useContext(TasksContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    // const handleClearCompleted = {

    // }
    return (
        <div className='b-wrapper'>
            <span className='task-count'>{tasks.length} items left</span>
            <div className='task-actions'>
                <button type='button' className='all' style={{ background: theme.bg }}>All</button>
                <button type='button' className='active' style={{ background: theme.bg }}>Active</button>
                <button type='button' className="completed" style={{ background: theme.bg }}>Completed</button>
            </div>
            <button className='clear-completed' style={{ background: theme.bg }}>Clear completed</button>
        </div>
    )
}

export default BottomInfo