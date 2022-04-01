import MyList from './root';
import {connect} from 'react-redux';

import {
  lastRefreshTimeSelector,
  newsListSelector,
  newNewsListSelector,
  newsLoadingSelector,
  newNewsLoadingSelector,
  newsUpdatedSelector,
} from '@next/common/selectors/';

import {
  updateNewsStateToRead,
  updateNewsAction,
} from '@next/common/slices/news.slice';
import {appBarActions} from '@next/common/slices/appBar.slice';

const {toggleAppBarAction, setIsAppBarVisibleAction} = appBarActions;

const mapStateToProps = (state: any) => ({
  isNewsLoading: newsLoadingSelector(state),
  isNewNewsLoading: newNewsLoadingSelector(state),
  newsList: newsListSelector(state),
  newNewsList: newNewsListSelector(state),
  lastRefreshTimeReducer: lastRefreshTimeSelector(state),
  isNewsUploaded: newsUpdatedSelector(state),
});

export default connect(mapStateToProps, {
  updateNewsStateToRead,
  updateNewsAction,
  toggleAppBarAction,
  setIsAppBarVisibleAction,
})(MyList);
