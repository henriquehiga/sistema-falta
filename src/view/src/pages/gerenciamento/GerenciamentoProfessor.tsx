import { useState } from "react"
import { Link } from "react-router-dom"

export const GerenciamentoProfessor= () => {
    const [telaAtual, setTelaAtual] = useState<JSX.Element>(<ListaProfessores />)

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
                  <p className="name-page">Gerenciamento de Turmas</p>
              </div>

              <div className="container-crud-text">
                <button onClick={() => setTelaAtual(<ListaProfessores />)}>LISTA DOS PROFESSORES</button>
                <button onClick={() => setTelaAtual(<AdicionaProfessores />)}>ADICIONAR PROFESSORES</button>
              </div>

              <div className="gerenciamento-crud">   
                      {telaAtual}  
              </div>
        </div>
        </div>
    )
}

function ListaProfessores() {
    return(
        <div>
            <h1> LISTAGEM DOS PROFESSORES</h1>

            <div className="container-crud-list">
                <p>05J</p>
                <button>REMOVER</button>
                <button>EDITAR</button>
            </div>

        </div>
    )
}

function AdicionaProfessores() {
    return(
        <div className="container-crud-adicionar">
            <form className="forms-adicionar">

                <div className="campo-adicionar">
                    <label htmlFor="">Nome do Professor</label>
                    <input type="text" placeholder="Jõao Miguel"/>
                </div>
            </form>

            <div>
                <button>ADICIONAR</button>
            </div>

        </div>
    )
}