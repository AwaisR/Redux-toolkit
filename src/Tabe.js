import React from "react";
import "./table.css";
import { useSelector, useDispatch } from "react-redux";
export default function Tabe() {
  const userTabData = useSelector((state) => state.table);
  return (
    <div>
      <table id="customers">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>website</th>
        </tr>

        {userTabData &&
          userTabData.userData &&
          userTabData.userData.map((item) => (
            <>
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.website}</td>
              </tr>
            </>
          ))}
      </table>
    </div>
  );
}
