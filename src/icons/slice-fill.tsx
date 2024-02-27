import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgSliceFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M13.7678 12.2288L15.8892 14.3501C11.293 18.9463 5.63612 20.3605 2.10059 19.6534L17.6569 4.09705L19.7783 6.21837L13.7678 12.2288Z" />
  </Svg>
);

export default SvgSliceFill;
