import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgArrowLeftUpFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M12.3608 10.9468L18.0176 16.6037L16.6034 18.0179L10.9466 12.361L5.99683 17.3108V5.99707H17.3105L12.3608 10.9468Z" />
  </Svg>
);

export default SvgArrowLeftUpFill;
