import { useState } from "react";

import Category from "../models/Category";
import SoundButton from "./SoundButton";

type Props = {
  category: Category;
};

type PlayingState = {
  id: number;
  timeout: any;
};

const SoundsCategory = (props: Props) => {
  const [playingState, setPlayingState] = useState<PlayingState>({
    id: 0,
    timeout: null,
  });

  const emptyPlayingState = () => {
    if (playingState.timeout) {
      clearTimeout(playingState.timeout);
    }

    setPlayingState({
      id: 0,
      timeout: null,
    });
  }

  const toggleSound = async (id: number, duration: any) => {
    const [m, s] = `${duration}`.split(":");
    const seconds = parseInt(m, 10) * 60 + parseInt(s, 10);
    const { id: oldId } = playingState;

    await fetch(`api/stopSound`);

    emptyPlayingState();

    if (oldId != id) {
      fetch(`api/playSound/${id}`);
      setPlayingState({
        id,
        timeout: setTimeout(
          emptyPlayingState,
          seconds * 1000
        ),
      });
    }
  };

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
            toggleSound={toggleSound}
          />
        ))}
      </div>
    </section>
  );
};

export default SoundsCategory;
