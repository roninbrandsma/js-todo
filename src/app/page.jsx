'use client';

import { useState } from 'react';
import styles from './page.module.css';
import TaskBox from '@/components/TaskBox';
import axios from 'axios';

export default function Home() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  async function addTask() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const newTask = input.trim();

    if (!newTask) return;

    try {
      const response = await axios.post(`${API_URL}/todo`, { task: newTask });

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setInput('');

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
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
