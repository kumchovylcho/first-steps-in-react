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
            {results.length === 0 ? <p>No Cities</p> : <p>Cities</p>}
            <CityCard results={results} />
        </>
    );
}

export default App;
