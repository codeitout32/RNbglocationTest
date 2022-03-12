import Home from './root';
import {connect} from 'react-redux';

import {
  fetchNewsStart,
  fetchSingleNewsStart,
} from '@next/common/slices/news.slice';

export default connect(null, {fetchNewsStart, fetchSingleNewsStart})(Home);
