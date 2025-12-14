import { Card, CardActionArea, CardContent, Typography } from '@mui/material'

type DashboardTileProps = {
  title: string
  description: string
  onClick: () => void
}

export default function DashboardTile({ title, description, onClick }: DashboardTileProps) {
  return (
    <Card sx={{ borderRadius: 3, height: '100%' }}>
      <CardActionArea onClick={onClick} sx={{ height: '100%' }}>
        <CardContent>
          <Typography fontWeight={800} sx={{ mb: 0.5 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
