function Projects() {
  const projetos = [
    { nome: 'Engine Team', cor: 'var(--roxo-destaque)' },
    { nome: 'Design Sprint', cor: 'var(--amarelo-aviso)' },
    { nome: 'V2 Launch', cor: '#3b82f6' },
  ];

  return (
    <div style={{ padding: '30px' }}>
      <h1>Projects</h1>
      <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
        {projetos.map(p => (
          <div key={p.nome} style={{
            background: 'var(--fundo-card)',
            padding: '20px',
            borderRadius: '12px',
            width: '200px',
            borderTop: `3px solid ${p.cor}`
          }}>
            {p.nome}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;