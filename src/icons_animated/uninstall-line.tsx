import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgUninstallLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M8 2V4H5L4.999 14H18.999L19 4H16V2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H8ZM18.999 16H4.999L5 20H19L18.999 16ZM17 17V19H15V17H17ZM12 2L16 6H13V11H11V6H8L12 2Z" />
  </AnimatedSvg>
);

export default SvgUninstallLine;
