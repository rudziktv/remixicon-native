import { type RemixIconType } from './RemixIconType';
import { Text } from 'react-native';
import * as Icon from './icons';
import React from 'react';
import type { AnimatedProps } from 'react-native-reanimated';
import type { SvgProps } from 'react-native-svg';

const RemixIcon = ({
  name = 'remixicon-line',
  size = 24,
  color = 'white',
  width: _,
  height: __,
  fill: ___,
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

  return Component ? (
    <Component fill={color} width={size} height={size} {...props} />
  ) : (
    <Text>Icon not found</Text>
  );
};

export interface RemixIconProps extends AnimatedProps<SvgProps> {
  name: RemixIconType;
  size?: number;
  color?: string;
}

export default RemixIcon;
