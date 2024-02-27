import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgSkipDownLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M12 10.0858L7.20712 5.29291L5.79291 6.70712L12 12.9142L18.2071 6.70712L16.7929 5.29291L12 10.0858ZM18 17L6.00001 17L6.00001 15L18 15V17Z" />
  </Svg>
);

export default SvgSkipDownLine;
