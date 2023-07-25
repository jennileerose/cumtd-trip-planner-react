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

