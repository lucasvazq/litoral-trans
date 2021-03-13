export const H1 = (props: { children: JSX.Element | JSX.Element[] | string, className?: string, id?: string }) => {
  return (
    <h1 id={props.id ? props.id : null} className={`text-center max-w-prose m-auto ${props.className || ""}`}>
      {props.children}
    </h1>
  );
};

export const H2 = (props: { children: JSX.Element | JSX.Element[] | string, className?: string, id?: string }) => {
  return (
    <h2 id={props.id ? props.id : null} className={`text-center max-w-prose m-auto ${props.className || ""}`}>
      {props.children}
    </h2>
  );
};

export const H3 = (props: { children: JSX.Element | JSX.Element[] | string, className?: string, id?: string }) => {
  return (
    <h3 id={props.id ? props.id : null} className={`text-center max-w-prose m-auto ${props.className || ""}`}>
      {props.children}
    </h3>
  );
};
