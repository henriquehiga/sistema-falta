export const GerenciamentoTurma = () => {
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
                        <p className="name-page">Gerenciamento das Turmas</p>
                    </div>

                    <div className="container-crud-text">
                        <button><a href="./pages/DashboardAdicionarTurma.tsx">ADICIONAR TURMA</a></button>
                        <button>LISTAR</button>
                    </div>

                    <div className="gerenciamento-crud">   

                            <ul className="page-acoes">
                                <div className="container-acoes-crud">
                                    <li>05J</li>
                                    <button>REMOVER</button>
                                    <button>EDITAR</button>
                                </div>

                                <div className="container-acoes-crud">
                                    <li>05J</li>
                                    <button>REMOVER</button>
                                    <button>EDITAR</button>
                                </div>

                                <div className="container-acoes-crud">
                                    <li>05J</li>
                                    <button>REMOVER</button>
                                    <button>EDITAR</button>
                                </div>

                                <div className="container-acoes-crud">
                                    <li>05J</li>
                                    <button>REMOVER</button>
                                    <button>EDITAR</button>
                                </div>
                                
                            </ul>   

                    </div>

                    </div>


                    </div>
    )
}