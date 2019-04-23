import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toNextPage } from '../actions/actions';
import Arrow from '../components/Arrow';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClick: () => dispatch(toNextPage())
});

export default connect(() => ({ }), mapDispatchToProps)(Arrow);
