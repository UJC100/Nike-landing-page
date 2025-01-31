import React from "react";
import { services } from "../constants/data";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map(service => {
        return <ServiceCard key={service.label} {...service} />
      })}
    </section>
  );
};

export default Services;
