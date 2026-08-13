import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Meals from "./components/Meals";
import MealDetails from "./components/MealDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Meals />} />
        <Route path="/meal/:id" element={<MealDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;