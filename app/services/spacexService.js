// app/services/spacexService.js
export const getLaunches = async (params) => {
   const baseUrl = 'https://api.spacexdata.com/v3/launches';
   const queryString = new URLSearchParams(params).toString();
   const url = `${baseUrl}?${queryString}`;
 
   try {
     const response = await fetch(url);
     if (!response.ok) {
       throw new Error('Failed to fetch data');
     }
     return await response.json();
   } catch (error) {
     console.error('Error fetching launches:', error);
     throw error;
   }
 };
 