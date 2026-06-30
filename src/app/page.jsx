'use client';

import { useState } from 'react';
import styles from './page.module.css';
import TaskBox from '@/components/TaskBox';

export default function Home() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask() {
    console.log(tasks);
    setTasks([...tasks, input]);
  }

  return (
    <>
      <div className={styles.page}>
        <div className={styles.main}>
          <div className={styles.mainHeader}>
            <label htmlFor="taskInput">
              <input name="taskInput" className={styles.formInput} value={input} onChange={(e) => setInput(e.target.value)}></input>
            </label>
            <button className={styles.formButton} onClick={addTask}>
              Add Note
            </button>
          </div>
          <div>
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>{<TaskBox msg={task} />}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
