import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from "react-icons/md";
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({todo, onRemove, onToggle, style}) => { // 리스트 안에 생성된 각 일정 컴포넌트(div)
  const {id, text, checked} = todo;

  return (
      <div className="TodoListItem-Virtualized" style={style}>
        <div className="TodoListItem">
          <div className={cn('checkbox', {checked})}
               onClick={() => onToggle(id)}>
            {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
            <div className="text">{text}</div>
          </div>

          <div className="remove" onClick={() => onRemove(id)}>
            <MdRemoveCircleOutline/>
          </div>
        </div>
      </div>
  )
};

export default React.memo(TodoListItem);

