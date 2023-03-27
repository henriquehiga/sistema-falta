export const DashboardTurma = () => {
    return(
      <div className="wrapper">
     <aside className="menu">
          <div>
            <div className="menu-user">
              <a href="#">
                <img src="./img/teacher-thumb.jpg" alt="" />
              </a>
              <strong>Professor</strong>
              <p>Edward Cullen Silva</p>
            </div>
            <nav className="menu-nav">
              <ul>
                <li><a href="dashboard.html">Inicio</a></li>
                <li><a href="/" className="btn">Sair</a></li>
              </ul>
            </nav>
          </div>
        </aside>
        <main className="info">
          <header className="info-top">
            <h1>1 ANO A - Matemática</h1>
          </header>
          <div className="info-main">
            <div className="info-main-subjects">
              <strong>Ações:</strong>
              <ul>
                <li>
                  <a href="dashboard-aluno-detalhe.html" className="btn btn-success">Realizar nova chamada</a>
                </li>
              </ul>
            </div>
    
            <div className="info-main-classNamees">
              <strong>Aunos (Total: 20):</strong>
              <ul className="list-students">
                <li className="list-students-item">
                  <strong>1. ANDREW JAMES LINCOLN</strong>
                  <button className="no-config">
                  </button>
                </li>
                <li className="list-students-item">
                  <strong>2. ANDREW JAMES LINCOLN</strong>
                  <button className="no-config">
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    )
}