import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgChatCheckFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM11.2929 12.1213L8.81802 9.64645L7.40381 11.0607L11.2929 14.9497L16.9497 9.29289L15.5355 7.87868L11.2929 12.1213Z" />
  </AnimatedSvg>
);

export default SvgChatCheckFill;
