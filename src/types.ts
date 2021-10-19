type ReplaceWord = {
  text: string;
  replaceWith: string;
};

export interface WordContract {
  bold?: boolean;
  italic?: boolean;
  text?: string;
  replaceWith?: string;
}

export type ListOfWords = {
  boldWords?: string[];
  italicWords?: string[];
  replaceWords?: ReplaceWord[];
};

export type MarkupStyle = "**" | "_" | "***" | "";

export enum Spacing {
  single = "\n",
  double = "\n\n",
}

export enum Alignment {
  center,
  left,
  right,
}

export interface FormatTextParms {
  text: string;
  length: number;
  spacing: Spacing;
  alignment: Alignment;
}

export interface AlignParms {
  text: string;
  length: number;
  alignment?: Alignment;
  char?: string;
}
