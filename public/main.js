var ExampleComponent = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
      return {
          drinks: []
      }
  },

  componentWillMount: function() {
      var drinksRef = firebase.database().ref("drinks");
      this.bindAsArray(drinksRef, "drinks");
  }
});

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
