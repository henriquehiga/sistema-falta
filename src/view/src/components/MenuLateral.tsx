import { Link } from "react-router-dom";

export const MenuLateral = () => {
  return (
    <aside className="w-[325px] min-h-screen bg-white">
      <div className="w-full h-24 flex justify-center items-center">
        <h1 className="font-2xl font-semibold">Sistema de falta</h1>
      </div>
      <div className="flex flex-col gap-4 px-4">
        <Link to="/dashboard">
          <p>Home</p>
        </Link>
        <Link to="/gerenciamento/aluno">
          <p>Aluno</p>
        </Link>
        <Link to="/gerenciamento/professor">
          <p>Professor</p>
        </Link>
        <div>
          <p>Faltas</p>
        </div>
        <div>
          <p>Matérias</p>
        </div>
        <div>
          <p>Aulas</p>
        </div>
      </div>
    </aside>
  );
};
