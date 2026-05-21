import './RenderAnalysis.css';

export function ChildWithoutMemo() {
  console.log('ChildWithoutMemo');
  return <h2 className="title color_title">Я - дочерний компонент без React.memo</h2>;
}
