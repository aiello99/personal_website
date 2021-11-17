import styles from '../styles/card.module.css';

const Card = ({ title, imgSrc, content, link }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <a href={link}>
        <img border="0" alt="Project Image" src={imgSrc.src} height={200} width={350}/>
      </a>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default Card;