export const Label = (props: { children: JSX.Element | JSX.Element[], className: string }) => {
  return (
    <div className="m-4">
      <div className={`rounded-md shadow-md flex items-center justify-center ${props.className}`}>
        <div className="max-w-prose flex flex-col items-center justify-center w-full">{props.children}</div>
      </div>
    </div>
  );
};

export const LabelsContainer = (props: { children: JSX.Element | JSX.Element[] }) => {
  return <div className="flex flex-wrap justify-center">{props.children}</div>;
};
