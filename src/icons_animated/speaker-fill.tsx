import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgSpeakerFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2ZM12 20C14.7614 20 17 17.7614 17 15C17 12.2386 14.7614 10 12 10C9.23858 10 7 12.2386 7 15C7 17.7614 9.23858 20 12 20ZM12 8C12.8284 8 13.5 7.32843 13.5 6.5C13.5 5.67157 12.8284 5 12 5C11.1716 5 10.5 5.67157 10.5 6.5C10.5 7.32843 11.1716 8 12 8ZM12 18C10.3431 18 9 16.6569 9 15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15C15 16.6569 13.6569 18 12 18Z" />
  </AnimatedSvg>
);

export default SvgSpeakerFill;
