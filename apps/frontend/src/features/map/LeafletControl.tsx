import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import * as L from 'leaflet'
import { useMap } from 'react-leaflet'

type LeafletControlProps = {
  position?: L.ControlPosition
  children: React.ReactNode
}

export default function LeafletControl({
  position = 'topright',
  children,
}: LeafletControlProps) {
  const map = useMap()
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const control = new L.Control({ position })
    const container = L.DomUtil.create('div')
    containerRef.current = container

    L.DomEvent.disableClickPropagation(container)
    L.DomEvent.disableScrollPropagation(container)

    control.onAdd = () => container
    control.addTo(map)

    return () => {
      control.remove()
      containerRef.current = null
    }
  }, [map, position])

  if (!containerRef.current) return null

  return createPortal(children, containerRef.current)
}
