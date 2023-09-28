import { useState } from 'react';
import getCityWeather from '../../services/getCityWeather';
import styles from './SearchField.module.css';


const SearchField = ({setResults}) => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className={styles["search_container"]}>
            <input
                className={styles["search_box"]}
                type="text"
                placeholder="Enter city..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button
                className={styles["search_btn"]}
                onClick={(e) => {searchCity(e, inputValue, setResults, setInputValue)}}>
                Search
            </button>

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
                    id: crypto.randomUUID(),
                }
            ]
        })
    setInputValue("");
}
