import React, {useState, useCallback} from "react";
import {MdAdd} from "react-icons/md";
import "./TodoInsert.scss"

const TodoInsert = ({onInsert}) => { // 입력한 "할 일"을 리스트에 추가한다.
  const [value, setValue] = useState('');

  const onChange = useCallback(e => { // value(일정)는 계속 생성하는 것이 아니라, 재사용 할 수 있도록 useCallback Hook 사용
    setValue(e.target.value); // <- 계속 재사용 하겠다는 의미
  }, []); // 빈 배열[]을 넣으면 컴포넌트가 렌더링될 때 만든 함수 계속 재사용 가능

  const onSubmit = useCallback(
      e => {
        onInsert(value);
        setValue('') // value 값 초기화

        // submit 이벤트는 브라우저에서 새로고침을 발생시킨다.
        // 새로 고침을 방지하기 위해 preventDefault(); 선언
        e.preventDefault();
      },
      [onInsert, value], // + 버튼을 누를때마다 해당 컴포넌트만 리렌더링 한다.
  );

  return(
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input placeholder="할 일을 입력하세요"
          value={value}
          onChange={onChange}
        />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
  )
};

export default TodoInsert;
