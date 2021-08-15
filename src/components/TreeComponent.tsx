import React from 'react';
import Tree from 'react-tree-graph';
import { data } from '../data/tree_data';
import 'react-tree-graph/dist/style.css';
import './TreeComponent.css'

export const TreeComponent: React.FC = (): JSX.Element => {
  return (
    <div className='tree-view'>
      <Tree 
        data={data}
        animated
        height={800}
        width={1000}
        svgProps={{
          className: 'custom'
        }}
      />
    </div>
  )
}