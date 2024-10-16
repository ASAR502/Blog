import { useState, useEffect } from "react";
const UserPage = (props) => {
  return (
    <>
      <div>
        {props?.data?.products.map((product, index) => (
          <div key={index}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const data = await (await fetch('https://dummyjson.com/products')).json();
  return {
    props: {
      data
    }
  };
};

export default UserPage;
