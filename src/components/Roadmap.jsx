import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section id="roadmap" className="overflow-hidden">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What we’re working on" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              key={item.id}
              className={`p-0.25 md:flex even:md:translate-y-[7rem] rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
            >
              <div className="relative p-8 xl:p-15 bg-n-8 rounded-[2.4375rem] overflow-hidden">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    src={grid}
                    alt="Grid"
                    width={550}
                    height={550}
                    className="w-full"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between mb-8 max-w-[27rem] md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center py-1 px-4 rounded bg-n-1 text-n-8">
                      <img
                        src={item.status === "done" ? check2 : loading1}
                        alt={status}
                        width={16}
                        height={16}
                        className="mr-2.5"
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      width={628}
                      height={426}
                      className="w-full"
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="text-n-4 body-2">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
