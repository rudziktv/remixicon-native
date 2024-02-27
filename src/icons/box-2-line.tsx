import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgBox2Line = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM4.5 7.65311V7.65788L12 12V20.689L19.5 16.3469V7.65311L12 3.311L4.5 7.65311Z" />
  </Svg>
);

export default SvgBox2Line;
