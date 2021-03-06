import { connect } from 'react-redux';
import CanTeach from '../components/CanTeach.jsx';
import { addTeach, removeTeach } from '../actions/index.js';

const mapStateToProps = (state) => ({
  canTeach: state.profile.languages.canTeach,
});

const mapDispatchToProps = (dispatch) => ({
  onAddTeachClick: (language) => { dispatch(addTeach(language)); },
  onRemoveTeachClick: (language) => { dispatch(removeTeach(language)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(CanTeach);
