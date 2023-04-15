export default function withNav(Component) {
  return (props) =>
    props.greet.length > 0 ? (
      <>
        {props.render()}
        <Component {...props} />
        {props.children}
      </>
    ) : null;
}
