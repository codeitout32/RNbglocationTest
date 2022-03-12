import Categories from './root';
import {connect} from 'react-redux';

import {fetchCategoriesStart} from '@next/common/slices/assets.slice';
import {categoriesSelector} from '@next/common/selectors/';

const mapStateToProps = (state: any) => ({
  categoriesList: categoriesSelector(state),
});
export default connect(mapStateToProps, {fetchCategoriesStart})(Categories);
