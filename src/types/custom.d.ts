declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// Add missing typings for the CSS variable
interface CSSVariableProps extends React.CSSProperties {
  [key: `--${string}`]: string | number;
}