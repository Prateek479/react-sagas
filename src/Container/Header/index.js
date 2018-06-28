import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from '../../Component/Header';
// import { fetchDataAction} from

const mapStateToProps = createStructuredSelector({
});
const mapDispatchToProps = {
   
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);

