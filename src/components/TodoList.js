import React from 'react';
import TodoListItem from "./TodoListItem";
import './TodoList.scss'

const TodoList = ({todos, onRemove, onToggle}) => { // 리스트 전체 컴포넌트(div)

  return (
      <div className="TodoList">
        {todos.map(todo => (
            <TodoListItem
                todo={todo}
                key={todo.id}
                onRemove={onRemove}
                onToggle={onToggle}
            />
        ))}
      </div>
  );
};

export default TodoList;