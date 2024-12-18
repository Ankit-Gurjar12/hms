import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Sidebar />
        <main className="pl-[72px]">
          <Routes>
            <Route path="/"/>
            <Route path="/hostels"  />
            <Route path="/rooms" />
            <Route path="/assigned" />
            <Route path="/furniture"  />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

