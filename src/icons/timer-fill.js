import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgTimerFill = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M17.6177 5.9681L19.0711 4.51472L20.4853 5.92893L19.0319 7.38231C20.2635 8.92199 21 10.875 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 8.02944 7.02944 4 12 4C14.125 4 16.078 4.73647 17.6177 5.9681ZM11 8V14H13V8H11ZM8 1H16V3H8V1Z" />
  </Svg>
);

export default SvgTimerFill;
