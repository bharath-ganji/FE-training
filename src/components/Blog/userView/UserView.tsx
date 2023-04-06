import { FunctionComponent, useEffect, useState } from "react";
import "./UserView.scss";
import { Department, User } from "../../../helpers/Users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const UserView: FunctionComponent<{
  data: Department[] | User[] | String[] | any;
}> = ({ data }) => {
  const [userdata, setUserdata] = useState([]);

  const { department, section, year } = useParams();

  useEffect(() => {
    const filteredData: any = data.filter((user: any) => {
      return (
        user.dept === department && user.sec === section && user.year === year
      );
    });
    setUserdata(filteredData);
  }, [data, department, section, year]);

  return userdata.length === 0 ? (
    <> {<h1>No Results Fount...</h1>}</>
  ) : (
    <>
      {userdata.map((data: any) => (
        <div className="user-card" key={data.rollno}>
          <div className="user-card-img"></div>
          <div className="user-card-info">
            <p className="text-title">{data.name} </p>
            <p className="text-body">{data.rollno} </p>
            <div className="user-card-footer">
              <FontAwesomeIcon
                className="user-card-button"
                icon={faLinkedinIn}
              />

              <FontAwesomeIcon
                className="user-card-button"
                icon={faInstagramSquare}
              />
              <FontAwesomeIcon className="user-card-button" icon={faPhone} />
              <FontAwesomeIcon className="user-card-button" icon={faEnvelope} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserView;
