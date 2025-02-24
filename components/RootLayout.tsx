import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Навигационное меню */}
      <nav className="bg-white text-gray-800 p-4 border-b-2 border-orange-700">
        <div className="container mx-auto flex justify-between max-w-[870px]">
          <h1 className="text-xl font-bold">📚 Bookshelf</h1>
          <div className="space-x-4 text-xl">
            <Link href="/">Главная</Link>
            <Link href="/about">О нас</Link>
          </div>
        </div>
      </nav>

      {/* Контент страницы */}
      <main className="flex-grow max-w-[870px] mx-auto">{children}</main>

      {/* Футер */}
      <footer className="bg-gray-500 text-white text-center p-4 mt-8">
        <p>© {new Date().getFullYear()} Bookshelf. Все права защищены.</p>
      </footer>
    </div>
  );
}
