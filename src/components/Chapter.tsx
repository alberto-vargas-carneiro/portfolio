interface ChapterProps {
    children: string;
}

export default function Chapter(props: ChapterProps) {
  return (
    <div className="flex flex-col justify-center items-center mb-14">
      <h1 className="text-4xl mb-3">{props.children}</h1>
      <div className="h-[2px] w-2/6 bg-purple-700 rounded-3xl"></div>
    </div>
  );
}
