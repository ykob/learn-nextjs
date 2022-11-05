const ChildComponent = (props) => {
  const bgColor = props.bgColor || "red";

  return (
    <div className={["block", props.className].join(" ")}>
      <div className="label">This is Child Component.</div>
      <style jsx>{`
        .block {
          background-color: ${bgColor};
        }
        .label {
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default ChildComponent;
