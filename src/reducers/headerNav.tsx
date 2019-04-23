import { FSA } from '../actions/FSA';
import { State } from '..';

export interface HeaderNavStore  {
  hidden: boolean;
}

const headerNav = (state: HeaderNavStore = {hidden: true}, action: FSA) => {
  switch(action.type){
    case 'TRIG_HEADERNAV':
      return {...state, hidden: !state.hidden};
    default:
      return state;
  }
};
export default headerNav;