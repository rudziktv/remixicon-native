import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgFlipHorizontalLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M11 2V22H13V2H11ZM2 6C2 4.89543 2.89543 4 4 4H7C8.10457 4 9 4.89543 9 6V18C9 19.1046 8.10457 20 7 20H4C2.89543 20 2 19.1046 2 18V6ZM20 6V18H17V6H20ZM17 4C15.8954 4 15 4.89543 15 6V18C15 19.1046 15.8954 20 17 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H17Z" />
  </Svg>
);

export default SvgFlipHorizontalLine;
