import { useState } from "react";
import Demo from "../demo/Demo";
import "./setting.css";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";
import { HiOutlineRefresh } from "react-icons/hi";
import { Popover } from "antd";
import { Select, SelectProps } from "antd";
import ReactCountryFlag from "react-country-flag";
import { countries } from "../../../countries.json";

const Settings = () => {
  const [currency, setCurrency] = useState(false);
  const [importdata, setImportdata] = useState(false);
  const [exportdata, setExportdata] = useState(false);
  const [user, setUser] = useState(false);

  console.log("countries", countries);

  const content = (
    <div className="content_pop_box">
      <p>Local data will de deleted!</p>
      <div className="confirm_box">
        <button>Confirm</button>
      </div>
    </div>
  );

  const [data] = useState({
    id: 74,
    parentId: null,
    value: "",
    children: [
      {
        id: 62,
        parentId: 74,
        value: "Task 7",
        children: [
          {
            id: 56,
            parentId: 62,
            value: "Task 1",
          },
          {
            id: 63,
            parentId: 62,
            value: "Task 4",
          },
        ],
      },
      {
        id: 86,
        parentId: 74,
        value: "Task 8",
        children: [
          {
            id: 80,
            parentId: 86,
            value: "Task 5",
            children: [
              {
                id: 81,
                parentId: 80,
                value: "Task 2",
              },
              {
                id: 76,
                parentId: 80,
                value: "Task 3",
              },
            ],
          },
          {
            id: 87,
            parentId: 86,
            value: "Task 6",
          },
        ],
      },
    ],
  });

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  const options: any = countries.country.map((item) => {
    const value = {
      value: item.countryName,
      label: (
        <div className="country__box">
          <ReactCountryFlag
            countryCode={item.countryCode}
            svg
            />
          <span>{item.currencyCode}</span>,
          <span>{item.countryName}</span>
        </div>
      ),
    };

    return value;
  });

  const optionscurrency: SelectProps["options"] = [
    {
      value: `USD`,
      label: `USD`,
    },
    {
      value: `EUR`,
      label: `EUR`,
    },
    {
      value: `JPY`,
      label: `JPY`,
    },
  ];

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="dashboard__box">
      <Demo />
      <div className="setting__box_content">
        <div className="currency__setting__box">
          <span onClick={() => setCurrency(!currency)}>
            {currency === true ? (
              <IoMdArrowDropdown className="icon-right-setting" />
            ) : (
              <IoMdArrowDropright className="icon-right-setting" />
            )}
            <h2>CURRENCY</h2>
          </span>
          {currency && (
            <>
              <div className="currency__select__box">
                <span>
                  <label>Base Currency</label>
                  <Select
                    allowClear
                    style={{ width: "100%", borderRadius: "0.5rem" }}
                    placeholder="Please select"
                    defaultValue={["US", "US Dollar"]}
                    onChange={handleChange}
                    options={options}
                    size="large"

                  />
                </span>
                <span>
                  <label>Additional Currencies(optional)</label>
                  <Select
                    mode="multiple"
                    size="large"
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Please select"
                    defaultValue={["USD", "EUR"]}
                    onChange={handleChange}
                    options={optionscurrency}
                    className="currency-select"
                  />
                </span>
              </div>
              <div className="currency-table-box">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>IDR</th>
                      <th>EUR</th>
                      <th>JPY</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>IDR</td>
                      <td>1.0000</td>
                      <td>0.000061</td>
                      <td>0.0089</td>
                    </tr>
                    <tr>
                      <td>EUR</td>
                      <td>16,393.4426</td>
                      <td>1.0000</td>
                      <td>145.4426</td>
                    </tr>
                    <tr>
                      <td>JPY</td>
                      <td>112.7142</td>
                      <td>0.0069</td>
                      <td>1.0000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>

        <div className="currency__setting__box">
          <span onClick={() => setImportdata(!importdata)}>
            {importdata === true ? (
              <IoMdArrowDropdown className="icon-right-setting" />
            ) : (
              <IoMdArrowDropright className="icon-right-setting" />
            )}
            <h2>DATA IMPORT</h2>
          </span>
          {importdata && (
            <div className="import__box">
              <p>Import transactions from a CSV file.</p>
              <button>
                <AiFillFileText />
                <p>Open File</p>
              </button>
              <input type={"file"} id={"csvFileInput"} accept={".csv"} />
            </div>
          )}
        </div>
        <div className="currency__setting__box">
          <span onClick={() => setExportdata(!exportdata)}>
            {exportdata === true ? (
              <IoMdArrowDropdown className="icon-right-setting" />
            ) : (
              <IoMdArrowDropright className="icon-right-setting" />
            )}
            <h2>DATA EXPORT</h2>
          </span>
          {exportdata && (
            <div className="import__box">
              <p>Export transactions to a JSON file.</p>
              <button onClick={exportData}>
                <AiFillFileText />
                <p>Export JSON File</p>
              </button>
            </div>
          )}
        </div>
        <div className="currency__setting__box">
          <span onClick={() => setUser(!user)}>
            {user === true ? (
              <IoMdArrowDropdown className="icon-right-setting" />
            ) : (
              <IoMdArrowDropright className="icon-right-setting" />
            )}
            <h2>USER</h2>
          </span>
          {user && (
            <>
              <Popover
                placement="top"
                content={content}
                trigger="click"
                className="user__box"
                style={{ borderRadius: "0.15rem" }}
              >
                <button>
                  <p>Reset demo</p>
                </button>
                <span>
                  <HiOutlineRefresh className="icon-refresh" />
                </span>
              </Popover>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
