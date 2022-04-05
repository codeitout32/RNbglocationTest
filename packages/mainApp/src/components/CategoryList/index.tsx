import CategoryList from './root';
import {connect} from 'react-redux';

import {
  categoryNewsListSelector,
  categoryNewsLoadingSelector,
  selectGoToTop,
} from '@next/common/selectors/';

import {updateNewsStateToRead} from '@next/common/slices/news.slice';
import {appBarActions} from '@next/common/slices/appBar.slice';
const {setIsAppBarVisibleAction, setShowTopIcon, setGoToTop} = appBarActions;

const mapStateToProps = (state: any) => ({
  isLoading: categoryNewsLoadingSelector(state),
  categoryNewsList: categoryNewsListSelector(state),
  goToTop: selectGoToTop(state),
});

export default connect(mapStateToProps, {
  updateNewsStateToRead,
  setIsAppBarVisibleAction,
  setShowTopIcon,

  setGoToTop,
})(CategoryList);
