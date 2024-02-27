import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgEqualizer2Fill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M3 7C3 5.067 4.567 3.5 6.5 3.5C8.433 3.5 10 5.067 10 7C10 8.933 8.433 10.5 6.5 10.5C4.567 10.5 3 8.933 3 7ZM20 8H12V6H20V8ZM14 17C14 15.067 15.567 13.5 17.5 13.5C19.433 13.5 21 15.067 21 17C21 18.933 19.433 20.5 17.5 20.5C15.567 20.5 14 18.933 14 17ZM12 16V18H4V16H12Z" />
  </Svg>
);

export default SvgEqualizer2Fill;
