import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgHammerLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M20 2C20.5523 2 21 2.44772 21 3V8C21 8.55228 20.5523 9 20 9H15V22C15 22.5523 14.5523 23 14 23H10C9.44772 23 9 22.5523 9 22V9H3.5C2.94772 9 2.5 8.55228 2.5 8V5.61803C2.5 5.23926 2.714 4.893 3.05279 4.72361L8.5 2H20ZM15 4H8.97214L4.5 6.23607V7H11V21H13V7H15V4ZM19 4H17V7H19V4Z" />
  </Svg>
);

export default SvgHammerLine;
