import Home from './root';
import {connect} from 'react-redux';

import {
  fetchNewsStart,
  fetchNewNewsStart,
} from '@next/common/slices/news.slice';

import {
  lastRefreshTimeSelector,
  newsListSelector,
} from '@next/common/selectors';

const mapStateToProps = (state: any) => ({
  allNews: newsListSelector(state),
  lastRefreshTime: lastRefreshTimeSelector(state),
});

export default connect(mapStateToProps, {
  fetchNewsStart,
  fetchNewNewsStart,
})(Home);
