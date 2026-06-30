import styles from '@/components/taskbox.module.css';

export default function TaskBox({ msg }) {
  return (
    <div className={styles.box}>
      <>{msg}</>
      <button className={styles.menubtn}>⋮</button>
    </div>
  );
}
