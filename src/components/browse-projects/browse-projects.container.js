import { connect } from 'react-redux';
import { getConfigValue } from 'utils'
import saveFilterOptions from 'actions/save-filter-options'
import BrowseProjectsComponent from './browse-projects.component'

const mapStateToProps = ({ agencies, filters, siteConfig }) => {
  return {
    backgroundImage: getConfigValue(siteConfig, 'images.background'),
    filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveFilterData: () => dispatch(saveFilterOptions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseProjectsComponent)
