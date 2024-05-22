import DATA from './data.json'
import { useEffect, useState } from 'react'
import { useTable, usePagination, useSortBy } from 'react-table'
import { CaretDownIcon, CaretUpIcon } from '@radix-ui/react-icons'


const columns:any = [
    {
      Header: 'Ticket Title',
      accessor: 'ticket_title'
    },
    {
      Header: 'Category',
      accessor: 'category'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Date',
      accessor: 'date'
    },
    {
      Header: 'Status',
      accessor: 'status'
    },
]

const data = DATA

export default function FeedbacksTable (){

    const [checkedState, setCheckedState] = useState<boolean[]>([])

    useEffect(()=>{
        console.log(data)
    },[])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        previousPage,
        nextPage,
        canPreviousPage,
        canNextPage,
        pageCount,
        gotoPage,
        setPageSize,
        state,
      }:any = useTable(
        {
          columns,
          data,
        },
        useSortBy,
        usePagination
      );

      const { pageIndex}:any = state;

      useEffect(()=>{
        setPageSize(15)
      },[])

    return(
        <div className=' flex flex-col w-full h-full relative '>

            <div className='w-full h-[30px] border-b-[2px] overflow-hidden'>
                <table {...getTableProps()} className=' w-full table-fixed '>

                    <thead>

                        {
                            headerGroups.map((headerGroup:any)=> (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column:any, i:any) => {
                                            
                                    const {
                                        getSortByToggleProps,
                                        // isSorted,
                                        // isSortedDesc,
                                    } = column;
                            
                                    // Use the sorting state to determine the sort direction icon
                                    //let icon = isSorted ? (isSortedDesc ? ' ' : ' ') : '';
                                    let widthClass = '';
                                    //const [isToggled, setIsToggled] = useState<boolean>(false);
                                    // const sortFn = () => {
                                    //     setIsToggled(!isToggled);
                                    //     handleColumnClick(i); 
                                    //   };
                                    // let icon = isToggled ? <CaretUpIcon onClick={sortFn} className='ml-3 w-[25px] h-[25px]' /> : <CaretDownIcon onClick={sortFn} className='ml-3 w-[25px] h-[25px]' />;
                                    switch(
                                        i) {
                                        case 0:
                                        widthClass = 'w-[30%]';
                                        break;
                                        case 1:
                                        widthClass = 'w-[20%]';
                                        break;
                                        case 2:
                                        widthClass = 'w-[20%]';
                                        break;
                                        case 3:
                                        widthClass = 'w-[20%]';
                                        break;
                                        case 4:
                                        widthClass = 'w-[20%]';
                                        break;
                                        default:
                                        widthClass = 'w-auto';
                                    }
                                    return (
                                        <th {...column.getHeaderProps(getSortByToggleProps())} className={` text-[#436BBE] text-[17px] text-left font-semibold ${widthClass}`}>
                                            <div className=' truncate flex flex-row '>
                                                {column.render('Header')}
                                                <span >
                                                    {column.isSorted ? (
                                                    column.isSortedDesc ? (
                                                        <CaretDownIcon className='ml-1 w-[25px] h-[25px]' />
                                                    ) : (
                                                        <CaretUpIcon className='ml-1 w-[25px] h-[25px]' />
                                                    )
                                                    ) : (
                                                    ''
                                                    )}
                                                </span>
                                            </div>
                                        </th>
                                    );
                                    })
                                }
                                </tr>
                            ))
                        }

                    </thead>

                </table>

            </div>

            <div className='w-full h-[77%] overflow-y-scroll overflow-hidden'>
                <table className=' w-full table-fixed '>
                    <tbody {...getTableBodyProps()}>

                        {
                            page.map((row:any)=>{
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>

                                        {row.cells.map((cell:any, i:any)=>{

                                            let widthClass = '';
                                            switch(i) {
                                                case 0:
                                                widthClass = 'w-[30%]';
                                                break;
                                                case 1:
                                                widthClass = 'w-[20%] pl-1 ';
                                                break;
                                                case 2:
                                                widthClass = 'w-[20%] pl-1 ';
                                                break;
                                                case 3:
                                                widthClass = 'w-[20%] pl-1 ';
                                                break;
                                                case 4:
                                                widthClass = 'w-[20%] pl-2 ';
                                                break;
                                                default:
                                                widthClass = 'w-auto';
                                            }

                                            return <td {...cell.getCellProps()} className= {`text-[#2B3674] text-left font-semibold py-3 ${widthClass}`}> 
                                                <div className=' w-full flex flex-row items-center truncate'>
                                                    {i === 0 && 
                                                        <input 
                                                        type="checkbox" 
                                                        className='mr-3 text-white w-5 h-5 cursor-pointer' 
                                                        checked={!!checkedState[row.id]} 
                                                        onChange={() => setCheckedState(prev => ({...prev, [row.id]: !prev[row.id]}))}
                                                        />
                                                    }                                        
                                                    {cell.render('Cell')}
                                                </div>   

                                            </td>
                                        })}

                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

            <div className=' flex justify-center items-center w-full h-[70px] absolute bottom-0     '>

                {/* Previous button */}
                <button 
                    onClick={() => previousPage()} 
                    disabled={!canPreviousPage}
                    className= "flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:orange active:bg-orange hover:bg-gray-900/10 disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                    aria-hidden="true" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                    </svg>
                </button>{' '}

                {/* Page number buttons */}

                {pageIndex > 3 && 
                <>
                    <button className=" sm:hidden mx-2 h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg  text-center align-middle font-sans text-xs font-medium uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-orange focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={() => gotoPage(0)}>1</button> 
                    <span className=" sm:hidden text-black w-[20px] h-[20px] text-center mx-5">...</span>
                </>}

                {Array.from({length: Math.min(5, pageCount)}, (_, i) => Math.max(0, Math.min(pageCount - 7, pageIndex - 3)) + i).map(page => 
                (page >= 0 && page < pageCount) ? (
                    <button 
                    key={page} 
                    onClick={() => gotoPage(page)} 
                    className={` sm:hidden mx-2 h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg  text-center align-middle font-sans text-xs font-medium uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-orange focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${page === pageIndex ? 'active-page-class bg-orange text-white' : ''}`}
                    >
                    {page + 1}
                    </button>
                ) : null
                )}
                {pageIndex < pageCount - 4 && 
                <>
                    <span className=" sm:hidden text-black w-[20px] h-[20px] text-center mx-5 ">...</span> 
                    <button onClick={() => gotoPage(pageCount - 1)} className=" sm:hidden mx-2 h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg  text-center align-middle font-sans text-xs font-medium uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-orange focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">{pageCount}</button>
                </>}

                <span className=' ml-2 sm:flex hidden '>
                    <strong className=' text-black '>
                    {pageIndex + 1} / {pageCount}
                    </strong>{' '}
                </span>


                {/* Next button */}
                <button     
                    onClick={() => nextPage()} 
                    disabled={!canNextPage}
                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange
                    disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                    aria-hidden="true" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                    </svg>
                </button>{' '}
           
            </div>

        </div>
        
    )
}

// function handleColumnClick(columnIndex:any) {
//     switch(columnIndex) {
//         case 0:
//             console.log("0")
//             break;
//         case 1:
//             console.log("1")
//             break;
//         case 2:
//             console.log("2")
//             break;
//         case 3:
//             console.log("3")
//             break;
//         case 4:
//             console.log("4")
//             break;
// }
//   }

