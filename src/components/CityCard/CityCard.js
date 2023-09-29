import styles from './CityCard.module.css';

const CityCard = ({results}) => {
    return (
        results.map(city => {
            return (
                <div className={styles["city-card"]} key={city.id}>
                    <div className={styles["city-card-info"]}>
                        <h3>City: {city.name}</h3>
                        <p>Temperature: {city.temp}</p>
                        <p>Feels like: {city.feelsLike}</p>
                        <p>Wind speed: {city.windSpeed}m/s</p>
                    </div>
                </div>
            )
        })
    );
}

export default CityCard;