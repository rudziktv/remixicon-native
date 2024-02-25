import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgCollageLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M20 3.10669C20.5523 3.10669 21 3.5544 21 4.10669V20.1067C21 20.659 20.5523 21.1067 20 21.1067H4C3.44772 21.1067 3 20.659 3 20.1067V4.10669C3 3.5544 3.44772 3.10669 4 3.10669H20ZM11.1888 13.2651L5 14.3557V19.1067H12.218L11.1888 13.2651ZM19 5.10669H11.781L14.249 19.1067H19V5.10669ZM9.75 5.10669H5V12.3247L10.8415 11.2955L9.75 5.10669Z" />
  </AnimatedSvg>
);

export default SvgCollageLine;
