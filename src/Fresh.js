import { useSelector, useDispatch } from "react-redux";
import { userdata1 } from './Redux/Freshslice';
import { useEffect, useState } from "react";

const Fresh = () => {
  const { userdata } = useSelector((state) => state.user);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userdata1());
  }, [dispatch]);

  useEffect(() => {
    setList(userdata);
  }, [userdata]);

  return (
    <div>
      <select>

        {list.map((ech, i) => {
          return (
            <option key={i}>
              <h1>{ech.name}</h1>
            </option>
          );
        })}

      </select>

    </div>
  );
};

export default Fresh;
