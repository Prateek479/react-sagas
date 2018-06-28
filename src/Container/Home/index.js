import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Home from '../../Component/Home';
// import { fetchDataAction} from

const mapStateToProps = createStructuredSelector({
});
const mapDispatchToProps = {
   
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

