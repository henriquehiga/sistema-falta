import IMG from "./img/menino.jpg"
import { DashboardAluno } from "./pages/DashboardAluno";
import { DashboardProf } from "./pages/DashboardProf";
import { DashboardTurma } from "./pages/DashboardTurma";
import { GerenciamentoAluno } from "./pages/GerenciamentoAluno";
import { DashboardAdicionarAluno } from "./pages/DashboardAdicionarAluno";
import { GerenciamentoMateria } from "./pages/GerenciamentoMateria";
import { DashboardAdicionarMateria } from "./pages/DashboardAdicionarMateria";
import { GerenciamentoTurma } from "./pages/GerenciamentoTurma";
import { DashboardAdicionarTurma } from "./pages/DashboardAdicionarTurma";
import { GerenciamentoProfessor } from "./pages/GerenciamentoProfessor";
import { DashboardAdicionarProfessor } from "./pages/DashboardAdicionarProfessor";
import { Login } from "./pages/login";

export const App = () => {
  return(
    <div className="main-app">
      <GerenciamentoAluno/>
    </div>
  );
};