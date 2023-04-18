function TimeAndLocation(name) {
    const today  = new Date()
    const dayOfTheWeek = today.toLocaleString('en-US', {weekday: 'long'});
    const date = today.getDate()
    const month = today.toLocaleString('en-US', { month: 'long' });
    const year = today.getFullYear()
    const hours = today.getHours()
    const minutes = today.getMinutes()
    console.log(minutes);
    const ampm = today.toLocaleString('en-US', {hour: 'numeric', hour12: true});
    return ( 
        <div>
            <div className="flex items-center justify-center my-6">
                <p className="text-white text-xl font-extralight"> 
                    {dayOfTheWeek}, {date} {month} {year} | Local time: {hours}:{minutes} {ampm.slice(-2)}
                </p>
            </div>
            <div className="flex items-center justify-center my-3">
                <p className="text-white text-3xl font-medium">{name?.name?.name}</p>
            </div>
        </div>
     );
}

export default TimeAndLocation;