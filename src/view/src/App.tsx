import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";

export const App = () => {
  return (
    <div className="min-h-screen flex w-full">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};
