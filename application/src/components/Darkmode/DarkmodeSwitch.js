import { useState } from 'react';
import { Switch } from '@headlessui/react';

export default function DarkmodeSwitch() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div>
      <div className="py-1">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? 'bg-black' : 'bg-blue-700'}
          relative inline-flex flex-shrink-0 h-[24px] w-[48px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          {console.log(enabled)}
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none inline-block h-[20px] w-[24px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
          />
        </Switch>
      </div>
    </div>
  );
}
