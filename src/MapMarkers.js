import React from "react";
import styled from "styled-components";
import { Marker, Popup } from "react-leaflet";
import Icons from "./Icons";

const PopContent = styled(Popup)``;

const PopContentWrapper = styled.div``;

const PopTitleWrapper = styled.div`
  font-size: 3.5em;
  text-decoration: underline;
`;

const Line = styled.p``;

const MapMarker = ({ device, position }) => {
  let icon = Icons.greenIcon;

  if (device.BUTTON === "1") {
    icon = Icons.redIcon;
  }

  if (device.FLIP === "UPSIDE_DOWN") {
    icon = Icons.yellowIcon;
  }

  return (
    <Marker position={device.location} icon={icon}>
      <PopContent>
        <PopTitleWrapper>{device.name} Info</PopTitleWrapper>
        <PopContentWrapper>
          <div class="ui center aligned two column grid">
            <div class="row">
              <div class="column">
                <Line>
                  <div class="ui statistics">
                    <div class="ui statistic">
                      <div class="value"> {device.TEMP}</div>
                      <div class="label">Temperatur</div>
                    </div>
                  </div>
                </Line>
              </div>
              <div class="column">
                <Line>
                  <div class="ui statistics">
                    <div class="ui statistic">
                      <div class="value"> {device.HUMID}</div>
                      <div class="label">Fuktighet</div>
                    </div>
                  </div>
                </Line>
              </div>
            </div>
            <div class="row">
              <div class="column">
                <Line>
                  <div class="ui statistics">
                    <div class="ui statistic">
                      <div class="value"> {device.AIR_PRESS}</div>
                      <div class="label">Lufttrykk</div>
                    </div>
                  </div>
                </Line>
              </div>
              <div class="column">
                <Line>
                  <div class="ui statistics">
                    <div class="ui statistic">
                      <div class="value"> {device.AIR_QUAL}</div>
                      <div class="label">Luftkvalitet</div>
                    </div>
                  </div>
                </Line>
              </div>
            </div>
          </div>
        </PopContentWrapper>
      </PopContent>
    </Marker>
  );
};

const MapMarkers = ({ data, position }) => {
  console.log("MapMarkers got props", data);

  const markers = Object.values(data).map((device, index) => (
    <MapMarker
      key={`marker-${index}`}
      device={device}
      position={position}
      index={index}
    />
  ));

  return <div>{markers}</div>;
};

export default MapMarkers;
