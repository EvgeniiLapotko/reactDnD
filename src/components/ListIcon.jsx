import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import styled from 'styled-components';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { observer } from 'mobx-react-lite';

const ListIcon = observer(({ state }) => {
  const tooltipContent = () => {
    return (
      <TooltipBlock>
        {state.frames.length === 0 ? (
          <h3>Add Frames</h3>
        ) : (
          state.frames.map((item, index) => {
            return (
              <TooltipRow
                active={item.id === state.activeFrame.id}
                onClick={(e) => state.getActiveFrame(e, item.id)}
              >
                <span>Frame #{index + 1}</span>
              </TooltipRow>
            );
          })
        )}
      </TooltipBlock>
    );
  };
  return (
    <Tooltip placement='bottom-start' arrow title={tooltipContent()}>
      <IconButton style={{ color: '#fff' }}>
        <FormatListBulletedIcon fontSize='large' style={{ fill: '#ddd' }} />
      </IconButton>
    </Tooltip>
  );
});

const TooltipBlock = styled.div`
  cursor: default;
`;
const TooltipRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  margin-bottom: 5px;
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? '1px solid skyblue' : '1px solid transparent')};

  span {
    font-size: 12px;
    padding-right: 5px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export default ListIcon;
