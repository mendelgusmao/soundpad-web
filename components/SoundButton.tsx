import StatusDot from "./StatusDot";

type Props = {
  id: number;
  title: string;
  duration: string;
  playing: boolean;
  toggleSound: (id: number, duration: any) => void;
};

const SoundButton = (props: Props) => {
  const toggleSound = () => props.toggleSound(props.id, props.duration);

  return (
    <button
      className="flex flex-col items-stretch h-20 w-20 p-2 m-1 text-left rounded-xl overflow-visibleff cursor-pointer shadow-xl transition-all bg-gray-600 text-gray-200
                 hover:shadow-lg active:scale-95 active:shadow-xl active:bg-red-700 active:text-red-100 md:hover:scale-95 md:active:scale-100 md:hover:bg-gray-500 
                 dark:bg-zinc-800 dark:text-zinc-200 md:dark:hover:bg-zinc-600 dark:active:bg-zinc-700"
      onClick={toggleSound}
    >
      <p className="flex-grow font-medium leading-4 select-none overflow-hidden">
        {props.title}
      </p>

      <div className="flex items-center justify-between self-end">
        <StatusDot enabled={props.playing} color="white" />
        <p
          className="font-medium leading-3 select-none text-gray-400
                    dark:text-zinc-400 self-end"
        >
          {props.duration}
        </p>
      </div>
    </button>
  );
};

export default SoundButton;
