import { Divider, Paper, Stack } from "@mantine/core";
import Image from "next/image";

// components/ServiceWidget.tsx
type ServiceWidgetProps = {
  title: string;
  description: string;
  services: string[];
  industries: string;
};

const ServiceWidget = ({
  title,
  description,
  services,
  industries,
}: ServiceWidgetProps) => {
  return (
    <Paper radius={"10px"} className="bg-white shadow-md  " withBorder>
      <Stack justify="space-between" className="h-full">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
          <h4 className="text-md font-medium text-gray-700 mt-4">
            Key Services:
          </h4>
          <ul className="list-none mt-2 space-y-2">
            {services.map((service, index) => (
              <li key={index} className="flex items-center gap-2">
                <Image
                  src="/icons/gg_check-o.svg"
                  alt="Engineering Icon"
                  width={24}
                  height={24}
                />{" "}
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Divider className="my-0" />
          <p className="text-[#FC6111] p-6">Industries: {industries}</p>
        </div>
      </Stack>
    </Paper>
  );
};

export default ServiceWidget;
