import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgSkipDownFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M18 17 6 17 6 15 18 15 18 17ZM12 13 18 7H6L12 13Z" />
  </Svg>
);

export default SvgSkipDownFill;
