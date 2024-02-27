import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgArrowLeftDownFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M12.3608 13.0515L17.3105 18.0013H5.99683V6.68758L10.9466 11.6373L16.6034 5.98047L18.0176 7.39468L12.3608 13.0515Z" />
  </Svg>
);

export default SvgArrowLeftDownFill;
