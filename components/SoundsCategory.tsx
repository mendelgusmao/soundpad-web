import Category from "../models/Category";

import SoundButton from "./SoundButton";

type Props = {
  category: Category;
};

const SoundsCategory = (props: Props) => {
  return (
    <section
      className="flex flex-col w-screen px-5 mb-4 shrink-0 snap-start text-center
                 md:text-left"
    >
      <h3
        className="text-xl px-1 mb-4 font-bold text-gray-600
                   dark:text-zinc-300"
      >
        {props.category.name}
      </h3>

      <div
        className="flex flex-wrap flex-row justify-center content-start
                   md:justify-start"
      >
        {props.category.sounds.map((sound) => (
          <SoundButton
            id={sound.id}
            key={sound.id}
            title={sound.title}
            duration={sound.duration}
          />
        ))}
      </div>
    </section>
  );
};

export default SoundsCategory;
