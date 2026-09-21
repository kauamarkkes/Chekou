import { useState } from "react";
import "../../App.css";

function Settings() {
  const [nome, setNome] = useState("Marcus");
  const [email, setEmail] = useState("");

  function salvar(e) {
    e.preventDefault();
    // TODO: quando o backend tiver rota de usuário, enviar aqui
    alert("Alterações salvas (simulado)");
  }

  return (
    <main className="main">
      <header className="header">
        <h1>Settings</h1>
        <p>Gerencie suas preferências de conta.</p>
      </header>

      <section className="activity-card settings-card">
        <div className="activity-header">
          <h2>Perfil</h2>
        </div>

        <form onSubmit={salvar}>
          <div className="settings-field">
            <label>Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="settings-field">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="settings-save-btn" type="submit">
            Salvar alterações
          </button>
        </form>
      </section>
    </main>
  );
}

export default Settings;