import React from "react";

export default function Input({ type, value, name, onChange }) {
  return <input type={type} value={value} name={name} onChange={onChange} />;
}
