import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgLandscapeFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M16 21L11.2381 12.2698L15 6L23 21H16ZM8 10L14 21H2L8 10ZM5.5 8C4.11929 8 3 6.88071 3 5.5C3 4.11929 4.11929 3 5.5 3C6.88071 3 8 4.11929 8 5.5C8 6.88071 6.88071 8 5.5 8Z" />
  </AnimatedSvg>
);

export default SvgLandscapeFill;
