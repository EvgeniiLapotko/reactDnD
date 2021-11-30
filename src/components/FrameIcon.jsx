import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import styled from 'styled-components';
import TagIcon from '@mui/icons-material/Tag';

function FrameIcon({ addFrame }) {
  return (
    <Tooltip
      placement='bottom-start'
      arrow
      title={
        <TooltipBlock>
          <TooltipRow onClick={() => addFrame(375, 812)}>
            <span>iPhone11</span>
            <span> 375x812 </span>
          </TooltipRow>
          <TooltipRow onClick={() => addFrame(375, 667)}>
            <span>iPhone8</span>
            <span> 375x667 </span>
          </TooltipRow>
          <TooltipRow onClick={() => addFrame(834, 1194)}>
            <span>Tablet</span>
            <span> 834x1194 </span>
          </TooltipRow>
        </TooltipBlock>
      }
    >
      <IconButton>
        <TagIcon fontSize='large' style={{ fill: '#ddd' }} />
      </IconButton>
    </Tooltip>
  );
}

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
  span {
    font-size: 12px;
    padding-right: 5px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export default FrameIcon;
