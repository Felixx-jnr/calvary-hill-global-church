import React from "react";

const Header = ({ header, page }: headerProps) => {
  return (
    <header className="mt-40 mb-12 w-full text-center">
      <h1 className=" text-4xl sm:text-5xl md:text-6xl font-sofia-bold text-darkmaroon tracking-tight mb-3">
        {header}
      </h1>
      <h2 className=" text-midGrey font-medium text-sm sm:text-lg tracking-tight">
        <span>Home</span>
        {page && (
          <>
            {" "}
            - <span>{page}</span>
          </>
        )}
        <span> - {header}</span>
      </h2>
    </header>
  );
};

export default Header;
