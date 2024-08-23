import { Card } from "./Card";
import { servicesData } from "@/data/Data";

type ServicesProps = {};

const Services: React.FC<ServicesProps> = (props) => {
  return (
    <section id="services" className="flex flex-wrap gap-y-8">
      {servicesData.map((service, index) => (
        <Card
          key={index}
          name={service.name}
          iconName={service.iconName}
          description={service.description}
          elements={service.elements}
          monthPrice={service.monthPrice}
          anualMonthPrice={service.anualMonthPrice}
        />
      ))}
    </section>
  );
};

export default Services;
