import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/homeActions';
import Home from '../../components/Home/Home';

const mapStateToProps = state => ({
    counter: state.home.counter
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
