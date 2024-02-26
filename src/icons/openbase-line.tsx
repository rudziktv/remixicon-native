import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgOpenbaseLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M12 3L2 5.996L3 15.46L12 22.5L21 15.46L22 5.996L12 3ZM19.8367 7.43572L12 19.9608L4.16326 7.43572L12 5.08783L19.8367 7.43572Z" />
  </AnimatedSvg>
);

export default SvgOpenbaseLine;
