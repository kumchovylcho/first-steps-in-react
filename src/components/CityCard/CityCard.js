const CityCard = ({results}) => {
    return (
        results.map(city => {
            return (
                <div key={city.id}>
                    <h3>{city.name}</h3>
                    <p>{city.temp}</p>
                </div>
            )
        })
    );
}

export default CityCard;