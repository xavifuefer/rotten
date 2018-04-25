import { connect } from 'react-redux';

import Actor from '../components/Actor';
import { spawn } from '../actions/status';

const mapStateToProps = state => ({
  vitals: state.actor.vitals
});
const mapDispatchToProps = {
  spawn
};

export default connect(mapStateToProps, mapDispatchToProps)(Actor);
