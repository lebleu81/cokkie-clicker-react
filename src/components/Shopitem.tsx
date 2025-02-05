const ShopItems = ({item}: any) => {
    return (
        <div className="bg-white p-5 border rounded cursor-pointer hover:bg-gray-200 transform transition-transform duration-200 hover:scale-105">
            <div className="flex justify-between items-center">
                <img className="h-20 w-20 object-cover" src={item.image} alt={item.name} />
                <span className="font-bold ml-4">{item.name}</span>
                <span>Prix : {item.prix}</span>
            </div>
            <p className="text-sm">Cookies par seconde : {item.cps}</p>
        </div>
    )
}

export default ShopItems

