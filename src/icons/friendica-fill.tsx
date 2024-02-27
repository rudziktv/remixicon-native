import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgFriendicaFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M15 3V7.5H9V11.5H15V16.5H9V21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H15ZM2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z" />
  </Svg>
);

export default SvgFriendicaFill;
