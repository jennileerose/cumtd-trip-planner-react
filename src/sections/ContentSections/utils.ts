import { LatLngExpression } from 'leaflet';
import tripDataByRouteID from '../../staticData/trips.json'
import stopTimesByTripID from '../../staticData/stop_times.json'
import stopsByStopID from '../../staticData/stops.json'
import { TripDetails, StopTimesByTrip, StopDetailsFromStaticData, SubRoutes, TripDataBySubRouteType, TripsByDirection, TimeTableRowInfo, TimeTableStopData, TimeTableConstants, MainTimeTableTabs, DirectionTimeTableTabs, Departure, DateConversion } from '../../types';

  /*********
   * Inconsisitencies I've noticed:
   * 1). 9A has Fox & Devonshire in the data but the 9B does not despite the stop being listed in the book and on mtd.org as a time point in both directions. REF timepoints.js under BROWN
   * 2). I do not have an easy way to deterimine which route trips are UI semesters only and which others operate only during breaks. The only ones I know for sure are the Silver & Illini Limited are ones that run on UI breaks
   * 3) On the Navy Weekday Carle Fields South is listed in the book with the stop code 1842 but the data has 1018 and the website matches that
   * 4) The Silver Weekday late night is fridays only
   */

// Function to convert uppercase route IDs into camel Case
export function camelCase(str: string) {
  // Using replace method with regEx
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toUpperCase() : word.toLowerCase();
  }).replace(/\s+/g, '');
}

// function to color illi limited, green express and silver limited the same as their main services
export function getVariantColor(basicRouteID: string): string {
  let colorString = ''

  switch (basicRouteID) {
    case 'GREEN EXPRESS':
      colorString = 'GREEN'
      break;
    case 'SILVER LIMITED':
      colorString = 'SILVER'
      break;
    case 'ILLINI LIMITED':
      colorString = 'ILLINI'
      break;
    default:
      colorString = basicRouteID
      break;
  }
  return colorString
}

// attempt to get lat and lon for future use of leaflet.js
export function getStopCoords(
  stopPoints: any[]
): LatLngExpression[] {
  const stopCoordinates = [] as LatLngExpression[]
  stopPoints.forEach((stop) => {
    stopCoordinates.push([stop.stop_lat, stop.stop_lon] as LatLngExpression)
  })
  return stopCoordinates
}

export function setupStopList(fetchedData: any[]): any[] {
  let returnArray = [] as any[]

  return returnArray
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
export function arrangeRouteTripArrays(routeID: string): TripDetails[] {
  const tripArray = [] as TripDetails[]
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
export function sortTripsByDirection(tripArray: TripDetails[]): TripsByDirection[] {
  let eastTrips = [] as TripDetails[]
  let westTrips = [] as TripDetails[]
  let northTrips = [] as TripDetails[]
  let southTrips = [] as TripDetails[]
  let aTrips = [] as TripDetails[]
  let bTrips = [] as TripDetails[]
  let cTrips = [] as TripDetails[]
  let uTrips = [] as TripDetails[]
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
  let tempTripArray = [] as TripDetails[]
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
    let WkDayDaytimeRoutes = [] as TripDetails[]
    let WkDayEveningRoutes = [] as TripDetails[]
    let WkDayLateNightRoutes = [] as TripDetails[]
    let SatDaytimeRoutes = [] as TripDetails[]
    let SatEveningRoutes = [] as TripDetails[]
    let SatLateNightRoutes = [] as TripDetails[]
    let SunDaytimeRoutes = [] as TripDetails[]
    let SunEveningRoutes = [] as TripDetails[]
    let SunLateNightRoutes = [] as TripDetails[]
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
      let WkDayLateNightgSortedByDirection = sortTripsByDirection(WkDayLateNightRoutes)
      tripDataByRoutes.push({routeType: 'WkDayLateNight', routeData: WkDayLateNightgSortedByDirection})
      WkDayLateNightgSortedByDirection = []
    }
    if(SatDaytimeRoutes.length !== 0) {
      let SatDaytimeSortedByDirection = sortTripsByDirection(SatDaytimeRoutes)
      tripDataByRoutes.push({routeType: 'SatDaytime', routeData: SatDaytimeSortedByDirection})
      SatDaytimeSortedByDirection = []
    }
    if(SatEveningRoutes.length !== 0) {
      let SatEveningSortedByDirection = sortTripsByDirection(SatEveningRoutes)
      tripDataByRoutes.push({routeType: 'SatEvening', routeData: SatEveningSortedByDirection})
      SatEveningSortedByDirection = []
    }
    if(SatLateNightRoutes.length !== 0) {
      let SatLateNightSortedByDirection = sortTripsByDirection(SatLateNightRoutes)
      tripDataByRoutes.push({routeType: 'SatLateNight', routeData: SatLateNightSortedByDirection})
      SatLateNightSortedByDirection = []
    }
    if(SunDaytimeRoutes.length !== 0) {
      let SunDaytimeSortedByDirection = sortTripsByDirection(SunDaytimeRoutes)
      tripDataByRoutes.push({routeType: 'SunDaytime', routeData: SunDaytimeSortedByDirection})
      SunDaytimeSortedByDirection = []
    }
    if(SunEveningRoutes.length !== 0) {
      let SunEveningSortedByDirection = sortTripsByDirection(SunEveningRoutes)
      tripDataByRoutes.push({routeType: 'SunEvening', routeData: SunEveningSortedByDirection})
      SunEveningSortedByDirection = []
    }
    if(SunLateNightRoutes.length !== 0) {
      let SunLateNightSortedByDirection = sortTripsByDirection(SunLateNightRoutes)
      tripDataByRoutes.push({routeType: 'SunLateNight', routeData: SunLateNightSortedByDirection})
      SunLateNightSortedByDirection = []
    }
  }

  return tripDataByRoutes

}

export function setupRouteServiceTabs(baseRouteID: string, timetableConstants: TimeTableConstants): MainTimeTableTabs[] {
  let tempTimeTableTabs = [] as MainTimeTableTabs[]
  let tempLabelService = ''
  let tempRouteName = ''
  let tempLabelDirections = [] as DirectionTimeTableTabs[]
  let tempServiceNumber = ''
  timetableConstants.service.forEach((service) => {
      switch (service.serviceType) {
          case 'WkDayDaytime':
              tempLabelService = 'Weekday Day '
              break;
          case 'WkDayEvening':
              tempLabelService = 'Weekday Evening '
              break; 
          case 'WkDayLateNight':
              tempLabelService = 'Weekday Late Night '
              break;
          case 'SatDaytime':
              tempLabelService = 'Saturday Day '
              break;
          case 'SatEvening':
              tempLabelService = 'Saturday Evening '
              break;
          case 'SatLateNight':
              tempLabelService = 'Saturday Late Night '
              break;
          case 'SunDaytime':
              tempLabelService = 'Sunday Day '
              break;
          case 'SunEvening':
              tempLabelService = 'Sunday Evening '
              break;
          case 'SunLateNight':
              tempLabelService = 'Sunday Late Night '
              break;
      }
      switch (baseRouteID) {
        case 'YELLOW':
          if(service.serviceType === 'WkDayDaytime') {
            tempServiceNumber = '1'
          } else {
            tempServiceNumber = '100'
          }
          tempRouteName = camelCase(baseRouteID)
          break;
        case 'RED':
          if(service.serviceType === 'WkDayDaytime') {
            tempServiceNumber = '2'
          } else {
            tempServiceNumber = '20'
          }
          tempRouteName = camelCase(baseRouteID)
          break;
        case 'LAVENDER':
          if(service.serviceType === 'WkDayDaytime') {
            tempServiceNumber = '3'
          } else {
            tempServiceNumber = '30'
          }
          tempRouteName = camelCase(baseRouteID)
          break;
        case 'BLUE':
          tempServiceNumber = '4'
          tempRouteName = camelCase(baseRouteID)
           break;
        case 'GREEN':
          if(service.serviceType === 'WkDayDaytime') {
            tempServiceNumber = '5'
          } else {
            tempServiceNumber = '50'
          }
          tempRouteName = camelCase(baseRouteID)
          break;
        case 'GREEN EXPRESS':
          tempServiceNumber = '5'
          tempRouteName = 'Green Express'
           break;
        case 'ORANGE':
          tempServiceNumber = '6'
          tempRouteName = camelCase(baseRouteID)
           break;
        case 'GREY':
          if(service.serviceType === 'WkDayDaytime') {
            tempServiceNumber = '7'
          } else {
            tempServiceNumber = '70'
          }
          tempRouteName = camelCase(baseRouteID)
           break;
        case 'BRONZE':
          tempServiceNumber = '8'
          tempRouteName = camelCase(baseRouteID)
           break;
        case 'BROWN':
          tempServiceNumber = '9'
          tempRouteName = camelCase(baseRouteID)
           break;
        case 'GOLD':
          tempServiceNumber = '10'
          tempRouteName = camelCase(baseRouteID)
           break;
        case 'RUBY':
          if(service.serviceType === 'WkDayDaytime') {
            tempServiceNumber = '11'
          } else {
            tempServiceNumber = '110'
          }
          tempRouteName = camelCase(baseRouteID)
           break;
        case 'TEAL':
          if(service.serviceType === 'WkDayDaytime') {
            tempServiceNumber = '12'
          } else {
            tempServiceNumber = '120'
          }
          tempRouteName = camelCase(baseRouteID)
           break;
        case 'SILVER':
          if(service.serviceType === 'WkDayDaytime') {
            tempServiceNumber = '13'
          } else {
            tempServiceNumber = '130'
          }
          tempRouteName = camelCase(baseRouteID)
           break;
        case 'SILVER LIMITED':
          if(service.serviceType === 'WkDayDaytime') {
            tempServiceNumber = '13'
          } else {
            tempServiceNumber = '130'
          }
          tempRouteName = 'Silver Limited'
           break;
        case 'NAVY':
          tempServiceNumber = '14'
          tempRouteName = camelCase(baseRouteID)
          break;
        case 'PINK':
          tempServiceNumber = '16'
          tempRouteName = camelCase(baseRouteID)
          break;
        case 'LIME':
          tempServiceNumber = '180'
          tempRouteName = camelCase(baseRouteID)
           break;
        case 'RAVEN':
          tempServiceNumber = '21'
          tempRouteName = camelCase(baseRouteID)
           break;
        case 'ILLINI':
          if(service.serviceType === 'WkDayDaytime') {
            tempServiceNumber = '22'
          } else {
            tempServiceNumber = '220'
          }
          tempRouteName = camelCase(baseRouteID)
            break;
        case 'ILLINI LIMITED':
          if(service.serviceType === 'WkDayDaytime') {
            tempServiceNumber = '22'
          } else {
            tempServiceNumber = '220'
          }
          tempRouteName = 'Illini Limited'
          break;
        case 'LINK':
          tempServiceNumber = '24'
          tempRouteName = camelCase(baseRouteID)
          break;
     }
      service.directions.forEach((direction) => {
        tempLabelDirections.push({
          label: direction.directionLabel,
          content: tempServiceNumber + ' ' + tempRouteName + ' ' + direction.directionLabel + ' ' + tempLabelService
        })
      })
      tempTimeTableTabs.push({
          label:  tempLabelService,
          content: tempLabelDirections
      })
      tempLabelDirections = []
  })
  return tempTimeTableTabs
}

// takes the full list of stop data and pares it down to just the timepoint stops
export function getTimetableStopData(headerStopIDs: string[]): TimeTableStopData[] {

  const timeTableHeaders = [] as TimeTableStopData[]

  headerStopIDs.forEach((timepointStopIDs) => {
    stopsByStopID.forEach((stop) => {
      if(stop.stop_id === timepointStopIDs) {
        timeTableHeaders.push({
          stopID: stop.stop_id,
          stopName: stop.stop_name,
          stopCode: stop.stop_code
        })
      }
    })
  })

  return timeTableHeaders
}

export function sortTripsByDeparture(trips: TimeTableRowInfo[]): DateConversion[] {

  let tempTrips = [] as DateConversion[]
  let paredTempTrips = [] as DateConversion[]
  let tempSortedTrips = [] as DateConversion[]

  trips.forEach((trip, tripIndex) => {
    trip.departures.forEach((departure) => {
      if(departure.departureTime !== "0") {
        let timeStr = departure.departureTime
        let translatedTime = new Date(), time = timeStr.split(/:|-/g);
        translatedTime.setHours(parseInt(time[0]));
        translatedTime.setMinutes(parseInt(time[1]));
        tempTrips.push({
          tripIndex: tripIndex,
          tripID: trip.tripID,
          translatedTime: translatedTime
        })
      }
    })
  })

  const key = 'tripIndex'

  paredTempTrips = [...new Map(tempTrips.map(item =>
    [item[key], item])).values()];
  
  tempSortedTrips = paredTempTrips.sort((a, b) => a.translatedTime.getTime() - b.translatedTime.getTime())

  return tempSortedTrips
}

// filter to catch stops that are listed in the departures list
function filterIt(arr: Departure[], searchKey: string) {
  return arr.filter(function(obj) {
    return obj['stopID'].includes(searchKey);
  });
}

// This function takes timetable data and formats it by translating any 24+ hour timestamps and also sorts the table by times and ALSO marks hopper and alt routes
export function getDepartureRows(tripsByService: TripDataBySubRouteType, direction: string, timetableStopIDs: string[]): TimeTableRowInfo[] {

  let formattedTimetableData = [] as TimeTableRowInfo[]
  let unsortedDepartures = [] as Departure[]
  let unsortedDepartures2 = [] as Departure[]
  let sortedDepartureData = [] as Departure[]
  let sortedTripInfo = [] as DateConversion[]
  let unsortedTimeTableRowData = [] as TimeTableRowInfo[]
  let unsortedTimeTableRowData2 = [] as TimeTableRowInfo[]
  let allTripsByDirection = [] as TripDetails[]
  let tempStopTimesByTrip = [] as StopTimesByTrip[]
  let tempFilteredTripArray = [] as TripDetails[]

  tripsByService.routeData.forEach((routeData) => {
    if(routeData.direction === direction) {
      routeData.trips.forEach((trip: TripDetails) => {
        allTripsByDirection.push(trip)
      })
    }
  })

  allTripsByDirection.forEach((trip) => {
    trip.stopTimesByTrip.forEach((stopTime) => {
      timetableStopIDs.forEach((timepointStopID) => {
        if(stopTime.stop_id === timepointStopID) {
          tempStopTimesByTrip.push({
            trip_id:  stopTime.trip_id,
            arrival_time:  stopTime.arrival_time,
            departure_time:  stopTime.departure_time,
            stop_id:  stopTime.stop_id,
            stop_sequence:  stopTime.stop_sequence,
            stop_headsign:  stopTime.stop_headsign,
            pickup_type:  stopTime.pickup_type,
            drop_off_type:  stopTime.drop_off_type,
            timepoint:  stopTime.timepoint,
            stop_details: stopTime.stop_details
          })
        }
      })
    })
    tempFilteredTripArray.push({
      tripID: trip.tripID,
      tripHeadSign: trip.tripHeadSign,
      routeID: trip.routeID,
      blockID: trip.blockID,
      direction: trip.direction,
      serviceID: trip.serviceID,
      shapeID: trip.shapeID,
      stopTimesByTrip: tempStopTimesByTrip
    })
    tempStopTimesByTrip = []
  })

  tempFilteredTripArray.forEach((trip) => {
    trip.stopTimesByTrip.forEach((stop) => {
      unsortedDepartures.push({
        stopID: stop.stop_id,
        departureTime: stop.departure_time
      })
    })
    if(trip.routeID.includes("HOPPER")) {
      let routeVariantName = ''
      switch (trip.routeID) {
        case 'GREENHOPPER EVENING':
          routeVariantName = 'GREENHOPPER'
          break;
        case 'GREENHOPPER EVENING SATURDAY':
          routeVariantName = 'GREENHOPPER'
          break;
        default:
          routeVariantName = trip.routeID
      }
      unsortedTimeTableRowData.push({
        tripID: trip.tripID,
        routeID: routeVariantName.toLowerCase(),
        departures: unsortedDepartures
      })
    } else {
      unsortedTimeTableRowData.push({
        tripID: trip.tripID,
        routeID: 'nonhopper',
        departures: unsortedDepartures
      })
    }
    
    unsortedDepartures = []
  })

  // add dash string to stops in this timetable that aren't visited
  unsortedTimeTableRowData.forEach((row) => {
    timetableStopIDs.forEach((timepointStopID) => {
      let filteredRows = filterIt(row.departures, timepointStopID)
      if(filteredRows.length !== 0) {
        unsortedDepartures2.push({
          stopID: filteredRows[0].stopID,
          departureTime: filteredRows[0].departureTime
        })
      } else {
        unsortedDepartures2.push({
          stopID: timepointStopID,
          departureTime: '0'
        })
      }
    })
    unsortedTimeTableRowData2.push({
      tripID: row.tripID,
      routeID: row.routeID,
      departures: unsortedDepartures2
    })
    unsortedDepartures2 = []
  })

  // call the sorting function to sort the trips
  sortedTripInfo = sortTripsByDeparture(unsortedTimeTableRowData2)

  // use the sorted DateConversion object to set up the final timetable data
  sortedTripInfo.forEach((sorted) => {
    unsortedTimeTableRowData2.forEach((row) => {
      if(sorted.tripID === row.tripID) {
        row.departures.forEach((rowDeparture) => {
          let translatedTime = ''
          let time = rowDeparture.departureTime.split(':')
          let hour = time[0]
          if(parseInt(hour) > 24){
            translatedTime = (parseInt(hour) - 24).toString() + ':' + time[1]
          } else if (rowDeparture.departureTime === '0') {
            translatedTime = '-'
          } else {
            translatedTime = time[0] + ':' + time[1]
          }
          sortedDepartureData.push({
            stopID: rowDeparture.stopID,
            departureTime: translatedTime
          })
        })
        if(row.routeID !== undefined) {
          formattedTimetableData.push({
            tripID: row.tripID,
            routeID: row.routeID,
            departures: sortedDepartureData
          })
        } else {
          formattedTimetableData.push({
            tripID: row.tripID,
            routeID: 'NonHopper',
            departures: sortedDepartureData
          })
        }
        
        sortedDepartureData = []
      }
    })
  })

  return formattedTimetableData
} 