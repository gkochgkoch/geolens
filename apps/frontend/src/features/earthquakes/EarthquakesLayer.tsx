import { memo } from 'react'
import { CircleMarker, Popup } from 'react-leaflet'
import type { UsgsFeature } from '../../api/earthquakes/usgs'

type Props = { quakes: UsgsFeature[] }

function colorFromMag(mag: number | null): string {
  if (mag == null) { return '#999' };
  if (mag < 2.5) { return '#2ecc71' };
  if (mag < 5) { return '#f1c40f' };
  return '#e74c3c';
}

function radiusFromMag(mag: number | null) {
  if (mag == null) return 2
  return Math.max(2, Math.min(18, 2 + mag * 2))
}

function EarthquakesLayerComponent({ quakes }: Props) {
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
            pathOptions={{
              color: colorFromMag(mag),
              fillColor: colorFromMag(mag),
              fillOpacity: mag ? mag / 10 : 0.6,
              weight: 1,
            }}
          >
            <Popup>
              <div style={{ maxWidth: 260 }}>
                <div><b>Magnitude:</b> {mag ?? 'N/A'}</div>
                <div><b>Place:</b> {q.properties.place}</div>
              </div>
            </Popup>
          </CircleMarker>
        )
      })}
    </>
  )
}

export default memo(EarthquakesLayerComponent)
