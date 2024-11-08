export const calculateVariance = (currentValue, originalValue) => {
  if (!originalValue) return "0.00";
  return ((currentValue - originalValue) / originalValue * 100).toFixed(2);
};

export const updateDataHierarchy = (data, id, newValue, updateChildren = false) => {
  const updateNode = (node) => {
    if (node.id === id) {
      let updatedNode = { ...node, value: parseFloat(newValue) };
      
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
      const updatedChildren = node.children.map(updateNode);
      const newNodeValue = parseFloat(
        updatedChildren.reduce((sum, child) => sum + child.value, 0).toFixed(2)
      );
      
      return {
        ...node,
        value: newNodeValue,
        children: updatedChildren
      };
    }
    
    return node;
  };

  return {
    ...data,
    rows: data.rows.map(updateNode)
  };
};
