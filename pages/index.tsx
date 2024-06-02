import Head from "next/head";
import { useEffect, useState } from "react";

import Category from "../models/Category";
import GetSoundsRes from "../models/GetSoundsRes";

import CategoryViewer from "../components/CategoryViewer";
import ControlView from "../components/ControlView";

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
      <Head>
        <title>Soundpad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col min-h-screen">
        <h1 className="text-3xl font-bold p-5 text-black dark:text-white">
          Soundpad
        </h1>

        <ControlView updateSounds={updateSounds} />

        <CategoryViewer
          categories={categories}
          onSoundPressed={(sound) => {
            fetch(`api/playSound/${sound.id}`);
          }}
        />
      </main>
    </div>
  );
}
