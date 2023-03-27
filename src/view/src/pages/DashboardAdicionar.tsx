export const DashboardAdicionar = () => {
    return (
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

            <div className="main-aluno">

                <div className="container-aluno">
                    <p className="name-page-aluno">Gerenciamento de Alunos</p>
                </div>

                <div className="forms">

                    <form className="forms-adicionar-aluno">

                        <legend>ADICIONAR ALUNO</legend>

                        <div className="campo-forms">
                            <label htmlFor="nome-aluno-form">Nome do Aluno</label>
                            <input type="text" id="adicionar-form"/>
                        </div>

                        <div className="campo-forms">
                            <label htmlFor="turma-aluno-form">Turma do Aluno</label>
                            <input type="text" id="turma-aluno-form"/>
                        </div>

                        <div className="campo-forms-adicionar">
                                <button>ADICIONAR</button>
                            </div>

                    </form>
                </div>
            </div>
        </div>

     );
};