import Category from "../models/Category";

import SoundsCategory from "./SoundsCategory";

type Props = {
  categories: Category[];
};

const CategoryViewer = (props: Props) => {
  return (
    <div
      className="flex flex-row flex-grow overflow-x-scroll snap-mandatory snap-x
                 md:flex-col md:snap-y md:overflow-x-hidden"
    >
      {props.categories?.map((category) => (
        <SoundsCategory
          category={category}
        />
      ))}
    </div>
  );
};

export default CategoryViewer;
