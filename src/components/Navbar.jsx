import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className='w-full bg-purple-700 p-4 text-white font-semibold'>

            <div className='flex flex-row'>

                <h4>Covid Foundation <i className="fas fa-viruses text-xl"></i></h4>

                <ul className='w-5/6 flex flex-row justify-end'>
                    <li className='mx-7 cursor-pointer hover:text-purple-200'>

                        <Link to='/countries'>Countries</Link>

                    </li>
                    <li className='mx-7 cursor-pointer hover:text-purple-200'>

                        <Link to='/world'>World</Link>


                    </li>
                    <li className='mx-7 cursor-pointer hover:text-purple-200'>
                        <Link to='/continents'>Continents</Link>
                    </li>

                    <li className='mx-7 cursor-pointer hover:text-purple-200'>
                        <Link to='/avalaibles'>Avalaibles</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}
