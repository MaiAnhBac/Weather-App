import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import { useState } from 'react';
function Input() {
    const [search, setSearch] = useState('')
    return ( 
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <input type="text" placeholder='Search for city...' value={search} onChange={(e) => {setSearch(e.target.value)}} className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize'/>
                <UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
                <UilLocationPoint size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
            </div>
            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button className='text-xl text-white font-light' name='metric'>°C</button>
                <p className='text-white text-xl mx-1'>|</p>
                <button name='imperial' className='text-xl text-white font-light'>°F</button>
            </div>
        </div>
     );
}

export default Input;