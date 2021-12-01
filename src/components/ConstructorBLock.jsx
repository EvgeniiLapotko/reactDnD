import React from 'react';
import styled from 'styled-components';
import Frame from './Frame';
import { observer } from 'mobx-react-lite';
import { Xwrapper } from 'react-xarrows';
import HeaderConstructor from './HeaderConstructor/HeaderConstructor';
import XarrowComponent from './XarrowComponent';

const ConstructorBLock = observer(({ state }) => {
  const containerRef = React.useRef();

  let globalWidth = containerRef.current?.offsetWidth;
  let globalHeight = containerRef.current?.offsetHeight;

  const attrs = {
    width: 375,
    height: 600,
    state: state,
    globalWidth: globalWidth,
    globalHeight: globalHeight,
  };

  return (
    <ConstructorContainer id='container'>
      <HeaderConstructor state={state} />
      <ConstructorBlock ref={containerRef}>
        <Xwrapper>
          {Object.keys(state.frames)?.map((frame, i) => {
            return <Frame key={frame} idFrame={frame} index={i} {...attrs} />;
          })}
          <XarrowComponent state={state} />
        </Xwrapper>
      </ConstructorBlock>
    </ConstructorContainer>
  );
});

const ConstructorContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  box-sizing: border-box;
  z-index: 0;
`;
const ConstructorBlock = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  background-color: #dddddd;
  position: relative;
  box-sizing: border-box;
  z-index: 1;
`;

export default ConstructorBLock;
