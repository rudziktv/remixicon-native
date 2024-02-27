import { type RemixIconType } from './RemixIconType';
import { Text, type ColorValue } from 'react-native';
import * as Icon from './icons';
import React, { forwardRef } from 'react';
import { Svg, type NumberProp } from 'react-native-svg';
import type { IconProps } from './IconProps';
import Animated from 'react-native-reanimated';

const IconComponent = ({
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

  const Component = (Icon as any)[iconComponentName] as React.FC<IconProps>;

  return Component ? (
    <Component width={size} height={size} fill={color} {...props} />
  ) : (
    <Text>Icon not found</Text>
  );
};

const RemixIcon = Animated.createAnimatedComponent(
  forwardRef<Svg, RemixIconProps>(({ ...props }, ref) => (
    <IconComponent reference={ref} {...props} />
  ))
);

export interface RemixIconProps extends IconProps {
  name: RemixIconType;
  size?: NumberProp;
  color?: ColorValue;
}

export default RemixIcon;
