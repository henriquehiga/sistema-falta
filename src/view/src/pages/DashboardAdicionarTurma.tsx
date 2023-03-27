export const DashboardAdicionarTurma = () => {
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

            <div className="main-crud">

                <div className="container-crud">
                    <p className="name-page-text">Gerênciamento das Turmas</p>
                </div>

                <div className="forms">

                    <form className="forms-adicionar">

                        <legend>ADICIONAR TURMA:</legend>

                        <div className="campo-forms">
                            <label htmlFor="nome-form">Nome da Turma:</label>
                            <input type="text" id="adicionar-form"/>
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