export const getAPIWeather = () => {
    return (
        fetch('http://api.weatherapi.com/v1/current.json?key=4ee3177bf61b49f9aec63909232803&q=Quy%20nhon')
            .then((res) => res.json())
    )
}

export const getAPIWeatherFore = () => {
    return (
        fetch('https://api.weatherapi.com/v1/forecast.json?key=4ee3177bf61b49f9aec63909232803&q=Quy%20nhon')
            .then((res) => res.json())
    )
}

export const searchAPIWeather = (search) => {
    return (
        fetch(`http://api.weatherapi.com/v1/current.json?key=4ee3177bf61b49f9aec63909232803&q=${search}`)
            .then((res) => res.json())
    )
}

export const searchAPIWeatherFore = (search) => {
    return (
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=4ee3177bf61b49f9aec63909232803&q=${search}`)
            .then((res) => res.json())
    )
}
