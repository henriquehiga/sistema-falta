import IMG from "./img/menino.jpg"
import { DashboardAluno } from "./pages/dashboardaluno";
import { DashboardProf } from "./pages/dashboardProf";
import { Login } from "./pages/login";

export const App = () => {
  return(
    <div className="main-app">
      <DashboardAluno />
    </div>
  );
};