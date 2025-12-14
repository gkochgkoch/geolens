import type { ReactNode } from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

type MainLayoutProps = {
  children?: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation()

  const fullBleedRoutes = new Set(['/map', '/earthquakes'])
  const isFullBleed = fullBleedRoutes.has(location.pathname)

  return (
    <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      <AppBar position="sticky" elevation={0}>
        <Toolbar sx={{ minHeight: 56 }}>
          <Typography fontWeight={800}>GeoLens</Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          flex: 1,
          minHeight: 0,
          p: isFullBleed ? 0 : { xs: 1.5, sm: 2.5 },
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
