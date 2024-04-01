import React, { useState, useEffect, useRef } from 'react'

const Search = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  let inputRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if Cmd key is pressed on Mac or Ctrl key on other platforms
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        // Focus on the input field when the shortcut is activated
        inputRef.current.focus();
        setIsExpanded(true);
      }
    };

    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        !event.target.closest('.recent-searches')
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchText.trim() !== '') {
      const updatedSearches = [...recentSearches, searchText]; // Append the searched task to recent searches
      const limitedSearches = updatedSearches.slice(-10); // Keep only the last 10 searches
      setRecentSearches(limitedSearches); // Update the recent searches state
      setSearchText(''); // Clear the search input
    }
  };

  const handleInputKeyDown = (event) => {
    // Check if Enter key is pressed
    if (event.key === 'Enter') {
      // Call handleSearchSubmit function
      handleSearchSubmit();
      setIsExpanded(false);
    }
  };

  const handleRemove = (index) => {
    setRecentSearches(recentSearches.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* search field */}
      <div className='flex flex-col relative'>
        <div className="search flex w-[500px] h-[48px] p-2 border-[1.5px] border-[#e6ebee] justify-center items-center gap-1 rounded-xl shadow-lg shadow-[#30323316]">
          <div onClick={handleSearchSubmit} className="border-[1.5px] border-[#e6ebee] rounded-lg flex p-[6px] cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M17.5 17.5L12.5001 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z" stroke="#111322" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <input
            ref={inputRef}
            className='w-[500px] h-[48px] outline-none border-t-[1.5px] border-b-[1.5px] border-[#e6ebee] '
            type="text"
            placeholder="Search task.."
            value={searchText}
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            onClick={() => setIsExpanded(true)}
          />

          <h3 className='border-[1.5px] border-[#e6ebee] rounded-lg flex text-[14px] p-[6px]'>⌘K</h3>
        </div>
        {isExpanded && (
          <div className=" z-50 overflow-hidden absolute top-[47px] flex flex-col text-sm text-[#9a9a9a] w-[500px]  bg-[#fff] recent-searches border-[1.5px] border-[#e6ebee] justify-start items-center rounded-xl shadow-lg shadow-[#30323316]">
            {/* Conditional rendering for recent searches */}
            {recentSearches.length === 0 ? (
              <div className='px-2 py-2 flex flex-row w-full justify-center items-center'>No recent searches</div>
            ) : (
              <>
                <div className='overflow-hidden px-2 pt-2  w-[486px]'>Recent Searches</div>
                <div className='w-[480px] h-[1px] bg-[#d9d9d9]'></div>
                {recentSearches.slice(0).reverse().map((search, index) => (
                  <div className="px-2 py-2 flex flex-row w-full justify-between items-center hover:bg-[#f1f1f1] ">
                    <svg className='w-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9a9a9a"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12H4C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C9.25022 4 6.82447 5.38734 5.38451 7.50024L8 7.5V9.5H2V3.5H4L3.99989 5.99918C5.82434 3.57075 8.72873 2 12 2ZM13 7L12.9998 11.585L16.2426 14.8284L14.8284 16.2426L10.9998 12.413L11 7H13Z"></path></svg>
                    <div className='w-[400px]'>{search}</div>
                    <span className='hover:underline hover:cursor-pointer' onClick={() => setRecentSearches(recentSearches.filter((_, i) => i !== index))}>remove</span>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Search
