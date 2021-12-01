import React, { useState } from 'react';
import styled from 'styled-components';
import { Rnd } from 'react-rnd';
import SettingIcon from './SettingIcon';
import { observer } from 'mobx-react-lite';
import { useXarrow } from 'react-xarrows';
import { Droppable } from 'react-beautiful-dnd';

const Frame = observer(({ state, idFrame, height, width, globalWidth, globalHeight, index }) => {
  const [widthFrame, setWidthFrame] = React.useState(width);
  const [heightFrame, setHeightFrame] = React.useState(height);
  const [viewSize, setViewSize] = useState(false);
  const updateXarrow = useXarrow();

  const attrs = {
    default: {
      x: globalWidth / 2 - width / 4,
      y: globalHeight / 2 - height / 4,
      width: widthFrame / 2,
      height: heightFrame / 2,
    },
    onResizeStop: () => {
      setTimeout(() => setViewSize(false), 1000);
    },
    onResize: (e, direction, ref) => {
      setViewSize(true);
      setWidthFrame(parseInt(ref.style.width) * 2);
      setHeightFrame(parseInt(ref.style.height) * 2);
    },
    onClick: (e) => state.getActiveFrame(e, idFrame),
    onDrag: () => updateXarrow(),
    onDragStop: () => updateXarrow(),
    style: idFrame === state.activeFrame ? { zIndex: 10 } : { zIndex: 0 },
  };

  return (
    <Rnd {...attrs}>
      <Droppable droppableId={idFrame}>
        {(provided) => (
          <FrameContainer
            active={idFrame === state.activeFrame}
            id={idFrame}
            ref={provided.innerRef}
            style={{ ...provided.droppableProps.style }}
          >
            <FrameName>Frame #{index + 1}</FrameName>
            <SettingIcon state={state} idFrame={idFrame} />
            <SizesBox view={viewSize}>
              <span>{widthFrame}</span>x<span>{heightFrame}</span>
            </SizesBox>
            <FrameBox>
              {state.frames[idFrame].length
                ? state.frames[idFrame].map((i, index) => (
                    <FrameBoxComponent>
                      <SettingIcon state={state} idFrame={idFrame} />
                      <div>{i.component}</div>
                    </FrameBoxComponent>
                  ))
                : ''}
            </FrameBox>
            {provided.placeholder}
          </FrameContainer>
        )}
      </Droppable>
    </Rnd>
  );
});

const FrameName = styled.div`
  position: absolute;
  font-size: 12px;
  color: grey;
  top: -20px;
  left: 0;
`;

const FrameBox = styled.div`
  border: 1px solid #ddd;
  width: 100%;
  padding: 5px;
  height: 100%;
  outline: none;
  box-sizing: border-box;
`;

const FrameBoxComponent = styled.div`
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  z-index: 30;
`;

const FrameContainer = styled.div`
  height: 100%;
  position: relative;
  background-color: #fff;
  border: 1px solid grey;
  border-radius: 5px;
  z-index: 0;
  padding: 20px 10px 10px;
  box-sizing: border-box;
  border: ${({ active }) => (active ? '2px solid skyblue' : '1px solid grey')};
`;

const SizesBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 10px;
  background-color: #bbb;
  color: #fff;
  border-top-left-radius: 2px;
  border-bottom-right-radius: 4px;
  padding: 2px;
  opacity: ${({ view }) => (view ? 1 : 0.4)};
  pointer-events: ${({ view }) => (view ? 'default' : 'none')};
  transition: opacity 0.3s;
`;

export default Frame;
