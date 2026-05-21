import React from 'react';
import './RenderAnalysis.css';

export const ChildWithMemo = React.memo(function ChildWithMemo() {
  console.log('ChildWithMemo');
  return <h2 className="title color_title"> Я - дочерний компонент, обернутый в React.memo</h2>;
});
