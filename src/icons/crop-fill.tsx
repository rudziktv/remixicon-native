import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgCropFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M19 17H22V19H19V22H17V19H6C5.44772 19 5 18.5523 5 18V7H2V5H5V2H7V5H18C18.5523 5 19 5.44772 19 6V17Z" />
  </AnimatedSvg>
);

export default SvgCropFill;
