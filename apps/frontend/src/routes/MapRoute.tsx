import { Box } from '@mui/material'
import LeafletMap from '../features/map/LeafletMap'

export default function MapRoute() {
  return (
    <Box sx={{ height: '100%', minHeight: 0 }}>
      <LeafletMap />
    </Box>
  )
}
