import { v4 as uuidv4 } from 'uuid';

export const componetsList = [
  {
    id: uuidv4(),
    name: 'Layout',
    components: [
      {
        id: uuidv4(),
        component: 'Fragment',
      },
      {
        id: uuidv4(),
        component: 'Absolute',
      },
      {
        id: uuidv4(),
        component: 'Fixed',
      },
      {
        id: uuidv4(),
        component: 'Box',
      },
      {
        id: uuidv4(),
        component: 'Grid',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Input',
    components: [
      {
        id: uuidv4(),
        component: 'Button',
        componentUi: '<Button>Test</Button>',
      },
      {
        id: uuidv4(),
        component: 'DataPickerModern',
      },
      {
        id: uuidv4(),
        component: 'Checkbox',
      },
      {
        id: uuidv4(),
        component: 'FileInput',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Navigation',
    components: [
      {
        id: uuidv4(),
        component: 'Menu',
      },
      {
        id: uuidv4(),
        component: 'Link',
      },
    ],
  },
];
