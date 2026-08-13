import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function MealDetails() {
  const { id } = useParams(); // Meal ID পাচ্ছি URL থেকে
  const [meal, setMeal] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMeal(data.meals[0]);
      })
      .catch(err => console.log("Error:", err));
  }, [id]);

  if (meal === null) {
    return (
      <div className="container mt-5">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <h1 className="card-header">{meal.strMeal}</h1>

        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="card-img-top"
          style={{ height: "400px", objectFit: "cover" }}
        />

        <div className="card-body">
          <p>
            <b>Category:</b> {meal.strCategory}
          </p>
          <p>
            <b>Cuisine:</b> {meal.strArea}
          </p>

          <h3>Instructions</h3>
          <p>{meal.strInstructions}</p>

          <h3>Ingredients</h3>
          <ul>
            {Array.from({ length: 20 }).map((_, i) => {
              const ingredient = meal[`strIngredient${i + 1}`];
              return ingredient ? <li key={i}>{ingredient}</li> : null;
            })}
          </ul>

          <button 
            onClick={() => navigate(-1)} 
            className="btn btn-secondary mt-4"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default MealDetails;