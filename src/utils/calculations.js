export const calculateVariance = (currentValue, originalValue) => {
    return ((currentValue - originalValue) / originalValue * 100).toFixed(2);
  };
  
  export const updateDataHierarchy = (data, id, newValue, updateChildren = false) => {
    const updateNode = (node) => {
      if (node.id === id) {
        const updatedNode = { ...node, value: newValue };
        
        if (updateChildren && node.children) {
          const totalChildrenValue = node.children.reduce((sum, child) => sum + child.value, 0);
          const ratio = newValue / totalChildrenValue;
          updatedNode.children = node.children.map(child => ({
            ...child,
            value: parseFloat((child.value * ratio).toFixed(2))
          }));
        }
        
        return updatedNode;
      }
      
      if (node.children) {
        const updatedChildren = node.children.map(child => updateNode(child));
        return {
          ...node,
          value: updatedChildren.reduce((sum, child) => sum + child.value, 0)
        };
      }
      
      return node;
    };
  
    return {
      ...data,
      rows: data.rows.map(row => updateNode(row))
    };
  };