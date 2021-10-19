import './App.css';
import Button from '@mui/material/Button';
import ReactFlow from 'react-flow-renderer';
import {CategoricalVariable} from './RandVar';


var v1 = new CategoricalVariable('Rain', 
  'will it rain tomorrow', 
  ['yes', 'no'],
  [0.5, 0.5]
);

const elements = [
 v1.element,
];

export default () => (
  <div style={{ height: 300 }}>
    <ReactFlow elements={elements} />
  </div>
);
