import { LatLngExpression } from 'leaflet';
// import { StopPoint } from '../../types'
import tripDataByRouteID from '../../staticData/trips.json'
import stopTimesByTripID from '../../staticData/stop_times.json'

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

// functions to select from static data trip file
export function getTripData(routeID: string): any {
  let data = null
  const tripArray: any[] = []
  tripDataByRouteID.forEach((trip) => {
     if(trip.route_id === routeID) {
        tripArray.push(trip)
     }
  })
  // console.log(tripArray)
  // console.log(stopTimesByTripID)
  const stopArray: any[] = []
  // tripArray.forEach((routeTrip) => {
  //   if()
  // })
  const stopTimes = stopTimesByTripID as any[]
  // console.log(stopTimes)
  stopTimes.forEach((stop) => {
    if(stop.trip_id === tripArray[0].trip_id) {
      stopArray.push(stop)
    }
  })
  console.log(stopArray)

  return data
}