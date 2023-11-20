import React from "react";
import services from "../data/services";
import SectionTittle from "./SectionTittle";
import ServiceItem from "./ServiceItem";

function Services() {
  return (
    <div className="py-12">
      <SectionTittle> Services</SectionTittle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((services) => (
          <ServiceItem
            key={services.title}
            title={services.title}
            icon={services.icon}
            description={services.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
