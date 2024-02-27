import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgFlipHorizontalFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M11 2V22H13V2H11ZM7 6V18H4L4 6H7ZM4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H7C8.10457 20 9 19.1046 9 18V6C9 4.89543 8.10457 4 7 4H4ZM15 6C15 4.89543 15.8954 4 17 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H17C15.8954 20 15 19.1046 15 18V6Z" />
  </Svg>
);

export default SvgFlipHorizontalFill;
