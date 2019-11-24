import React from "react";
import "./List.scss"; 


const List = ({ items, isRemovable }) => {
  return (
    <ul className="list">
      {items.map(({ name, icon, color, active }) => (
        <li key={name} className={active ? "active" : null}>
          {icon ? <i>{icon}</i> : <i className={`badge badge--${color}`}></i>}
          <span>{name.length >= 14 ? name.slice(0, 14) + "..." : name}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
