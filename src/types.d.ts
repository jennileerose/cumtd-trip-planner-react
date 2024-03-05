export type RouteDetails = {
    routeColor: string,
    routeID: string,
    routeLongName: string,
    routeShortName: number | string,
    routeTextColor: string
}

export type BasicRoutes = {
    routeID: string,
    routeLongName: string
}

export type SubRoutes = {
    routeID: string,
    routeType: string,
}

export type TripDataBySubRouteType = {
    routeType: string
    routeData: tripsByDirection[]
}

export type TripsByDirection = {
    direction: string,
    trips: tripDetails[]
}

export type CUMTDRoute = {
    time: string,
    changesetID: string,
    newChangeset: boolean,
    status: {
        code: number,
        msg: string,
    },
    rqst: {
        method: string,
        params: {
            routeID: string
        }
    },
    routes: RouteDetails[]
}

export type StopPoint = {
    code: string
    stopID: string,
    stopLat: number,
    stopLon: number,
    stop_name: string
}

export type StopDetails = {
    stopID: string,
    stopName: string,
    code: string,
    stopPoints: StopPoint[]
}

export type CUMTDStop = {
    time: string,
    changesetID: string,
    newChangeset: boolean,
    status: {
        code: number,
        msg: string,
    },
    rqst: {
        method: string,
        params: {
            routeID: string
        }
    },
    stops: StopDetails[]
}

export type StopDetailsFromStaticData = {
    stop_id:  string,
    stop_code:  string,
    stop_name:  string,
    stop_desc:  string,
    stop_lat:  string,
    stop_lon:  string,
    zone_id:  string,
    stop_url:  string,
    location_type:  string,
    parent_station: string,
    stop_timezone:  string,
    wheelchair_boarding:  string,
    platform_code:  string
}

export type StopTimesByTrip = {
    trip_id:  string,
    arrival_time:  string,
    departure_time:  string,
    stop_id:  string,
    stop_sequence:  number,
    stop_headsign:  string,
    pickup_type:  number,
    drop_off_type:  number,
    timepoint:  number,
    stop_details: StopDetailsFromStaticData[]
}

export type tripDetails = {
    tripID: string,
    tripHeadSign: string,
    routeID: string,
    blockID: string,
    direction: string,
    serviceID: string,
    shapeID: string,
    stopTimesByTrip: StopTimesByTrip[]
}

export type DepartureDetails = {
    stopID: string,
    headSign: string,
    route: RouteDetails,
    trip: tripDetails,
    vehicleID: string,
    origin: {
        stopID: string
    },
    destination: {
        stopID: string
    },
    isMonitored: boolean,
    isScheduled: boolean,
    isIStop: boolean,
    scheduled: string,
    expected: string,
    expectedMins: number,
    location: {
        lat: number,
        lon: number
    }
}

export type RouteDeparture = {
    time: string,
    changesetID: string,
    newChangeset: boolean,
    status: {
        code: number,
        msg: string,
    },
    rqst: {
        method: string,
        params: {
            routeID: string
        }
    },
    departures: DepartureDetails[]
}

export type StopSearchDetails = {
    key: string,
    index: number,
    value: string
}

export type TripInfo = {
    trip_id: string,
    trip_headsign: string,
    route_id: string,
    block_id: string,
    direction: string,
    service_id: string,
    shape_id: string
}

export type TimeTableInfo = {
    routeID: string,
    direction: string,
    departureTime: string,
}