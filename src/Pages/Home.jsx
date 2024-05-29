import { useState, useEffect, Fragment } from "react";
import { HeaderWithButton } from "../Components/HeaderWithButton";
import { ResourceComponent } from "../Components/ResourceComponent";
import { Searchbar } from "../Components/Searchbar";
import { Tabs } from "../Components/Tabs";
import axios from 'axios';
import { PaginationPages } from "../Components/PaginationPages";

export const Home = () => {
   const [data, setData] = useState([]);
   const [requestData, setRequestData] = useState([]);
   const [usersData, setUsersData] = useState([]);
   const [displayData, setDisplayData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [success, setSuccess] = useState(false);
   const [currentTab, setCurrentTab] = useState("Resources");
   const [currentPage, setCurrentPage] = useState(1);
   const [numberOfPages, setNumberOfPages] = useState(1);
   const perPage = 6;
 
   useEffect(() => {
      const fetchData = async () => {
         try {
            setLoading(true);
            const response = await axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json');
            if(response.status === 200) setSuccess(true);
            setData(response.data);
            setRequestData(response.data.filter(obj => obj.tag === "request"));
            setUsersData(response.data.filter(obj => obj.tag === "user"));
         } catch (error) {
            setError(error);
            setSuccess(false);
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, []);

   useEffect(() => {
      if(success && currentTab === "Resources") {
         setNumberOfPages(Math.ceil(data.length / perPage));
         setDisplayData(data.slice((currentPage - 1) * perPage, perPage * currentPage));
      }
      else if(success && currentTab === "Requests") {
         setNumberOfPages(Math.ceil(requestData.length / perPage));
         setDisplayData(requestData.slice((currentPage - 1) * perPage, perPage * currentPage));
      }
      else if(success && currentTab === "Users") {
         setNumberOfPages(Math.ceil(usersData.length / perPage));
         setDisplayData(usersData.slice((currentPage - 1) * perPage, perPage * currentPage));
      }
   }, [currentTab, success, data, currentPage]);

   useEffect(() => {
      setCurrentPage(1);
   }, [currentTab]);

   return (
      <div className="h-screen">
         <HeaderWithButton />
         <div className="py-11 px-36 bg-[#FBFBFB] min-h-full">
            <div className="flex justify-center mb-8">
               <Tabs
                  currentTab={currentTab}
                  setCurrentTab={setCurrentTab}
               />
            </div>
            <div className="mb-8">
               <Searchbar />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               { loading && <div>Loading Data...</div> }
               {
                  success ? (
                     displayData.map(obj => {
                        return (
                           <Fragment key={obj.id}>
                              <ResourceComponent {...obj} />
                           </Fragment>
                        );
                     })
                  ) : error?.message
               }
            </div>
            <div className="flex justify-center mt-8">
               {
                  success && (
                     <PaginationPages
                        numberOfPages={numberOfPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                     />
                  )
               }
            </div>
         </div>
      </div>
   );
}