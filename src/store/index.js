// index에서 모듈의 각각 js파일의 리듀서들을 통합 관리 파일 -> 통합을 위해 redux의 combineRdeucer사용
import { combineReducers } from 'redux';
import todo from './modules/todo'; //todo라는 함수 import

export default combineReducers({
  todo,
});
