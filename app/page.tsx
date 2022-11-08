import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col h-screen gap-4 p-8 text-white underline">
      <Link href="/basic">Basic</Link>
      <Link href="/3d-text">3D Text</Link>
      <Link href="/portal">Portal</Link>
      <Link href="/popup">Popup</Link>
    </div>
  );
}
