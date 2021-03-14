import { IconType } from "react-icons";

import { Label, LabelsContainer, Paragraph } from "..";

export const Services = (props: { services: { icon: IconType, description: string }[] }) => (
  <LabelsContainer>
    {props.services.map((value, index) => {
      const Icon = value.icon;
      return (
        <Label key={index} className="bg-light p-4 min-h-64 max-w-2xs">
          <div>
            <div className="p-3 mb-3">
              <Icon className="text-5xl text-primary relative z-1" />
            </div>
            <div className="absolute h-40 w-40 -ml-11 -mt-36 pt-2">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill={process.env.colorSecondary}
                  d="M53.9,-17.3C61.6,6.4,54.1,35.2,37.4,46C20.8,56.9,-5,49.6,-22.8,35.7C-40.7,21.7,-50.5,1,-45.4,-19C-40.3,-39.1,-20.1,-58.5,1.5,-59C23.1,-59.5,46.1,-41,53.9,-17.3Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <div className="absolute h-44 w-44 -ml-11 -mt-36 pt-2">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill={process.env.colorTerciary}
                  d="M27.4,-20C33.2,-5.9,33.8,7,28.4,19.5C23,32,11.5,44.1,-5,47C-21.4,49.9,-42.8,43.5,-49.4,30.3C-55.9,17.2,-47.6,-2.8,-36.9,-19.7C-26.2,-36.7,-13.1,-50.8,-1.1,-50.1C10.8,-49.5,21.7,-34.1,27.4,-20Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
          <Paragraph className="text-center">{value.description}</Paragraph>
        </Label>
      );
    })}
  </LabelsContainer>
);
