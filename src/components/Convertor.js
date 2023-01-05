import React, { useMemo, useState } from "react";
import masjid from "./assets/masjid.jpg";
import { HiChevronDoubleRight } from "react-icons/hi";
import { BsArrowRight,  } from "react-icons/bs";
import logo from './assets/logo.png'
import { col_data } from "./Data";
import { COLUMN } from "./Column";
import { useTable } from "react-table";

const Convertor = () => {
  const columns = useMemo(() => COLUMN, []);
  const data = useMemo(() => col_data, []);
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

  const [fromUnit, setFromUnit] = useState("Marla");
  const [toUnit, settoUnit] = useState("Sq. Yd");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [currentConversion, setCurrentConversion] = useState("1");

  const onSelectChange = (e) => {
    console.log("event", e.target.value);
    setValue("");
    setResult("");
    setCurrentConversion(e.target.value);
    if (e.target.value === "1") {
      setFromUnit("Marla");
      settoUnit("Sq. Yd");
    } else if (e.target.value === "2") {
      setFromUnit("Sq. Meter");
      settoUnit("Sq. Yd.");
    } else if (e.target.value === "3") {
      setFromUnit("Kanal");
      settoUnit("Marla");
    } else if (e.target.value === "4") {
      setFromUnit("Sq. Yd.");
      settoUnit("Marla");
    } else if (e.target.value === "5") {
      setFromUnit("Sq. Yd.");
      settoUnit("Sq. Meter");
    } else if (e.target.value === "6") {
      setFromUnit("Marla");
      settoUnit("Kanal");
    }
  };

  const onValueChange = (e) => {
    setValue(e.target.value);
    if (currentConversion === "1") {
      setResult(parseFloat(e.target.value) * 25);
    } else if (currentConversion === "2") {
      setResult(parseFloat(e.target.value) * 1.196);
    } else if (currentConversion === "3") {
      setResult(parseFloat(e.target.value) * 20);
    } else if (currentConversion === "4") {
      setResult(parseFloat(e.target.value) * 0.04);
    } else if (currentConversion === "5") {
      setResult(parseFloat(e.target.value) * 0.89);
    } else if (currentConversion === "6") {
      setResult(parseFloat(e.target.value) * 0.05);
    }
  };

  const onResultChange = (e) => {
    setResult(e.target.value);
    if (currentConversion === "1") {
      setValue(parseFloat(e.target.value) * 0.04);
    } else if (currentConversion === "2") {
      setValue(parseFloat(e.target.value) * 0.89);
    } else if (currentConversion === "3") {
      setValue(parseFloat(e.target.value) * 0.05);
    } else if (currentConversion === "4") {
      setValue(parseFloat(e.target.value) * 25);
    } else if (currentConversion === "5") {
      setValue(parseFloat(e.target.value) * 1.196);
    } else if (currentConversion === "6") {
      setValue(parseFloat(e.target.value) * 20);
    }
  };
  return (
    <div className="w-full h-full  pt-1 pb-5">
      <div className="flex flex-col items-center justify-center">
        {/* Top Image */}
        <div className="w-full flex  justify-between items-center h-[300px] bg-black/90">
          <div className="w-[45%] md:w-[30%]">
            <div className="sm:ml-7 pl-4 md:ml-10">
            <img src={logo} alt="" className="w-20"/>
              
            </div>
            <h1 className="text-white pl-4 sm:pl-7 md:pl-10 text-2xl font-bold">
              Area Unit Convertor
            </h1>
            <p className="pl-4 sm:pl-7 md:pl-10 pt-5 text-slate-100">
              Easy and convenient way to convert and compare different units of
              measurement of size
            </p>
          </div>
          <div>
            <img
              src={masjid}
              style={{
                borderTopLeftRadius: "150px",
                borderBottomLeftRadius: "150px",
              }}
              alt=""
              className="md:w-72 object-cover sm:w-52 sm:h-52 w-40 h-40 md:h-[300px]"
            />
          </div>
        </div>
        {/* Convertor Input */}

        <div className="w-full h-full flex flex-col items-center">
          <div className="border-2 border-yellow-700 rounded-2xl font-bold my-5 p-2">
            <form>
              <select onChange={onSelectChange} className="focus:outline-none ">
                <option value="1">
                  Marla-
                  Sq. Yd.
                </option>
                <option value="2">
                  Sq. Meter-
                  Sq. Yd.
                </option>
                <option value="3">
                  Kanal
                 -
                  Marla
                </option>
                <option value="4">
                  Sq. Yd.-
                  Marla
                </option>
                <option value="5">
                  Sq. Yd-
                  Sq. Meter
                </option>
                <option value="6">
                  Marla-
                  Kanal
                </option>
              </select>
            </form>
          </div>

          <div className="flex flex-col items-center justify-center md:flex-row">
            <label className="pr-2 font-bold" htmlFor="">
              {fromUnit}
            </label>
            <input
              className="bg-yellow-700 text-center text-white border-2 border-yellow-700 focus:outline-none py-2 rounded-xl font-bold"
              type="number"
              value={value}
              onChange={onValueChange}
            />
            <h1 className="text-2xl font-extrabold md:my-5 py-2 mx-5">=</h1>
            <label className="pr-2 font-bold" htmlFor="">
              {toUnit}
            </label>
            <input
              className="bg-yellow-700 text-center text-white border-2 border-yellow-700 py-2 focus:outline-none rounded-xl font-bold"
              type="number"
              value={result}
              onChange={onResultChange}
            />
          </div>
        </div>

        {/* Useful Convertors */}
        <div className="w-[90%] h-full py-5">
          <div className="flex items-center">
            <HiChevronDoubleRight />
            <h1 className="text-xl font-bold uppercase px-3">
              Useful Convertors{" "}
            </h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className=" pt-3">
              <div className="flex border-2 justify-center py-1 rounded-3xl border-yellow-700  items-center">
                <HiChevronDoubleRight className="mr-2" />
                <h1>Marla</h1>
                <BsArrowRight size={30} className="mx-3 font-bold" />
                <h1>Sq. Yd.</h1>
              </div>
            </div>
            <div className=" pt-3">
              <div className="flex border-2 justify-center py-1 rounded-3xl border-yellow-700  items-center">
                <HiChevronDoubleRight className="mr-2" />
                <h1>Sq. Meter</h1>
                <BsArrowRight size={30} className="mx-3 font-bold" />
                <h1>Sq. Yd.</h1>
              </div>
            </div>
            <div className=" pt-3 ">
              <div className="flex border-2 justify-center md:py-1 py-3.5 px-0.5 rounded-3xl border-yellow-700  items-center">
                <HiChevronDoubleRight className="mr-2" />
                <h1>Kanal</h1>
                <BsArrowRight size={30} className="mx-3 font-bold" />
                <h1>Marla</h1>
              </div>
            </div>
            <div className=" pt-3">
              <div className="flex border-2 justify-center py-1 rounded-3xl border-yellow-700  items-center">
                <HiChevronDoubleRight className="mr-2" />
                <h1>Sq. Meter</h1>
                <BsArrowRight size={30} className="mx-3 font-bold" />
                <h1>Sq. Yd.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <h1 className="capitalize text-2xl pb-3 font-bold">
          area convertor in pakistan
        </h1>
        <table className="border-2 border-yellow-700" {...getTableProps()}>
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
                        className="px-2 sm:px-5 md:px-7 whitespace-nowrap  my-2 py-4"
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
    </div>
  );
};

export default Convertor;
