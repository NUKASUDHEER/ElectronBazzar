import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <div style={{ fontSize: "300px", marginTop: "40%" }}>
      <Oval
        height={80}
        width={80}
        color="white"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="black"
        strokeWidth={1}
        strokeWidthSecondary={1}
      />
    </div>
  );
};

export default Loading;
