import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgWebcamFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M11 21V19.9291C7.60771 19.4439 5 16.5265 5 13V8C5 4.13401 8.13401 1 12 1C15.866 1 19 4.13401 19 8V13C19 16.5265 16.3923 19.4439 13 19.9291V21H17V23H7V21H11ZM12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" />
  </AnimatedSvg>
);

export default SvgWebcamFill;
