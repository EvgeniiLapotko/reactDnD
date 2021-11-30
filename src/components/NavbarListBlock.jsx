import React from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import NavbarList from './NavbarList';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const NavbarListBlock = ({ item }) => {
  const [viewComponent, setViewComponent] = React.useState(true);

  return (
    <>
      <NavbarListTitleContainer onClick={() => setViewComponent(!viewComponent)}>
        {viewComponent ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        <NavbarListTitle>{item.name}</NavbarListTitle>
      </NavbarListTitleContainer>
      <Droppable droppableId='navbar' isDropDisabled={true}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>
            {item.components.map((i, id) => {
              return viewComponent ? (
                <Draggable key={i.id} draggableId={i.id} index={id}>
                  {(provided, snapshot) => (
                    <NavbarList {...i} provided={provided} snapshot={snapshot} />
                  )}
                </Draggable>
              ) : (
                ''
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
};

const NavbarListTitleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const NavbarListTitle = styled.div`
  margin: 5px;
  font-size: 18px;
  font-weight: 700;
  padding-left: 5px;
`;

export default NavbarListBlock;
