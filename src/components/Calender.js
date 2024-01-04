import { CheckCircleOutlined } from "@ant-design/icons";
import { Calendar, Col, Input, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

export const Calender = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  const wrapperStyle = {
    width: 400,
    border: "1px solid white",
    marginLeft: "30px",
    marginTop: "5px",
    borderRadius: "8px",
    boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  };
  return (
    <div>
      <div className="h-300" style={wrapperStyle}>
        <Calendar
          fullscreen={false}
          headerRender={({ value, type, onChange, onTypeChange }) => {
            const start = 0;
            const end = 12;
            const monthOptions = [];

            let current = value.clone();
            const localeData = value.localeData();
            const months = [];
            for (let i = 0; i < 12; i++) {
              current = current.month(i);
              months.push(localeData.monthsShort(current));
            }

            for (let i = start; i < end; i++) {
              monthOptions.push(
                <Select.Option key={i} value={i} className="month-item">
                  {months[i]}
                </Select.Option>
              );
            }

            const year = value.year();
            const month = value.month();
            const options = [];
            for (let i = year - 10; i < year + 10; i += 1) {
              options.push(
                <Select.Option key={i} value={i} className="year-item">
                  {i}
                </Select.Option>
              );
            }
            return (
              <div style={{ padding: 8 }}>
                <div>
                  <div className="text-[#f08080] text-[16px]">
                    {value.format("dddd")}
                  </div>
                  <div className="text-[19px]">
                    {value.format("DD, MMMM YYYY")}
                  </div>
                </div>

                <Row gutter={6}>
                  <Col>
                    <Select
                      size="small"
                      popupMatchSelectWidth={false}
                      className="my-year-select"
                      value={year}
                      onChange={(newYear) => {
                        const now = value.clone().year(newYear);
                        onChange(now);
                      }}
                    >
                      {options}
                    </Select>
                  </Col>
                  <Col>
                    <Select
                      size="small"
                      popupMatchSelectWidth={false}
                      value={month}
                      onChange={(newMonth) => {
                        const now = value.clone().month(newMonth);
                        onChange(now);
                      }}
                      className="ml-8"
                    >
                      {monthOptions}
                    </Select>
                  </Col>
                </Row>
              </div>
            );
          }}
          onPanelChange={onPanelChange}
        />
      </div>
      <div className="flex flex-col">
        <Input
          className="ml-[38px] mt-[10px] border-inherit shadow-lg"
          placeholder="Add Task"
        />
        <div>
          <TextArea
            className="ml-[38px] mt-[10px] border-inherit shadow-lg"
            rows={4}
            placeholder="Additional Info"
          />
          <button className="border w-[40px] ml-3 h-[36px] bg-[#f08080] pt-[2px] rounded-xl">
            <CheckCircleOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};
