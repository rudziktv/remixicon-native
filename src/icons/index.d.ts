// ./icons/index.d.ts

declare module './icons' {
  export const Icon: React.FC<IconProps>;
}

export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}
