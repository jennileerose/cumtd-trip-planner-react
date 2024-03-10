import React, { useState, useEffect, ReactElement } from 'react'
import { Departure, DirectionsWithTTStopIDs, TimeTableRowInfo, TimeTableStopData, TripDataBySubRouteType } from '../../types'
import { useColorMode} from '@chakra-ui/react'
// import { colors } from '../../theme/colors'
import { getDepartureRows, getTimetableStopData } from './utils'

export default function TimeTablePanel(
    {
        basicRouteID,
        timetableConstantsServicesByDirection, 
        tripsByService,
        timetableTitle
    }:{
        basicRouteID: string,
        timetableConstantsServicesByDirection: DirectionsWithTTStopIDs,
        tripsByService: TripDataBySubRouteType,
        timetableTitle: string
    }): ReactElement {

        const colorMode = useColorMode()
        const [timetableHeaders, setTimetableHeaders] = useState<TimeTableStopData[]>()
        const [timeTableRows, setTimetableRows] = useState<TimeTableRowInfo[]>()

        useEffect(() => {
            setTimetableHeaders(getTimetableStopData(timetableConstantsServicesByDirection.stopIDs))
            setTimetableRows(getDepartureRows(tripsByService, timetableConstantsServicesByDirection.directionLabel, timetableConstantsServicesByDirection.stopIDs))
        }, [basicRouteID, timetableConstantsServicesByDirection, tripsByService])
      

        return (
            <>
                {/* <h3 className="timetable_header">{timetableTitle}</h3> */}
                {timetableHeaders !== undefined && timeTableRows !== undefined &&
                <table>
                    <caption>{timetableTitle + ' Timetable'}</caption>
                    <thead>
                        <tr role="columnheader">
                            {timetableHeaders.map((header: TimeTableStopData, index: number) => (
                                <th key={index} className={colorMode.colorMode === 'light' ? "table_header_light" : "table_header_dark"}>
                                    {header.stopName}
                                </th>
                            ))}
                        </tr>
                        <tr>
                            {timetableHeaders.map((header: TimeTableStopData, index: number) => (
                                <th key={index} className={colorMode.colorMode === 'light' ? "table_header_light" : "table_header_dark"}>
                                    {header.stopCode}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {timeTableRows.map((rowData: TimeTableRowInfo, rowDataIndex: number) => (
                            <tr key={rowDataIndex}>
                                {rowData.departures.map((departuresData: Departure, departuresIndex: number) => (
                                    <td key={departuresIndex} className={departuresData.departureTime === '-' ? 'timetable_times' : rowData.routeID}>
                                        {departuresData.departureTime}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                    
                </table>
                }
            </>
        )
    }