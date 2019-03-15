import React from "react";
import PropTypes from "prop-types";
import "./theme.scss";

const Theme = ({ children }) => {
	return <div className="theme">{children}</div>;
};
Theme.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

const _Context = React.createContext({
	bar: {}
});
export default {
	Theme: Theme,
	Provider: _Context.Provider,
	Consumer: _Context.Consumer
};