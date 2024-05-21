import React from "react";
import { ModeToggle } from "./mode-toggle-btn";
import SelectLanuages from "./SelectLanguages";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const EditorComponent = () => {
  return (
    <div className="min-h-screen dark:bg-slate-900 rounded-2xl shadow-2xl py-6 px-8">
      <div className="flex item-center justify-between pb-3">
        <h2 className="scroll-m-20 border-b text-3xl font-semibold tracking-tight first:mt-0">
          Editor Vcode{" "}
        </h2>
        <div className="flex items-center">
          <div className="w-[230px] flex items-center">
            <SelectLanuages />
          </div>
          <ModeToggle />
        </div>
      </div>

      <div className="bg-slate-400 dark:bg-slate-950 p-3 mt-3">
        <div className="dark:bg-slate-900">
          <ResizablePanelGroup
            direction="horizontal"
            className="w-full rounded-lg border dark:bg-slate-900"
          >
            <ResizablePanel defaultSize={50} minSize={35}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <span className="font-semibold">One</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50} minSize={35}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <span className="font-semibold">One</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
};

export default EditorComponent;
