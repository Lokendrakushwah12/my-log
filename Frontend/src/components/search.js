import React, {useEffect , useRef} from 'react'

const Search = () => {

  let inputRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if Cmd key is pressed on Mac or Ctrl key on other platforms
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        // Activate search functionality here
        event.preventDefault();
        // window.alert('Search activated');
        console.log('Search activated');
        // window.alert('Search activated');
        // Focus on the input field when the shortcut is activated
        inputRef.current.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return (
    <>
      {/* search field */}
      <div className="search flex w-[500px] h-[48px] p-2 border-[1.5px] border-[#f0f3f5] justify-center items-center gap-1 rounded-xl shadow-lg shadow-[#f0f3f5]">
        <div className="border-[1.5px] border-[#f0f3f5] rounded-lg flex p-[6px] cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M17.5 17.5L12.5001 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z" stroke="#111322" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <input ref={inputRef} className='w-[500px] h-[48px] outline-none border-t-[1.5px] border-b-[1.5px] border-[#f0f3f5] ' type="text" placeholder="Search task.." />
        <h3 className='border-[1.5px] border-[#f0f3f5] rounded-lg flex text-[14px] p-[6px]'>⌘K</h3>
      </div>
    </>
  )
}

export default Search
