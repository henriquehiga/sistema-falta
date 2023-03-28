import { useState } from "react"
import { Link } from "react-router-dom"

export const GerenciamentoTurma= () => {
    const [telaAtual, setTelaAtual] = useState<JSX.Element>(<ListaTurmas />)

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
                <button onClick={() => setTelaAtual(<ListaTurmas />)}>LISTA DAS TURMAS</button>
                <button onClick={() => setTelaAtual(<AdicionaTurmas />)}>ADICIONAR TURMAS</button>
              </div>

              <div className="gerenciamento-crud">   
                      {telaAtual}  
              </div>
        </div>
        </div>
    )
}

function ListaTurmas() {
    return(
        <div>
            <h1> LISTAGEM DE TURMAS</h1>

            <div className="container-crud-list">
                <p>05J</p>
                <button>REMOVER</button>
                <button>EDITAR</button>
            </div>
            
        </div>
    )
}

function AdicionaTurmas() {
    return(

        <div className="container-crud-adicionar">

            <form className="forms-adicionar">

                <div className="campo-adicionar">
                    <label htmlFor="">Nome da Turma</label>
                    <input type="text" placeholder="06J"/>
                </div>

            </form>

            <div>
                <button>ADICIONAR</button>
            </div>

        </div>
    )
}