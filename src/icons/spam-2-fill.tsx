import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgSpam2Fill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M15.936 2.50098L21.501 8.06595V15.936L15.936 21.501H8.06595L2.50098 15.936V8.06595L8.06595 2.50098H15.936ZM11.0002 15.0002V17.0002H13.0002V15.0002H11.0002ZM11.0002 7.00024V13.0002H13.0002V7.00024H11.0002Z" />
  </Svg>
);

export default SvgSpam2Fill;
