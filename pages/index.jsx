import Button from '../components/Button';
import styles from '../styles/home.module.css';

const home = () => {
  return(
  <div className={styles.home}>
    <h1>Welcome</h1>
    <p>I am Liam Aiello, pleased to meet you!</p>
    <Button path="about">About</Button>
  </div>
  );
}

export default home;