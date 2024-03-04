import { LatLngExpression } from 'leaflet';
// import { StopPoint } from '../../types'
import tripDataByRouteID from '../../staticData/trips.json'
import stopTimesByTripID from '../../staticData/stop_times.json'
import stopsInfo from '../../staticData/stops.json'
import { tripDetails, StopTimesByTrip, StopDetailsFromStaticData } from '../../types';

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

// function to set up direction IDs for actual directions 

// export function getDirectionFromCode(tripData: any): string {
//   let directionString = ''
//   let directionType = ''

//   if(tripData.route_id === '1 YELLOW ALT' ||)
  
//   return directionString
// }

// functions to select from static data trip file
export function getTripData(routeID: string[]): any[] {
  console.log(routeID.length)
  const tripArray = [] as tripDetails[]
  const stopArray = [] as StopTimesByTrip[]
  const stopTimes = stopTimesByTripID as any[]
  const stopInfoArray = [] as StopDetailsFromStaticData[]
  console.log(stopsInfo[0].stop_lat)
  if(routeID.length === 1) {
    tripDataByRouteID.forEach((trip) => {
     if(trip.route_id === routeID[0]) {
      stopTimes.forEach((stop) => {
        if(stop.trip_id === trip.trip_id) {
          stopsInfo.forEach((stopInformation) => {
            if(stopInformation.stop_id === stop.stop_id) {
              stopInfoArray.push({
                stop_id:  stopInformation.stop_id,
                stop_code:  stopInformation.stop_code,
                stop_name:  stopInformation.stop_name,
                stop_desc:  stopInformation.stop_desc,
                stop_lat:  stopInformation.stop_lat,
                stop_lon:  stopInformation.stop_lon,
                zone_id:  stopInformation.zone_id,
                stop_url:  stopInformation.stop_url,
                location_type:  stopInformation.location_type,
                parent_station: stopInformation.parent_station,
                stop_timezone:  stopInformation.stop_timezone,
                wheelchair_boarding:  stopInformation.wheelchair_boarding,
                platform_code:  stopInformation.platform_code
              })
            }
          })
          stopArray.push({
            trip_id:  stop.trip_id,
            arrival_time:  stop.arrival_time,
            departure_time:  stop.departure_time,
            stop_id:  stop.stop_id,
            stop_sequence:  stop.stop_sequence,
            stop_headsign:  stop.stop_headsign,
            pickup_type:  stop.pickup_type,
            drop_off_type:  stop.drop_off_type,
            timepoint:  stop.timepoint,
            stop_details: stopInfoArray
          })
        }
      })
      tripArray.push({
        tripID: trip.trip_id,
        tripHeadSign: trip.trip_headsign,
        routeID: trip.route_id,
        blockID: trip.block_id,
        direction: trip.direction_id,
        serviceID: trip.service_id,
        shapeID: trip.shape_id,
        stopTimesByTrip: stopArray
       })
     }
    })
  } else {
    console.log('figure out hopper thing later')
  }
     
  
  console.log(tripArray)

  return tripArray
}