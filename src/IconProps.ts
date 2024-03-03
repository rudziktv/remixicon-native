import type { AnimatedProps } from 'react-native-reanimated';
import type { PathProps, SvgProps } from 'react-native-svg';

export interface IconProps {
  svg?: AnimatedProps<SvgProps>;
  path?: AnimatedProps<PathProps>;
}
