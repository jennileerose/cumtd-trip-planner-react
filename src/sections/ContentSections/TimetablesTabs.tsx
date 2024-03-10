import React, { useState, useEffect, ReactElement } from 'react'
import { MainTimeTableTabs, TimeTableConstants, TripDataBySubRouteType } from '../../types'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import { getVariantColor, setupRouteServiceTabs} from './utils'
import TimeTablePanel from './TimeTablePanel'

export default function TimetablesTabs(
    {
        basicRouteID,
        timetableConstants, 
        fullTripsList
    }:{
        basicRouteID: string,
        timetableConstants: TimeTableConstants,
        fullTripsList: TripDataBySubRouteType[]
    }): ReactElement {

        const [colorVariant, setColorVariant] = useState<string>()
        const [serviceTabs, setServiceTabs] = useState<MainTimeTableTabs[]>()

        useEffect(() => {
            setColorVariant(getVariantColor(basicRouteID))
            let tempDummyTableData = setupRouteServiceTabs(basicRouteID, timetableConstants)
            setServiceTabs(tempDummyTableData)
            }, [basicRouteID, timetableConstants, timetableConstants.basicRouteID, timetableConstants.service])
      

        return (
            <>
                {serviceTabs !== undefined && (
                <Tabs
                    orientation="vertical"
                    variant={colorVariant}
                    defaultIndex={0}
                    id="outer-service-tabs"
                >
                    <TabList role="tablist">
                    {serviceTabs.map((tab, index) => (
                        <Tab key={index}>{tab.label} </Tab>
                    ))}
                    </TabList>
                    <TabPanels>
                    {serviceTabs.map((tab, index) => (
                        <TabPanel key={index} role="tabpanel">
                            <Tabs
                                orientation='vertical'
                                variant="innerTabs"
                                defaultIndex={0}
                                id="inner-direction-tabs"
                            >
                                <TabList>
                                    {tab.content.map((directionTab, directionIndex) => (
                                        <Tab key={directionIndex}>{directionTab.label}</Tab>
                                    ))}
                                </TabList>
                                <TabPanels>
                                    {tab.content.map((directionTab, directionIndex) => (
                                        <TabPanel key={directionIndex}>
                                            <TimeTablePanel
                                                basicRouteID={basicRouteID}
                                                timetableConstantsServicesByDirection={timetableConstants.service[index].directions[directionIndex]}
                                                tripsByService={fullTripsList[index]}
                                                timetableTitle={directionTab.content}
                                             />
                                        </TabPanel>
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