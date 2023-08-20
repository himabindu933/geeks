import React from "react";
import { FaRegCopyright } from "react-icons/fa";

export default function Copyright() {
  return (
    <div>
      <div className="copyrights">
        <FaRegCopyright style={{ marginTop: 20 }} />{" "}
        <p>Copyrights @Geeks 2023</p>
      </div>
    </div>
  );
}
