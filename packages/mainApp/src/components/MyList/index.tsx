import MyList from './root';
import {connect} from 'react-redux';

import {
  lastRefreshTimeSelector,
  newsListSelector,
  newNewsListSelector,
  newsLoadingSelector,
  newNewsLoadingSelector,
  newsUpdatedSelector,
  selectGoToTop,
  advertListSelector,
  selectIsAppBarVisible,
  selectShowUpArrow,
  selectNewsReadCount,
} from '@next/common/selectors/';

import {
  updateNewsStateToRead,
  updateNewsAction,
} from '@next/common/slices/news.slice';
import {appBarActions} from '@next/common/slices/appBar.slice';

const {setIsAppBarVisibleAction, setShowTopIcon, setGoToTop} = appBarActions;

const mapStateToProps = (state: any) => ({
  isNewsLoading: newsLoadingSelector(state),
  isNewNewsLoading: newNewsLoadingSelector(state),
  newsList: newsListSelector(state),
  newNewsList: newNewsListSelector(state),
  lastRefreshTimeReducer: lastRefreshTimeSelector(state),
  isNewsUploaded: newsUpdatedSelector(state),
  goToTop: selectGoToTop(state),
  advertListStore: advertListSelector(state),
  isAppBarVisible: selectIsAppBarVisible(state),
  showUpArrow: selectShowUpArrow(state),
  newsReadCount: selectNewsReadCount(state),
});

export default connect(mapStateToProps, {
  updateNewsStateToRead,
  updateNewsAction,
  setShowTopIcon,
  setIsAppBarVisibleAction,
  setGoToTop,
})(MyList);
