declare module 'test-typescript/components/A' {
  import { ReactElement } from "react";
  export type AProps = {
      name: string;
  };
  export function A({ name }: AProps): ReactElement;
  export default A;

}
declare module 'test-typescript/components/B' {
  import { ReactElement } from "react";
  export type BProps = {
      name: string;
  };
  export function B({ name }: BProps): ReactElement;
  export default B;

}
declare module 'test-typescript/index' {
  export * from 'components/A';
  export * from 'components/B';

}
declare module 'test-typescript' {
  import main = require('test-typescript/index');
  export = main;
}