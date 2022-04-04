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
import {fetchAdvertStart} from '@next/common/slices/adverts.slice';

const mapStateToProps = (state: any) => ({
  allNews: newsListSelector(state),
  lastRefreshTime: lastRefreshTimeSelector(state),
});

export default connect(mapStateToProps, {
  fetchNewsStart,
  fetchNewNewsStart,
  fetchAdvertStart,
})(Home);
