import axios from 'axios'

const baseUrl = 'https://corona.lmao.ninja/v2';

export const covidCasesPerCountry = async(countryname) => {
    

    try {
        const data = await axios.get(`${baseUrl}/countries/${countryname}?yesterday&strict&query%20`);


        return data;

    } catch (error) {
        console.log(error);
    }


}

export const getCovidCasesAllWorld = async() => {
    
    try {
        const data = await axios.get(`${baseUrl}/all?yesterday`)

        return data;
    
    } catch (error) {
        console.log(error);
    }
}

export const getAllCountries = async () => {
    try {
        const data = await axios.get(`${baseUrl}/countries?yesterday&sort`)

        return data;
     

    } catch (error) {
        console.log(error);
    }
}


export const fetchContinentData = (continent) => {
    
    try {
        
    const data = axios.get(`${baseUrl}/continents/${continent}?yesterday&strict`);

    return data;
    } catch (error) {
        console.log(error);
    }

}

