import React from 'react';
import styled from 'styled-components';
import Frame from './Frame';
import { observer } from 'mobx-react-lite';
import Xarrow, { Xwrapper } from 'react-xarrows';
import HeaderConstructor from './HeaderConstructor';
import { v4 as uuidv4 } from 'uuid';

const ConstructorBLockNew = observer(({ state }) => {
  const containerRef = React.useRef();

  let globalWidth = containerRef.current?.offsetWidth;
  let globalHeight = containerRef.current?.offsetHeight;

  return (
    <ConstructorContainer id='container'>
      <HeaderConstructor state={state} />
      <ConstructorBlock ref={containerRef}>
        <Xwrapper>
          {state.frames?.map((frame, i) => {
            return (
              <Frame
                key={frame.id}
                idFrame={frame.id}
                width={frame.width}
                height={frame.height}
                state={state}
                index={i}
                globalWidth={globalWidth}
                globalHeight={globalHeight}
              />
            );
          })}
          {state.lines.length
            ? state.lines.map((line) => {
                if (line.end && line.start) {
                  return (
                    <Xarrow
                      key={uuidv4()}
                      start={line.start}
                      end={line.end}
                      strokeWidth={2}
                      color='green'
                      // animateDrawing
                      head={{ size: 3, shape: 'circle' }}
                      labels={{
                        middle: line.label ? <LabelBlock>{line.label}</LabelBlock> : '',
                      }}
                    />
                  );
                }
              })
            : ''}
        </Xwrapper>
      </ConstructorBlock>
    </ConstructorContainer>
  );
});

const LabelBlock = styled.div`
  background-color: #fff;
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 14px;
`;
const ConstructorContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  box-sizing: border-box;
`;
const ConstructorBlock = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  background-color: #dddddd;
  position: relative;
  overflow: scroll;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 1;
  svg : {
    overflow: scroll;
    overflow: hidden;
  }
`;

export default ConstructorBLockNew;
