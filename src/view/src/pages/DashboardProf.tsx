import { Link } from "react-router-dom";

export const DashboardProf = () => {
  return (
    <div className="wrapper">
      <aside className="menu">
        <div className="menu-user">
          <a href="#">
            <img src="./img/teacher-thumb.jpg" alt="" />
          </a>
          <strong>Professor:</strong>
          <p>Edward Cullen Silva</p>
        </div>

        <nav className="menu-nav">
          <ul>
            <li>
              <Link to={"/dashboard-professor"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/"}>Sair</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="info">
        <header className="info-top">
          <h1>INÍCIO</h1>
        </header>
        <div className="info-main">
          <div className="info-main-subjects">
            <strong>Máterias:</strong>
            <ul>
              <li>Matemática,</li>
              <li>Português,</li>
              <li>Ciências,</li>
              <li>Geografia,</li>
              <li>História,</li>
              <li>Artes</li>
            </ul>
          </div>

          <div className="info-main-classNamees">
            <strong>Alunos (TOTAL: 20):</strong>
            <ul>
              <li>
                <Link to={"/dashboard-turma"}>1 ANO A - MATEMÁTICA</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};