import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Pizza() {
  const [pizza, setPizza] = useState({});
  // Prendo il parametro id dalla rotta parametrica
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/pizzas/${id}`)
      .then((response) => {
        setPizza(response.data);
      })
      .catch((error) => {
        if (error.status === 404) {
          navigate("/404");
        }
      });
  }, [id, navigate]);
  return (
    <div className="container max-w-7xl mx-auto py-12 space-y-4">
      <Link to={"/menu"}>
        <button className="btn-redo">Torna al menù</button>
      </Link>
      <img className="w-full aspect-video object-cover" src={pizza.image} />
      <h1 className="text-3xl font-bold text-orange-500 mb-6">{pizza.name}</h1>
      <p>{pizza.description}</p>
      <strong>Ingredienti</strong>
      {pizza.ingredients && (
        <ul>
          {pizza.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      )}
      <div className="btn-nav">
        <Link to={`/menu/${pizza.id - 1}`}>
          <button>Precedente</button>
        </Link>
        <Link to={`/menu/${pizza.id + 1}`}>
          <button>Successivo</button>
        </Link>
      </div>
    </div>
  );
}
