function withContext (WrappedComponent, Context) {
  function WrappedComponentWithContext (props) {
    return (
      <Context.Consumer>
        {value => {
          return <WrappedComponent value={value} {...props} />;
        }}
      </Context.Consumer>
    );
  }
  return WrappedComponentWithContext;
}

export default withContext;
