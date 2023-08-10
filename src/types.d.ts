export type RouteDetails = {
    routeColor: string,
    routeID: string,
    routeLongName: string,
    routeShortName: number | string,
    routeTextColor: string
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

export type tripDetails = {
    tripID: string,
    tripHeadSign: string,
    routeID: string,
    blockID: string,
    direction: string,
    serviceID: string,
    shapeID: string,
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