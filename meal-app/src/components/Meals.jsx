import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Meals() {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMeals(data.meals);
      })
      .catch(err => console.log("Error:", err));
  }, [category]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">{category} Meals 🍗</h1>

      <div>
        {meals && meals.map(meal => (
          <button
            key={meal.idMeal}
            className="btn btn-outline-primary m-2"
            onClick={() => navigate(`/meal/${meal.idMeal}`)}
          >
            {meal.strMeal}
          </button>
        ))}
      </div>

      <button 
        onClick={() => navigate('/')} 
        className="btn btn-secondary mt-4"
      >
        ← Back
      </button>
    </div>
  );
}

export default Meals;