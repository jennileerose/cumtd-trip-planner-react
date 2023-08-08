import { Box, Flex } from '@chakra-ui/react';
import L, { LatLngExpression } from 'leaflet';
import React, { ReactElement, useEffect } from 'react';
import { StopPoint } from '../../types';
import { getStopCoords } from './utils';

export default function StopMap(
  {stopPoints, stopName}:{stopPoints: StopPoint[], stopName: string}
): ReactElement {
  // useEffect(() => {
    const stopCoordinates = getStopCoords(stopPoints)
    const map = L.map('map').setView(stopCoordinates[0], 0);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    const stopMarker = L.marker(stopCoordinates[0]).addTo(map);
    stopMarker
    .bindPopup('<p>' + stopName + '</p>')
    .openPopup();
  // })
  return (
    <div id="map">
      <p className="map"></p>
    </div>
  )
}