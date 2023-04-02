import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <section className="min-h-screen flex w-full">
      <div className="w-full bg-blue-500"></div>
      <div className="w-full bg-white">
        <div className="w-full h-full flex flex-col justify-center items-center gap-10 px-20">
          <h1 className="text-2xl font-semibold uppercase">
            Sistema de falta escolar
          </h1>
          <form className="w-full flex flex-col gap-4">
            <input type="text" placeholder="Digite seu nome de usuário..." />
            <input type="text" placeholder="Digite sua senha..." />
            <Link className="w-full" to="/gerenciamento/professor">
              <button className="bg-blue-500 w-full text-white">Entrar</button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};
