function Settings() {
  return (
    <div style={{ padding: '30px' }}>
      <h1>Settings</h1>
      <div style={{
        background: 'var(--fundo-card)',
        padding: '20px',
        borderRadius: '12px',
        marginTop: '20px',
        maxWidth: '400px'
      }}>
        <label style={{ display: 'block', marginBottom: '8px', color: 'var(--texto-secundario)' }}>
          Nome do usuário
        </label>
        <input
          type="text"
          placeholder="Seu nome"
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '8px',
            border: 'none',
            background: 'var(--fundo-principal)',
            color: '#fff'
          }}
        />
      </div>
    </div>
  );
}

export default Settings;