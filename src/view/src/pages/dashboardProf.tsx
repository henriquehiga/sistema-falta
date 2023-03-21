export const DashboardProf = () => {
    return(
        <div className="wrapper">
    <aside className="menu">
      <div className="menu-user">
        <a href="#">
          <img src="./img/teacher-thumb.jpg" alt="" />
        </a>
        <strong>Professor</strong>
        <p>Edward Cullen Silva</p>
      </div>

      <nav className="menu-nav">
        <ul>
          <li><a href="dashboard.html">Incio</a></li>
          <li><a href="/" className="btn">Sair</a></li>
        </ul>
      </nav>
    </aside>
    <main className="info">
      <header className="info-top">
        <h1>INCIO</h1>
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
            <li><a href="./dashboard-turma.html" className="btn btn-default">1 ANO A - MATEMÁTICA</a></li>
          </ul>
        </div>
      </div>
    </main>
  </div>
    )
}