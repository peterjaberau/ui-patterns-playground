import {
  CogIcon,
  CodeBracketSquareIcon,
  BeakerIcon,
  UserIcon,
  ForwardIcon,
  ChatBubbleLeftRightIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

export interface SideMenuProps {
  selectedIndex: number;
  onSelectedIndexChange: (newIndex: number) => void;
}

export const SideMenu = ({ selectedIndex, onSelectedIndexChange }: SideMenuProps) => {
  const handleThemeToggle = () => {
    if (localStorage.theme === 'light') {
      localStorage.theme = 'dark';
      dispatchEvent(new Event('storage'));
    } else {
      localStorage.theme = 'light';
      dispatchEvent(new Event('storage'));
    }
  };

  const [isDark, setIsDark] = useState(true);

  // Listen for theme toggles
  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem('theme');

      setIsDark(theme === 'dark');
    };

    addEventListener('storage', checkTheme);

    return () => {
      removeEventListener('storage', checkTheme);
    };
  }, []);

  return (
    <div className="text-base-content pointer-events-auto relative flex h-full flex-col rounded-bl-lg bg-transparent">
      <div
        className={`via-accent dark:via-accent-foreground absolute left-1 top-[-1px] h-px w-20 bg-gradient-to-r from-transparent to-transparent transition-opacity`}
      />
      <div className="flex h-full flex-col gap-8">
        <div className="relative h-full">
          <div
            className={`transition-transform ${getMenuItemShineTranslate(selectedIndex)} via-accent dark:via-accent-foreground absolute left-[-1px] h-[80px] w-[2px] bg-gradient-to-b from-transparent to-transparent opacity-50`}
          />
          <div className="flex h-full flex-col justify-between">
            <ul className="flex flex-col items-start">
              <li className="group h-[60px]" onClick={() => onSelectedIndexChange(0)}>
                <button className="hover:bg-primary/10 flex cursor-pointer items-center gap-3 px-4 py-3">
                  <ForwardIcon
                    className={`${selectedIndex === 0 ? 'fill-foreground drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,1)]' : 'fill-gray-600'} group-hover:fill-foreground h-8 w-8 transition-colors`}
                  />
                </button>
              </li>
              <li className="group h-[60px]" onClick={() => onSelectedIndexChange(1)}>
                <button className="hover:bg-primary/10 flex cursor-pointer items-center gap-3 px-4 py-3">
                  <UserIcon
                    className={`${selectedIndex === 1 ? 'fill-foreground drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,1)]' : 'fill-gray-600'} group-hover:fill-foreground h-8 w-8 transition-colors`}
                  />
                </button>
              </li>
              <li className="group h-[60px]" onClick={() => onSelectedIndexChange(2)}>
                <button className="hover:bg-primary/10 flex cursor-pointer items-center gap-3 px-4 py-3">
                  <CogIcon
                    className={`${selectedIndex === 2 ? 'fill-foreground drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,1)]' : 'fill-gray-600'} group-hover:fill-foreground h-8 w-8 transition-colors`}
                  />
                </button>
              </li>
              <li className="group h-[60px]" onClick={() => onSelectedIndexChange(3)}>
                <button className="hover:bg-primary/10 flex cursor-pointer items-center gap-3 px-4 py-3">
                  <CodeBracketSquareIcon
                    className={`${selectedIndex === 3 ? 'fill-foreground drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,1)]' : 'fill-gray-600'} group-hover:fill-foreground h-8 w-8 transition-colors`}
                  />
                </button>
              </li>
              <li className="group h-[60px]" onClick={() => onSelectedIndexChange(4)}>
                <button className="hover:bg-primary/10 flex cursor-pointer items-center gap-3 px-4 py-3">
                  <BeakerIcon
                    className={`${selectedIndex === 4 ? 'fill-foreground drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,1)]' : 'fill-gray-600'} group-hover:fill-foreground h-8 w-8 transition-colors`}
                  />
                </button>
              </li>
              {/* <li className="group h-[60px]" onClick={() => onSelectedIndexChange(5)}>
                            <button className="hover:bg-primary/10 gap-3 py-3 px-4 cursor-pointer flex items-center">
                                <ChatBubbleLeftRightIcon className={`${selectedIndex === 5 ? "drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,1)] fill-foreground" : "fill-gray-600"} h-8 w-8 transition-colors group-hover:fill-foreground`} />
                            </button>
                        </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const getMenuItemShineTranslate = (index: number) => {
  switch (index) {
    case 0:
      return 'translate-y-[-10px]';
    case 1:
      return 'translate-y-[50px]';
    case 2:
      return 'translate-y-[110px]';
    case 3:
      return 'translate-y-[170px]';
    case 4:
      return 'translate-y-[230px]';
    case 5:
      return 'translate-y-[290px]';
  }
};
