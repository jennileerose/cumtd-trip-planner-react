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