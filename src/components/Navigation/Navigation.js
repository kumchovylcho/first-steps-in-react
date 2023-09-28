import styles from './Navigation.module.css';

const Navigation = () => {

    return (
        <header className={styles["header-container"]}>
            <p className={styles["header-title"]}>Weather App</p>
        </header>
    );
};

export default Navigation;