import Button from '../components/Button';
import styles from '../styles/home.module.css';
import avatar from '../public/mewithfish_cut.png';
import linkedin from '../public/linkedin.png'; // Image provided by flaticon.
import github from '../public/github.png';  // Image provided by flaticon.
import cv from '../public/cv.png'; // Image made by Freepix, provided by flaticon.

const home = () => {
  return(
  <div className={styles.home}>
    <h1>Welcome!</h1>
    <img src={avatar.src} alt="Logo"/>
    <p>I am Liam Aiello, pleased to meet you!</p>
    <Button path="about">About</Button>
    <div className={styles.links}>
      <a href="https://www.linkedin.com/in/liam-aiello-934a8919a/">
        <img border="0" alt="LinkedIn" src={linkedin.src} width="100" height="100"/>
      </a>
      <a href="https://github.com/aiello99">
        <img border="0" alt="Github" src={github.src} width="100" height="100"/>
      </a>
      <a href="https://drive.google.com/file/d/1pKTbQZt2HniEKgUY4GOcXgUYgfyh9n7U/view?usp=sharing" download>
        <img border="0" alt="Resume" src={cv.src} width="100" height="100"/>
      </a>
    </div>
  </div>
  );
}


export default home;