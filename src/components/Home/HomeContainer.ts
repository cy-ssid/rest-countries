import { connect } from "react-redux";
import Home from "./Home";
import { fetchCountries, getFilteredCountries } from "../../store/countries";
import {
  getError, getLoading, getRegion,
  getSearch, getTheme
} from "../../store/home";
import { RootState } from "../../interfaces";

const mapStateToProps = (state: RootState) => {
  return {
    error: getError(state),
    loading: getLoading(state),
    region: getRegion(state),
    search: getSearch(state),
    theme: getTheme(state),
    countries: getFilteredCountries(state),
  };
};

const mapDispatchToProps = {
  fetchCountries,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
