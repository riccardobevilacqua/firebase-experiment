import { useState } from 'react'

import '@/App.css'

export const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Firebase Experiment</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}
