export interface ViewerProps {
  value: string;
}

export interface EditorContentChanged {
  html: string;
  markdown: string;
}

export interface DocEditorOnChange {
  title: string;
  content: string;
}

export interface EditorProps {
  content?: string;
  onChange?: (changes: EditorContentChanged) => void;
}

export interface DocEditor {
  title: string;
  setTitle: any;
  content?: string;
  onChange?: (changes: DocEditorOnChange) => void;
}

export interface UseRedirectAfterSomeSecondsInterface {
  secondsRemaining: Number;
}
