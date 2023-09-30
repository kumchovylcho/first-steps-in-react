import { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import SearchField from './components/SearchField/SearchField';
import CityCard from './components/CityCard/CityCard';

function App() {
    const [results, setResults] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [filterCities, setFilterCities] = useState("");

    return (
        <>
            <Navigation />
            <SearchField 
                setResults={setResults}
                inputValue={inputValue}
                setInputValue={setInputValue}
                placeholder="Enter city..."
                hasBtn={true}
            />

            <SearchField 
                setResults=""
                inputValue={filterCities}
                setInputValue={setFilterCities}
                placeholder="Filter by city names..."
                hasBtn={false}
            />

            {results.length === 0 
                ? <p className="cities_exist">No Cities</p> 
                : <p className="cities_exist">Cities</p>}

            <article className="cities_container container_padding">
                <CityCard 
                    results={results} 
                    filterCities={filterCities}
                />
            </article>
        </>
    );
}

export default App;
