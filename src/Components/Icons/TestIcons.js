import React from 'react'
import FontAwesome from "react-fontawesome";

const Icon = (props) => {
    return (
      <FontAwesome
        className="super-crazy-colors"
        name={props.name}
        size="2x"
        spin={false}
        style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
      />
    );
}

export default Icon;