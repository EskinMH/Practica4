const BASE_URL =  "https://restcountries.com/";
const createURL = (path) => new URL (path, BASE_URL);

const getAllCountries = createURL("/v3.1/all");
(regionName) => createURL(`/v3.1/region${regionName}`);


export default
    BASE_URL