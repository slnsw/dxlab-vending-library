import axios from 'axios';

const token = 'eyJraWQiOiJwcmltb0V4cGxvcmVQcml2YXRlS2V5LTYxU0xOU1ciLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJQcmltbyIsImp0aSI6IiIsImV4cCI6MTUwMzU0OTA5MCwiaWF0IjoxNTAzNDYyNjkwLCJ1c2VyIjoiYW5vbnltb3VzLTA4MjNfMDQzMTMwIiwidXNlck5hbWUiOm51bGwsInVzZXJHcm91cCI6IkdVRVNUIiwiYm9yR3JvdXBJZCI6bnVsbCwidWJpZCI6bnVsbCwiaW5zdGl0dXRpb24iOiI2MVNMTlNXIiwidmlld0luc3RpdHV0aW9uQ29kZSI6IjYxU0xOU1ciLCJpcCI6IjIwMi4wLjEwNi4xMzAiLCJvbkNhbXB1cyI6InRydWUiLCJsYW5ndWFnZSI6ImVuX1VTIiwiYXV0aGVudGljYXRpb25Qcm9maWxlIjoiIiwidmlld0lkIjoiU0xOU1ciLCJpbHNBcGlJZCI6bnVsbH0.uI4YZDHxbka-3cSpCRAX0zuCGkc-6prqRg0XZsM9LtxTZIq2U5u3K9xCvFc6Uko4FcGi0Xytp0hAmFppkUXWnA';

export default class Primo {

  constructor() {
    // Initialise Axios fetch library
    this.fetch = axios.create();
    this.fetch.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    this.fetch.defaults.headers.get['Content-Type'] = 'application/json';
  }

  search = async (q, limit = 10, offset = 0) => {
    try {
      const result = await this.fetch.get(`https://primo-slnsw.hosted.exlibrisgroup.com/primo_library/libweb/webservices/rest/primo-explore/v1/pnxs?addfields=vertitle,title,collection,creator,contributor,lds04,lds27,creationdate,lds03,lds28,lds20,lds05,lds02,description,lds06,lds01,lds44,lds25,lds43,lds24,lds18,lds19,lds08,lds23,lds09,lds21,lds39,lds22,lds11,lds12,default.fulldisplay.lds52,lds54,lds56,lds14,lds55,lds57,lds53,lds51,lds45,lds30,ispartof,relation,lds31,lds32,publisher,lds16,format,subject,identifier,language,lds10,citation,lds07,crsinfo,lds15,lds17,lds50,lds49,lds46,lds48,lds26,lds29,lds40,lds41,source,lds13&getMore=0&inst=61SLNSW&lang=en_US&limit=${limit}&offset=${offset}&pcAvailability=true&q=any,contains,${q}&qExclude=&qInclude=&rtaLinks=true&scope=EEA&sort=rank&tab=default_tab&vid=SLNSW`);
      const { data } = result;
      const docs = data.docs;

      return docs.map((doc, i) => {
        const { addata } = doc.pnx;

        // console.log(i);
        // console.log(doc.pnx);
        //
        if (addata) {
          // Addata only exists for Alma (I think)
          const { btitle, date, format, ristype, au } = addata;

          return {
            id: null,
            title: btitle && btitle[0] ? btitle[0] : null,
            date: date && date[0],
            format: format && format[0],
            type: ristype && ristype[0],
            // firstName: aufirst && aufirst[0],
            // lastName: aulast[0],
            name: au && au[0] ? au[0] : null,
          }
        }
      });
    } catch(e) {
      console.log(e);
    }
  }
}
