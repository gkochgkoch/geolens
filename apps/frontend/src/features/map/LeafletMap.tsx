import { useEffect, type ReactNode } from 'react'
import { Box } from '@mui/material'
import { MapContainer, TileLayer } from 'react-leaflet'


type LeafletMapProps = {
  children?: ReactNode
}

export default function LeafletMap({ children }: LeafletMapProps) {
  useEffect(() => {
    import('leaflet/dist/leaflet.css')
  }, [])
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {children}
      </MapContainer>
    </Box>
  )
}
