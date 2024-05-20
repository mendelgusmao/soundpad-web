import Category from "../models/Category";
import ControlButton from "./ControlButton";

const ControlView = ({ updateSounds }:any) => {
    const ControlButtons = [
        {
            title: "Pause",
            onClick: () => {
                fetch(`api/pauseSound`);
            },
        },
        {
            title: "Stop",
            onClick: () => {
                fetch(`api/stopSound`);
            },
        },
        {
            title: "Record Speakers",
            onClick: () => {
                fetch(`api/startRecordSpeakers`);
            },
        },
        {
            title: "Record Mic",
            onClick: () => {
                fetch(`api/startRecordMicrophone`);
            },
        },
        {
            title: "Stop Record",
            onClick: async () => {
                await fetch(`api/stopRecordSound`);
                setTimeout(updateSounds, 500);
            },
        },
        // {
        //     title: "Update Files",
        //     onClick: () => {
        //         updateSounds();
        //     },
        // },
    ];
    return (
        <div
            className="sticky top-0 bg-black flex flex-row flex-grow overflow-x-scroll snap-mandatory snap-x
                 md:flex-col md:snap-y md:overflow-x-hidden"
        >
            <section
                className="flex flex-col w-screen px-5 mb-4 shrink-0 snap-start text-center
                 md:text-left"
            >
                <h3
                    className="text-xl px-1 mb-4 font-bold text-gray-400
                   dark:text-zinc-500"
                >
                    Controls
                </h3>

                <div
                    className="flex flex-wrap flex-row justify-center content-start
                   md:justify-start"
                >
                    {ControlButtons?.map((category) => (
                        <ControlButton
                            title={category.title}
                            onClick={category.onClick}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ControlView;
