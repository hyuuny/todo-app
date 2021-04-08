import React, {useCallback} from 'react';
import {List} from 'react-virtualized';
import TodoListItem from "./TodoListItem";
import './TodoList.scss'

const TodoList = ({todos, onRemove, onToggle}) => { // 리스트 전체 컴포넌트(div)
  const rowRenderer = useCallback(
      ({index, key, style}) => {
        const todo = todos[index];
        return (
            <TodoListItem
                todo={todo}
                key={key}
                onRemove={onRemove}
                onToggle={onToggle}
                style={style}
            />
        );
      },
      [onRemove, onToggle, todos],
  );

  return (
      <List
        className="TodoList"
        width={482}
        height={483}
        rowCount={todos.length}
        rowHeight={57}
        rowRenderer={rowRenderer}
        list={todos}
        style={{outline : 'none'}}
        />
  );
};

export default React.memo(TodoList);