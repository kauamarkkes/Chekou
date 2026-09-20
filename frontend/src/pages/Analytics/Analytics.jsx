function Analytics() {
  const metricas = [
    { titulo: 'Tasks Completed', valor: 47, variacao: '+12%', cor: 'var(--verde-sucesso)' },
    { titulo: 'In Progress', valor: 12, variacao: '+3%', cor: 'var(--roxo-claro)' },
    { titulo: 'Pending Triage', valor: 8, variacao: '-16%', cor: 'var(--amarelo-aviso)' },
    { titulo: 'Overdue', valor: 3, variacao: '+1', cor: 'var(--vermelho-alerta)' },
  ];

  return (
    <div style={{ padding: '30px' }}>
      <h1>Analytics</h1>
      <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
        {metricas.map(m => (
          <div key={m.titulo} style={{
            background: 'var(--fundo-card)',
            padding: '20px',
            borderRadius: '12px',
            flex: 1
          }}>
            <p style={{ color: 'var(--texto-secundario)', fontSize: '14px' }}>{m.titulo}</p>
            <h2 style={{ margin: '8px 0' }}>{m.valor}</h2>
            <span style={{ color: m.cor, fontSize: '13px' }}>{m.variacao}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analytics;