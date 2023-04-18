import { UilArrowUp, UilArrowDown,UilTemperature,UilTear,UilWind,UilSun,UilSunset } from '@iconscout/react-unicons'
function TemperatureAndDetails({name, time}) {
    return ( 
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>{name?.condition?.text}</p>
            </div>
            <div className="flex flex-row items-center justify-between text-white pt-3">
                <img src={name?.condition?.icon} alt="" className="w-20"/>
                <p className="text-5xl"> {name?.temp_c}°C</p>
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className='mr-1' />
                        UV:
                        <span className='font-medium ml-1'>{name?.uv}</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className='mr-1' />
                        Humidity:
                        <span className='font-medium ml-1'>{name?.humidity}%</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className='mr-1' />
                        Wind:
                        <span className='font-medium ml-1'>{name?.wind_kph} km/h</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-1 text-white text-xs py-4'>
               <UilSun />
                <p className='font-light'>
                    Rise: <span className='font-medium text-xs'>{time?.forecast?.forecastday[0]?.astro?.moonrise}</span>
                </p> 
                <p className='font-light'>|</p>
               <UilSunset />
                <p className='font-light '>
                    Set: <span className='font-medium text-xs'>{time?.forecast?.forecastday[0]?.astro?.moonset}</span>
                </p> 
                <p className='font-light'>|</p>
               <UilSun />
                <p className='font-light'>
                    Hight: <span className='font-medium text-xs'>{time?.forecast?.forecastday[0]?.astro?.sunrise}</span>
                </p> 
                <p className='font-light'>|</p>
               <UilSun />
                <p className='font-light'>
                    Low: <span className='font-medium text-xs'>{time?.forecast?.forecastday[0]?.astro?.sunset}</span>
                </p> 
            </div>
        </div>
     );
}

export default TemperatureAndDetails ;