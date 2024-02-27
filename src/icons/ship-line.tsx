import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgShipLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M4 10.4V4C4 3.44772 4.44772 3 5 3H10V1H14V3H19C19.5523 3 20 3.44772 20 4V10.4L21.0857 10.7257C21.5974 10.8792 21.8981 11.4078 21.7685 11.9261L20.2516 17.9938C20.1682 17.9979 20.0844 18 20 18C19.4218 18 18.8665 17.9019 18.3499 17.7213L19.6 12.37L12 10L4.4 12.37L5.65008 17.7213C5.13348 17.9019 4.5782 18 4 18C3.91564 18 3.83178 17.9979 3.74845 17.9938L2.23152 11.9261C2.10195 11.4078 2.40262 10.8792 2.91431 10.7257L4 10.4ZM6 9.8L12 8L18 9.8V5H6V9.8ZM4 20C5.53671 20 6.93849 19.4223 8 18.4722C9.06151 19.4223 10.4633 20 12 20C13.5367 20 14.9385 19.4223 16 18.4722C17.0615 19.4223 18.4633 20 20 20H22V22H20C18.5429 22 17.1767 21.6104 16 20.9297C14.8233 21.6104 13.4571 22 12 22C10.5429 22 9.17669 21.6104 8 20.9297C6.82331 21.6104 5.45715 22 4 22H2V20H4Z" />
  </Svg>
);

export default SvgShipLine;
