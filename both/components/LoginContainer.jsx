const { TextField } = MUI;

LoginContainer = React.createClass({
  render() {
  	return <div className="login-container animated fadeInUp">
  	  <TextField
		hintText="Hint Text"
		floatingLabelText="Floating Label Text"
		value="" />
  	</div>;
  }
});