declare module '*.svg' {
  import React from 'react';
  const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  export default content;
}
