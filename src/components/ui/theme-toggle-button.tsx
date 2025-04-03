'use client'

import "@theme-toggles/react/css/Within.css";
import { Within } from "@theme-toggles/react";
import { useEffect, useState } from "react";


export default function ThemeToggleButton(): JSX.Element | null {
  const [isToggled, setToggle] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setToggle(false);
      document.documentElement.classList.add('dark');
    }
    else document.documentElement.classList.remove('dark');
  }, []);

  const toggleTheme = () => {
    if (isToggled) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } 
    else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  return (
    <Within
      duration={750}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      toggled={isToggled}
      toggle={setToggle}
      onClickCapture={toggleTheme}
      className="text-2xl"
      title={isToggled ? 'Modo oscuro' : 'Modo claro'}
    />
  )
}