import './BodyFoodSearch.css';

const BodyFoodSearch = () => {
    return (
        <div className="body_food_search m-auto w-full flex justify-center items-center flex-col">
            <h1 className="text-3xl sm:text-2xl font-medium text-center">Best food waiting for your belly</h1>
            <div className="search_section mt-4 w-80 relative border-red-400">
                <input type="text" className="search_input w-full px-4 py-2 pr-9 text-sm sm:text-xs rounded-full" placeholder='Search Food Items...' />
                <button className="btn absolute right-0 px-4 py-2 text-sm sm:text-xs rounded-full text-white bg-red-500 hover:bg-red-600 transition duration-300">SEARCH</button>
            </div>
        </div>
    )
}

export default BodyFoodSearch;