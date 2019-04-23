import NavButtonList from '../components/NavButtonList';
import { State } from '..';
import { Dispatch} from 'redux';
import { slide } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state: State) => ({
  currentPage: state.sliderInfo.currentPage,
  pagesLength: state.sliderInfo.pagesLength
}
);
const mapDispatchToProps = (dispatch: Dispatch) => (
  {
    onClick: (arg: number) => dispatch(slide(arg))
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(NavButtonList);