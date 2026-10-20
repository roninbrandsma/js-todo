import styles from '@/components/taskbox.module.css';

export default function TaskBox({ msg, onDelete }) {
  return (
    <div className={styles.box}>
      <i className="bi bi-hexagon-fill"></i>
      <span className={styles.msg}>{msg}</span>
      <button className={styles.menubtn} onClick={onDelete} aria-label="Delete Task">
        <i className="bi bi-trash"></i>
      </button>
    </div>
  );
}
