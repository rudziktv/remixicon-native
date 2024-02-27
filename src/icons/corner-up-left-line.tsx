import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgCornerUpLeftLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M19.0001 10.0001L19.0003 19L17.0003 19L17.0002 12.0001L6.82833 12L10.7781 15.9497L9.36384 17.364L2.99988 11L9.36384 4.63603L10.7781 6.05025L6.82828 10L19.0001 10.0001Z" />
  </Svg>
);

export default SvgCornerUpLeftLine;
