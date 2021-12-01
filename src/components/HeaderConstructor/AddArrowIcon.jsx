import React from 'react';
import { Button, IconButton, Tooltip } from '@mui/material';
import styled from 'styled-components';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { observer } from 'mobx-react-lite';
import DeleteIcon from '@mui/icons-material/HighlightOff';

const AddArrowIcon = observer(({ state }) => {
  const [frame1, setFrame1] = React.useState('Select from');
  const [frame2, setFrame2] = React.useState('Select to');
  const [label, setLabel] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(!open);
  };

  const handleChange = (event) => {
    setFrame1(event.target.value);
  };
  const handleChange2 = (event) => {
    setFrame2(event.target.value);
  };

  const tooltipContent = () => {
    return (
      <TooltipBlock>
        <TooltipRow>
          <span>Add Arrow</span>
          <DeleteIcon fontSize='small' onClick={handleTooltipClose} />
        </TooltipRow>
        {Object.keys(state.frames).length < 2 ? (
          <h4>Add min 2 frames</h4>
        ) : (
          <>
            <form>
              <FormInner>
                <FormItem>
                  <FormSelect id='select-from' value={frame1} onChange={handleChange}>
                    <option>select from</option>
                    {Object.keys(state.frames)?.map((item, i) => {
                      return (
                        <option value={item} key={item}>
                          Frame #{i + 1}
                        </option>
                      );
                    })}
                  </FormSelect>
                </FormItem>
                <FormItemIcon></FormItemIcon>
                <FormItem>
                  <FormSelect id='label-to' value={frame2} onChange={handleChange2}>
                    <option>select to</option>
                    {Object.keys(state.frames)?.map((item, i) => {
                      if (frame1 === item) {
                        return;
                      }
                      return (
                        <option value={item} key={item + 1}>
                          Frame #{i + 1}
                        </option>
                      );
                    })}
                  </FormSelect>
                </FormItem>
              </FormInner>
            </form>
            <FormInput
              type='text'
              placeholder='Label Arrow'
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
            <Button
              color='secondary'
              variant={'contained'}
              size='small'
              style={{ width: '50%', margin: '0 0 0 auto' }}
              onClick={() => {
                handleTooltipClose();
                state.addArrow(frame1, frame2, label);
              }}
            >
              Add
            </Button>
          </>
        )}
      </TooltipBlock>
    );
  };

  return (
    <Tooltip
      placement='bottom-start'
      arrow
      onClose={handleTooltipClose}
      open={open}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      title={tooltipContent()}
    >
      <IconButton style={{ color: '#fff' }} onClick={handleTooltipOpen}>
        <CompareArrowsIcon fontSize='large' style={{ fill: '#ddd' }} />
      </IconButton>
    </Tooltip>
  );
});

const FormInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  outline: none;
  border: none;
  padding: 5px 2px;
  border-radius: 7px;
  margin-bottom: 8px;
  width: 100%;
  box-sizing: border-box;
`;

const FormSelect = styled.select`
  outline: none;
  border: none;
  padding: 5px 2px;
  border-radius: 7px;
  width: 100%;
`;
const FormItemIcon = styled.div`
  padding: 10px 3px;
`;
const FormItem = styled.div`
  width: 100px;
`;
const TooltipBlock = styled.div`
  cursor: default;
  width: 200px;
  box-sizing: border-box;
`;
const TooltipRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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

export default AddArrowIcon;
