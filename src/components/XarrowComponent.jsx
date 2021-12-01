import React from 'react';
import { observer } from 'mobx-react-lite';
import Xarrow from 'react-xarrows';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const XarrowComponent = observer(({ state }) => {
  const attrs = {
    key: uuidv4(),
    strokeWidth: 2,
    color: 'green',
    head: { size: 3, shape: 'circle' },
  };

  return (
    <>
      {state.lines.length &&
        state.lines.map((line) => {
          if (line.end && line.start) {
            return (
              <Xarrow
                {...attrs}
                start={line.start}
                end={line.end}
                labels={{
                  middle: line.label ? <LabelBlock>{line.label}</LabelBlock> : '',
                }}
              />
            );
          }
          return null;
        })}
    </>
  );
});

const LabelBlock = styled.div`
  background-color: #fff;
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 14px;
`;

export default XarrowComponent;
