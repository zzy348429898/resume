// import {Action} from 'redux';
import { FSA } from '../actions/FSA';

export interface SliderInfoStore {
  currentPage?: number;
  pagesLength?: number
}
const sliderInfo = (state: SliderInfoStore = { currentPage: 0 }, action: FSA) => {
  switch (action.type) {
    case 'SLIDE':
      return { ...state, currentPage: action.payload };
    case 'SLIDER_ONLOADED':
      return { ...state, pagesLength: action.payload };
    case 'TONEXTPAGE':
    {
      if (state.currentPage < state.pagesLength - 1) {
        return { ...state, currentPage: state.currentPage + 1 };
      } else {
        return state;
      }
    }
    default:
      return state;
  }
};
export default sliderInfo;