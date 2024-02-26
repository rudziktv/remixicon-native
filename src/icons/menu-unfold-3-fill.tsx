import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgMenuUnfold3Fill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M17 4H3V6H17V4ZM13 11H3V13H13V11ZM17 18H3V20H17V18ZM17 17V7L22 11.9996L17 17Z" />
  </AnimatedSvg>
);

export default SvgMenuUnfold3Fill;
