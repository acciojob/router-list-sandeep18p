import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ItemList from "./ItemList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Correct: Use `path` and `element` props to define the route */}
          <Route path="/" element={<ItemList />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
