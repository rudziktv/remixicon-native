import type React from 'react';
import type { Svg, SvgProps } from 'react-native-svg';

export interface IconProps extends SvgProps {
  reference?: React.Ref<Svg>;
}
