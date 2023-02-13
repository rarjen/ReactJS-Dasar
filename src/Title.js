export const Title = (props) => {
  return "Nama Saya adalah " + props.name;
};

// Default params/props
Title.defaultProps = {
  name: "Anonymous",
};
