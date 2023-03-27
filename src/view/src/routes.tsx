import { Route, Routes } from "react-router-dom";
import { DashboardProf } from "./pages/DashboardProf";
import { DashboardTurma } from "./pages/DashboardTurma";
import { Login } from "./pages/Login";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<DashboardProf />} path="/dashboard-professor" />
      <Route element={<DashboardTurma />} path="/dashboard-turma" />
    </Routes>
  );
};
