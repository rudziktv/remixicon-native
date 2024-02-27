import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgCornerRightDownLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M13.9998 5.00011L4.99991 4.99997L4.99988 6.99997L11.9998 7.00008L11.9999 17.1719L8.05015 13.2222L6.63594 14.6364L12.9999 21.0004L19.3639 14.6364L17.9496 13.2222L13.9999 17.172L13.9998 5.00011Z" />
  </Svg>
);

export default SvgCornerRightDownLine;
