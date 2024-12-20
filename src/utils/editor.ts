// src/AceEditor.ts

import * as ace from "ace-builds"
// import "ace-builds/src-noconflict/mode-typescript"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/mode-css"
// import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/theme-merbivore"
import "ace-builds/src-noconflict/theme-xcode"

interface AceEditorOptions {
  container: HTMLElement;
  mode?: string;
  theme?: string;
  value?: string;
  readOnly?: boolean;
  wrap?: boolean;
  fontSize?: string;
  fontFamily?: string;
  options?: Partial<ace.Ace.EditorOptions>;
}

type ChangeCallback = (value: string) => void;

export class AceEditor {
  private editor: ace.Ace.Editor;
  private onChangeCallbacks: ChangeCallback[] = [];

  constructor(options: AceEditorOptions) {
    const {
      container,
      mode = "html",
      theme = "monokai",
      value = "",
      readOnly = false,
      wrap = true,
      fontFamily = "DM Mono",
      fontSize = "16px",
      options: editorOptions = { tabSize: 2 },
    } = options;

    this.editor = ace.edit(container, {
      mode: `ace/mode/${mode}`,
      theme: `ace/theme/${theme}`,
      value,
      readOnly,
      wrap,
      fontFamily,
      fontSize,
      ...editorOptions,
    });

    this.editor.on("change", () => {
      const currentValue = this.getValue();
      this.onChangeCallbacks.forEach((cb) => cb(currentValue));
    });
  }

  static get LIGHT() {
    return "xcode";
  }
  static get DARK() {
    return "merbivore"
  }

  public getValue(): string {
    return this.editor.getValue();
  }

  public setValue(value: string, cursorPos: number = 1): void {
    this.editor.setValue(value, cursorPos);
  }

  public onChange(callback: ChangeCallback): void {
    this.onChangeCallbacks.push(callback);
  }

  public dispose(): void {
    this.editor.destroy();
    this.onChangeCallbacks = [];
  }

  public getEditorInstance(): ace.Ace.Editor {
    return this.editor;
  }

  public setTheme(theme: string): void {
    if (!theme.startsWith("ace/theme/")) {
      theme = `ace/theme/${theme}`;
    }

    this.editor.setTheme(theme);
    // try {
    //   ace.config.loadModule(theme, () => {
    //   });
    // } catch (error) {
    //   console.error(`Failed to load theme "${theme}":`, error);
    // }
  }
}