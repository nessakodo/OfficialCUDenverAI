import React, { useRef, useEffect } from 'react';
import { Network } from 'vis-network/standalone/esm/vis-network';

const NeuralNetworkVisualization = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const nodes = [
      { id: 1, label: 'Event 1' },
      { id: 2, label: 'Hidden Layer 1' },
      { id: 3, label: 'Hidden Layer 2' },
      { id: 4, label: 'Output Layer' },
    ];

    const edges = [
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 4 },
    ];

    const data = {
      nodes: nodes,
      edges: edges,
    };

    const options = {
      nodes: {
        shape: 'dot',
        size: 20,
        font: {
          size: 16,
        },
      },
      edges: {
        width: 2,
      },
      interaction: {
        zoomView: false, 
        pan: false, 
      },
    };

    if (containerRef.current) {
      new Network(containerRef.current, data, options);
    }
  }, []);

  return <div ref={containerRef} style={{ height: '500px' }} />;
};

export default NeuralNetworkVisualization;