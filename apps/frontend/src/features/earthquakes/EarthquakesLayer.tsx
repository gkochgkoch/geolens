import { CircleMarker, Popup } from 'react-leaflet'
import type { UsgsFeature } from '../../api/earthquakes/usgs'

function radiusFromMag(mag: number | null) {
  if (mag == null) return 2
  return Math.max(2, Math.min(18, 2 + mag * 2))
}

export default function EarthquakesLayer({ quakes }: { quakes: UsgsFeature[] }) {
  return (
    <>
      {quakes.map((q) => {
        const [lng, lat] = q.geometry.coordinates
        const mag = q.properties.mag
        return (
          <CircleMarker
            key={q.id}
            center={[lat, lng]}
            radius={radiusFromMag(mag)}
            pathOptions={{ weight: 1, fillOpacity: 0.5 }}
          >
            <Popup>
              <div style={{ maxWidth: 260 }}>
                <div><b>Magnitude:</b> {mag ?? 'N/A'}</div>
                <div><b>Place:</b> {q.properties.place}</div>
                <div><b>Time:</b> {new Date(q.properties.time).toLocaleString()}</div>
              </div>
            </Popup>
          </CircleMarker>
        )
      })}
    </>
  )
}
