import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgLogoutCircleRLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.2713 2 18.1757 3.57078 20.0002 5.99923L17.2909 5.99931C15.8807 4.75499 14.0285 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.029 20 15.8816 19.2446 17.2919 17.9998L20.0009 17.9998C18.1765 20.4288 15.2717 22 12 22ZM19 16V13H11V11H19V8L24 12L19 16Z" />
  </Svg>
);

export default SvgLogoutCircleRLine;
