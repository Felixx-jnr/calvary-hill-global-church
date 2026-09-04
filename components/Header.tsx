import React from "react";

const Header = ({ header, page }: headerProps) => {
  return (
    <header className="mt-20 w-full text-center">
      <h1 className="mb-3 pt-16 font-sofia-bold text-darkmaroon text-4xl sm:text-5xl md:text-6xl tracking-tight">
        {header}
      </h1>
      <h2 className="font-medium text-midGrey text-sm sm:text-lg tracking-tight">
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
