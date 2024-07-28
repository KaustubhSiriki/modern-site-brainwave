import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Button from "./Button";

const cardColors = [
  { start: 'from-blue-400', end: 'to-gray-500' },
  { start: 'from-yellow-400', end: 'to-gray-500' },
  { start: 'from-pink-400', end: 'to-gray-500' },
  { start: 'from-green-400', end: 'to-gray-500' },
  { start: 'from-orange-400', end: 'to-gray-500' },
  { start: 'from-purple-400', end: 'to-gray-500' },
];

const Benefits = () => {
  return (
    <Section id="features" className="justify-in-between items-center">
      <div className="relative container z-2">
        <Heading 
          className="lg:max-w-2xl md:max-w-md" 
          title="Chat Smarter, Not Harder with Brainwave" 
        />
        
        <div className="flex flex-wrap gap-10 mb-10 justify-in-between items-center">
          {benefits.map((item, index) => (
            <div
              key={item.id}
              className={`relative block md:max-w-[22rem] p-0.5 bg-gradient-to-b ${cardColors[index].start} ${cardColors[index].end} rounded-xl transition-transform transform hover:scale-105 hover:z-10`}
            >
              <div className="relative bg-n-8 rounded-xl overflow-hidden p-0.5 transition-transform transform group-hover:scale-95">
                <div className="relative z-2 flex flex-col p-[2.4rem] min-h-[22rem] pointer-events-none">
                  <h5 className="mb-5 h5">{item.title}</h5>
                  <p className="mb-6 body-2 text-n-3">{item.text}</p>
                  <div className="flex items-center mt-auto">
                    <img 
                      src={item.iconUrl} 
                      alt={item.title} 
                      width={48} 
                      height={48} 
                    />
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Explore more
                    </p>
                    <Arrow />
                  </div>
                </div>

                {item.light && <GradientLight />}

                <div className="absolute inset-0" style={{ clipPath: "url(#benefits)" }}>
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        width={380} 
                        height={360} 
                        className="w-full h-full object-cover" 
                      />
                    )}
                  </div>
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
