import { LatLngExpression } from 'leaflet';
import tripDataByRouteID from '../../staticData/trips.json'
import stopTimesByTripID from '../../staticData/stop_times.json'
import stopsByStopID from '../../staticData/stops.json'
import { tripDetails, StopTimesByTrip, StopDetailsFromStaticData, SubRoutes, TripDataBySubRouteType, TripsByDirection } from '../../types';

// attempt to get lat and lon for future use of leaflet.js
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

// returns a simplified trip list for the route selection dropdown
export function getRouteList(): {routeID: string, routeLongName: string}[] {
  const routesList = [
    {
      routeID: 'YELLOW',
      routeLongName: 'Yellow'
    },
    {
      routeID: 'RED',
      routeLongName: 'Red'
    },
    {
      routeID: 'LAVENDER',
      routeLongName: 'Lavender'
    },
    {
      routeID: 'BLUE',
      routeLongName: 'Blue'
    },
    {
      routeID: 'GREEN',
      routeLongName: 'Green'
    },
    {
      routeID: 'GREEN EXPRESS',
      routeLongName: 'Green Express'
    },
    {
      routeID: 'ORANGE',
      routeLongName: 'Orange'
    },
    {
      routeID: 'GREY',
      routeLongName: 'Grey'
    },
    {
      routeID: 'BRONZE',
      routeLongName: 'Bronze'
    },
    {
      routeID: 'BROWN',
      routeLongName: 'Brown'
    },
    {
      routeID: 'GOLD',
      routeLongName: 'Gold'
    },
    {
      routeID: 'RUBY',
      routeLongName: 'Ruby'
    },
    {
      routeID: 'TEAL',
      routeLongName: 'Teal'
    },
    {
      routeID: 'SILVER',
      routeLongName: 'Silver'
    },
    {
      routeID: 'SILVER LIMITED',
      routeLongName: 'Silver Limited'
    },
    {
      routeID: 'NAVY',
      routeLongName: 'Navy'
    },
    {
      routeID: 'PINK',
      routeLongName: 'Pink'
    },
    {
      routeID: 'LIME',
      routeLongName: 'Lime'
    },
    {
      routeID: 'RAVEN',
      routeLongName: 'Raven'
    },
    {
      routeID: 'ILLINI',
      routeLongName: 'Illini'
    },
    {
      routeID: 'ILLINI LIMITED',
      routeLongName: 'Illini Limited'
    },
    {
      routeID: 'LINK',
      routeLongName: 'Link'
    }
  ] 

  return routesList
}

// returns a list of sub-route arrays based on the selected simplified route
export function getSubRoutesList(routeIDFromSelect: string): SubRoutes[] {
  let subRoutesSelected = [] as SubRoutes[]

  switch (routeIDFromSelect) {
    case 'YELLOW':
      subRoutesSelected.push({routeID: 'YELLOW', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'YELLOWHOPPER', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: '1 YELLOW ALT', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: '1N YELLOW ALT', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: '1S YELLOW ALT', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'YELLOW EVENING', routeType: 'WkDayEvening'})
      subRoutesSelected.push({routeID: 'YELLOW LATE NIGHT', routeType: 'WkDayLateNight'})
      subRoutesSelected.push({routeID: 'YELLOW SATURDAY', routeType: 'SatDaytime'})
      subRoutesSelected.push({routeID: 'YELLOW EVENING SATURDAY', routeType: 'SatEvening'})
      subRoutesSelected.push({routeID: 'YELLOW LATE NIGHT SATURDAY', routeType: 'SatLateNight'})
      subRoutesSelected.push({routeID: 'YELLOW SUNDAY', routeType: 'SunDaytime'})
      subRoutesSelected.push({routeID: 'YELLOW LATE NIGHT SUNDAY', routeType: 'SunLateNight'})
       break;
    case 'RED':
      subRoutesSelected.push({routeID: 'RED', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'RED SATURDAY', routeType: 'SatDaytime'})
      break;
    case 'LAVENDER':
      subRoutesSelected.push({routeID: '3S LAVENDER ALT', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'LAVENDER', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'LAVENDER ALT', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'LAVENDER SATURDAY', routeType: 'SatDaytime'})
      subRoutesSelected.push({routeID: 'LAVENDER SUNDAY', routeType: 'SunDaytime'})
       break;
    case 'BLUE':
      subRoutesSelected.push({routeID: 'BLUE', routeType: 'WkDayDaytime'})
       break;
    case 'GREEN':
      subRoutesSelected.push({routeID: '5W GREEN ALT 2', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'GREEN', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'GREEN ALT', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'GREEN EVENING', routeType: 'WkDayEvening'})
      subRoutesSelected.push({routeID: 'GREEN EVENING SATURDAY', routeType: 'SatEvening'})
      subRoutesSelected.push({routeID: 'GREEN LATE NIGHT', routeType: 'WkDayLateNight'})
      subRoutesSelected.push({routeID: 'GREEN LATE NIGHT SATURDAY', routeType: 'SatLateNight'}) 
      subRoutesSelected.push({routeID: 'GREEN LATE NIGHT SUNDAY', routeType: 'SunLateNight'})
      subRoutesSelected.push({routeID: 'GREEN SATURDAY', routeType: 'SatDaytime'})
      subRoutesSelected.push({routeID: 'GREEN SUNDAY', routeType: 'SunDaytime'})
      subRoutesSelected.push({routeID: 'GREENHOPPER', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'GREENHOPPER EVENING', routeType: 'WkDayEvening'})
      subRoutesSelected.push({routeID: 'GREENHOPPER EVENING SATURDAY', routeType: 'SatEvening'})
       break;
    case 'GREEN EXPRESS':
      subRoutesSelected.push({routeID: '5E GREEN EXPRESS 1 ALT', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: '5E GREEN EXPRESS ALT', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: '5W GREEN EXPRESS 2', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'GREEN EXPRESS', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'GREEN EXPRESS ALT', routeType: 'WkDayDaytime'})
       break;
    case 'ORANGE':
      subRoutesSelected.push({routeID: 'ORANGE', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'ORANGE ALT', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'ORANGEHOPPER', routeType: 'WkDayDaytime'})
       break;
    case 'GREY':
      subRoutesSelected.push({routeID: '7E GREY ALT', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: '7W GREY ALT', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'GREY', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'GREY ALT', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'GREY EVENING', routeType: 'WkDayEvening'})
      subRoutesSelected.push({routeID: 'GREY EVENING SATURDAY', routeType: 'SatEvening'})
      subRoutesSelected.push({routeID: 'GREY SATURDAY', routeType: 'SatDaytime'})
      subRoutesSelected.push({routeID: 'GREY SUNDAY', routeType: 'SunDaytime'})
       break;
    case 'BRONZE':
      subRoutesSelected.push({routeID: 'BRONZE', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'BRONZE ALT', routeType: 'WkDayDaytime'})
       break;
    case 'BROWN':
      subRoutesSelected.push({routeID: 'BROWN', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'BROWN ALT', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'BROWN ALT PM', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'BROWN ALT1', routeType: 'WkDayDaytime'})
       break;
    case 'GOLD':
      subRoutesSelected.push({routeID: '10W GOLD ALT', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'GOLD', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'GOLD ALT', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'GOLDHOPPER', routeType: 'WkDayDaytime'})
       break;
    case 'RUBY':
      subRoutesSelected.push({routeID: 'RUBY', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'RUBY EVENING', routeType: 'WkDayEvening'})
      subRoutesSelected.push({routeID: 'RUBY EVENING SATURDAY', routeType: 'SatEvening'})
      subRoutesSelected.push({routeID: 'RUBY SATURDAY', routeType: 'SatDaytime'})
      subRoutesSelected.push({routeID: 'RUBY SUNDAY', routeType: 'SunDaytime'})
       break;
    case 'TEAL':
      subRoutesSelected.push({routeID: 'TEAL', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'TEAL EVENING', routeType: 'WkDayEvening'})
      subRoutesSelected.push({routeID: 'TEAL EVENING SATURDAY', routeType: 'SatEvening'})
      subRoutesSelected.push({routeID: 'TEAL LATE NIGHT', routeType: 'WkDayLateNight'})
      subRoutesSelected.push({routeID: 'TEAL LATE NIGHT SATURDAY', routeType: 'SatLateNight'})
      subRoutesSelected.push({routeID: 'TEAL LATE NIGHT SUNDAY', routeType: 'SunLateNight'})
      subRoutesSelected.push({routeID: 'TEAL SATURDAY', routeType: 'SatDaytime'})
      subRoutesSelected.push({routeID: 'TEAL SUNDAY', routeType: 'SunDaytime'})
       break;
    case 'SILVER':
      subRoutesSelected.push({routeID: 'SILVER', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'SILVER EVENING', routeType: 'WkDayEvening'})
      subRoutesSelected.push({routeID: 'SILVER EVENING SATURDAY', routeType: 'SatEvening'})
      subRoutesSelected.push({routeID: 'SILVER EVENING SUNDAY', routeType: 'SunEvening'})
      subRoutesSelected.push({routeID: 'SILVER LATE NIGHT', routeType: 'WkDayLateNight'})
      subRoutesSelected.push({routeID: 'SILVER SATURDAY', routeType: 'SatDaytime'})
      subRoutesSelected.push({routeID: 'SILVER SUNDAY', routeType: 'SunDaytime'})
       break;
    case 'SILVER LIMITED':
      subRoutesSelected.push({routeID: 'SILVER LIMITED', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'SILVER LIMITED EVENING', routeType: 'WkDayEvening'})
      subRoutesSelected.push({routeID: 'SILVER LIMITED EVENING SATURDAY', routeType: 'SatEvening'})
      subRoutesSelected.push({routeID: 'SILVER LIMITED SATURDAY', routeType: 'SatDaytime'})
      subRoutesSelected.push({routeID: 'SILVER LIMITED SUNDAY', routeType: 'SunDaytime'})
       break;
    case 'NAVY':
      subRoutesSelected.push({routeID: 'NAVY', routeType: 'WkDayDaytime'})
       break;
    case 'PINK':
      subRoutesSelected.push({routeID: 'PINK', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'PINK ALT', routeType: 'WkDayDaytime'})
       break;
    case 'LIME':
      subRoutesSelected.push({routeID: 'LIME EVENING', routeType: 'WkDayEvening'})
      subRoutesSelected.push({routeID: 'LIME EVENING SATURDAY', routeType: 'SatEvening'})
      subRoutesSelected.push({routeID: 'LIME SATURDAY', routeType: 'SatDaytime'})
      subRoutesSelected.push({routeID: 'LIME SUNDAY', routeType: 'SunDaytime'})
       break;
    case 'RAVEN':
      subRoutesSelected.push({routeID: 'RAVEN', routeType: 'WkDayDaytime'})
       break;
    case 'ILLINI':
      subRoutesSelected.push({routeID: 'ILLINI', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'ILLINI EVENING', routeType: 'WkDayEvening'})
      subRoutesSelected.push({routeID: 'ILLINI EVENING SATURDAY', routeType: 'SatEvening'})
      subRoutesSelected.push({routeID: 'ILLINI EVENING SUNDAY', routeType: 'SunEvening'})
        break;
    case 'ILLINI LIMITED':
      subRoutesSelected.push({routeID: 'ILLINI LIMITED', routeType: 'WkDayDaytime'})
      subRoutesSelected.push({routeID: 'ILLINI LIMITED EVENING', routeType: 'WkDayEvening'})
      subRoutesSelected.push({routeID: 'ILLINI LIMITED EVENING SATURDAY', routeType: 'SatEvening'})
      subRoutesSelected.push({routeID: 'ILLINI LIMITED SATURDAY', routeType: 'SatDaytime'})
      subRoutesSelected.push({routeID: 'ILLINI LIMITED SUNDAY', routeType: 'SunDaytime'})
      break;
    case 'LINK':
      subRoutesSelected.push({routeID: 'LINK', routeType: 'WkDayDaytime'})
      break;
 }

 return subRoutesSelected
}

// combines stops by trip and stop info data into the trips array.
export function arrangeRouteTripArrays(routeID: string): tripDetails[] {
  const tripArray = [] as tripDetails[]
  let stopArray = [] as StopTimesByTrip[]
  const stopTimes = stopTimesByTripID as any[]
  let stopInfoArray = [] as StopDetailsFromStaticData[]

  tripDataByRouteID.forEach((trip) => {
    if(trip.route_id === routeID) {
     stopTimes.forEach((stopTime) => {
       if(stopTime.trip_id === trip.trip_id) {
         stopsByStopID.forEach((stopInfo) => {
           if(stopInfo.stop_id === stopTime.stop_id) {
             stopInfoArray.push({
               stop_id:  stopInfo.stop_id,
               stop_code:  stopInfo.stop_code,
               stop_name:  stopInfo.stop_name,
               stop_desc:  stopInfo.stop_desc,
               stop_lat:  stopInfo.stop_lat,
               stop_lon:  stopInfo.stop_lon,
               zone_id:  stopInfo.zone_id,
               stop_url:  stopInfo.stop_url,
               location_type:  stopInfo.location_type,
               parent_station: stopInfo.parent_station,
               stop_timezone:  stopInfo.stop_timezone,
               wheelchair_boarding:  stopInfo.wheelchair_boarding,
               platform_code:  stopInfo.platform_code
             })
           }
         })
         stopArray.push({
           trip_id:  stopTime.trip_id,
           arrival_time:  stopTime.arrival_time,
           departure_time:  stopTime.departure_time,
           stop_id:  stopTime.stop_id,
           stop_sequence:  stopTime.stop_sequence,
           stop_headsign:  stopTime.stop_headsign,
           pickup_type:  stopTime.pickup_type,
           drop_off_type:  stopTime.drop_off_type,
           timepoint:  stopTime.timepoint,
           stop_details: stopInfoArray
         })
         stopInfoArray = []
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
     stopArray = []
    }
   })
   return tripArray
}

// takes trip array data and sorts it by direction
export function sortTripsByDirection(tripArray: tripDetails[]): TripsByDirection[] {
  let eastTrips = [] as tripDetails[]
  let westTrips = [] as tripDetails[]
  let northTrips = [] as tripDetails[]
  let southTrips = [] as tripDetails[]
  let aTrips = [] as tripDetails[]
  let bTrips = [] as tripDetails[]
  let cTrips = [] as tripDetails[]
  let uTrips = [] as tripDetails[]
  let sortedTrips = [] as TripsByDirection[]

  tripArray.forEach((trip) => {
    switch(trip.direction) {
      case 'east':
        eastTrips.push(trip)
        break;
      case 'west':
        westTrips.push(trip)
        break;
      case 'north':
        northTrips.push(trip)
        break;
      case 'south':
        southTrips.push(trip)
        break;
      case 'a':
        aTrips.push(trip)
        break;
      case 'b':
        bTrips.push(trip)
        break;
      case 'c':
        cTrips.push(trip)
        break;
      case 'u':
        uTrips.push(trip)
        break;
    }
  })
  if(eastTrips.length !== 0) {
    sortedTrips.push({direction: 'East', trips: eastTrips})
  }
  if(westTrips.length !== 0) {
    sortedTrips.push({direction: 'West', trips: westTrips})
  }
  if(northTrips.length !== 0) {
    sortedTrips.push({direction: 'North', trips: northTrips})
  }
  if(southTrips.length !== 0) {
    sortedTrips.push({direction: 'South', trips: southTrips})
  }
  if(aTrips.length !== 0) {
    sortedTrips.push({direction: 'A', trips: aTrips})
  }
  if(bTrips.length !== 0) {
    sortedTrips.push({direction: 'B', trips: bTrips})
  }
  if(cTrips.length !== 0) {
    sortedTrips.push({direction: 'Champaign', trips: cTrips})
  }
  if(uTrips.length !== 0) {
    sortedTrips.push({direction: 'Urbana', trips: uTrips})
  }

  return sortedTrips
}

// functions to select from static data trip file and retun to the routes component
export function getTripData(routeIDs: SubRoutes[]): TripDataBySubRouteType[] {
  let tripDataByRoutes = [] as TripDataBySubRouteType[]
  let tempTripArray = [] as tripDetails[]
  let tempTripArrayByDirection = [] as TripsByDirection[]
  // Applies  to Link, Navy, Raven, and Blue routes
  if(routeIDs.length === 1) {
    tempTripArray = arrangeRouteTripArrays(routeIDs[0].routeID)
    if(routeIDs[0].routeID !== 'RAVEN') {
      tempTripArrayByDirection = sortTripsByDirection(tempTripArray)
      tripDataByRoutes = [{
        routeType: 'WkDayDaytime',
        routeData: tempTripArrayByDirection
      }]
    } else {
      let ravenTrips = [] as TripsByDirection[]
      ravenTrips.push({direction: 'Clockwise', trips: tempTripArray})
      tripDataByRoutes = [{
        routeType: 'WkDayDaytime',
        routeData: ravenTrips
      }]
    }
    tempTripArray = []
  } else {
    let WkDayDaytimeRoutes = [] as tripDetails[]
    let WkDayEveningRoutes = [] as tripDetails[]
    let WkDayLateNightRoutes = [] as tripDetails[]
    let SatDaytimeRoutes = [] as tripDetails[]
    let SatEveningRoutes = [] as tripDetails[]
    let SatLateNightRoutes = [] as tripDetails[]
    let SunDaytimeRoutes = [] as tripDetails[]
    let SunEveningRoutes = [] as tripDetails[]
    let SunLateNightRoutes = [] as tripDetails[]
    routeIDs.forEach((route) => {
      switch (route.routeType) {
        case 'WkDayDaytime':
          tempTripArray = arrangeRouteTripArrays(route.routeID)
          tempTripArray.forEach((tempTrip => {
            WkDayDaytimeRoutes.push(tempTrip)
          }))
          tempTripArray = []
          break;
        case 'WkDayEvening':
          tempTripArray = arrangeRouteTripArrays(route.routeID)
          tempTripArray.forEach((tempTrip => {
            WkDayEveningRoutes.push(tempTrip)
          }))
          tempTripArray = []
          break;
        case 'WkDayLateNight':
          tempTripArray = arrangeRouteTripArrays(route.routeID)
          tempTripArray.forEach((tempTrip => {
            WkDayLateNightRoutes.push(tempTrip)
          }))
          tempTripArray = []
          break;
        case 'SatDaytime':
          tempTripArray = arrangeRouteTripArrays(route.routeID)
          tempTripArray.forEach((tempTrip => {
            SatDaytimeRoutes.push(tempTrip)
          }))
          tempTripArray = []
          break; 
        case 'SatEvening':
          tempTripArray = arrangeRouteTripArrays(route.routeID)
          tempTripArray.forEach((tempTrip => {
            SatEveningRoutes.push(tempTrip)
          }))
          tempTripArray = []
          break;
        case 'SatLateNight':
          tempTripArray = arrangeRouteTripArrays(route.routeID)
          tempTripArray.forEach((tempTrip => {
            SatLateNightRoutes.push(tempTrip)
          }))
          tempTripArray = []
          break;
        case 'SunDaytime':
          tempTripArray = arrangeRouteTripArrays(route.routeID)
          tempTripArray.forEach((tempTrip => {
            SunDaytimeRoutes.push(tempTrip)
          }))
          tempTripArray = []
          break;
        case 'SunEvening':
          tempTripArray = arrangeRouteTripArrays(route.routeID)
          tempTripArray.forEach((tempTrip => {
            SunEveningRoutes.push(tempTrip)
          }))
          tempTripArray = []
          break;
        case 'SunLateNight':
          tempTripArray = arrangeRouteTripArrays(route.routeID)
          tempTripArray.forEach((tempTrip => {
            SunLateNightRoutes.push(tempTrip)
          }))
          tempTripArray = []
          break;
      }
    })
    if(WkDayDaytimeRoutes.length !== 0) {
      let WkDayDaytimeSortedByDirection = sortTripsByDirection(WkDayDaytimeRoutes)
      tripDataByRoutes.push({routeType: 'WkDayDaytime', routeData: WkDayDaytimeSortedByDirection})
      WkDayDaytimeSortedByDirection = []
    }
    if(WkDayEveningRoutes.length !== 0) {
      let WkDayEveningSortedByDirection = sortTripsByDirection(WkDayEveningRoutes)
      tripDataByRoutes.push({routeType: 'WkDayEvening', routeData: WkDayEveningSortedByDirection})
      WkDayEveningSortedByDirection = []
    }
    if(WkDayLateNightRoutes.length !== 0) {
      let WkDayLateNightgSortedByDirection = sortTripsByDirection(WkDayEveningRoutes)
      tripDataByRoutes.push({routeType: 'WkDayLateNight', routeData: WkDayLateNightgSortedByDirection})
      WkDayLateNightgSortedByDirection = []
    }
    if(SatDaytimeRoutes.length !== 0) {
      let SatDaytimeSortedByDirection = sortTripsByDirection(WkDayEveningRoutes)
      tripDataByRoutes.push({routeType: 'SatDaytime', routeData: SatDaytimeSortedByDirection})
      SatDaytimeSortedByDirection = []
    }
    if(SatEveningRoutes.length !== 0) {
      let SatEveningSortedByDirection = sortTripsByDirection(WkDayEveningRoutes)
      tripDataByRoutes.push({routeType: 'SatEvening', routeData: SatEveningSortedByDirection})
      SatEveningSortedByDirection = []
    }
    if(SatLateNightRoutes.length !== 0) {
      let SatLateNightSortedByDirection = sortTripsByDirection(WkDayEveningRoutes)
      tripDataByRoutes.push({routeType: 'SatLateNight', routeData: SatLateNightSortedByDirection})
      SatLateNightSortedByDirection = []
    }
    if(SunDaytimeRoutes.length !== 0) {
      let SunDaytimeSortedByDirection = sortTripsByDirection(WkDayEveningRoutes)
      tripDataByRoutes.push({routeType: 'SunDaytime', routeData: SunDaytimeSortedByDirection})
      SunDaytimeSortedByDirection = []
    }
    if(SunEveningRoutes.length !== 0) {
      let SunEveningSortedByDirection = sortTripsByDirection(WkDayEveningRoutes)
      tripDataByRoutes.push({routeType: 'SunEvening', routeData: SunEveningSortedByDirection})
      SunEveningSortedByDirection = []
    }
    if(SunLateNightRoutes.length !== 0) {
      let SunLateNightSortedByDirection = sortTripsByDirection(WkDayEveningRoutes)
      tripDataByRoutes.push({routeType: 'SunLateNight', routeData: SunLateNightSortedByDirection})
      SunLateNightSortedByDirection = []
    }
  }

  return tripDataByRoutes

}

// takes the full list of trip data and pares it down to just the timepoint stops
export function getTimetableStopData(fullTripsList: TripDataBySubRouteType): TripDataBySubRouteType[] {
  console.log(fullTripsList)
  let timetableStops = [] as TripDataBySubRouteType[]

  return timetableStops
}