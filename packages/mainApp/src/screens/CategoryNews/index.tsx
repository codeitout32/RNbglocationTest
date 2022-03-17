import CategoryNews from './root';
import {connect} from 'react-redux';

import {fetchCategoryNewsStart} from '@next/common/slices/news.slice';

export default connect(null, {
  fetchCategoryNewsStart,
})(CategoryNews);
