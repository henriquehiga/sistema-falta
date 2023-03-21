import LoginBackground from "../img/login.jpg"

export const Login = () => {
    return(
        <div>
            <div className="login">
    <div className="login-left">
      <div className="login-left-top">
        <h1>Login</h1>
        <h2>Escola Octógono</h2>
        <p>Sistema de Presença<br /> <b>Professor</b></p>
      </div>

      <div className="login-left-bottom">
        <div className="box-email">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="maria@gmail.com" />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input id="senha" type="password" placeholder="●●●●●●●●" />
        </div>

        <a href="#">Esqueceu a senha?</a>

        <a href="dashboard.html" className="btn btn-primary">
          Entrar
        </a>
      </div>
    </div>

    <div className="login-right">
      <img src={LoginBackground} alt="" />
    </div>
  </div>
        </div>
    )
}