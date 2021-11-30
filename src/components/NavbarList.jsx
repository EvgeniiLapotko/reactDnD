import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

const NavbarList = observer(({ component, provided, snapshot }) => {
  return (
    <>
      <NavbarListContainer
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
        drag={snapshot.isDragging}
        style={{
          ...provided.draggableProps.style,
          transform: snapshot.isDragging
            ? provided.draggableProps.style?.transform
            : 'translate(0px, 0px)',
        }}
      >
        <NavbarListTitle>
          <span>#</span>
          <h3>{component}</h3>
        </NavbarListTitle>
      </NavbarListContainer>
      {snapshot.isDragging && (
        <NavbarListContainer style={{ transform: 'none !important' }}>
          <NavbarListTitle>
            <span>#</span>
            <h3>{component}</h3>
          </NavbarListTitle>
        </NavbarListContainer>
      )}
    </>
  );
});

const NavbarListContainer = styled.div`
  padding: 0 13px;
  display: flex;
  user-select: none;
  height: 42px;
  align-items: flex-start;
  align-content: flex-start;
  transition: background-color 0.3s;
  cursor: pointer;
  line-height: 1.5;
  border: ${({ drag }) => (drag ? '2px solid skyblue' : 'none')};
  border-radius: ${({ drag }) => (drag ? '4px' : 'none')};
  background-color: ${({ drag }) => (drag ? '#fff' : 'transparent')};
  color: ${({ drag }) => (drag ? '#000' : '#fff')};
  max-width: ${({ drag }) => (drag ? '200px' : '100%')};
  :hover {
    background-color: #5c5c5c;
  }
`;

const NavbarListTitle = styled.div`
  display: flex;
  align-items: center;
  h3 {
    font-size: 13px;
    font-weight: 500;
    padding-left: 10px;
  }
  span {
    display: inline-block;
    padding: 0 15px;
  }
`;

export default NavbarList;
