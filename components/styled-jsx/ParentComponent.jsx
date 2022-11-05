import css from "styled-jsx/css";

const ParentComponent = (props) => {
  const styles = css`
    .block {
      overflow: hidden;
      background-color: #333;
    }
    .label {
      color: #fff;
    }
  `;
  return (
    <div className="block">
      <div className="label">This is Parent Component.</div>
      {props.children}
      <style jsx>{styles}</style>
    </div>
  );
};

export default ParentComponent;
