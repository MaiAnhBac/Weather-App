function Forecast2({title, name}) {
    return ( 
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className="text-white font-medium uppercase">{title}</p>
            </div>
            <hr className="my-2"/>
            <div className="flex flex-row items-center justify-between text-white">
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        {name?.forecast?.forecastday[0]?.astro?.moonrise}
                    </p>
                    <img src="https://cdn.weatherapi.com/weather/64x64/day/122.png" alt="" className="w-12 my-1"/>
                    <p className="font-medium">22°</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        {name?.forecast?.forecastday[0]?.astro?.moonset}
                    </p>
                    <img src="https://cdn.weatherapi.com/weather/64x64/night/113.png" alt="" className="w-12 my-1"/>
                    <p className="font-medium">22°</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        {name?.forecast?.forecastday[0]?.astro?.sunrise}
                    </p>
                    <img src="https://cdn.weatherapi.com/weather/64x64/night/116.png" alt="" className="w-12 my-1"/>
                    <p className="font-medium">24°</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        {name?.forecast?.forecastday[0]?.astro?.sunset}
                    </p>
                    <img src="https://cdn.weatherapi.com/weather/64x64/day/116.png" alt="" className="w-12 my-1"/>
                    <p className="font-medium">25°</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        06:30 PM
                    </p>
                    <img src="https://cdn.weatherapi.com/weather/64x64/day/116.png" alt="" className="w-12 my-1"/>
                    <p className="font-medium">28°</p>
                </div>
            </div>
        </div>
     );
}

export default Forecast2;