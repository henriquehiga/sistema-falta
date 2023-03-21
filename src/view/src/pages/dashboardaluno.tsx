import Professor from "../img/teacher-thumb.jpg"

export const DashboardAluno = () => {
    return(
         <div className="wrapper">
    <aside className="menu">
      <div>
        <div className="menu-user">
          <a href="#">
           <img src={Professor} alt="" />
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
              <a href="#" className="btn btn-primary">Gerar Relatório</a>
            </li>
            <li>
              <a href="dashboard-turma.html" className="btn btn-primary-outline">Voltar a lista de alunos</a>
            </li>
          </ul>
        </div>
        <div className="info-main-student">
          <strong>Informações do Aluno:</strong>
          <ul>
            <li><strong>Nome:</strong> BEATRIZ VIEIRA ALVEZ</li>
            <li><strong>Turma:</strong> Turma 2</li>
            <li><strong>Total de aulas:</strong> 20 aulas</li>
            <li><strong>QTD. de presença:</strong> 15 aulas</li>
            <li><strong>QTD. de faltas:</strong> 15 aulas</li>
            <li><strong>Frequência:</strong> 75% de presença</li>
          </ul>
        </div>

        <div className="info-main-absence-history">
          <strong>Registro de Faltas:</strong>
          <ul className="list-history">
            <li>
              <p><strong>09/02/2023</strong> - Não Presente</p>
            </li>
            <li>
              <p><strong>04/02/2023</strong> - Não Presente</p>
            </li>
            <li>
              <p><strong>01/02/2023</strong> - Não Presente</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
    )
}