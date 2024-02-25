import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgMenuUnfoldFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M21 17.9996V19.9996H3V17.9996H21ZM17.0503 3.5498L22 8.49955L17.0503 13.4493V3.5498ZM12 10.9996V12.9996H3V10.9996H12ZM12 3.99955V5.99955H3V3.99955H12Z" />
  </AnimatedSvg>
);

export default SvgMenuUnfoldFill;
