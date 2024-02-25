import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgFilePaperFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M3 15V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V19C21 20.6569 19.6569 22 18 22H4C2.34315 22 1 20.6569 1 19V17H17V19C17 19.5523 17.4477 20 18 20C18.5523 20 19 19.5523 19 19V15H3Z" />
  </AnimatedSvg>
);

export default SvgFilePaperFill;
