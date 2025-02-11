import Card from "../components/Card";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Menu() {
  const [menu, setMenu] = useState([]);

  const fetchMenu = () => {
    axios.get("http://localhost:3001/pizzas").then((response) => {
      setMenu(response.data);
    });
  };

  useEffect(fetchMenu, []);

  return (
    <div className="img-men">
      <div className="container max-w-7xl mx-auto py-12 cont-menu">
        <h1 className="text-3xl font-bold text-orange-500 mb-6">Pizze</h1>

        <div className="grid grid-cols-4 gap-4">
          {menu.map((pers) => (
            <div key={pers.id}>
              <Card pers={pers} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
