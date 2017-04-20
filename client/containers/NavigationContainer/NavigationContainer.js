import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import Navigation from '../../components/Navigation/Navigation';

const mapStateToProps = state => ({
    currentTab: state.navigation.currentTab,
    links: state.navigation.links
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);
