import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgSlideshow2Line = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M13 17V20H18V22H6V20H11V17H4C3.44772 17 3 16.5523 3 16V4H2V2H22V4H21V16C21 16.5523 20.5523 17 20 17H13ZM5 15H19V4H5V15ZM10 6L15 9.5L10 13V6Z" />
  </AnimatedSvg>
);

export default SvgSlideshow2Line;
