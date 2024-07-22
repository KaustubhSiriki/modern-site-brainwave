import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex max-lg:flex-wrap gap-[1rem]">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto odd:my-4 odd:py-8 even:py-14 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="mb-4 h4">{item.title}</h4>
          <p className="mb-3 body-2 min-h-[4rem] text-n-1/50">{item.description}</p>
          <div className="flex items-center mb-6 h-[5.5rem]">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="font-bold leading-none text-[5.5rem]">{item.price}</div>
              </>
            )}
          </div>
          <Button
            href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
            className="w-full mb-6"
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>
          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} alt="Check" width={24} height={24} />
                <p className="ml-4 body-2">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
