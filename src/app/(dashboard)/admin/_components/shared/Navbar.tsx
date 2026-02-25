"use client";

function Navbar() {
  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-between w-11/12 mx-auto py-4 ">
        <h1>Admin</h1>
        <div className="flex flex-row items-center gap-6 *:p-2">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
