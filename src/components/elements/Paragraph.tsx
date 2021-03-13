export const Paragraph = (props: { children: JSX.Element | string | (JSX.Element | string)[], className?: string }) => {
  return <p className={`max-w-prose ${props.className || ""}`}>{props.children}</p>;
};
