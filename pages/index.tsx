import { useEffect, useState } from "react";

import Category from "../models/Category";
import CategoryViewer from "../components/CategoryViewer";

export const renderFiles = async ()=>{
    let res = await fetch("api/getSounds")
    let {categories} = await res?.json();
    return categories;
}

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  
  const updateSounds = async ()=>{
      setCategories(await renderFiles());
  }

  useEffect(() => {
    updateSounds()
      .catch(console.error);
  }, [])

  return (
    <div className="bg-gray-100 dark:bg-black">
      <main className="flex flex-col min-h-screen">
        <CategoryViewer
          categories={categories}
        />
      </main>
    </div>
  );
}