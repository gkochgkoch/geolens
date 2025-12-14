import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import DashboardRoute from './routes/DashboardRoute'
import MapRoute from './routes/MapRoute'
import EarthquakesRoute from './routes/EarthquakesRoute'

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<DashboardRoute />} />
        <Route path="/map" element={<MapRoute />} />
        <Route path="/earthquakes" element={<EarthquakesRoute />} />
      </Routes>
    </MainLayout>
  )
}
