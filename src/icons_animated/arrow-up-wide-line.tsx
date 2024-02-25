import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgArrowUpWideLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M12 8.36853L20.9679 13.1162L20.0321 14.8838L12 10.6315L3.96788 14.8838L3.0321 13.1162L12 8.36853Z" />
  </AnimatedSvg>
);

export default SvgArrowUpWideLine;
