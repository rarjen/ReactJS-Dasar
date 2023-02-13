import React from "react";

// component button
// mengirim onClick dan children(value)
export default function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
