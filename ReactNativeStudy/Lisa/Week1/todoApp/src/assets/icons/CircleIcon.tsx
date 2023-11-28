import {Path, Svg} from 'react-native-svg';
import {KeyOfPalette, theme} from 'styles';
import {TouchableOpacity} from 'react-native';
import {useRecoilState} from 'recoil';

import {todoListState} from 'libs/store/todoList';

const CircleIcon = ({
  fill = 'orange',
  id,
}: {
  fill?: KeyOfPalette;
  id: number;
}) => {
  const [todoListData, setTodoListData] = useRecoilState(todoListState);

  const handlePressCircleIcon = () => {
    const updatedTodoList = todoListData.todo.map(todo =>
      todo.id === id ? {...todo, done: true} : todo,
    );

    setTodoListData(prevState => ({...prevState, todo: updatedTodoList}));
  };

  return (
    <TouchableOpacity onPress={handlePressCircleIcon}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M12.003 21C10.759 21 9.589 20.764 8.493 20.292C7.39767 19.8193 6.44467 19.178 5.634 18.368C4.82333 17.5587 4.18167 16.6067 3.709 15.512C3.23633 14.4173 3 13.2477 3 12.003C3 10.759 3.236 9.589 3.708 8.493C4.18067 7.39767 4.822 6.44467 5.632 5.634C6.44133 4.82333 7.39333 4.18167 8.488 3.709C9.58267 3.23633 10.7523 3 11.997 3C13.241 3 14.411 3.236 15.507 3.708C16.6023 4.18067 17.5553 4.822 18.366 5.632C19.1767 6.44133 19.8183 7.39333 20.291 8.488C20.7637 9.58267 21 10.7523 21 11.997C21 13.241 20.764 14.411 20.292 15.507C19.8193 16.6023 19.178 17.5553 18.368 18.366C17.5587 19.1767 16.6067 19.8183 15.512 20.291C14.4173 20.7637 13.2477 21 12.003 21ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
          fill={`${theme.palette[fill]}`}
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default CircleIcon;
