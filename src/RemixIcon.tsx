import { type RemixIconType } from './RemixIconType';
import { Text, type ColorValue } from 'react-native';
import * as Icon from './icons';
import React from 'react';
import {
  useAnimatedProps,
  type AnimatedProps,
  type SharedValue,
} from 'react-native-reanimated';
import type { NumberProp, SvgProps } from 'react-native-svg';

const RemixIcon = ({
  name = 'remixicon-line',
  size = 24,
  color = 'white',
  width: _,
  height: __,
  fill: ___,
  animatedProps,
  ...props
}: RemixIconProps) => {
  const iconComponentName =
    'Svg' +
    name
      .split('-')
      .map((s) => s[0]?.toUpperCase() + s.substring(1))
      .join('');

  const Component = (Icon as any)[iconComponentName] as React.FC<
    AnimatedProps<SvgProps>
  >;

  const animated = useAnimatedProps<AnimatedProps<SvgProps>>(() => ({
    width: size,
    height: size,
    fill: color,
  }));

  return Component ? (
    <Component animatedProps={animatedProps || animated} {...props} />
  ) : (
    <Text>Icon not found</Text>
  );
};

export interface RemixIconProps extends AnimatedProps<SvgProps> {
  name: RemixIconType;
  size?: NumberProp | SharedValue<NumberProp | undefined>;
  color?: ColorValue | SharedValue<ColorValue | undefined>;
}

export default RemixIcon;
