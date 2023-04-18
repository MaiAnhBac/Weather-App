function TopButton() {
    const cities = [
        {
            id: 1,
            title: 'Quy Nhon'
        },
        {
            id: 2,
            title: 'Da Nang'
        },
        {
            id: 3,
            title: 'Nha Trang'
        },
        {
            id: 4,
            title: 'Gia Lai'
        },
        {
            id: 5,
            title: 'Phu Quoc'
        },
    ]
    return ( 
        <div className="flex items-center justify-around my-6">
            {cities.map((city) => (
                <button key={city.id} className="text-white text-lg font-medium">{city.title}</button>
            ))}
        </div> 
    );
}

export default TopButton;