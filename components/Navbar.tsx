import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="py-5 border-b px-4">
      <div className="flex justify-between items-center">
        <div>Navbar</div>
        <ul className="flex justify-center items-center px-3 space-x-4">
          <li className="cursor-pointer ">Home</li>
          <li className="cursor-pointer ">About</li>
          <li className="cursor-pointer ">Contact</li>
          <li className="cursor-pointer ">Users</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
