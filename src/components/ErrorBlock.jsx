import React from 'react';

function ErrorBlock() {
  return (
    <div className="content__error">
      <h2>
        Ошибка загрузки <span className="icon">😕</span>
      </h2>
      <p>Попробуйте позже</p>
    </div>
  );
}

export default ErrorBlock;
