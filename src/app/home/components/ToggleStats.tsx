'use client';

import {useState} from 'react';

export default function ToggleStats() {

  const [visible, setVisible] = useState(false);

  const toggleStats = () => {
    console.log(visible);
    setVisible((prev) => !prev);

  }

  return (
    <div className='relative'>
      <div className='absolute right-0'>
        <button className="bg-zinc-200 dark:bg-zinc-800 text-sm p-2 border-none rounded-xl" onClick={() => toggleStats()}>
          {visible ? "Hide Stats": "Show Stats"}
        </button>
        {visible ? <Stats />: ""}
      </div>
    </div>
  )
}

export function Stats() {
  return (
    <div className='dark:bg-zinc-700 bg-zinc-300'>
      Penis
    </div>
  );
}
