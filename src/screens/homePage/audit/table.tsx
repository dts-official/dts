import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import { useEffect, useMemo, useState } from 'react';

const columns: any = [
  {
    Header: 'Timestamp',
    accessor: 'created_at',
    disableSortBy: true,
  },
  {
    Header: 'Activity/Action',
    accessor: 'message',
    disableSortBy: true,
    Cell: ({ cell: { value } }:any) => {

      return <div className='inline-block whitespace-nowrap justify-center items-center rounded-full border-[1px] hover:bg-opacity-50 text-xs border-[#4318FF] bg-[#F5F0FF] text-[#4318FF] font-md px-6 py-1 sm:px-1 sm:py-1'>{value}</div>;
    },
  },
];



function AuditTable({ search, data }: any) {

  const [sortConfig, _setSortConfig] = useState({ key: 'history_date', direction: 'desc' });

  const sortedData = useMemo(() => {
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state,
    setGlobalFilter,
    gotoPage,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageCount,
    setPageSize,

  }: any = useTable(
    {
      columns,
      data: sortedData,

    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex }: any = state;

  useEffect(() => {
    setPageSize(10)
  }, [])

  useEffect(() => {
    setGlobalFilter(search)
  }, [search])

  const [checkedState, setCheckedState] = useState<boolean[]>([])
  const [selectAll, setSelectAll] = useState<boolean>(false);


  return (
    <div className=' flex flex-col h-full w-full justify-between'>

      <div className='overflow-hidden'>
        <table {...getTableProps()} className='w-full text-xs font-light table-fixed'>
          <thead className='text-violet1 h-[20px]'>
            {headerGroups.map((headerGroup: any) => (
              <tr {...headerGroup.getHeaderGroupProps()} className='border-b border-[#00000013] text-sm'>
                {headerGroup.headers.map((column: any, i:any) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className='pl-4 py-2 text-left truncate' // Add truncate class
                  >
                  { i === 0 && 
                    <input 
                          type="checkbox" 
                          className='mr-5 text-white w-5 h-5 cursor-pointer '
                          checked={selectAll} 
                          onClick={(e) => {
                          e.stopPropagation();
                          setSelectAll(!selectAll);
                          setCheckedState(prev => {
                              const newState = { ...prev };
                              page.forEach((row: any) => {
                              newState[row.id] = !selectAll;
                              });
                              return newState;
                          });
                          }}
                      />
                    }
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <span>▼</span>
                        ) : (
                          <span>▲</span>
                        )
                      ) : (
                        ''
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
        </table>
        <div className='overflow-y-auto overflow-x-hidden  min-h-[300px] h-full pb-10 pr '>
          <table className='w-full text-xs font-light table-fixed'>
            <tbody {...getTableBodyProps()} className='overflow-hidden w-full'>
              {page.map((row: any) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className='hover:bg-blue3/10 h-10 border-b border-[#00000013] text-sm font-medium'
                  >
                    {row.cells.map((cell: any, i:any) =>

                    (
                      
                      <td key={cell.column.id} className='h-10 pl-4 py-4 text-left truncate'> {/* Add truncate class */}
                        {i === 0 && 
                          <input 
                          type="checkbox" 
                          className='mr-5 text-white w-5 h-5 cursor-pointer '
                          checked={!!checkedState[row.id]} 
                          onChange={() => setCheckedState(prev => ({...prev, [row.id]: !prev[row.id]}))}
                          />
                        } 
                        {cell.render('Cell')}
                      </td> 
                        
                    )


                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className=' hidden sm:flex  h-[10%] k w-full items-center bottom-0 self-center mb-2  justify-center gap-4 sm:gap-2 mt-2 bg-blueTable-100 text-center'>
        <button onClick={() => previousPage()} disabled={!canPreviousPage} className='className="flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
            aria-hidden="true" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
          </svg>
        </button>

        <p className=' text-xs'> <b>{pageIndex + 1} </b> / {pageCount}</p>


        <button onClick={() => nextPage()} disabled={!canNextPage}
          className="flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
            aria-hidden="true" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
          </svg>
        </button>
      </div>

      <div className=' sm:hidden  h-[10%] k w-full items-center bottom-0 self-center mb-2 flex justify-center gap-4 sm:gap-2 mt-2 bg-blueTable-100 text-center'>
        <button onClick={() => previousPage()} disabled={!canPreviousPage} className='className="flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
            aria-hidden="true" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
          </svg>
        </button>
        {pageIndex > 2 && pageCount > 5 && (
          <>
            <button onClick={() => gotoPage(0)} className=' px-3 py-1 border h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10  active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
              1
            </button>
            <span className='px-3 py-1'>...</span>
          </>
        )}
        {Array.from({ length: Math.min(5, pageCount) }, (_, index) => {
          let pageNumber: any;
          if (pageCount <= 5 || pageIndex < 3) {
            pageNumber = index;
          } else if (pageIndex > pageCount - 4) {
            pageNumber = pageCount - 5 + index;
          } else {
            pageNumber = pageIndex - 2 + index;
          }
          return (
            <button
              key={pageNumber}
              onClick={() => gotoPage(pageNumber)}
              className={`px-3 py-1 border  ${pageIndex === pageNumber ? 'h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg bg-orange text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-orange focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' : 'h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10  active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'}`}
            >
              {pageNumber + 1}
            </button>
          );
        })}
        {pageIndex < pageCount - 3 && pageCount > 5 && (
          <>
            <span className='px-3 py-1'>...</span>
            <button onClick={() => gotoPage(pageCount - 1)} className=' px-3 py-1 border h-9 max-h-[40px] w-9 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10  active:bg-orange disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
              {pageCount}
            </button>
          </>
        )}



        <button onClick={() => nextPage()} disabled={!canNextPage}
          className="flex items-center gap-2 px-6 sm:px-3 sm:p-3 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-orange
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
            aria-hidden="true" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default AuditTable;
