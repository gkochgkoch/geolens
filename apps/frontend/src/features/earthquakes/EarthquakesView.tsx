import { useMemo, useState } from 'react'
import { Paper, Slider, Stack, Switch, Typography, Box, FormControlLabel } from '@mui/material'

import LeafletMap from '../map/LeafletMap'
import LeafletControl from '../map/LeafletControl'
import EarthquakesLayer from './EarthquakesLayer'
import { useEarthquakes } from './useEarthquakes'

export default function EarthquakesView() {
  const { data = [], isLoading, error } = useEarthquakes();
  const [enabled, setEnabled] = useState(true)
  const [minMagUI, setMinMagUI] = useState(0)      // updates instantly
  const [minMag, setMinMag] = useState(0)          // drives map filtering

  const filtered = useMemo(
    () => (enabled ? data.filter(q => (q.properties.mag ?? -Infinity) >= minMag) : []),
    [data, enabled, minMag]
  )

  return (
    <Box sx={{ height: '100%', minHeight: 0 }}>
      <LeafletMap>
        <EarthquakesLayer quakes={filtered} />

        <LeafletControl position="topright">
          <Paper sx={{ p: 2, width: 280 }}>
            <Stack spacing={1.5}>
              <Typography fontWeight={800}>Earthquakes</Typography>

              <FormControlLabel
                control={<Switch checked={enabled} onChange={e => setEnabled(e.target.checked)} />}
                label="Show earthquakes"
              />

              <Box>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Minimum magnitude: {minMag.toFixed(1)}
            </Typography>

            <Slider
              value={minMagUI}
              min={0}
              max={8}
              step={0.5}
              onChange={(_, v) => setMinMagUI(v as number)}
              onChangeCommitted={(_, v) => setMinMag(v as number)}
              valueLabelDisplay="auto"
            />
          </Box>
            </Stack>
          </Paper>
        </LeafletControl>
      </LeafletMap>
    </Box>
  )
}
