export type UsgsFeature = {
  id: string
  properties: {
    mag: number | null
    place: string
    time: number
    url: string
  }
  geometry: {
    type: 'Point'
    coordinates: [number, number, number?]
  }
}

export type UsgsEarthquakeFeed = {
  type: 'FeatureCollection'
  features: UsgsFeature[]
}

export async function fetchEarthquakesAllWeek(signal?: AbortSignal) {
  const res = await fetch(
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson',
    { signal }
  )

  if (!res.ok) {
    throw new Error(`USGS request failed: ${res.status}`)
  }

  return (await res.json()) as UsgsEarthquakeFeed
}
