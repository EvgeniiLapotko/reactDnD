import Navbar from './components/Navbar';
import ConstructorBLockNew from './components/ConstructorBLockNew';
import styled from 'styled-components';
import ConstructorBLock from './components/ConstructorBLock';
import State from './mobx/mobx';
import { DragDropContext } from 'react-beautiful-dnd';

const myState = new State();

function App() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <AppBody>
        <DragDropContext>
          <Navbar state={myState} />
          <ConstructorBLockNew state={myState} />
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
