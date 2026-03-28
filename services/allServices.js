import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"


// uploading video service
export const uploadVideo = async (videoData) =>{
    // call post http request to localhost:4000/videos to add video in json server
    // return response to add component

    return await commonAPI('POST', `${serverURL}/videos`,videoData);
}

// get all videos details service
export const getAllVideos = async () =>{
    // call get http request to localhost:4000/videos to get all the videos stored in the json server
    // return response to view component
    return await commonAPI('GET',`${serverURL}/videos`,'');
}

// get single video details service
export const getSingleVideo = async (id)=>{
    // call get http request to localhost:4000/videos/id to get the details of that single video in the json server from video card component
    // return response to video card
    return await commonAPI('GET',`${serverURL}/videos/${id}`,'');
}

// delete single video service
export const deleteSingleVideo = async(id)=> {
    // call delete http request to localhost:4000/videos/id to delete the details of a single video from the json server and it is being called from the videocard component and return response to it 
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,'');
}
