import React, { useState } from "react";
import { useStore } from "../../Utils/Store/StoreContext";
import { observer } from "mobx-react";
import CardComponent from "./CardComponent";

const Admin = () => {
  const notesStore = useStore();
  const options = [
    {
      id: 1,
      title: "Manage Doctors",
      detail: `Manage doctor's info from here`,
    },

    {
      id: 2,
      title: "Manage Patients",
      detail: `Manage patient's info from here`,
    },
    {
      id: 3,
      title: "Appointments",
      detail: `Add/Delete appointments`,
    },
  ];
  const [notes, setNotes] = useState("");
  const [id, setId] = useState(0);
  const handleChange = (e) => {
    setNotes(e.target.value);
  };
  const handleId = (e) => {
    setId(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 30,
        marginTop: 20,
        alignItems: "center",
        height: "100vh",
      }}
    >
      {options.map((item, i) => {
        return (
          <div key={i}>
            <CardComponent title={item.title} details={item.detail} id={item.id} />
          </div>
        );
      })}
    </div>
    // <div style={{ backgroundColor: "black" }}>
    //   <input
    //     type="text"
    //     value={notes}
    //     onChange={handleChange}
    //     placeholder="Enter Note"
    //   />
    //   <input type="number" value={id} onChange={handleId} placeholder="ID" />
    //   <button
    //     style={{ fontSize: 20 }}
    //     onClick={() => notesStore.addNote(notes, id)}
    //   >
    //     Add Note
    //   </button>
    //   <button
    //     style={{ fontSize: 20 }}
    //     onClick={() => notesStore.removeNote(id)}
    //   >
    //     Remove
    //   </button>
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //       flexDirection: "column",
    //       alignItems: "center",
    //     }}
    //   >
    //     {notesStore.notes.map((item, i) => {
    //       return (
    //         <h1 style={{ color: notesStore.ButtonState?'white':'yellow' }} key={i}>
    //           {item.text}
    //         </h1>
    //       );
    //     })}
    //     <button onClick={()=>notesStore.setButtonState(!notesStore.ButtonState)}>{notesStore.ButtonState?'ON':'OFF'}</button>
    //   </div>
    // </div>
  );
};
export default observer(Admin);