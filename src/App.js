import React, {useState, useRef, useCallback} from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTodos() { // 일정 더미 생성
  const array = [];

  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }

  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback( // 할 일을 추가하는 기능
      text => {
        const todo = {
          id: nextId.current,
          text,
          checked: false,
        };
        setTodos(todos => todos.concat(todo)); // 추가(함수형 업데이트로 변환)
        nextId.current += 1; // 작성된 일정(id)는 입력되었으니 새로운 id값을 받기 위해 1증가
      },
      [todos], // 일정이 변경될 때마다 화면을 리렌더링 하겠다.
  );

  const onRemove = useCallback(
      id => {
        setTodos(todos => todos.filter(todo => todo.id !== id)); // 삭제(함수형 업데이트로 변환)
      },
      [todos],
  );

  const onToggle = useCallback(
      id => {
        setTodos(todos => // 체크(함수형 업데이트로 변환)
            todos.map(todo =>
                todo.id === id ? {...todo, checked: !todo.checked} : todo, // ...(전개연산자) <- 같은 객체를 바라보는게 아닌, 값만 복사해서 넣는다.
            ),                                                             // id가 같지 않다면 처음 받아온 상태 그대로 반환한다.
        );
      },
  );

  return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
  );
};

export default App;