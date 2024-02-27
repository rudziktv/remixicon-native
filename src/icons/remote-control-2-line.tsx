import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgRemoteControl2Line = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M18 2C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2H18ZM17 4H7V20H17V4ZM15 15V17H13V15H15ZM11 15V17H9V15H11ZM13 6V8H15V10H12.999L13 12H11L10.999 10H9V8H11V6H13Z" />
  </Svg>
);

export default SvgRemoteControl2Line;
