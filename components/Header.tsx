import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-200 p-4 text-center">
      <h1 className="text-3xl font-bold mb-2">이유성</h1>
      <h2 className="text-xl font-bold mb-2">반갑습니다!</h2>
      <nav>
        <Link href="/" className="mr-4 text-blue-600 hover:underline">
          Home
        </Link>
      </nav>
    </header>
  );
};

export default Header;
