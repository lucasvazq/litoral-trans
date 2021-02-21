import { IconType } from "react-icons";
import { Paragraph, LabelsContainer, Label } from ".."

export const Services = (props: {services: {icon: IconType; description: string}[]}) => {

    return (
        <LabelsContainer>
            {props.services.map((value, index) => {
                const Icon = value.icon
                return (
                    <Label key={index} className="bg-light p-4 min-h-64">
                        <div className="bg-secondary rounded-full p-3 mb-3">
                            <Icon className="text-5xl text-primary" />
                        </div>
                        <Paragraph className="text-center">{value.description}</Paragraph>
                    </Label>
                )
            })}
        </LabelsContainer>
    )
}