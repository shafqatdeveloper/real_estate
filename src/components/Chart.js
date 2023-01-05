import React, { useMemo, useState } from "react";
import BangloChart from "./BangloChart";
import HomeChart from "./HomeChart";
import { IoMdArrowDropdown } from "react-icons/io";
import { chart_data } from "./Data";
import { COLUMN_B } from "./Column";
import { useTable } from "react-table";

const Chart = () => {

    const [tab,setTab] = useState('house')

  const columns = useMemo(() => COLUMN_B, []);
  const data = useMemo(() => chart_data, []);
  const tableInstance = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    // getHeaderGroupProps,
    // getHeaderProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  return (
    <div className="w-full h-full">
      <div className=" my-5 ">
        <div className="grid grid-cols-1 px-5 md:px-48 md:grid-cols-3 gap-5">
          <div className="border-[1px] rounded-b-3xl border-yellow-700">
            <div className="bg-gradient-to-b from-yellow-500 to-yellow-700 flex items-center justify-center py-3">
              <h1 className="font-bold font-sans">Most Viewed in Pakistan</h1>
            </div>
            <div className="py-4 font-bold px-4">
              <div className="flex justify-between">
                <h1>Lahore</h1>
                <h1>43%</h1>
              </div>
              <div className="flex my-1 justify-between">
                <h1>Multan</h1>
                <h1>-63%</h1>
              </div>
              <div className="flex justify-between">
                <h1>Karachi</h1>
                <h1>77%</h1>
              </div>
              <div className="flex my-1 justify-between">
                <h1>Islamabad</h1>
                <h1>83%</h1>
              </div>
              <div className="flex justify-between">
                <h1>Quetta</h1>
                <h1>78%</h1>
              </div>
            </div>
          </div>
          <div className="border-[1px] rounded-b-3xl border-yellow-700">
            <div className="bg-gradient-to-b from-yellow-500 to-yellow-700 flex items-center justify-center py-3">
              <h1 className="font-bold font-sans">Most Viewed in Pakistan</h1>
            </div>
            <div className="py-4 font-bold px-4">
              <div className="flex justify-between">
                <h1>Lahore</h1>
                <h1>43%</h1>
              </div>
              <div className="flex my-1 justify-between">
                <h1>Multan</h1>
                <h1>-63%</h1>
              </div>
              <div className="flex justify-between">
                <h1>Karachi</h1>
                <h1>77%</h1>
              </div>
              <div className="flex my-1 justify-between">
                <h1>Islamabad</h1>
                <h1>83%</h1>
              </div>
              <div className="flex justify-between">
                <h1>Quetta</h1>
                <h1>78%</h1>
              </div>
            </div>
          </div>
          <div className="border-[1px] rounded-b-3xl border-yellow-700">
            <div className="bg-gradient-to-b from-yellow-500 to-yellow-700 flex items-center justify-center py-3">
              <h1 className="font-bold font-sans">Most Viewed in Pakistan</h1>
            </div>
            <div className="py-4 font-bold px-4">
              <div className="flex justify-between">
                <h1>Lahore</h1>
                <h1>43%</h1>
              </div>
              <div className="flex my-1 justify-between">
                <h1>Multan</h1>
                <h1>-63%</h1>
              </div>
              <div className="flex justify-between">
                <h1>Karachi</h1>
                <h1>77%</h1>
              </div>
              <div className="flex my-1 justify-between">
                <h1>Islamabad</h1>
                <h1>83%</h1>
              </div>
              <div className="flex justify-between">
                <h1>Quetta</h1>
                <h1>78%</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 my-10 border-yellow-500">
        <div className="bg-gradient-to-b w-full py-2 text-xl font-bold font-sans from-yellow-400 via-yellow-500 to-yellow-700">
          <h1 className="pl-5">Pakistan Property Price Index 2022</h1>
        </div>
        <div className="pl-5 py-3">
          <button
          onClick={()=>setTab('house')}
            className="border-2 border-yellow-700 focus:bg-yellow-600 font-bold rounded-full px-3"
            type="text"
          >
            House
          </button>
          <button
          onClick={()=>setTab('banglo')}
            className="border-2 border-yellow-700 focus:bg-yellow-600 font-bold rounded-full px-3 ml-5"
            type="text"
          >
            Banglo
          </button>
        </div>

        <div className="w-full bg-yellow-800 py-0.5"></div>
        <div className="flex justify-between flex-col md:flex-row">
          <div className="md:border-r-4 border-yellow-600 py-5 w-min md:pr-32">
            {tab==='house' && <HomeChart/> }
            {tab==='banglo' && <BangloChart/>}
          </div>

          <div className="flex flex-col h-full justify-center w-full">
            <div className="flex border-b-4 py-10 border-yellow-600 flex-col items-center">
              <h1>CURRENT PRICE</h1>
              <h1>SEP (2022)</h1>
              <h1>PKR 8,865/SQ. FEET</h1>
            </div>
            <div className="flex border-b-4 py-10 border-yellow-600 flex-col items-center">
              <h1>CURRENT PRICE</h1>
              <h1>SEP (2022)</h1>
              <h1>PKR 8,865/SQ. FEET</h1>
            </div>
            <div className="flex py-10 flex-col justify-between items-center">
              <h1 className="text-xs">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </h1>
              <div className="flex  py-3 items-center">
                <h1 className="text-red-600">PKR 56 (4.67%)</h1>
                <IoMdArrowDropdown className="text-red-600" size={22} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex px-5 flex-col md:flex-row my-6">
        <div className="border-2 border-yellow-600 w-full md:w-3/5">
          <div className="bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-700 py-2">
            <h1 className="text-xl font-bold pl-5">
              Pakistan House Price Indices
            </h1>
          </div>

          <table className="w-full mt-1 font-sans" {...getTableProps()}>
            <thead className="bg-yellow-700">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("HEADER")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              className="bg-white divide-y-4 divide-white "
              {...getTableBodyProps()}
            >
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr className=" bg-slate-100 " {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          className="px-2 sm:px-5 md:px-14 whitespace-nowrap  my-2 py-4"
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="w-full border-2 md:ml-1 mt-1 md:mt-0 border-yellow-600">
        <div className="bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-700 py-2">
            <h1 className="text-xl font-bold pl-5">
             Most Viewed in Pakistan
            </h1>
          </div>

          <div className="py-4 flex flex-col font-sans justify-center font-bold px-4">
              <div className="flex justify-between">
                <h1>Lahore</h1>
                <h1 className="font-extrabold">43%</h1>
              </div>
              <div className="flex my-3 justify-between">
                <h1>Multan</h1>
                <h1 className="font-extrabold">-63%</h1>
              </div>
              <div className="flex justify-between">
                <h1>Karachi</h1>
                <h1 className="font-extrabold">77%</h1>
              </div>
              <div className="flex my-3 justify-between">
                <h1>Islamabad</h1>
                <h1 className="font-extrabold">83%</h1>
              </div>
              <div className="flex justify-between">
                <h1>Quetta</h1>
                <h1 className="font-extrabold">78%</h1>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
};
export default Chart;
