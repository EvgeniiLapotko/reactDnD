import React from 'react';
import { ClickAwayListener, Tooltip } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DeleteIcon from '@mui/icons-material/HighlightOff';
import SettingsIcon from '@mui/icons-material/Settings';
import styled from 'styled-components';

function SettingIcon({ state, idFrame }) {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(!open);
  };

  return (
    <SettingIconItem>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <div>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            placement='top-start'
            arrow
            title={
              <TooltipBlock>
                <TooltipRow>
                  <span>Create Clone</span>
                  <FileCopyIcon fontSize='small' />
                </TooltipRow>
                <TooltipRow onClick={() => state.deleteFrame(idFrame)}>
                  <span>Delete</span>
                  <DeleteIcon fontSize='small' />
                </TooltipRow>
              </TooltipBlock>
            }
          >
            <SettingsIcon
              fontSize='small'
              onClick={handleTooltipOpen}
              style={{ color: '#aaa', cursor: 'pointer' }}
            />
          </Tooltip>
        </div>
      </ClickAwayListener>
    </SettingIconItem>
  );
}

const TooltipBlock = styled.div`
  cursor: default;
`;
const TooltipRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100px;
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
const SettingIconItem = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export default SettingIcon;
