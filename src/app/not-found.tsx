'use client';
import Link from "next/link";


function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-lg text-center mb-8">
        We could not find the page you were looking for.
        <br />
        Perhaps you are looking for something else?
      </p>
      <Link href="/">
        <button className="px-6 py-3 bg-[#749B3F] text-white rounded-md shadow hover:bg-[#176D38] transition-colors">
          Go back to Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound