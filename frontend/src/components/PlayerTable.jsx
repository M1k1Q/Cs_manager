function PlayerTable({ players, loading, error }) {
  // Helper: KD color class
  function kdClass(val) {
    if (val >= 1.15) return 'kd-good'
    if (val >= 1.0) return 'kd-neutral'
    return 'kd-bad'
  }

  // Helper: overall badge class
  function overallClass(val) {
    if (val >= 60) return 'overall-high'
    if (val >= 40) return 'overall-mid'
    return 'overall-low'
  }

  // Helper: role badge class
  function roleClass(role) {
    const r = (role || '').toLowerCase()
    const map = { awper: 'awper', rifler: 'rifler', igl: 'igl', entry: 'entry', support: 'support', lurker: 'lurker' }
    return map[r] || 'default'
  }

  // Loading skeleton
  if (loading) {
    return (
      <div className="table-wrapper">
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>#</th><th>Player</th><th>Team</th><th>Role</th>
                <th>K/D</th><th>ADR</th><th>KAST %</th><th>Rating</th><th>Overall</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(3)].map((_, i) => (
                <tr key={i} className="skeleton-row">
                  <td colSpan="9"><div className="skeleton" style={{ width: `${90 + i * 5}%` }}></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="table-wrapper">
        <div className="empty-state">
          <div className="icon">⚠️</div>
          <h3>Connection error</h3>
          <p>Could not reach the API. Make sure the FastAPI server is running on port 8000.</p>
        </div>
      </div>
    )
  }

  // Empty state
  if (players.length === 0) {
    return (
      <div className="table-wrapper">
        <div className="empty-state">
          <div className="icon">🎯</div>
          <h3>No players found</h3>
          <p>Add players using the API at <code>/docs</code> — they'll show up here automatically.</p>
        </div>
      </div>
    )
  }

  // Player table
  return (
    <div className="table-wrapper">
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Player</th>
              <th>Team</th>
              <th>Role</th>
              <th>K/D</th>
              <th>ADR</th>
              <th>KAST %</th>
              <th>Rating</th>
              <th>Overall</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={player.id} className="fade-in" style={{ animationDelay: `${index * 0.04}s` }}>
                <td style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{index + 1}</td>
                <td className="player-name">{player.name}</td>
                <td><span className="team-badge">{player.team_id}</span></td>
                <td><span className={`role-badge ${roleClass(player.role)}`}>{player.role}</span></td>
                <td className={`stat ${kdClass(player.kd)}`}>{player.kd.toFixed(2)}</td>
                <td className="stat">{player.adr.toFixed(1)}</td>
                <td className="stat">{player.kast.toFixed(1)}%</td>
                <td className="stat highlight">{player.rating.toFixed(2)}</td>
                <td><span className={`overall-badge ${overallClass(player.overall)}`}>{player.overall.toFixed(1)}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PlayerTable
