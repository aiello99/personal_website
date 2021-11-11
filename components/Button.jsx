import {useRouter} from 'next/router';
import styles from '../styles/button.module.css';

const Button = (props) => {
    const router = useRouter();
    return(
    <button className={styles.customButton} onClick={() => router.push(props.path)}>
        {props.children}
    </button>
    );
}

export default Button;