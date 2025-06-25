import React from "react";

interface SearchOverlayProps {
  query: string;
  onQueryChange: (val: string) => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({
  query,
  onQueryChange,
}) => {
  return (
    <div className="top-0 z-30 sticky">
      <div className="flex items-center mx-auto  w-[90%] md:w-[70%] max-w-[800px]">
        <input
          type="text"
          placeholder="Search sermons..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="p-2 border-gray-300 border-b-2 outline-none w-full"
        />
      </div>
    </div>
  );
};

export default SearchOverlay;
