import React from "react";
import { ModeToggle } from "./mode-toggle-btn";
import SelectLanuages from "./SelectLanguages";

const EditorComponent = () => {
  return (
    <div className="min-h-screen dark:bg-slate-900 rounded-2xl shadow-2xl py-6 px-8">
      <div className="flex item-center justify-between pb-3">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Editor Vcode{" "}
        </h2>
        <div className="flex items-center gap-4">
          <div className="w-[230px] flex items-center">
            <SelectLanuages />
          </div>
          <ModeToggle />
        </div>
      </div>

      <div className="bg-slate-400 dark:bg-slate-950 p-3 mt-3">
        <div className="dark:bg-slate-900">
            <h2>Editor</h2>
        </div>
      </div>
    </div>
  );
};

export default EditorComponent;
