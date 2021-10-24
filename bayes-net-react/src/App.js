import './App.css';
import Button from '@mui/material/Button';
import ReactFlow from 'react-flow-renderer';
import {CategoricalVariable} from './RandVar';


var v1 = new CategoricalVariable('Rain', 
  'will it rain tomorrow', 
  [['yes', 0.4], ['no', 0.6]]
);

const elements = [
 v1.element,
];

export default () => (
  <div style={{ height: 300 }}>
    <ReactFlow elements={elements} />
  </div>
);
