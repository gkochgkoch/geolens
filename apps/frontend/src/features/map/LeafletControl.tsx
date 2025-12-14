import { useEffect, useState } from 'react'
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
  const [container, setContainer] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    const control = new L.Control({ position })
    const el = L.DomUtil.create('div') as HTMLDivElement

    L.DomEvent.disableClickPropagation(el)
    L.DomEvent.disableScrollPropagation(el)

    control.onAdd = () => el
    control.addTo(map)

    setContainer(el)

    return () => {
      control.remove()
      setContainer(null)
    }
  }, [map, position])

  if (!container) return null
  return createPortal(children, container)
}
