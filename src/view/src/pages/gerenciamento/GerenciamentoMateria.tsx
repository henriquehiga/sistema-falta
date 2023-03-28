import { useState } from "react"
import { Link } from "react-router-dom"

export const GerenciamentoMateria= () => {
    const [telaAtual, setTelaAtual] = useState<JSX.Element>(<ListaMaterias/>)

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
                <button onClick={() => setTelaAtual(<ListaMaterias/>)}>LISTA DAS MATÉRIAS</button>
                <button onClick={() => setTelaAtual(<AdicionaMaterias/>)}>ADICIONAR MATÉRIAS</button>
              </div>

              <div className="gerenciamento-crud">   
                      {telaAtual}  
              </div>
        </div>
        </div>
    )
}

function ListaMaterias() {
    return(
        <div>
            <h1> LISTAGEM DAS MATÉRIAS</h1>

            <div className="container-crud-list">
                <p>05J</p>
                <button>REMOVER</button>
                <button>EDITAR</button>
            </div>

        </div>
    )
}

function AdicionaMaterias() {
    return(
        <div className="conatiner-crud-adicionar">
            <form className="forms-adicionar">

                <div className="campo-adicionar">
                    <label htmlFor="">Nome da Matéria</label>
                    <input type="text" placeholder="Português"/>
                </div>

                <div className="campo-adicionar">
                    <label htmlFor="">Quantidade de Aulas</label>
                    <input type="text" placeholder="20"/>
                </div>

            </form>

            <div>
                <button>ADICIONAR</button>
            </div>

        </div>
    )
}