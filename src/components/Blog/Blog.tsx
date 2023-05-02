import { useEffect, useState } from "react";
import "./Blog.scss";
import Folder from "./folders/Folder";
import { FetchData } from "../../helpers/FetchData";
import { Department, Root, User } from "../../helpers/Users";

import { useParams } from "react-router-dom";
import UserView from "./userView/UserView";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/users/thunk";
import { getUsers } from "../../selectors";

let URL = "http://localhost:3001/";

const Blog = () => {
  const { department, section, year } = useParams();

  let url_next: any = "";

  for (const value of Object.values(useParams())) {
    if (value !== undefined) {
      url_next += "/" + value.toString();
    }
  }

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<
    Department[] | User[] | string[] | Root[] | any
  >([]);

  const dispatch = useDispatch();

  const users = useSelector(getUsers);

  useEffect(() => {
    const fetchData = async () => {
      try {
        switch (true) {
          case Boolean(department && section && year):
            await dispatch(fetchUser());
            setIsLoading(false);
            break;
          case Boolean(department && section):
            setIsLoading(false);
            break;
          case Boolean(department && year):
            const sections = await FetchData(URL + "sections");
            setData(sections);
            setIsLoading(false);
            break;
          case Boolean(department):
            const years = await FetchData(URL + "years");
            setData(years);
            setIsLoading(false);
            break;
          default:
            const departments = await FetchData(URL + "departments");
            setData(departments);
            setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [department, dispatch, section, year]);

  useEffect(() => {
    if (users !== undefined) {
      setData(users);
      setIsLoading(false);
    }
  }, [users]);

  return (
    <>
      {isLoading ? (
        "true.."
      ) : (
        <div className="blog-area">
          {Boolean(department && section && year) ? (
            <UserView data={data} />
          ) : (
            <Folder data={data} url_next={url_next} />
          )}
        </div>
      )}
    </>
  );
};

export default Blog;
