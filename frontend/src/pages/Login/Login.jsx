import { useState } from 'react';
import '../../global.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password.length < 6) {
    setError('A palavra-chave deve ter pelo menos 6 caracteres.');
    return;
  }
  setError('');
  console.log('Dados do formulário:', { email, password });
  alert('Tentativa de login enviada!');
};

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Entrar no Chekou</h2>
        {error && <p style={{ color: '#f75a68', marginBottom: '1rem' }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite o seu e-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              required
            />  
          </div>

          <div className="input-group">
            <label htmlFor="password">Palavra-chave</label>
            <input
              type="password"
              id="password"
              placeholder="Digite a sua palavra-passe"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('')
              }}
              required
            />
          </div>

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;