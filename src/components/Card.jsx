import { Link } from "react-router-dom";

export default function Card({ pers }) {
  return (
    <div className="p-4 shadow-lg text-center">
      <img
        className="aspect-square object-cover"
        src={pers.image}
        alt={pers.name}
      />
      <div className="bg-white pb-3">
        <h3 className="text-orange-500 text-lg font-bold">{pers.name}</h3>
        <Link to={`/menu/${pers.id}`}>
          <button className="text-white border-2 border-orange-500 p-1.5 bg-orange-500 cursor-pointer hover:scale-112  ">
            Info
          </button>
        </Link>
      </div>
    </div>
  );
}
