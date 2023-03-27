export const GerenciamentoAluno = () => {
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
                    <p>Gerenciamento de Alunos</p>
                </div>

                <div className="gerenciamento-aluno">   
                    <a href="">Adicionar</a>
                    <a href="">Alterar</a>
                    <a href="">LIstar</a>
                    <a href="">Remover</a>
                    
                </div>
            </div>


        </div>
    )
}