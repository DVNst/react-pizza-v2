import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSkeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ececec">
    <rect x="0" y="270" rx="10" ry="10" width="280" height="21" />
    <circle cx="133" cy="125" r="124" />
    <rect x="0" y="313" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="420" rx="10" ry="10" width="91" height="46" />
    <rect x="127" y="420" rx="10" ry="10" width="153" height="46" />
  </ContentLoader>
);

export default PizzaSkeleton;
