import MyList from './root';
import {connect} from 'react-redux';

import {
  lastRefreshTimeSelector,
  newsListSelector,
  newNewsListSelector,
  newsLoadingSelector,
  newNewsLoadingSelector,
} from '@next/common/selectors/';

import {
  updateNewsStateToRead,
} from '@next/common/slices/news.slice';

const mapStateToProps = (state: any) => ({
  isNewsLoading: newsLoadingSelector(state),
  isNewNewsLoading: newNewsLoadingSelector(state),
  newsList: newsListSelector(state),
  newNewsList: newNewsListSelector(state),
  lastRefreshTimeReducer: lastRefreshTimeSelector(state),
});

export default connect(mapStateToProps, {
  updateNewsStateToRead,
})(MyList);
