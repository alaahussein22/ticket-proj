import axios from "axios";

export class trainTicketService {

  static serverURL = "http://localhost:3000/data";


   // get all
   static getAllTicketData() {

    let dataURL = `${this.serverURL}`;
    return axios.get(dataURL);
  }

  }
