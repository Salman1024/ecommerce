import React, { useEffect, useState } from 'react'

const useFetch = (endpoint) => {
    const [loading,setLoading]=useState(null);
    const [data,setData]=useState(null);
    console.log(data);
    const [error,setError]=useState(null);

    useEffect(()=>{
        setLoading('Loading Data....');
        setData(null);
        setError(null);

        const fetchData= async()=>{
            try{
                const response=await fetch(`https://fakestoreapi.com/${endpoint}`)
                const resultData=await response.json();
                
                setData(resultData);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        };
        fetchData();
    },[endpoint])
  return {data,loading,error}
}

export default useFetch