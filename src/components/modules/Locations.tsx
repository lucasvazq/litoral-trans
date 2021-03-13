import { Map } from "..";

export const Locations = () => {
  return (
    <div className="flex flex-wrap m-8 justify-center">
      <div className="m-4" style={{ width: "700px" }}>
        <div className="m-auto max-h-screen">
          <Map />
        </div>
      </div>
    </div>
  );
};
