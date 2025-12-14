import { Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import DashboardTile from '../components/DashboardTile'

export default function DashboardRoute() {
  const navigate = useNavigate()

  return (
    <>
      <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>
        Dashboard
      </Typography>

      <Grid container spacing={2}>
        <Grid>
          <DashboardTile
            title="Leaflet Map"
            description="Base map view (Leaflet)."
            onClick={() => navigate('/map')}
          />
        </Grid>

        <Grid>
          <DashboardTile
            title="Earthquakes"
            description="Earthquake layer & data (coming soon)."
            onClick={() => navigate('/earthquakes')}
          />
        </Grid>
      </Grid>
    </>
  )
}
