// 초기값 설정
const initState = {
  list: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '리액트 props 더 공부하기',
      done: false,
    },
    {
      id: 2,
      text: '취업 시켜주세요..',
      done: false,
    },
  ],
  };

  // 고유한 id값을 부여하기 위해 nextID라는 배열을 counts라는 이름으로 추가해주기
  let counts = initState.list.length;
  initState['nextID'] = counts;

  // 1. 액션 타입 정의(단, reduce전에 선언)
  const CREATE = 'todo/CREATE';
  const DONE = 'todo/DONE';

  // 2. 액션 생성 함수 만들어주기 (타입, 정보 등 액션의 기본적인 정보 보여줌)
  export function create(payload) {
    return {
      type: CREATE,  //앞에 todo/가 숨겨져있음
      payload,
      };
    }
    
    export function done(id) {
      return {
        type: DONE,  //앞에 todo/가 숨겨져있음
        id,
        };
      }

  // reducer 선언하기
  export default function todo(state = initState, action) {
    switch (action.type) {
      case CREATE:
        return {
          ...state,
          list: state.list.concat({   //concat 문자열,배열 등을 이어 붙여주는 메소드(아래 내용 추가시킴)
            id: action.payload.id,  //input에서 추가 받은 내용을 새롭게 넣어줄 예정
            text: action.payload.text,
            done: false,
          }),
          nextID: action.payload.id + 1, //기존 id는 0부터 시작되기 때문에 숫자를 맞춰주려면 +1해줘야함
        };
      case DONE:
        return {
          ...state,
          list: state.list.map((el) => {
            if(el.id === action.id) {
              return{
                ...el,
                done: true,
              };
            } else {
              return el;
            }
          }),
        };
      default:
      return state;
      }
  }
    
  