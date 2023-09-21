import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common,
    flag: country.flag,
    latlng: country.latlng,
    region: country.region
}));


const useCountries = () => {
    const getALL = () => formattedCountries;

    const getValue = (value: string) => {
        return formattedCountries.find((item) => item.value === 
        value)
    }

    return {
        getALL,
        getValue
    }
};

export default useCountries;