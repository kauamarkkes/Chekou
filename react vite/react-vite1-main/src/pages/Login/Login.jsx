function Login() {
  function handleSubmit(event) {
    event.preventDefault();

    alert("Login enviado!");
  }

  return (
    <section className="page">
      <div className="login-container">

        <h1>Login</h1>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="email">
              E-mail
            </label>

            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Senha
            </label>

            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button type="submit">
            Entrar
          </button>

        </form>

      </div>
    </section>
  );
}

export default Login;