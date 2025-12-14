import { useQuery } from '@tanstack/react-query'
import { fetchEarthquakesAllWeek } from '../../api/earthquakes/usgs'
import type { UsgsFeature } from '../../api/earthquakes/usgs'

export function useEarthquakes() {
  return useQuery<UsgsFeature[], Error>({
    queryKey: ['earthquakes', 'all-week'],
    queryFn: async () => {
      const feed = await fetchEarthquakesAllWeek()
      return feed.features
    },

    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
  })
}
