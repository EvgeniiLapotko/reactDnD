import Navbar from './components/Navbar/Navbar';
import ConstructorBLock from './components/ConstructorBLock';
import styled from 'styled-components';
import State from './mobx/mobx';
import { DragDropContext } from 'react-beautiful-dnd';

const myState = new State();

function App() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <AppBody>
        <DragDropContext onDragEnd={myState.dragEnd}>
          <Navbar state={myState} />
          <ConstructorBLock state={myState} />
        </DragDropContext>
      </AppBody>
    </div>
  );
}

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

export default App;
