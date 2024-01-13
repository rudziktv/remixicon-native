import { type RemixIconType } from './RemixIconType';
import { Text } from 'react-native';
import * as Icon from './icons';
import React from 'react';

const RemixIcon = ({
  name = 'remixicon-line',
  size = 24,
  color = 'white',
  ...props
}: RemixIconProps) => {
  const iconComponentName =
    'Svg' +
    name
      .split('-')
      .map((s) => s[0]?.toUpperCase() + s.substring(1))
      .join('');

  const Component = (Icon as any)[iconComponentName];

  return Component ? (
    <Component fill={color} width={size} height={size} {...props} />
  ) : (
    <Text>Icon not found</Text>
  );
};

export interface RemixIconProps {
  name: RemixIconType;
  size?: number;
  color?: string;
}

export default RemixIcon;
