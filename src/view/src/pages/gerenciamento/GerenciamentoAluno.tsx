import { useState } from "react"
import { Link } from "react-router-dom"

export const GerenciamentoAluno = () => {
    const [telaAtual, setTelaAtual] = useState<JSX.Element>(<ListaAlunos />)

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
                  <p className="name-page">Gerenciamento de Alunos</p>
              </div>

              <div className="container-crud-text">
                <button onClick={() => setTelaAtual(<ListaAlunos />)}>LISTA</button>
                <button onClick={() => setTelaAtual(<AdicionaAluno />)}>ADICIONA</button>
              </div>

              <div className="gerenciamento-crud">   
                      {telaAtual}  
              </div>
        </div>
        </div>
    )
}

function ListaAlunos() {
    return(
        <div>
            <h1> LISTAGEM DE ALUNO</h1>
            <p> Beatriz Lino </p>
            <p> José Antonio </p>
        </div>
    )
}

function AdicionaAluno() {
    return(
        <div>
            <p>Adiciona aluno</p>
        </div>
    )
}