const inventoryObject = (() => {
  let inventory = {};
  let itemables = document.getElementsByClassName('itemable');
  [].forEach.call(itemables, itemable => {
    inventory[itemable.id] = [];
  });

  const items = document.getElementsByClassName('item');
  [].forEach.call(items, item => {
    const greatGrandpa = item.parentElement.parentElement.parentElement;
    inventory[greatGrandpa.id].push(item.id);
  });

  const add = (inventorySection, newIten) => {
    inventory[inventorySection].push(newIten);
    return inventory;
  };

  const remove = (inventorySection, itemToDelete) => {
    for (let i = 0; i < inventory[inventorySection].length; i++) {
      if (inventory[inventorySection][i] === itemToDelete) {
        inventory[inventorySection].splice(i, i);
      }
    }
    return inventory;
  };

  return {
    get: () => {
      return inventory
    },
    add: add,
    remove: remove
  }
})();