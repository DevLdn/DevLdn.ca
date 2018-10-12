import React from 'react';

const SVG = ({
  style = {},
  fill = '#000',
  width = '24',
  className = '',
  viewBox = '0 0 24 24'
}) => (
  <svg
    style={style}
    width={width}
    height={width}
    className={`svg-icon ${className || ''}`}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={fill}
      d="M17 10v-5c0-2.756-2.244-5-5-5s-5 2.244-5 5v5c0 0.55-0.45 1-1 1v2h4v11h1v-11h2v10h1v-10h4v-2c-0.55 0-1-0.45-1-1zM14 11v-3h-1v3h-2v-3h-1v3h-1.172c0.113-0.312 0.172-0.65 0.172-1v-5c0-1.653 1.347-3 3-3s3 1.347 3 3v5c0 0.35 0.059 0.687 0.172 1h-1.172z"
    />
    <path
      fill={fill}
      d="M1.828 1.723l0.447-0.894 2.896 1.448-0.447 0.894-2.896-1.448z"
    />
    <path
      fill={fill}
      d="M18.828 2.277l2.896-1.448 0.447 0.894-2.896 1.448-0.447-0.894z"
    />
    <path
      fill={fill}
      d="M0.828 13.277l2.896-1.448 0.447 0.894-2.896 1.448-0.447-0.894z"
    />
    <path
      fill={fill}
      d="M19.828 12.724l0.447-0.894 2.896 1.448-0.447 0.894-2.896-1.448z"
    />
    <path fill={fill} d="M0 7h4v1h-4v-1z" />
    <path fill={fill} d="M20 7h4v1h-4v-1z" />
  </svg>
);

export default SVG;
