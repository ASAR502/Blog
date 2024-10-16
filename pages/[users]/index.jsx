import useSWR from 'swr';

const ListOfUser = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, error } = useSWR('https://dummyjson.com/products', fetcher);

  if (error) {
    return (
      <div>
        Error occurred on this page
      </div>
    );
  }

  if (!data) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      <ul>
        {data.products.map((item, index) => (
          <div key={index}>

          {index+1}  <span>{ item.title} </span> 
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ListOfUser;
