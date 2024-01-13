import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgParagraph = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M12 6V21H10V16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4H20V6H17V21H15V6H12ZM10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14V6Z" />
  </Svg>
);

export default SvgParagraph;
