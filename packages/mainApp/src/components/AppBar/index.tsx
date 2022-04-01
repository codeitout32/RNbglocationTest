import AppBar from './root';
import {connect} from 'react-redux';

import {selectIsAppBarVisible} from '@next/common/selectors/';

const mapStateToProps = (state: any) => ({
  isVisible: selectIsAppBarVisible(state),
});

export default connect(mapStateToProps, {})(AppBar);
