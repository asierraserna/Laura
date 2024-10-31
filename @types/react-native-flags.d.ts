// @types/react-native-flags.d.ts
declare module 'react-native-flags' {
    import { Component } from 'react';
    interface FlagProps {
      code: string;
      size?: number;
      // Add any other props you need to support
    }
    export default class Flag extends Component<FlagProps> {}
  }