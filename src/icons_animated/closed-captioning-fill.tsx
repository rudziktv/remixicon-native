import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgClosedCaptioningFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM9 8C6.792 8 5 9.792 5 12C5 14.208 6.792 16 9 16C10.1 16 11.1 15.55 11.828 14.828L10.4144 13.4144C10.0525 13.7762 9.5525 14 9 14C7.895 14 7 13.105 7 12C7 10.895 7.895 10 9 10C9.55 10 10.0483 10.22 10.4153 10.5866L11.829 9.173C11.1049 8.44841 10.1045 8 9 8ZM16 8C13.792 8 12 9.792 12 12C12 14.208 13.792 16 16 16C17.104 16 18.104 15.552 18.828 14.828L17.4144 13.4144C17.0525 13.7762 16.5525 14 16 14C14.895 14 14 13.105 14 12C14 10.895 14.895 10 16 10C16.553 10 17.0534 10.2241 17.4153 10.5866L18.829 9.173C18.1049 8.44841 17.1045 8 16 8Z" />
  </AnimatedSvg>
);

export default SvgClosedCaptioningFill;
