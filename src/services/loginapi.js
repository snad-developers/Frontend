import API from './API'
// const config = {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//     }
//   };
export default{
    getvalues(){
        return API('http://localhost:3000/').get('/reg')
    },
    getQuote(){
        return API('http://localhost:3000/').get('/reg')
    },
    createpost(data){
        return API('http://localhost:3000/').post('/reg',data)
    },
    loginservice(data){
        return API('http://localhost:3000/').post('/login',data)
    },
    forgotpassword(data){
        return API('http://localhost:3000/').post('/forgotpassword',data)
    },
    securityanscheck(data,id){
        var datareq='/securityanscheck/'+id
        return API('http://localhost:3000/').post(datareq,data)
    },
    resetpassword(data,id){
        var datareq='/resetpassword/'+id
        return API('http://localhost:3000/').post(datareq,data)
    },
    empgetvalues(){
        return API('http://localhost:3000/').get('/empdata')
    },
    dashboarddata(){
        return API('http://localhost:3000/').get('/dashboard') 
    },
    approvereq(data){
        return API('http://localhost:3000/').post('/approve',data)
    },

    updatereg(data, id) {
        var datareq='/reg/'+id
        return API('http://localhost:3000/').post(datareq,data)
    },
    orgndatagetvalues(){
        return API('http://localhost:3000/').get('/orgndata')
    },
    rolesgetvalues(){
        return API('http://localhost:3000/').get('/roles')
    },

    orgndatapost(data){
        return API('http://localhost:3000/').post('/orgndata',data)
    },
    rolespost(data){
        return API('http://localhost:3000/').post('/roles',data)
    },
}