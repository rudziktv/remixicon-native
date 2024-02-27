import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgCompassDiscoverFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M13 22C7.47715 22 3 17.5228 3 12C3 6.47715 7.47715 2 13 2C18.5228 2 23 6.47715 23 12C23 17.5228 18.5228 22 13 22ZM8 11.5L12 13L13.5 17.0021L17 8L8 11.5Z" />
  </Svg>
);

export default SvgCompassDiscoverFill;
