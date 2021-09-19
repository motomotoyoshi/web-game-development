const itemBoxes = document.querySelectorAll('.inventory-box');
[].forEach.call(itemBoxes, (itembox) => {
  itembox.addEventListener("dragstart", handleDragStart);
  itembox.addEventListener("dragover", handleDragOver);
  itembox.addEventListener("drop", handleDrop);
});

let draggingObject;
function handleDragStart(e) {
  draggingObject = this;
  e.dataTransfer.setData("text/html", this.innerHTML);
  const dragIcon = document.createElement("img");
  const imageName = this.firstChild.id;
  dragIcon.src = imageName + ".png";
  e.dataTransfer.setDragImage(dragIcon, -10, 10);
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();
  if (draggingObject != this) {
    const draggingGrandpa = draggingObject.parentElement.parentElement;
    const draggedToGrandpa = this.parentElement.parentElement;
    const draggingObjectId = draggingObject.firstChild.id;
    inventoryObject.add(draggedToGrandpa.id, draggingObjectId);
    inventoryObject.remove(draggingGrandpa.id, draggingObjectId);
    draggingObject.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
    this.classList.remove('empty');
    draggingObject.classList.add('empty');
  }
}
