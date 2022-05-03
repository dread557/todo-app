import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Tasks from './components/Tasks/Tasks';
import TasksContextProvider from './contexts/TasksContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className='app'>
      <ThemeContextProvider>
        <Navbar />
        <TasksContextProvider>
          <Tasks />
        </TasksContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
