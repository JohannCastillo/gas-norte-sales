export default function ({ children, title }: { title: string, children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 border border-gray-400 p-6 rounded-lg">
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="flex flex-wrap gap-3">{children}</div>
    </div>
  );
}
