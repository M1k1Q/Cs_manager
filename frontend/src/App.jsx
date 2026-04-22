import { useState, useEffect } from 'react'
import PlayerTable from './components/PlayerTable'
import Navbar from './components/navbar'
import CareerStart from './components/CareerStart'
import './App.css'

function App() {
  const [players, setPlayers] = useState([])
  const [manager, setManager] = useState(null)
  const [isGameLoaded, setIsGameLoaded] = useState(false)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function initGame() {
      try {
        // 1. Check Manager/Game Status
        const statusRes = await fetch('/game/status')
        if (statusRes.ok) {
          const status = await statusRes.json()
          setManager(status.manager)
        }
        setIsGameLoaded(true)

        // 2. Fetch Players
        const res = await fetch('/players')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setPlayers(data)
      } catch (err) {
        console.error('Failed to initialize app:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    initGame()
  }, [])

  const handleCareerStart = (newManager) => {
    setManager(newManager)
  }

  const filtered = players.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    (p.team_id && p.team_id.toString().includes(search)) ||
    p.role.toLowerCase().includes(search.toLowerCase())
  )

  if (!isGameLoaded && loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Loading Game Data...</p>
      </div>
    )
  }

  return (
    <> 
      <Navbar />
      <div className="app">
        {!manager ? (
          <CareerStart onStart={handleCareerStart} />
        ) : (
          <>
            {/* Toolbar */}
            <div className="toolbar">
              <div className="search-box">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search players by name, team or role…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="player-count">
                Players <span className="count">{filtered.length}</span>
              </div>
            </div>

            {/* Player Table */}
            <PlayerTable
              players={filtered}
              loading={loading}
              error={error}
            />
          </>
        )}
      </div>
    </>
  )
}

export default App
