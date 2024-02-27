import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgMeteorFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M21 1V13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 9.72064 4.75393 6.85093 7.37488 5.27777L14 1.453V4.223L21 1ZM12 8C9.23858 8 7 10.2386 7 13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13C17 10.2386 14.7614 8 12 8Z" />
  </Svg>
);

export default SvgMeteorFill;
