import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { GerenciamentoAluno } from "./pages/gerenciamento/GerenciamentoAluno";
import { GerenciamentoMateria } from "./pages/gerenciamento/GerenciamentoMateria";
import { GerenciamentoProfessor } from "./pages/gerenciamento/GerenciamentoProfessor";
import { GerenciamentoTurma } from "./pages/gerenciamento/GerenciamentoTurma";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route
        element={<GerenciamentoProfessor />}
        path="/gerenciamento-professor"
      />
      <Route element={<GerenciamentoAluno />} path="/gerenciamento-aluno" />
      <Route element={<GerenciamentoTurma />} path="/gerenciamento-turma" />
      <Route element={<GerenciamentoMateria />} path="/gerenciamento-materia" />
    </Routes>
  );
};
