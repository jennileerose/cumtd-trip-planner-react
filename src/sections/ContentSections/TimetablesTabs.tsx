import React, { useState, useEffect, ReactElement } from 'react'
import { MainTimeTableTabs, TimeTableConstants, TripDataBySubRouteType } from '../../types'
import { useColorMode, Select, Flex, Box, Button, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import { colors } from '../../theme/colors'
import {camelCase, getVariantColor, setupRouteServiceTabs} from './utils'

export default function Timetables(
    {
        basicRouteID,
        timetableConstants, 
        fullTripsList
    }:{
        basicRouteID: string,
        timetableConstants: TimeTableConstants,
        fullTripsList: TripDataBySubRouteType[]
    }): ReactElement {

        const colorMode = useColorMode()
        const [colorVariant, setColorVariant] = useState<string>()
        const [serviceTabs, setServiceTabs] = useState<MainTimeTableTabs[]>()
        console.log('timetable constants', timetableConstants)
        console.log('fullTripsList', fullTripsList)
        useEffect(() => {
            setColorVariant(getVariantColor(basicRouteID))
            let tempDummyTableData = setupRouteServiceTabs(basicRouteID, timetableConstants)
            setServiceTabs(tempDummyTableData)
            }, [basicRouteID, timetableConstants, timetableConstants.basicRouteID, timetableConstants.service])
      

        return (
            <>
                {/* <p>{camelCase(basicRouteID)}</p> */}
                {/*{rawStopByTripData !== undefined && (
                    <p>{JSON.stringify(rawStopByTripData)}</p>
                )} */}
                {serviceTabs !== undefined && (
                <Tabs isFitted orientation="vertical" variant={colorVariant}>
                    <TabList>
                    {serviceTabs.map((tab, index) => (
                        <Tab key={index}>{tab.label} </Tab>
                    ))}
                    </TabList>
                    <TabPanels>
                    {serviceTabs.map((tab, index) => (
                        <TabPanel p={4} key={index}>
                            <Tabs isFitted orientation='vertical' variant="innerTabs">
                                <TabList>
                                    {tab.content.map((directionTab, directionIndex) => (
                                        <Tab key={directionIndex}>{directionTab.label}</Tab>
                                    ))}
                                </TabList>
                                <TabPanels>
                                    {tab.content.map((directionTab, directionIndex) => (
                                        <TabPanel p={4} key={directionIndex}>{directionTab.content}</TabPanel>
                                    ))}
                                </TabPanels>
                            </Tabs>
                        </TabPanel>
                    ))}
                    </TabPanels>
                </Tabs>
                )}
                
            </>
        )
}