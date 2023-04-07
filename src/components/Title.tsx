interface TitleProps {
  children: string;
}

export default function Title(props: TitleProps) {
  return (
    <div className="text-2xl text-black text-center">Welcome to Gojob !</div>
  );
}
