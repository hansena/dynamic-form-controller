import React from "react";
import PropTypes from "prop-types";
import deburr from "lodash/deburr";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

// function renderInputComponent(inputProps) {
// 	const { classes, inputRef = () => {}, ref, ...other } = inputProps;
// 	console.log(inputProps);
// 	return (
// 		<TextField
// 			fullWidth
// 			InputProps={{
// 				inputRef: (node) => {
// 					ref(node);
// 					inputRef(node);
// 				},
// 				classes: {
// 					input: classes.input,
// 				},
// 			}}
// 			{...other}
// 		/>
// 	);
// }

function renderSuggestion(suggestion, { query, isHighlighted }) {
	const matches = match(suggestion.label, query);
	const parts = parse(suggestion.label, matches);

	return (
		<MenuItem selected={isHighlighted} component="div">
			<div>
				{parts.map((part, index) =>
					part.highlight ? (
						<span key={String(index)} style={{ fontWeight: 500 }}>
							{part.text}
						</span>
					) : (
						<strong key={String(index)} style={{ fontWeight: 300 }}>
							{part.text}
						</strong>
					)
				)}
			</div>
		</MenuItem>
	);
}

function getSuggestions(value, suggestions) {
	const inputValue = deburr(value.trim()).toLowerCase();
	const inputLength = inputValue.length;
	let count = 0;

	return inputLength === 0
		? []
		: suggestions.filter((suggestion) => {
				const keep = count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

				if (keep) {
					count += 1;
				}

				return keep;
		  });
}

function getSuggestionValue(suggestion) {
	return suggestion.label;
}

const styles = (theme) => ({
	root: {
		height: 250,
		flexGrow: 1,
	},
	container: {
		position: "relative",
	},
	suggestionsContainerOpen: {
		position: "absolute",
		zIndex: 1,
		marginTop: theme.spacing.unit,
		left: 0,
		right: 0,
	},
	suggestion: {
		display: "block",
	},
	suggestionsList: {
		margin: 0,
		padding: 0,
		listStyleType: "none",
	},
	divider: {
		height: theme.spacing.unit * 2,
	},
});

class AutocompletePresentation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			single: "",
			suggestions: [],
		};
	}

	renderInputComponent = (inputProps) => {
		const { classes, inputRef = () => {}, ref, ...other } = inputProps;
		console.log("inputProps: ", inputProps);
		console.log("this.props: ", this.props);
		const { name, label } = this.props;
		return (
			<TextField
				fullWidth
				InputProps={{
					inputRef: (node) => {
						ref(node);
						inputRef(node);
					},
					classes: {
						input: classes.input,
					},
				}}
				label={label}
				name={name}
				{...other}
			/>
		);
	};

	handleSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: getSuggestions(value, this.props.suggestions),
		});
	};

	handleSuggestionsClearRequested = () => {
		this.setState({
			suggestions: [],
		});
	};

	handleChange = (name) => (event, { newValue }) => {
		this.setState({
			[name]: newValue,
		});
		this.props.onChange(event);
	};

	render() {
		const { classes } = this.props;
		console.log("autosuggest: ", this.props);
		const autosuggestProps = {
			renderInputComponent: this.renderInputComponent,
			suggestions: this.state.suggestions,
			onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
			onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
			getSuggestionValue,
			renderSuggestion,
		};

		return (
			<div className={classes.root}>
				<Autosuggest
					{...autosuggestProps}
					inputProps={{
						classes,
						placeholder: this.props.label,
						value: this.state.single,
						onChange: this.handleChange("single"),
					}}
					theme={{
						container: classes.container,
						suggestionsContainerOpen: classes.suggestionsContainerOpen,
						suggestionsList: classes.suggestionsList,
						suggestion: classes.suggestion,
					}}
					renderSuggestionsContainer={(options) => (
						<Paper {...options.containerProps} square>
							{options.children}
						</Paper>
					)}
				/>
			</div>
		);
	}
}

AutocompletePresentation.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutocompletePresentation);
