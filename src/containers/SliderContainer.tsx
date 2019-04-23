import { connect } from 'react-redux';
import Slider from '../components/Slider';
import { Dispatch } from 'redux';
import { slide, sliderOnLoaded } from '../actions/actions';
import { State } from '..';

const mapStateToProps = (state: State) => ({
  currentPage: state.sliderInfo.currentPage
});
const mapDispatchToState = (dispatch: Dispatch) => ({
  onSlide: (id: number) => dispatch(slide(id)),
  onLoaded: (arg: number) => dispatch(sliderOnLoaded(arg))
});

export default connect(mapStateToProps, mapDispatchToState)(Slider);