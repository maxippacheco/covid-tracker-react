import React, { useEffect, useState } from 'react';
import { covidCasesPerCountry, getAllCountries } from '../helpers/fetch';

export const CountriesScreen = () => {

    const [countriesData, setCountriesData] = useState([]);
    const [country, setCountry] = useState(null);

    useEffect(() => {

        const GetCountriesData = async () =>{
        
            const {data} = await getAllCountries();
               
            const countries = data.map(({country}) => {
                        
                return country;
            
            });

            setCountriesData(countries);
        
        }
            GetCountriesData();
        
        }, [])


    const countryChange = (event) => {

        let continentId = event.target.value;

        covidCasesPerCountry(continentId).then(({ data }) => {
            setCountry(data);
            console.log(data);
        })

    }

    return (
        <div className='h-screen m-auto'>
            <select
                name="continent"
                id="continent"
                className='m-auto flex my-10 w-80
                focus:outline-none bg-gray-100 p-2 py-3'
                onChange={countryChange}

            >
                {
                    countriesData.map(
                        countries =>
                            <option
                                key={countries}
                            >{countries}</option>
                    )

                    
                }


            </select>

            {
        

        (country !== null) ?
        
        <div>

          <h2 className='my-3 text-center text-3xl font-semibold'>{country.country}</h2>
            
          <div>
            <div className='font-bold text-xl text-center mt-6'>Cases: </div>     
            
            <div className='text-center mb-6 text-yellow-500 text-3xl'>
              {country.cases} 
              <i className="fas fa-thermometer ml-1"></i>
            </div>



          {             
                (country.todayCases !== 0)  
                ? 
                <>
                  
                  <div className='font-bold text-xl text-center mt-6'>Today cases: </div>   
                  
                  <div className='text-center mb-6 text-yellow-800 text-3xl'>
                  {country.todayCases} 
                  <i className="fas fa-thermometer ml-1"></i>
                </div>
              
              </>
                
                : null }
         
            <div className='font-bold text-xl text-center'>Recovered: </div>
            
            <div className='text-center mb-6 text-3xl text-green-500'>  
              {country.recovered} 
            <i className="fas fa-ambulance ml-1"></i>
            </div>

            <div 
              className='font-bold text-xl text-center'
            >Deaths:</div>

            <div className='text-center mb-6 text-3xl text-red-500'> 
              {country.deaths} 
            <i className="fas fa-skull-crossbones ml-1"></i>
            </div>

            {             
                (country.todayDeaths !== 0)  
                ? 
                <>
                  
                  <div className='font-bold text-xl text-center mt-6'>Today deaths: </div>   
                  
                  <div className='text-center mb-6 text-red-700 text-3xl'>
                  {country.todayDeaths} 
                  <i className="fas fa-skull-crossbones ml-1"></i>
                </div>
              
              </>
                
                : null }





            {/* <div>Mortality: </div> */}

            <div className='font-bold text-xl text-center mt-6'>Test: </div>   
                  
                  <div className='text-center mb-6 text-blue-700 text-3xl'>
                  {country.tests} 
                  <i className="fas fa-vials ml-1"></i>
            </div>

            <div className='font-bold text-xl text-center mt-6'>Test per million: </div>   
                  
                <div className='text-center mb-6 text-blue-700 text-3xl'>
                  {country.testsPerOneMillion} 
                <i className="fas fa-vial ml-1 mb-6"></i>
            </div>

          </div>
        </div>  
          
        
        : null


      }
         
        </div>
    )
}