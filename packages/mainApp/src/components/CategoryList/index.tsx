import CategoryList from './root';
import {connect} from 'react-redux';

import {
  categoryNewsListSelector,
  categoryNewsLoadingSelector,
} from '@next/common/selectors/';

import {updateNewsStateToRead} from '@next/common/slices/news.slice';

const mapStateToProps = (state: any) => ({
  isLoading: categoryNewsLoadingSelector(state),
  categoryNewsList: categoryNewsListSelector(state),
});

export default connect(mapStateToProps, {
  updateNewsStateToRead,
})(CategoryList);
