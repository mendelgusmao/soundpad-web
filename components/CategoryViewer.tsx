import Category from "../models/Category";
import Sound from "../models/Sound";

import SoundsCategory from "./SoundsCategory";

type Props = {
  categories: Category[];
  onSoundPressed: (sound: Sound) => void;
};

const CategoryViewer = (props: Props) => {
  console.log("CategoryViewer",props);
  return (
    <div
      className="flex flex-row flex-grow overflow-x-scroll snap-mandatory snap-x
                 md:flex-col md:snap-y md:overflow-x-hidden z-10"
    >
      {props.categories?.map((category) => (
        <SoundsCategory
          category={category}
          onSoundPressed={props.onSoundPressed}
        />
      ))}
    </div>
  );
};

export default CategoryViewer;
