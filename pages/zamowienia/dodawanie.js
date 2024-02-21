import { TextField } from "@mui/material";
import { useState } from "react";

function dodawanie() {
  const [form, setForm] = useState({
   garaz: null,
   cenaGarazu: null,
   iloscOkien: 0,
   iloscDrzwi: 0,
   iloscBram: 1,
   rodzajBramy: "brama segmentowa",
   rodzajSpadu: "jednospadowy",
   poszycieDachu: "blacha trapezowa",
   kolorPoszyciaDachu: "brązowy",

  });
  const onChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="centered pt-10">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-2xl font-bold">Dodawanie zamówienia</h1>
        <TextField
          id="login"
          name="login"
          label="Nazwa"
          variant="outlined"
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
}

export default dodawanie;
