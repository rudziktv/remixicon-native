import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgDossierFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M17 2V4H20C20.5523 4 21 4.44772 21 5V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V5C3 4.44772 3.44772 4 4 4H7V2H17ZM13 11H11V13H9V15H10.999L11 17H13L12.999 15H15V13H13V11ZM15 4H9V6H15V4Z" />
  </Svg>
);

export default SvgDossierFill;
