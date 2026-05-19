import styles from './page.module.css';
import Header from '@/components/Header';
import Form from '@/components/Form';

export default function Home() {
  return (
    <>
      <Header className={styles.header} />
      <div className={styles.page}>
        <div className={styles.sideHero}></div>
        <div className={styles.main}>
          <Form />
        </div>
      </div>
    </>
  );
}
