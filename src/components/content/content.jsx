import "./content.css";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Card from "../card/card";
import images from "../../mock";
import { useEffect, useState } from "react";

const Content = ({ searchTerm }) => {
  const [filteredImages, setFilteredImages] = useState(images);

  useEffect(() => {
    setFilteredImages(
      images.filter((image) => {
        return image.name.toLowerCase().includes(searchTerm);
      })
    );
  }, [searchTerm]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      filteredImages,
      result.source.index,
      result.destination.index
    );

    setFilteredImages(items);
  };

  return (
    <div className="contentWrapper">
      {filteredImages.length === 0 ? (
        <div className="withoutResult">Увы, ничего не найдено</div>
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {filteredImages.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={`${item.id}`}
                    index={index}
                  >
                    {(provided) => (
                      <Card
                        provided={provided}
                        innerRef={provided.innerRef}
                        item={item}
                      ></Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
};

export default Content;
