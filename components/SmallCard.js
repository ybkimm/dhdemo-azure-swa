import React from 'react';

export default function SmallCard({ icon, title, slug }) {
  return (
    <a className="card-small" href={slug}>
      {icon}
      <h3>{title}</h3>
    </a>
  );
}
