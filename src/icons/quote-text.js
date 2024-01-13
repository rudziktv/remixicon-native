import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgQuoteText = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M21 4H3V6H21V4ZM21 11H8V13H21V11ZM21 18H8V20H21V18ZM5 11H3V20H5V11Z" />
  </Svg>
);

export default SvgQuoteText;
