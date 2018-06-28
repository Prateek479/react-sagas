import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { createMrfAction } from './actions'
import Mrf from '../../Component/Mrf';
import { selectLoading } from './selector'

const mapStateToProps = createStructuredSelector({
   isLoading: selectLoading ()
});
const mapDispatchToProps = {
   createMrf : createMrfAction
};
export default connect(mapStateToProps, mapDispatchToProps)(Mrf);

