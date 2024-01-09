// components/Table.tsx
import React from 'react';
import style from "./styles.module.css"

export interface Column<T> {
    Header: string;
    accessor: keyof T;
    isAction?: boolean;
    action?: (row: T) => React.ReactNode;
}

interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
    loading?: boolean;
}

const Table = <T extends Record<string, any>>({ columns, data, loading = false }: TableProps<T>) => {
    return (
        <div className="overflow-x-auto">
            {data.length > 0 ?
                <table className='table table-zebra'>

                    <thead>

                        <tr>
                            {columns.map((column, index) => (
                                <th
                                    key={index}
                                // className={`flex flex-1`}
                                >
                                    {column.Header}
                                </th>
                            ))}
                        </tr>


                    </thead>


                    <tbody>
                        {/* <div className={`${style.tbodyContain}`}> */}
                        {loading ? (
                            <tr>
                                {columns.map((column, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={`py-2 px-4 border-2 border-gray-500 border-solid border-r ${colIndex === columns.length - 1 ? 'border-r-0' : ''} skeleton-loading-td`}
                                    >
                                        <div role="status" className="w-full animate-pulse">
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ) : (
                            <>

                                {data.map((row, rowIndex) => (

                                    <tr key={rowIndex}
                                        className="border-2 border-solid"
                                    >
                                        {
                                            columns.map((column, colIndex) => (
                                                <td
                                                    key={colIndex}
                                                    className={`py-2 px-4 border-2 border-solid border-r`}
                                                >
                                                    {column.isAction ? (
                                                        <div>{column.action && column.action(row)}</div>
                                                    ) : (
                                                        row[column.accessor]
                                                    )}
                                                </td>
                                            ))
                                        }
                                    </tr>
                                ))}


                            </>
                        )}
                        {/* </div> */}

                    </tbody>
                </table> : null
            }
        </div >
    );
};

export default Table;
