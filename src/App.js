import React, {useState, useRef, useCallback} from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어보기',
      checked: false,
    },
  ]);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback( // 할 일을 추가하는 기능
      text => {
        const todo = {
          id: nextId.current,
          text,
          checked: false,
        };
        setTodos(todos.concat(todo));
        nextId.current += 1; // 작성된 일정(id)는 입력되었으니 새로운 id값을 받기 위해 1증가
      },
      [todos], // 일정이 변경될 때마다 화면을 리렌더링 하겠다.
  );

  const onRemove = useCallback(
      id => {
        setTodos(todos.filter(todo => todo.id !== id));
      },
      [todos],
  );

  const onToggle = useCallback(
      id => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, checked: !todo.checked} : todo, // ...todo <- 객체를 모아서 받는다.{id: 1, id: 2, id: 3}... 이런식
            ),                                                             // id가 같지 않다면 처음 받아온 상태 그대로 반환한다.
        );
      },
  );

  return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
  );
};

export default App;