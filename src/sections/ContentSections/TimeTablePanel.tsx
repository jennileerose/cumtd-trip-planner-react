import React, { useState, useEffect, ReactElement } from 'react'
import { Departure, DirectionsWithTTStopIDs, TimeTableRowInfo, TimeTableStopData, TripDataBySubRouteType } from '../../types'
import { Flex, Box, Thead, Td, Tbody, TableContainer, Table, Tr, Th, Tfoot } from '@chakra-ui/react'
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

        const [timetableHeaders, setTimetableHeaders] = useState<TimeTableStopData[]>()
        const [timeTableRows, setTimetableRows] = useState<TimeTableRowInfo[]>()

        useEffect(() => {
            setTimetableHeaders(getTimetableStopData(timetableConstantsServicesByDirection.stopIDs))
            setTimetableRows(getDepartureRows(tripsByService, timetableConstantsServicesByDirection.directionLabel, timetableConstantsServicesByDirection.stopIDs))
        }, [basicRouteID, timetableConstantsServicesByDirection, tripsByService])
      

        return (
            <>
                <p>{timetableTitle}</p>
                {timetableHeaders !== undefined && timeTableRows !== undefined &&
                    <TableContainer>
                        <Table variant='striped'>
                            <Thead>
                                <Tr>
                                    {timetableHeaders.map((header: TimeTableStopData, index: number) => (
                                        <Th key={index}>
                                            <Flex direction="column">
                                                <Box>
                                                    {header.stopName}
                                                </Box>
                                                <Box>
                                                    {header.stopCode}
                                                </Box>
                                            </Flex>
                                        </Th>
                                    ))}
                                </Tr>
                            </Thead>
                            <Tbody>
                                {timeTableRows.map((rowData: TimeTableRowInfo, rowDataIndex: number) => (
                                    <Tr key={rowDataIndex}>
                                        {rowData.departures.map((departuresData: Departure, departuresIndex: number) => (
                                            <Td key={departuresIndex} className={rowData.routeID}>
                                                {departuresData.departureTime}
                                            </Td>
                                        ))}
                                    </Tr>
                                ))}
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>Route notes will go here</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                }
            </>
        )
    }