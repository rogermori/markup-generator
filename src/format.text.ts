import { AlignParms, FormatTextParms, Alignment } from "./types";

const alignTextRight = ({ text, length, char }: AlignParms) =>
  text.padStart(length, char);

const alignTextCenter = ({ text, length, char }: AlignParms) => {
  const paddLeft = Math.floor((length - text.length) / 2);
  return text.padStart(paddLeft + text.length, char).padEnd(length, char);
};

export const alignText = ({
  text,
  length,
  alignment,
  char = " ",
}: AlignParms) =>
  length <= text.length || alignment === Alignment.left
    ? text
    : alignment === Alignment.right
    ? alignTextRight({ text, length, char })
    : alignTextCenter({ text, length, char });

const cretateLineRegExp = (length: number) =>
  new RegExp(`.{1,${length - 1}}\\S( |$)`, "g");

export const formatParagraph = ({
  text,
  length,
  spacing,
  alignment,
}: FormatTextParms) =>
  text
    .match(cretateLineRegExp(length))
    .map((text) => alignText({ text, length, alignment }))
    .join(spacing);
