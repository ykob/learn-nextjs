import css from "styled-jsx/css";

const ChildComponent = (props) => {
  const styles = css`
    .block {
      background-color: red;
    }
    .label {
      color: #fff;
    }
  `;

  return (
    <div className={["block", props.className].join(" ")}>
      <div className="label">This is Child Component.</div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default ChildComponent;
