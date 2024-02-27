import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgMacbookFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M2 4.00685C2 3.45078 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44995 22 4.00685V17H2V4.00685ZM1 19H23V21H1V19Z" />
  </Svg>
);

export default SvgMacbookFill;
