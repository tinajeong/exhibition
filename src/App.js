import "./App.css";
import Modal from "./component/Modal";
import { useState } from "react";

function App() {
  const [exhibitions, setExhibitions] = useState([
    { id: 1, src: "images/weiwei.png", title: "아이 웨이웨이" },
    { id: 2, src: "images/2021.png", title: "올해의 작가상 2021" },
    {
      id: 3,
      src: "images/leegunee.png",
      title: "MMCA 이건희컬렉션 특별전: 한국미술명작",
    },
  ]);
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="App">
      <div className="sidebar" style={{ width: "20%" }}>
        <h3 className="side-bar-title">MMCA</h3>
        <button
          id="regBtn"
          onClick={(e) => {
            setVisible(true);
          }}
        >
          전시회 추가
        </button>
        {exhibitions.map((ex) => {
          return (
            <span className="bar-item" key={ex.id}>
              {ex.title}
            </span>
          );
        })}
      </div>
      <div className="container">
        <h1>이번 달 전시 목록</h1>
        {exhibitions.map((ex) => {
          return <img src={ex.src} alt={ex.title} key={ex.id} />;
        })}
      </div>
      <Modal
        isVisible={isVisible ? "is-visible" : ""}
        setVisible={setVisible}
        setExhibitions={setExhibitions}
        exhibitions={exhibitions}
      />
    </div>
  );
}

export default App;
