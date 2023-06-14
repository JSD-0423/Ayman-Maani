import {toggleDarkMode} from '../../Darkmode/Darkmode.js';

export const DarkModeAdjustments = (setDarkMode,darkMode)=>{
    toggleDarkMode();
    setDarkMode(!darkMode);
  }