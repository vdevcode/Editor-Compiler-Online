import EditorComponent from "@/components/editorComponent";
import { ModeToggle } from "@/components/mode-toggle-btn";
import React from "react";

const Home = () => {
  return (
    <div>
      <ModeToggle />
      <EditorComponent />
    </div>
  );
};

export default Home;
