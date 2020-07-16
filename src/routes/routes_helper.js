const autoAddPathToChildren = (menus = [], commonPath) => {
  let result = [...menus];
  result = menus.map((item) => {
    const newItem = { ...item };
    newItem.path = commonPath
      ? `${commonPath.path}${newItem.path}`
      : newItem.path;
    if (newItem.children && newItem.children.length) {
      newItem.children = autoAddPathToChildren(newItem.children, newItem);
    }
    return newItem;
  });
  return result;
};

let result = [];
const flatRoutes = (menus = []) => {
  menus.forEach((item) => {
    if (item.children && item.children.length) {
      flatRoutes(item.children);
    } else {
      if (item.component) {
        result.push(item);
      }
    }
  });
  return result;
};

export { autoAddPathToChildren, flatRoutes };
