import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgPentagonLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M12.0001 3.03043L20.5306 9.22822L17.2723 19.2564H6.72796L3.4696 9.22822L12.0001 3.03043ZM22.7471 8.50806L12.0001 0.699951L1.25317 8.50806L5.35814 21.1418H18.6421L22.7471 8.50806Z" />
  </AnimatedSvg>
);

export default SvgPentagonLine;
