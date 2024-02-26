import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgSensorFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M6 8V10H18V8H15V2H17V6H22V8H20V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V8H2V6H7V2H9V8H6ZM13 2V8H11V2H13Z" />
  </AnimatedSvg>
);

export default SvgSensorFill;
