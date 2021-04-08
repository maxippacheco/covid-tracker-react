import React, { useEffect, useState } from 'react'
// import Chart from "react-apexcharts";
import {getAllCountries} from '../helpers/fetch';

export const AvalaibleCountriesScreen = () => {

    const [countriesData, setCountriesData] = useState([]);

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

        return (
            <div >

                <h1 
                    className='text-center my-7 text-2xl font-semibold'
                >These are the countries you can search in the app.</h1>

                {
                    countriesData.map(country => (
                        <p
                        className='text-center my-2 text-xl text-purple-800'
                        >{country}</p>
                    ))
                }
            </div>
        )

}
