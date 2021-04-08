import React, { useState } from 'react';
import { fetchContinentData } from '../helpers/fetch';

export const ContinentsScreen = () => {

    const [continent, setContinent] = useState('Europe');
    // const [continentData, setContinentData] = useState(null);

    const [avalaibleContinents, setAvalaibleContinents] = useState([
        "Asia",
        "North America",
        "Europe",
        "South America"
    ])



    const continentChange = (event) => {

        let continentId = event.target.value;

        fetchContinentData(continentId).then(({ data }) => {
            setContinent(data)

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
                onChange={continentChange}

            >
                {
                    avalaibleContinents.map(
                        continent =>
                            <option
                                key={continent}
                            >{continent}</option>
                    )
                }

            </select>


            {
                (continent) ?

                    <div>
                        <h1
                        className='text-center text-4xl font-semibold text-blue-500'>
                            {continent.continent}

                        <i className="fas fa-globe-americas ml-1 text-blue-600"></i>
                        
                        </h1>

                        <div className='font-bold text-xl text-center mt-6'>Cases: </div>

                        <div className='text-center mb-6 text-yellow-500 text-3xl'>{continent.cases}
                            <i className="fas fa-thermometer ml-1"></i>
                        </div>

                        <div className='font-bold text-xl text-center mt-6'>Today cases:</div>

                        <div className='text-center mb-6 text-yellow-700 text-3xl'>{continent.todayCases}
                            <i className="fas fa-head-side-mask ml-2"></i>
                        </div>

                        <div className='font-bold text-xl text-center mt-6'>Deaths:</div>

                        <div className='text-center mb-6 text-red-500 text-3xl'>{continent.deaths}
                            <i className="fas fa-skull-crossbones ml-1"></i>
                        </div>

                        <div className='font-bold text-xl text-center mt-6'>Today Deaths: </div>

                        <div className='text-center mb-6 text-red-600 text-3xl'>{continent.todayDeaths}
                            <i className="fas fa-skull"></i>
                        </div>

                        <div className='font-bold text-xl text-center mt-6'>Recovered:</div>

                        <div className='text-center mb-6 text-green-500 text-3xl'>{continent.recovered}
                            <i className="fas fa-ambulance ml-1"></i>
                        </div>

                        <div className='font-bold text-xl text-center mt-6'>Test per one million:</div>

                        <div className='text-center mb-6 text-purple-500 text-3xl'>{Math.round(continent.testsPerOneMillion)}
                            <i className="fas fa-vials ml-1 mb-7"></i>
                        </div>



                    </div>




                    : null
            }

        </div>
    )
}
