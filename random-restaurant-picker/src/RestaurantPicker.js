import React, { useState, useEffect } from 'react';
import './RestaurantPicker.css';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const RestaurantLogo = () => (
    <div className="logo-container">
        <MenuBookIcon style={{ fontSize: 100, color: '#007bff' }} />
        {/*<MenuBookIcon  /style={{ fontSize: 100, color: 'white' }} />*/}

        <h1>去哪吃饭呀</h1>
    </div>
);



function RestaurantPicker() {
    const [restaurants] = useState([
        "阿诚",
        "毕淘买",
        "牛杂面",
        "一井烧肉",
        "重庆小面",
        "颐堤港"
    ]);
    const [currentRestaurant, setCurrentRestaurant] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);

    const handlePick = () => {
        setIsAnimating(true);

        let animationDuration = 3000;  // 3秒动画
        let intervalTime = 50;       // 每50ms切换一次餐厅
        let timesToSwitch = animationDuration / intervalTime;

        let interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * restaurants.length);
            setCurrentRestaurant(restaurants[randomIndex]);
            timesToSwitch--;

            if (timesToSwitch <= 0) {
                clearInterval(interval);
                setIsAnimating(false);
            }
        }, intervalTime);
    };

    useEffect(() => {
        return () => {
            setIsAnimating(false);
        };
    }, []);

    return (
        <div>
            <RestaurantLogo className="App-logo" />
            <button onClick={handlePick} disabled={isAnimating}>
                选择一个餐厅
            </button>
            <p className={`restaurant-name ${currentRestaurant ? "show" : ""}`}>
                {currentRestaurant}
            </p>
        </div>
    );
}

export default RestaurantPicker;