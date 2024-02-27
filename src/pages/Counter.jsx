import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, setCount } from "../Redux/slices/counterSlice";
const Counter = () => {
  const dispatch = useDispatch();

  //store abone ol
  const store = useSelector((store) => store.counterReducer);

  return (
    <div className="vh-100 w-full d-flex justify-content-center align-items-center ">
      <div className="d-flex justify-content-center align-center gap-4">
        <button onClick={() => dispatch(decrease())} className="btn btn-danger">
          Azalt
        </button>
        <span className="lead fw-bold">{store.count}</span>
        <button
          onClick={() => dispatch(increase())}
          className="btn btn-success"
        >
          Arttır
        </button>
        <input
          type="number"
          className="w-25"
          onChange={(e) => dispatch(setCount(Number(e.target.value)))}
          //   number yerine + isreti koyarsak
        />
      </div>
    </div>
  );
};
export default Counter;
