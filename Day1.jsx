import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";

import InfoDialog from "../InfoDailog";

/*export const postOfficeData = {
  Message: "Number of Post office(s) found:2",
  Status: "Success",
  PostOffice: [
    {
      Name: "New Delhi",
      Description: null,
      BranchType: "Head Post Office",
      DeliveryStatus: "Delivery",
      Circle: "Delhi",
      District: "New Delhi",
      Division: "New Delhi GPO",
      Region: "Delhi",
      State: "Delhi",
      Country: "India",
      Pincode: "110001",
    },
    {
      Name: "New Delhi South Ext-II",
      Description: null,
      BranchType: "Sub Post Office",
      DeliveryStatus: "Non-Delivery",
      Circle: "Delhi",
      District: "South Delhi",
      Division: "New Delhi South",
      Region: "Delhi",
      State: "Delhi",
      Country: "India",
      Pincode: "110049",
    },
  ],
};
*/
const Day1 = () => {
    const[postOffice,setpostoffice]=useState([]);
    const[ status,setstatus]=useState("");
    const[message,setmessage]=useState("");
    const [loading,setloading]=useState(true);

    useEffect(()=>{
        const fetchpostofficedata=async()=>{
           try{
               const res=await axios.get("https://api.postalpincode.in/postoffice/New%20Delhi");
               const data=res.data[0];
               setmessage(data.Message);
               setstatus(data.Status);

               if(data.Status=='Success'){
                  setpostoffice(data.PostOffice);
               }else{
                console.log("No Data Available");
               }


           }catch(error){
               console.error("The Error occured:",error);
               alert("Failed to Fetch !");

           }finally{
            setloading(false);
           }
        };
        fetchpostofficedata();
    },[])







  return (
    <div className="min-h-screen p-4 " >
      <h1 className="text-center text-2xl font-bold p-5">Post Offices Content</h1>

      <div className="m-5">
        <p className="text-center font-bold py-2 "> {message}</p>
      <p className="text-center font-bold ">Fetch State : {status}</p>
      </div>
      

      {loading ?(
        <p className="text-center font-bold text-3xl">
        Loading..... Wait man :|
      </p>):
      
       (<table className="table-auto w-full border border-black">
        <thead>
            <tr><th className="border border-black px-4 py-2">Name</th>
          <th className="border border-black px-4 py-2">Description</th>
          <th className="border border-black px-4 py-2">BranchType</th>
          <th className="border border-black px-4 py-2">DeliveryStatus</th>
          <th className="border border-black px-4 py-2">Circle</th>
          <th className="border border-black px-4 py-2">District</th>
          <th className="border border-black px-4 py-2">Division</th>
          <th className="border border-black px-4 py-2">Region</th>
          <th className="border border-black px-4 py-2">State</th>
          <th className="border border-black px-4 py-2">Country</th>
          <th className="border border-black px-4 py-2">Pincode</th>
          <th className="border border-black px-4 py-2">More Details</th></tr>
          
        </thead>
        <tbody>
            {postOffice.map((post,index)=>(
                <tr key={index}>
                <td className="border border-black px-4 py-2">{post.Name}</td>
                <td className="border border-black px-4 py-2">{post.Description||"N/A"}</td>
                <td className="border border-black px-4 py-2">{post.BranchType}</td>
                <td className="border border-black px-4 py-2">{post.DeliveryStatus}</td>
                <td className="border border-black px-4 py-2">{post.Circle}</td>
                <td className="border border-black px-4 py-2">{post.District}</td>
                <td className="border border-black px-4 py-2">{post.Division}</td>
                <td className="border border-black px-4 py-2">{post.Region}</td>
                <td className="border border-black px-4 py-2">{post.State}</td>
                <td className="border border-black px-4 py-2">{post.Country}</td>
                <td className="border border-black px-4 py-2">{post.Pincode}</td>
                <td className="border border-black px-4 py-2">
                   <InfoDialog Name={post.Name} Description={post.Description} BranchType={post.BranchType} DeliveryStatus={post.DeliveryStatus} Circle={post.Circle} District={post.District} Division={post.Division} 
                   Region={post.Region} State={post.State} Country={post.Country} Pincode={post.Pincode}/>
                </td>
            </tr>
            ))}


        </tbody>
      </table>)
      }
     
    </div>
  );
};

export default Day1;
