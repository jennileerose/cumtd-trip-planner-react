import React, { useState, useEffect, ReactElement } from 'react'
import { TimeTableConstants, TimeTableTabs, TripDataBySubRouteType } from '../../types'
// import {  } from '@chakra-ui/react'
import {
    // getVariantColor,
    setupRouteServiceTabs
} from './utils'
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

        // const [colorVariant, setColorVariant] = useState<string>()
        const [serviceTabs, setServiceTabs] = useState<TimeTableTabs[]>()


        const openServiceTab = (index: number) => {
            if(serviceTabs !== undefined) {
                let i = 0
                const numOfPanels = serviceTabs.length
                for (i = 0; i < numOfPanels; i++) {
                    let id = i.toString() + '-service-panel'
                    let currentPanel = document.getElementById(id)
                    if(currentPanel !== null) {
                        currentPanel.style.display = "none"; 
                    }
                }
                let panelIDString = index.toString() + '-service-panel'
                let panel = document.getElementById(panelIDString)
                if(panel !== null) {
                    panel.style.display = "block"; 
                }
                let buttonIDString = index.toString() + '-service-button'
                let button = document.getElementById(buttonIDString)
                button?.classList.add('active')
            }
        }

        useEffect(() => {
            // setColorVariant(getVariantColor(basicRouteID))
            let tempDummyTableData = setupRouteServiceTabs(basicRouteID, timetableConstants)
            let fullServiceList = [] as TimeTableTabs[]
            tempDummyTableData.forEach((service, serviceIndex) => {
                service.content.forEach((direction, directionIndex) => {
                   fullServiceList.push({
                     label: service.label + ' ' + direction.label,
                     serviceIndex:  serviceIndex,
                     directionIndex: directionIndex,
                     title: direction.content
                   })
                })
            })
            setServiceTabs(fullServiceList)
            
            }, [basicRouteID, timetableConstants, timetableConstants.basicRouteID, timetableConstants.service])
      

        return (
            <>
                {serviceTabs !== undefined && (
                    <>
                        <div id="service-tabs" className="tab">
                            {serviceTabs.map((tab, index) => (
                                <button className="tablinks" key={index.toString() + '-service-button'} onClick={() => openServiceTab(index)} id={index === 0 ? "defaultOpen" : index.toString()+'-button'}>{tab.label}</button>
                            ))}
                        </div>
                        {serviceTabs.map((tab, index) => (
                            <div key={index.toString() + '-service-panel'} id={index.toString() + '-service-panel'} className="tabcontent">
                                <TimeTablePanel
                                    basicRouteID={basicRouteID}
                                    timetableConstantsServicesByDirection={timetableConstants.service[tab.serviceIndex].directions[tab.directionIndex]}
                                    tripsByService={fullTripsList[tab.serviceIndex]}
                                    timetableTitle={tab.title}
                                />
                            </div>
                        ))}
                    </>
                )}
            </>
        )
}