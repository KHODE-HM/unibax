import "../App.css";
import { BubblyLink } from "react-bubbly-transitions";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
export default function Navbar() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("darkMode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("darkMode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const MyBubblyLink = ({ to = "", text = "" }) => (
    <BubblyLink to={to} colorStart="#080808" colorEnd="#ffffff">
      {text}
    </BubblyLink>
  );
  return (
    <div className="p-2">
      <nav className="animate-in" style={{ animationDelay: "800ms" }}>
        <header className="mx-4 p-3">
          <button
            className="h-5 w-10 bg-gray-800 text-white rounded"
            onClick={toggleDarkMode}
          >
            {darkMode ? "روشن" : "تاریک"}
          </button>
          <p>UniWall</p>
        </header>
        <MyBubblyLink to={"/"} text="خانه" />
        <MyBubblyLink to={"/wall2"} text="بلاگ" />
        <MyBubblyLink to={"/News"} text="اساتید" />
      </nav>
    </div>
  );
}

/*
import React, { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`bg-white dark:bg-gray-900 min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      <div className="flex justify-center items-center h-screen">
        <button onClick={toggleDarkMode} className="px-4 py-2 bg-gray-800 text-white rounded">
          {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default DarkModeToggle;
 */
