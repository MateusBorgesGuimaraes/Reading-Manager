export default function ButtonForm({ text }: { text: string }) {
  return (
    <button className="uppercase bg-green-600 py-4 rounded-lg text-2xl font-title text-white hover:bg-green-700 duration-300 mt-3 w-full">
      {text}
    </button>
  );
}
