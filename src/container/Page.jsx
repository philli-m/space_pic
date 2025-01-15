import React, { useState } from "react";

import TempInput from "../components/TempInput";
import Table from "../components/Table";

const Page = () => {
  const [temp, setTemp] = useState();
  const [result, setResult] = useState();
  const dataBaking = [
    { fah: 300, cel: 149 },
    { fah: 325, cel: 163 },
    { fah: 350, cel: 176 },
    { fah: 375, cel: 190 },
    { fah: 400, cel: 204 },
    { fah: 425, cel: 218 },
  ];
  const dataMeat = [
    { fah: 'Beef Rare', cel: '48-52' },
    { fah: 'Beef Medium Rare', cel: '54-57' },
    { fah: 'Beef Medium', cel: '60-63' },
    { fah: 'Beef Mince', cel: 68 },
    { fah: 'Fish', cel: 63 },
    { fah: 'Lamb', cel: 63 },
    { fah: 'Pork Cuts', cel: 63 },
    { fah: 'Pork Ham', cel: 71 },
    { fah: 'Pork Mince', cel: 71 },
    { fah: 'Poultry White Meat', cel: 74 },
    { fah: 'Poultry Dark Meat', cel: 79 },
  ];

  const handleInputChange = (e) => {
    const number = Number(e.target.value);
    return setTemp(number);
  };

  const calculateTemp = (e) => {
    e.preventDefault();
    if (typeof temp === "number") {
      setResult((5 / 9) * (temp - 32));
    } else {
      setResult(null);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Tempreture conversion</h1>
      </header>
      <main className="grid">
        <div>
        <Table data={dataMeat} 
          header='Table of safe cooking tempretures'
          caption=''
          head1='Meat cut'
          head2='Tempreture'  
        />
        <Table data={dataBaking} 
          header='Table of common tempreture conversions'
          caption='This table shows the commen Fahrenheit baking tempreture and the Celcius equivilent, normally these would be rounded to the nearest 5 degree mark.'
          head1='Fahrenheit'
          head2='Celcius'  
        />

        </div>

        <TempInput
          id="temp-input"
          label="Fahrenheit to Celcius converter"
          btnString="Convert"
          calculateTemp={calculateTemp}
          handleInputChange={handleInputChange}
          result={result}
          temp={temp}
        />
      </main>

    </div>
  );
};

export default Page;
