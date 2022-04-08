import {MotiView} from 'moti';
import React, {memo} from 'react';
import Header from '../Header';

interface IAppBar {
  isVisible: boolean;
  headerLinks: any;
  title: string;
}

export const AppBar: React.FC<IAppBar> = ({isVisible, headerLinks, title}) => {
  return (
    <MotiView
      from={{translateY: isVisible ? -100 : 0, opacity: isVisible ? 0 : -1}}
      animate={{
        translateY: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{type: 'timing', duration: 120}}
      style={{zIndex: 100}}>
      <Header title={title} headerLinks={headerLinks} noSettings={false} />
    </MotiView>
  );
};

export default memo(AppBar);
