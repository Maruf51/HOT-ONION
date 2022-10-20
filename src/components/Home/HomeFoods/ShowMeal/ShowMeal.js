import './ShowMeal.css';

const ShowMeal = (props) => {
    const {name, id, description, price, image} = props.data

    return (
        <a href='www.google.com' className="show_meal border hover:bg-gray-100 transition duration-300 border-gray-100 rounded-md p-4 shadow-lg sm:text-xs">
            <img className='mb-4' src={image} alt="" />
            <h3 className=''>{name}</h3>
            <p className='text-gray-400 font-light'>{description}</p>
            <h1 className='font-semibold text-red-800'>${price}</h1>
        </a>
    )
}

export default ShowMeal;