import React from 'react';
import Tree from 'react-tree-graph';
import { data } from '../data/tree_data';
import 'react-tree-graph/dist/style.css'

export const TreeComponent: React.FC = (): JSX.Element => {
  return (
    <div>
      <Tree 
        data={data}
        animated
        height={200}
        width={400}
      />
    </div>
  )
}