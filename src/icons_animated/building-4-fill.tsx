import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgBuilding4Fill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM8 11V13H11V11H8ZM8 7V9H11V7H8ZM8 15V17H11V15H8ZM13 15V17H16V15H13ZM13 11V13H16V11H13ZM13 7V9H16V7H13Z" />
  </AnimatedSvg>
);

export default SvgBuilding4Fill;
