import { LatLngExpression } from 'leaflet';
// import { StopPoint } from '../../types'

export function getStopCoords(
  stopPoints: any[]
): LatLngExpression[] {
  console.log('stop points', stopPoints)
  const stopCoordinates = [] as LatLngExpression[]
  stopPoints.forEach((stop) => {
    stopCoordinates.push([stop.stop_lat, stop.stop_lon] as LatLngExpression)
  })
  return stopCoordinates
}