import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import { componetsList } from '../components/componentList';

class State {
  // frames = [];
  componentsList = componetsList;
  filterList = componetsList;
  defaultWidth = 340;
  defaultHeight = 600;
  activeFrame = {};
  lines = [];

  frames = {};

  constructor() {
    makeAutoObservable(this);
  }

  filterComponents = (value) => {
    if (!value) {
      this.filterList = componetsList;
    }
    const filterArr = this.componentsList.filter(
      (item) =>
        item.components.filter((item) =>
          item.component.toLowerCase().includes(value.toLowerCase())
        ) > -1
    );
    // this.filterList = filterArr;
  };

  // createFrame = () => {
  //   let { frames, defaultWidth, defaultHeight } = this;
  //   let newFrame = { id: uuidv4(), width: defaultWidth, height: defaultHeight };
  //   frames.push(newFrame);
  // };

  createFrame = () => {
    this.frames = { [uuidv4()]: [] };
  };

  addFrame = (w, h) => {
    let { frames } = this;
    frames.push({ id: uuidv4(), width: w, height: h });
  };

  deleteFrame = (id) => {
    let { frames } = this;
    const filterArr = frames.filter((frame) => frame.id !== id);
    this.frames = filterArr;
  };

  getActiveFrame = (e, idFrame) => {
    let active;
    this.frames.map((i) => (i.id === idFrame ? (active = i) : ''));
    this.activeFrame = active;
  };

  addComponent = (componentUi) => {
    this.frames.map((i) => i.id === this.activeFrame.id && { ...i, offspring: [{ componentUi }] });
  };
  addArrow(start, end, label) {
    this.lines.push({ start: start, end: end, label: label });
  }
}

export default State;
