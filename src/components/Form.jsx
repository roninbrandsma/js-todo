import styles from './Form.module.css';

function Form() {
  return (
    <form className={styles.form}>
      <label htmlFor='todo'>
        <input type='text' name='todo' className={styles.formInput} placeholder='Add your next task' />
      </label>
      <button className={styles.formButton}>Add</button>
    </form>
  );
}

export default Form;
