import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgNumber3 = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M18.0001 2V3.36217L12.8087 9.54981C16.0169 9.94792 18.5001 12.684 18.5001 16C18.5001 19.5899 15.5899 22.5 12.0001 22.5C8.95434 22.5 6.39789 20.4052 5.69287 17.5778L7.63351 17.0922C8.12156 19.0497 9.89144 20.5 12.0001 20.5C14.4853 20.5 16.5001 18.4853 16.5001 16C16.5001 13.5147 14.4853 11.5 12.0001 11.5C11.2795 11.5 10.5985 11.6694 9.99465 11.9705L9.76692 12.0923L9.07705 10.8852L14.8551 3.99917L6.50006 4V2H18.0001Z" />
  </Svg>
);

export default SvgNumber3;
