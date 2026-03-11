export default function Home() {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center text-center bg-gray-50 text-gray-900 font-sans">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to Lusi Dashboard
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Your data visualization at a glance.
        </p>
        <div className="h-1 w-20 bg-indigo-600 mt-4 rounded-full mx-auto"></div>
      </div>
    </div>
  );
}
