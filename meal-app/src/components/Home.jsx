import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  function loadCategories() {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCategories(data.categories);
      })
      .catch(err => console.log("Error:", err));
  }

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4 text-warning">🍽️ Meal App</h1>
      
      <button onClick={loadCategories} className="btn btn-primary btn-lg">
        Load Categories
      </button>

      <div className="mt-4">
        {categories.map(category => (
          <button
            key={category.idCategory}
            className="btn btn-outline-primary m-2"
            onClick={() => navigate(`/category/${category.strCategory}`)}
          >
            {category.strCategory}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;