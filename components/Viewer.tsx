import ReactMarkdown from "react-markdown";
import { ViewerProps } from "../interface/interfaces";

export default function Viewer(props: ViewerProps) {
  return <ReactMarkdown>{props.value}</ReactMarkdown>;
}
