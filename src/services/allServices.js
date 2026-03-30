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
    return await commonAPI('GET',`${serverURL}/videos/${id}`,{});
}

// delete single video service
export const deleteSingleVideo = async(id)=> {
    // call delete http request to localhost:4000/videos/id to delete the details of a single video from the json server and it is being called from the videocard component and return response to it 
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{});
}

// add category 
export const addCategory = async(data) =>{
    // call post request to loclahost:4800/categories to add new category from the category component and return response to it 
    return await commonAPI('POST',`${serverURL}/categories`,data);
}

// fetch all categories
export const fetchAllCategories = async()=> {
    // call get request to localhost:4000/categories to get all the categories from the category component and return response to it
    return await commonAPI('GET',`${serverURL}/categories`,{});
}

// delete single category 
export const deleteSingleCategory = async(id)=>{
    // call delete request to localhost:4000/categories/id to delete a category from the category list from the category component and return response to it 
    return await commonAPI('DELETE', `${serverURL}/categories/${id}`,{});
}

// watch-history post api
export const postWatchHistory = async(videoData)=> {
    // call post request to localhost:4000/history to insert the watched video by clicking on the image inside the videocard    
    return await commonAPI('POST',`${serverURL}/history`,videoData);
}

// watch history details fetch api
export const fetchAllWatchHistory = async() =>{
    // call get request to localhost:4000/history to fetch all the watch history on watch history component loading time itself
    return await commonAPI('GET',`${serverURL}/history`,{})
}

// delete watch history api
export const deleteWatchHistory = async(id) => {
    // call delete request to localhost:4000/history/${id} to delete the watch history using the id
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{});
}

// update allvideos array in category api
export const updateCategory = async(categoryId,body)=> {
    return await commonAPI('PUT',`${serverURL}/categories/${categoryId}`,body)
}