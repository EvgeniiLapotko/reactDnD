import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import { componetsList } from '../componentList';

class State {
  filterList = componetsList;
  activeFrame = {};
  lines = [];
  frames = {};

  constructor() {
    makeAutoObservable(this);
  }

  filterComponents = (value) => {
    if (!value) {
      this.filterList = componetsList;
      return;
    }

    for (let list of this.filterList) {
      const filterArr = list.components.filter((i) =>
        i.component.toLowerCase().includes(value.toLowerCase())
      );
      list.components = filterArr;
    }
  };

  createFrame = () => {
    const idFrame = uuidv4();
    this.frames = { ...this.frames, [idFrame]: [] };
  };

  addFrame = (w, h) => {
    const idFrame = uuidv4();
    this.frames = { ...this.frames, [idFrame]: [] };
  };

  deleteFrame = (id) => {
    delete this.frames[id];
    this.lines = this.lines.filter((i) => i.start !== id);
    this.lines = this.lines.filter((i) => i.end !== id);
  };

  getActiveFrame = (e, idFrame) => {
    let active;
    Object.keys(this.frames).map((i) => (i === idFrame ? (active = i) : ''));
    this.activeFrame = active;
  };

  addArrow(start, end, label) {
    this.lines.push({ start: start, end: end, label: label });
  }

  dragEnd = (result) => {
    const { source, destination, draggableId } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (destination.droppableId !== source.droppableId) {
      let component;
      componetsList.map((i) =>
        i.components.map((j) => {
          if (j.id === draggableId) {
            component = j.component;
          }
          return null;
        })
      );
      this.frames[destination.droppableId].push({ component: component, id: uuidv4() });
    }

    if (destination.droppableId === source.droppableId) {
    }

    console.log('drag end');
  };
}

export default State;
