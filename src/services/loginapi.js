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
        //var sendDAta=data;
        if(data){
            
            return API('http://localhost:3000/').post('/login',data)
        }
        else{
            const userdetails=JSON.parse(localStorage.getItem('UserDetails')) ? JSON.parse(localStorage.getItem('UserDetails')) : "";
            data= {
                "password":userdetails.password ? userdetails.password : '',
                "email":userdetails.email ? userdetails.email : '',
                "entity":userdetails.entity ? userdetails.entity : ''
              }
              return  API('http://localhost:3000/').post('/login',data)
        }
       // return API('http://localhost:3000/').post('/login',data)
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

    fileUpload(data){
        return API('http://localhost:3000/').post('/fileupload',data)  
    },
    accessdata(){
        return API('http://localhost:3000/').get('/accessdata')
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
    payrollaccessdata(){
        return API('http://localhost:3000/').get('/payrollaccess')
    },
    employeeaccessdata(){
        return API('http://localhost:3000/').get('/employeeaccessdata')
    },
    managmentaccessdata(){
        return API('http://localhost:3000/').get('/managmentaccessdata')
    },
    expgetvalues(){
        return API('http://localhost:3000/').get('/expenses')
    },

    expdatapost(data){
        return API('http://localhost:3000/').post('/expenses',data)
    },
    operationalaccess(){
        return API('http://localhost:3000/').get('/operationalaccess')
    },
    newemp(data){
        return API('http://localhost:3000/').post('/empdata',data)
    },
    
}