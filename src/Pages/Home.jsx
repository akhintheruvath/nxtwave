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
   const [searchText, setSearchText] = useState("");
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
      function searchAndSetNumberOfPagesAndDisplayData(dataArray) {
         const filteredData = dataArray.filter((obj) => obj.title.toLowerCase().includes(searchText.toLowerCase()));
         setNumberOfPages(Math.ceil(filteredData.length / perPage));
         setDisplayData(filteredData.slice((currentPage - 1) * perPage, perPage * currentPage));
      }

      if(success && currentTab === "Resources") {
         searchAndSetNumberOfPagesAndDisplayData(data);
      } else if(success && currentTab === "Requests") {
         searchAndSetNumberOfPagesAndDisplayData(requestData);
      } else if(success && currentTab === "Users") {
         searchAndSetNumberOfPagesAndDisplayData(usersData);
      }
   }, [currentTab, success, data, currentPage, searchText]);

   useEffect(() => {
      setCurrentPage(1);
   }, [currentTab, searchText]);

   return (
      <div className="h-screen">
         <HeaderWithButton />
         <div className="mt-16 pt-14 pb-11 px-36 bg-[#FBFBFB] min-h-full">
            <div className="flex justify-center mb-8">
               <Tabs
                  currentTab={currentTab}
                  setCurrentTab={setCurrentTab}
               />
            </div>
            <div className="mb-8">
               <Searchbar
                  searchText={searchText}
                  setSearchText={setSearchText}
               />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               { loading && <div>Loading Data...</div> }
               {
                  success ? (
                     displayData.length ? (
                        displayData.map(obj => {
                           return (
                              <Fragment key={obj.id}>
                                 <ResourceComponent {...obj} />
                              </Fragment>
                           );
                        })
                     ) : (
                        <p className="text-[#171F46] font-medium font-hkgrotesk">
                           No matching data found.
                        </p>
                     )
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