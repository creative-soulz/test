import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const GET_DATA = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;

const Test = () => {
  const { loading, error, data } = useQuery(GET_DATA, {
    onError: (error) => {
      // If there's an error, update the toast to reflect it
      toast.update("loadingToast", {
        render: `Error: ${error.message}`,
        pauseOnFocusLoss: false,
        type: "error",
        isLoading: false,
        autoClose: 5000,
        
      });
    },
    onCompleted: (data) => {
      // On successful data fetch, update the toast to success
      toast.update("loadingToast", {
        render: "Data loaded successfully!",
        type: "success",
        pauseOnFocusLoss: false,
        isLoading: false,
        autoClose: 3000,
        className: 'rotateY animated'
      });
      console.log(data);
    },
  });

  // Show the initial loading toast
  React.useEffect(() => {
    const id = toast.loading("Loading data, please wait...", {
      toastId: "loadingToast",
    });
    return () => toast.dismiss(id); // Cleanup the toast on unmount
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="h-full w-full gap-5 my-5 flex items-center justify-center flex-wrap">
      {data?.posts?.data.map((item, index) => (
        <div
          key={item.id}
          className="h-1/6 w-1/5 text-center flex items-center justify-center font-semibold text-wrap bg-gray-400 rounded-lg drop-shadow-md shadow-black"
        >
          <p>
            <span>{index + 1}</span>. {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Test;
