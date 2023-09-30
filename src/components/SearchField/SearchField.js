import getCityWeather from '../../services/getCityWeather';
import styles from './SearchField.module.css';


const SearchField = ({setResults, inputValue, setInputValue, placeholder, hasBtn}) => {

    return (
        <div className={`${styles.search_container} container_padding`}>
            <input
                className={styles.search_box}
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            {hasBtn 
                ?   <button
                        className={styles.search_btn}
                        onClick={(e) => {searchCity(e, inputValue, setResults, setInputValue)}}>
                        Search
                    </button>
                :   ""
              }
            

        </div>
    );
}

export default SearchField;



const searchCity = async (e, inputValue, setResults, setInputValue) => {
    e.preventDefault();

    if (!inputValue) {
        return;
    }

    const cityData = await getCityWeather(inputValue);

    setResults(currResults => { 
            return [
                ...currResults, {
                    name: cityData.name,
                    temp: cityData.main.temp,
                    feelsLike: cityData.main.feels_like,
                    windSpeed: cityData.wind.speed,
                    id: crypto.randomUUID(),
                }
            ]
        })
    setInputValue("");
}
