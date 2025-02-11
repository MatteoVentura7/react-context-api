import MainNav from "./MainNav";

export default function Header() {
  return (
    <header className="bg-orange-700 text-white">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <img className="w-30" src="public\img\logo.png" alt="" />
        <MainNav />
      </div>
    </header>
  );
}
