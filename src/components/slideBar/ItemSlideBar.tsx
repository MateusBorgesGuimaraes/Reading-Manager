export default function ItemSlideBar({
  text,
  index,
}: {
  text: string;
  index: number;
}) {
  const delay = (10 / 3) * (index - 1);
  return (
    <li
      className={`cursor-pointer font-title text-4xl text-gray-900 w-80 h-9 absolute left-full animate-autoRun group-hover:pause`}
      style={{ animationDelay: `${delay}s` }}
    >
      {text}
    </li>
  );
}
