


type SpaceProps = {
  handleClick(): void;
  showHint: boolean;
};

export default function Spacer({ handleClick, showHint }: SpaceProps) {
  return <div>{showHint && "Click to create the first paragraph"}</div>;
}
