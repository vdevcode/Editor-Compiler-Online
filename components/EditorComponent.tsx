"use client";

import React, { useState } from "react";
import { ModeToggle } from "./mode-toggle-btn";
import SelectLanuages from "./SelectLanguages";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const EditorComponent = () => {
  const { theme, setTheme } = useTheme();

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
              <div className="flex items-center justify-center p-6">
                <Editor
                  theme={theme === "dark" ? "vs-dark" : "vs-light"}
                  height="90vh"
                  defaultLanguage="javascript"
                  defaultValue="// some comment"
                />
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50} minSize={35}>
                <div className="p-4 flex items-center justify-between">
                  <span className="font-semibold">Outputs</span>
                  <Button className="" size={"lg"}>Run</Button>
                </div>
                <div className="">
                  
                </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
};

export default EditorComponent;
