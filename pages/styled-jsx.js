import css from "styled-jsx/css";
import ParentComponent from "../components/styled-jsx/ParentComponent";
import ChildComponent from "../components/styled-jsx/ChildComponent";

export default function StyledJSX() {
  const styles = css`
    div {
      margin: 2rem;
    }
  `;
  // define the styles outside components.
  const stylesChildren = css.resolve`
    .child {
      margin: 0.5rem;
    }
  `;

  return (
    <div>
      <ParentComponent>
        <ChildComponent className={`child ${stylesChildren.className}`} />
        <ChildComponent className={`child ${stylesChildren.className}`} />
        <ChildComponent className={`child ${stylesChildren.className}`} />
        <ChildComponent className={`child ${stylesChildren.className}`} />
      </ParentComponent>
      <style jsx>{styles}</style>
      {stylesChildren.styles}
    </div>
  );
}
