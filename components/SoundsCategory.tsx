import { useMemo, useState } from "react";

import Category from "../models/Category";
import SoundButton from "./SoundButton";

type Props = {
  category: Category;
};

type PlayingState = {
  id: number;
  title: string;
  timeout: any;
};

const SoundsCategory = (props: Props) => {
  const [playingState, setPlayingState] = useState<PlayingState>({
    id: 0,
    title: "",
    timeout: null,
  });

  const emptyPlayingState = () => {
    if (playingState.timeout) {
      clearTimeout(playingState.timeout);
    }

    setPlayingState({
      id: 0,
      title: "",
      timeout: null,
    });
  }

  const [sortByPlayCount, setSortByPlayCount] = useState<boolean>(true);

  const sortedSounds = useMemo(() => {
    const sounds = [...props.category.sounds];
    sounds.sort((a, b) => a.title.localeCompare(b.title));

    if (sortByPlayCount) {
      sounds.sort((a, b) => b.playCount - a.playCount);
    }

    return sounds;
  }, [props.category.sounds, sortByPlayCount]);

  const toggleSound = async (id: number, title: string, duration: any) => {
    const [m, s] = `${duration}`.split(":");
    const seconds = parseInt(m, 10) * 60 + parseInt(s, 10);
    const { id: oldId } = playingState;

    await fetch(`api/stopSound`);

    emptyPlayingState();

    if (oldId != id) {
      fetch(`api/playSound/${id}`);
      setPlayingState({
        id,
        title,
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
        {props.category.name} <u>{playingState.title}</u>
      </h3>

      <div>
        <label className="mr-2">Sort by play count</label>
        <input
          type="checkbox"
          checked={sortByPlayCount}
          onChange={(event) => setSortByPlayCount(event.target.checked)}
        />
      </div>

      <div
        className="flex flex-wrap flex-row justify-center content-start
                   md:justify-start"
      >
        {sortedSounds.map((sound) => (
          <SoundButton
            id={sound.id}
            key={sound.id}
            title={sound.title}
            duration={sound.duration}
            playing={playingState.id === sound.id}
            toggleSound={toggleSound}
          />
        ))}
      </div>
    </section>
  );
};

export default SoundsCategory;
