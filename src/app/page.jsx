'use client';

import { useState } from 'react';
import styles from './page.module.css';
import TaskBox from '@/components/TaskBox';
import axios from 'axios';

export default function Home() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  async function addTask() {
    const newTask = {
      id: crypto.randomUUID(),
      msg: input.trim()
    };

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

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/todo/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  return (
    <>
      <div className={styles.page}>
        <div className={styles.main}>
          <div className={styles.mainHeader}>
            <div className="input-group mb-0 d-flex justify-content-center align-items-center">
              <input type="text" className={`form-control ${styles.customInput}`} id="floatingInput" placeholder="Task" value={input} onChange={(e) => setInput(e.target.value)}></input>
            </div>
            <button type="button" className={`btn btn-primary ${styles.customInputBtn}`} onClick={addTask}>
              Add Note
            </button>
          </div>
          <div className={styles.listParent}>
            <ul className={`list-group p-0 ${styles.list}`}>
              {tasks.map((item) => (
                <TaskBox key={item.id} msg={item.msg} onDelete={() => deleteTask(item.id)} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
