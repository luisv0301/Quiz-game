import React, { useState } from "react";
import { useHistory } from "react-router";

import { data } from "../data.js";

import Card from "../components/Card";
import Button from "../components/Button";

export default function Questions({ setScore }) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const history = useHistory();

  const getValue = () => {
    if (answer === data[index].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleOnClick = () => {
    if (data.length - 1 === index) {
      getValue();
      history.push("/result");
    } else {
      getValue();
      setAnswer("");
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <Card>
      <h3>{data[index].question}</h3>
      <Button
        fn={() => setAnswer("A")}
        content={data[index].A}
        isBtnQuestion={true}
      />
      <Button
        fn={() => setAnswer("B")}
        content={data[index].B}
        isBtnQuestion={true}
      />
      <Button
        fn={() => setAnswer("C")}
        content={data[index].C}
        isBtnQuestion={true}
      />
      <Button fn={handleOnClick} content="Siguente" />
    </Card>
  );
}
