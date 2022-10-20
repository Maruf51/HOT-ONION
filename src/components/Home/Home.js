import BodyFoodSearch from './BodyFoodSearch/BodyFoodSearch';
import './Home.css'
import HomeFoods from './HomeFoods/HomeFoods';
import HomeInfo from './HomeInfo/HomeInfo';
import Navbar from './Navbar/Navbar';

const Home = () => {

    return (
        <>
            <Navbar />
            <BodyFoodSearch />
            <HomeFoods />
            <HomeInfo />
        </>
    )
}

export default Home;