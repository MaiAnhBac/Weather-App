import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from './components/TopButton';
// import  Input  from './components/Input';
import  TimeAndLocation  from './components/TimeAndLocation';
import  TemperatureAndDetails  from './components/TemperatureAndDetails';
import  Forecast  from './components/Forecast';
import  Forecast2  from './components/Forecast2';
import {getAPIWeather, getAPIWeatherFore, searchAPIWeather, searchAPIWeatherFore} from './components/API'
import { useEffect, useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
function App() {
  const [data,setData] = useState([])
  const [dataFore, setDataFore] = useState([])
  const [search, setSearch] = useState('')
  const [error, setError] = useState(false)

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }
  const onKeyPress = (e) => {
      e.preventDefault();
      if(!search){
        setError(true)
      }else {
        setError(false)
        searchAPIWeather(search)
          .then((data) => {
            setData(data);
            setSearch('')
          })
        searchAPIWeatherFore(search)
          .then((res) => {
            setDataFore(res)
          })
      }
  }

  useEffect(() => {
      getAPIWeather()
        .then(data => {
          setData(data)
        })
      getAPIWeatherFore()
        .then(data2 => {
          setDataFore(data2);
        })
  },[])
  return (
    <div className='mx-auto max-w-screen-md mt-4 pt-5 pb-20 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopButton />
      <div className='flex flex-row justify-center mt-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
          <form onSubmit={onKeyPress} className='flex flex-row items-center justify-center space-x-4'>
            <input type="text" placeholder='Search for city...' value={search} onChange={onChangeSearch} className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize' />
            <UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
            <UilLocationPoint size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
          </form>
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
          <button className='text-xl text-white font-light' name='metric'>°C</button>
          <p className='text-white text-xl mx-1'>|</p>
          <button name='imperial' className='text-xl text-white font-light'>°F</button>
        </div>
      </div>
      {error && <p className='text-red-500 ml-7 mt-2 text-sm '>Vui lòng nhập địa chỉ cần tìm !</p>}
      <TimeAndLocation name={data?.location} />
      <TemperatureAndDetails name={data?.current} time={dataFore} />
      <Forecast title='hourly forecast' name={dataFore} />
      <Forecast2 title='daily forecast' name={dataFore} />
    </div>
  );
}

export default App;
