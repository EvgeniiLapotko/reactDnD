import React from 'react';
import { observer } from 'mobx-react-lite';
import { IconButton, Tooltip } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import FrameIcon from './FrameIcon';
import GridViewIcon from '@mui/icons-material/GridView';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from 'styled-components';
import AddArrowIcon from './AddArrowIcon';
import ListIcon from './ListIcon';

const HeaderConstructor = observer(({ state }) => {
  return (
    <HeaderConstructorBlock>
      <IconBlock>
        <IconBlockItem>
          <Tooltip title='Create'>
            <IconButton onClick={() => state.createFrame()}>
              <CreateIcon fontSize='large' style={{ fill: '#ddd' }} />
            </IconButton>
          </Tooltip>
          <FrameIcon addFrame={state.addFrame} />
          <ListIcon state={state} />
          <Tooltip title='Create Component'>
            <IconButton>
              <GridViewIcon fontSize='large' style={{ fill: '#ddd' }} />
            </IconButton>
          </Tooltip>
          <AddArrowIcon state={state} />
        </IconBlockItem>

        <Tooltip title='More'>
          <IconButton>
            <MoreVertIcon fontSize='large' style={{ fill: '#ddd' }} />
          </IconButton>
        </Tooltip>
      </IconBlock>
    </HeaderConstructorBlock>
  );
});

const HeaderConstructorBlock = styled.div`
  border-bottom: 1px solid #5c5c5c;
  border-left: 1px solid #5c5c5c;
  height: 70px;
  background-color: #2c2c2c;
`;

const IconBlockItem = styled.div`
  display: flex;
`;
const IconBlock = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 20px;
  padding: 0 15px;
`;

export default HeaderConstructor;
