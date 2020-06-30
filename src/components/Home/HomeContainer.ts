import { connect } from "react-redux";
import Home from "./Home";
import { fetchCountries, getCountries } from "../../store/countries";
import {
  getError, getLoading, getRegion,
  getSearch, getTheme
} from "../../store/home";

const mapStateToProps = (state: any) => {
  return {
    error: getError(state),
    loading: getLoading(state),
    region: getRegion(state),
    search: getSearch(state),
    theme: getTheme(state),
    countries: getCountries(state),
  };
};

const mapDispatchToProps = {
  fetchCountries,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
