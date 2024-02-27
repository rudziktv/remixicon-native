import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgArrowRightDownFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M11.6366 13.0515L5.97974 7.39468L7.39395 5.98047L13.0508 11.6373L18.0006 6.68758V18.0013H6.68684L11.6366 13.0515Z" />
  </Svg>
);

export default SvgArrowRightDownFill;
