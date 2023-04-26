import { useEffect, useState } from "react";
import "./Blog.scss";
import Folder from "./folders/Folder";
import { FetchData } from "../../helpers/FetchData";
import { Department, Root, User } from "../../helpers/Users";

import { useParams } from "react-router-dom";
import UserView from "./userView/UserView";

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

  async function triggerdata(params: any) {
    const response = await FetchData(URL + params);

    setData(response);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        switch (true) {
          case Boolean(department && section && year):
            // setData(response.users);
            triggerdata("users");
            break;
          case Boolean(department && section):
            break;
          case Boolean(department && year):
            // setData(response.sections);
            triggerdata("sections");

            break;
          case Boolean(department):
            // setData(response.years);
            triggerdata("years");
            break;
          default:
            // No variables present
            // setData(response.departments);
            triggerdata("departments");
        }

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [department, section, year]);

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
