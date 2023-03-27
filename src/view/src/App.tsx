import IMG from "./img/menino.jpg"
import { DashboardAluno } from "./pages/DashboardAluno";
import { DashboardProf } from "./pages/DashboardProf";
import { DashboardTurma } from "./pages/DashboardTurma";
import { GerenciamentoAluno } from "./pages/GerenciamentoAluno";
import { DashboardAdicionar } from "./pages/DashboardAdicionar";
import { Login } from "./pages/login";

export const App = () => {
  return(
    <div className="main-app">
      <DashboardAdicionar/>
    </div>
  );
};