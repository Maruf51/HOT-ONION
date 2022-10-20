import { useEffect, useState } from 'react';
import './HomeFoods.css';
import mealData from '../../../assets/data.json'
import ShowMeals from './ShowMeal/ShowMeal';
import ShowMeal from './ShowMeal/ShowMeal';

const HomeFoods = () => {
    const [meal, setMeal] = useState('lunch')
    const [mealDetails, setMealDetails] = useState([])
        
    // selecting foods data with the selected meal
    useEffect (() => {
        if(meal === 'breakfast') {
            setMealDetails(mealData.breakfast)
        }
        else if(meal === 'lunch') {
            setMealDetails(mealData.lunch)
        }
        else if(meal === 'dinner') {
            setMealDetails(mealData.dinner)
        }
    }, [meal])
    console.log(mealDetails)
    return (
        <div className='home_foods mt-9 flex flex-col justify-center items-center'>
            <div className="meal_selection flex justify-around items-center m-auto">
                <span className={`meal px-3 py-0 cursor-pointer ${meal === 'breakfast' && 'meal_active border-0 border-b-2 border-b-red-400 text-red-500'}`} onClick={() => setMeal('breakfast')}>Breakfast</span>
                <span className={`meal px-3 py-0 cursor-pointer ${meal === 'lunch' && 'meal_active border-0 border-b-2 border-b-red-400 text-red-500'}`} onClick={() => setMeal('lunch')}>Lunch</span>
                <span className={`meal px-3 py-0 cursor-pointer ${meal === 'dinner' && 'meal_active border-0 border-b-2 border-b-red-400 text-red-500'}`} onClick={() => setMeal('dinner')}>Dinner</span>
            </div>
            <div className="show_meals grid gap-3 md:gap-2 lg:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-3/4 md:w-4/5 lg:w-3/4 m-auto mt-6 mb-9">
                {
                    mealDetails.map(food => <ShowMeal data={food} key={food.id} />)
                }
            </div>
            <a href="www.google.com" className=''><button className='border border-gray-200 text-sm md:text-xs px-6 md:px-4 py-3 md:py-2 rounded-md bg-slate-400 hover:bg-gray-400 text-white'>Checkout Your Food</button></a>
        </div>
    )
}

export default HomeFoods;