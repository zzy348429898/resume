import { State } from '..';
import { Dispatch } from 'redux';
import { slide, trigHeaderNav } from '../actions/actions';
import { connect } from 'react-redux';
import HeaderNav from '../components/HeaderNav';

const mapStateToProps = (state: State) => (
  {
    currentPage: state.sliderInfo.currentPage,
    isHidden: state.headerNav.hidden
  }
);

const mapDispatchToProps = (dispatch: Dispatch) => (
  {
    onClick: (arg: number) => {
      dispatch(slide(arg));
      dispatch(trigHeaderNav());
    },
    trigHeader : () => dispatch(trigHeaderNav())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);