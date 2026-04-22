import { useState } from 'react'

function CareerStart({ onStart }) {
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim()) return

    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/game/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      })

      if (!res.ok) throw new Error('Failed to start career')
      
      const manager = await res.json()
      onStart(manager)
    } catch (err) {
      console.error(err)
      setError('Could not start career. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="career-start-container fade-in">
      <div className="career-card">
        <h1>Your Career Begins</h1>
        <p>Step into the world of professional Counter-Strike management. Shape your legacy, build your dream team, and climb the rankings.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="managerName">Manager Name</label>
            <div className="input-wrapper">
              <input
                id="managerName"
                type="text"
                placeholder="Enter your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
                required
              />
            </div>
          </div>

          {error && <p style={{ color: 'var(--red)', fontSize: '0.8rem', marginBottom: '1rem' }}>{error}</p>}

          <button type="submit" className="btn-primary" disabled={loading || !name.trim()}>
            {loading ? 'Starting...' : 'Start Career'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default CareerStart
