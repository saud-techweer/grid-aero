export default function Header() {
  return (
    <header className="flex justify-between items-center py-6">
      <div className="w-36 h-10 bg-[url(/Logo.svg)] bg-contain bg-no-repeat" />
      <nav className="flex gap-6 text-sm font-mono">
        <a href="#" className="text-black">
          TEAM
        </a>
        <a href="#" className="text-black">
          CAREERS
        </a>
        <a href="#" className="text-black">
          NEWSROOM
        </a>
        <a href="#" className="text-black">
          CONTACT
        </a>
      </nav>
    </header>
  );
}
