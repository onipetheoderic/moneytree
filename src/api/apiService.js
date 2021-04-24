import axios from 'axios';


export async function GetValues (type) {
  var data = JSON.stringify({
    "Request": {
      "Type": type
    }
  });
  
  var config = {
    method: 'post',
    url: 'https://mtwealthclub.com/api.php',
    headers: { 
      'ClientID': 'moneytree', 
      'ClientSecret': 'btHTWVNMUATHEnF2nQabKcKVo3VXtU', 
      'Content-Type': 'application/json'
    },
    data : data
  };
  try {
    let getMe = await axios(config)
    return getMe
  }
  catch(error){
      return error
  }
  

  
}
