import { Container } from "@/components/container";
import { coffees } from "@/utils/coffees";
import { CoffeeCard } from "./card";

export function CoffeeList() {
  return (
    <Container>
      <section className="space-y-14 mt-8 mb-[157px]">
        <h5 className="font-baloo2 text-base-subtitle title-lg">
          Nossos cafés
        </h5>

        <div className="grid grid-cols-4 gap-x-8 gap-y-10">
          {coffees.map((coffee, i) => {
            return <CoffeeCard key={`${coffee.title}-${i}`} {...coffee} />;
          })}
        </div>
      </section>
    </Container>
  );
}
