import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSpyFill = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M17 13C19.2091 13 21 14.7909 21 17C21 19.2091 19.2091 21 17 21C14.8578 21 13 19.21 13 17H11C11 19.2091 9.20914 21 7 21C4.79086 21 3 19.2091 3 17C3 14.7909 4.79086 13 7 13C8.48052 13 9.77317 13.8043 10.4648 14.9999H13.5352C14.2268 13.8043 15.5195 13 17 13ZM2 12V10H4V7C4 4.79086 5.79086 3 8 3H16C18.2091 3 20 4.79086 20 7V10H22V12H2Z" />
  </Svg>
);

export default SvgSpyFill;
