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
    <div className="top-0 z-30 sticky bg-white shadow px-4 py-3 w-full">
      <div className="flex items-center mx-auto max-w-4xl">
        <input
          type="text"
          placeholder="Search sermons..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="p-2 border border-gray-300 rounded-md outline-none w-full"
        />
      </div>
    </div>
  );
};

export default SearchOverlay;
