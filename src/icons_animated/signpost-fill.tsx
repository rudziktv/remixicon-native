import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgSignpostFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M12 5V2H10V5H4C3.44772 5 3 5.44772 3 6V14C3 14.5523 3.44772 15 4 15H17.4142L21.7071 10.7071C22.0976 10.3166 22.0976 9.68342 21.7071 9.29289L17.4142 5H12ZM12 17H10V22H12V17Z" />
  </AnimatedSvg>
);

export default SvgSignpostFill;
