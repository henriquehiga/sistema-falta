import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <div className="main-app">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};
