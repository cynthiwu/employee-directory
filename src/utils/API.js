import axios from "axios";

// Export an object with a "search" method that searches the Random User API for 50 random people. 
export default {
  search: function() {
    return axios.get(`https://randomuser.me/api/?results=5`);
  }
};