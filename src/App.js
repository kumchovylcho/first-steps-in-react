import { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import SearchField from './components/SearchField/SearchField';
import CityCard from './components/CityCard/CityCard';

function App() {
    const [results, setResults] = useState([]);

    return (
        <>
            <Navigation />
            <SearchField setResults={setResults} />
            {results.length === 0 
                ? <p className="cities_exist">No Cities</p> 
                : <p className="cities_exist">Cities</p>}
            <article className="cities_container container_padding">
                <CityCard results={results} />
            </article>
        </>
    );
}

export default App;
