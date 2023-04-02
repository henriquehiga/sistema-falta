import { Route, Routes, useLocation } from "react-router-dom";
import { MenuLateral } from "./components/MenuLateral";
import { GerenciamentoAluno } from "./pages/Gerenciamento/Aluno";
import { GerenciamentoProfessor } from "./pages/Gerenciamento/Professor";
import { Login } from "./pages/Login";

export const AppRoutes = () => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen w-full flex">
      {pathname != "/" && <MenuLateral />}
      <Routes>
        <Route element={<Login />} path="/" />
        <Route
          element={<GerenciamentoProfessor />}
          path="/gerenciamento/professor"
        />
        <Route element={<GerenciamentoAluno />} path="/gerenciamento/aluno" />
      </Routes>
    </div>
  );
};
