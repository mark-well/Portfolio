
import { Link } from 'react-router-dom';
import styles from '../stylesheet/PrimaryButton.module.css'

function PrimaryButton({content, style, onClick, type, to}) {

    // Button for navigation
    if(to) {
        return(
            <Link style={style} to={to} className={styles.button}> {content} </Link>
        );
    }

    // Button for functionality
    return(
        <button style={style} className={styles.button} type={type} onClick={onClick}>
            {content}
        </button>
    );
}

export default PrimaryButton;