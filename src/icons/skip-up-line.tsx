import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgSkipUpLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M12 13.9142L16.7929 18.7071L18.2071 17.2929L12 11.0858L5.79291 17.2929L7.20712 18.7071L12 13.9142ZM6.00001 7L18 7V9L6.00001 9L6.00001 7Z" />
  </Svg>
);

export default SvgSkipUpLine;
