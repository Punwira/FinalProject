import React, { useState } from "react";
// import { getData } from "../../util/handleFirebase";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// import { Food } from "../../data/Food";
import { List, Input, Radio, Row, Col, Divider, AutoComplete, Card } from "antd";
import "antd/dist/antd.css";
import Theme from "../TestSearch/testStyle.module.css";
import { getFoodData } from "../../util/handleFirebase";

const { Search } = Input;

const TestSearch = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  // const onSearch = value => console.log(value);
  const [value, setValue] = React.useState(1);
  const [food, setFood] = React.useState(null);
  const [foodData, setFoodData] = React.useState([]);
  const [allfoodInfo, setAllfoodInfo] = React.useState([]);

  React.useEffect(() => {
    getFoodforDB();
    // console.log(foodData);
  }, []);
  const getFoodforDB = async () => {
    const data = await getFoodData();
    setAllfoodInfo(data)
    const menu = [];
    data.map((e) => {
      const b = {
        value: e.name,
      };
      menu.push(b);
    });
    setFoodData(menu);
  };
  // const onChange = (e) => {
  //   console.log("radio checked", e.target.value);
  //   setValue(e.target.value);
  //   const dataFood = Food.find((x) => x.id === e.target.value);
  //   console.log(dataFood);
  //   setFood(dataFood);
  // };

  const options = foodData;
  const data = {
    labels: ["โปรตีน", "ไขมัน", "คาร์โบไฮเดรต", "ใยอาหาร", "คอเลสเตอรอล"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          food?.protein,
          food?.fat,
          food?.carbohydrate,
          food?.fiber,
          food?.cholesterol,
        ],
        backgroundColor: [
          "#33658a",
          "#86bbd8",
          "#758e4f",
          "#f6ae2d",
          "#f26419",
        ],
        hoverOffset: 4,
        borderWidth: 1,
      },
    ],
  };

  const getData = async (value) => {
    console.log(value);
    const data = await getData(value);
    // console.log(data.total);
    // setEventObj(data.data);
    // console.log(data.data);
    // setTotalEvent(data.total);
  };

  const onSearch = (e) => {
    if (e.keyCode == 13) {
      console.log("value", e.target.value);
      //   const historyKeyword =
      //     JSON.parse(localStorage.getItem("historyKeyword")) || []; // string>>>obj
      //   const key = Object.keys(historyKeyword).length;
      //   historyKeyword[key] = { id: key, keyword: e.target.value };
      //   console.log("keyadd", key);
      //   localStorage.setItem("historyKeyword", JSON.stringify(historyKeyword));
      // obj>>>string
      // localStorage.clear()
      // openNotification()
      // router.push('/userData')
      // put the login here
      // console.log(e)
      // searchKeyword(e.target.value)
      getData(e.target.value);
    }
    console.log(e);
  };
  const selectMenu = (val, option) => {
    console.log(option.value);
    // allfoodInfo
    const dataFood = allfoodInfo.find(food => food.name === option.value);
    console.log('x', dataFood);
    setFood(dataFood);
  };
  return (
    <div
      style={{
        // display: "table",
        margin: "100px 70px auto 70px",
        justifyContent: "center",
      }}
      className={Theme.x}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "600",
          marginTop: "120px",
          textAlign: "center",
          // margin: "100px auto 0 0",
          margin: "0 auto",
        }}
      >
        SEARCH
      </h1>
      <AutoComplete
        options={options}
        onSelect={(val, option) => selectMenu(val, option)}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        style={{
          width: "500px",
          display: "table",
          margin: "20px auto",
          justifyContent: "center",
        }}
      >
        <Input.Search 
        size="large" 
        placeholder="search food" 
       />
      </AutoComplete>
      {food? <div>
        <Divider
          orientation="left"
          style={{
            fontSize: "25px",
            fontWeight: "500",
            margin: "40px auto 30px auto",
          }}
        >
          รายละเอียด
        </Divider>
        
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <h1
              style={{
                fontSize: "35px",
                fontWeight: "600",
              }}
            >
              {food.name}
            </h1>
            <h3
              style={{
                fontSize: "25px",
                fontWeight: "500",
                margin: "30px",
              }}
            >
              {food.energy} cal
            </h3>
            <Doughnut data={data}
            style={{
              marginBottom: "50px",
            }} />
          </Col>
          <Col className="gutter-row" span={12}>
            <div>
              <h2>สารอาหาร</h2>
              <h3>โปรตีน: {food?.protein} กรัม</h3>
              <h3>ไขมัน: {food?.fat} กรัม</h3>
              <h3>คาร์โบไฮเดต: {food?.carbohydrate} กรัม</h3>
              <h3>ใยอาหาร: {food?.fiber} กรัม</h3>
              <h3>คอเลสเตอรอล: {food?.cholesterol} กรัม</h3>           
            </div>
          </Col>
        </Row>
      </div> : <div style={{height: '1300px'}}></div>}
      
    </div>
  );
};

export default TestSearch;