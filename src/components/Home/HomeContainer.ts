import { connect } from "react-redux";
import Home from "./Home";
import { fetchCountries } from "../../store/countries";
// import { fetchCountries } from "../../store/home";

const mapStateToProps = (state: any) => {
  return {
    test: 1
  };
};

const mapDispatchToProps = {
  fetchCountries,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
