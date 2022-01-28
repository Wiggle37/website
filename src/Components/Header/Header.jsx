import React from "react";

import "./Header.css"

export default function Header(props) {
    // eslint-disable-next-line react/prop-types
    const navigation = [...props.items]
  
    return (
        <div className="Header">
            {
                navigation.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <a className="left" href={item.path}>
                        {item.name}
                    </a>
                ))
            }
        </div>
    );
}