import React, { useEffect, useState } from 'react'
import { getCovidCasesAllWorld } from '../helpers/fetch';

export const WorldScreen = () => {
    
    const [covidData, setCovidData] = useState(null);

    const getData = async() => {
        try {
          
          const { data } = await getCovidCasesAllWorld();

  
          setCovidData(data);
  
  
        } catch (error) {
          console.log(error);
        }
    }
    
    useEffect(() => {
        getData();
        
    
      }, [])
    
    return (
        <div className='h-screen flex justify-center items-center'>
            {
                (covidData !== null) ? 
                
                <div>
                    <h1
                        className='text-center text-4xl font-semibold text-blue-500'>
                        All the world
                    <i className="fas fa-globe-americas ml-1 text-blue-600"></i>
                    </h1>

                    <div className='font-bold text-xl text-center mt-6'>Cases: </div>
                    
                    <div className='text-center mb-6 text-yellow-500 text-3xl'>{covidData.cases}
                    <i className="fas fa-thermometer ml-1"></i>
                    </div>

                    <div className='font-bold text-xl text-center mt-6'>Today cases:</div>
                    
                    <div className='text-center mb-6 text-yellow-700 text-3xl'>{covidData.todayCases}
                    <i className="fas fa-head-side-mask ml-2"></i>
                    </div>

                    <div className='font-bold text-xl text-center mt-6'>Deaths:</div>

                    <div className='text-center mb-6 text-red-500 text-3xl'>{covidData.deaths}
                    <i className="fas fa-skull-crossbones ml-1"></i>
                    </div>
                    
                    <div className='font-bold text-xl text-center mt-6'>Today Deaths: </div>

                    <div className='text-center mb-6 text-red-600 text-3xl'>{covidData.todayDeaths}
                    <i className="fas fa-skull"></i>
                    </div>
                    
                    <div className='font-bold text-xl text-center mt-6'>Recovered:</div>
                    
                    <div className='text-center mb-6 text-green-500 text-3xl'>{covidData.recovered}
                    <i className="fas fa-ambulance ml-1"></i>
                    </div>

                    <div className='font-bold text-xl text-center mt-6'>Test per one million:</div>

                    <div className='text-center mb-6 text-purple-500 text-3xl'>{Math.round(covidData.testsPerOneMillion)}
                    <i className="fas fa-vials ml-1"></i>
                    </div>
                </div>
                
                
                : null

            }
        </div>
    )
}


//TODO: GRAPHIC