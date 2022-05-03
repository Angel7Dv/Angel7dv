import React from 'react'

const item = ({i}) => {

    const displayContent = (e) => {
        return { __html: e } 
    }

    return (
        <li class="mb-10 ml-4 group">
            <div class="absolute w-5 h-5 bg-gray-200 rounded-full mt-1.5 -left-1 border-2 border-gray-900  group-hover:bg-sky-700"></div>
            <h3 class="text-lg font-semibold ">{i.title}</h3>
            <time class="mb-1 text-sm font-normal leading-none ">( {i.init_date} - Present )</time>
            <a class="mb-1 text-sm font-normal leading-none ">{i.team}</a>
            <p dangerouslySetInnerHTML={displayContent(i.description)} class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"/>
                
            {/* <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium  bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
        </li>
    )
}

export default item