<template>
 <about/>
 <div class="img">
      <img alt="" src="../assets/snadicon.png" />
   </div>
<div class="main">
    <div class="menu">
        <ul>
            <li><a href="#">HOME</a></li>
             <router-link to="/About"><li><a href="#">ABOUT</a></li></router-link>
              <li><a href="#">SERVICES</a></li>
               <li><a href="#">CONTACT</a></li>
               <router-link to="/login"><li><a href="#">LOGIN</a></li></router-link>
        </ul>
    </div>
    <div class="content">
       <h5>SNAD DEVELOPERS </h5>
        <h1>// ABOUT COMPANY
            Your Partner for
            Software Innovation
            SNAD Developers is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.

            SNAD Developers analyze today’s Challenges and envision tomorrow’s Innovation. We believe in “Highly Satisfied Employees – Excellence in Training and Support</h1>
        <p>What u need is what u get</p>
        <p>But we are here to help you make informed strategic decisions</p>

        <button class="lg"><a href="#">Join US</a></button>
    </div>


</div>
   
<routerview/>
</template>




<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'About',
}

</script>
<style scoped>
.main{
    width:100%;
    font-family: sans-serif;
}
.menu{
    width:400px;
    float: right;
    height: 70px;
    margin-right: 20% ;
    margin-top: -8%;
     font-family: sans-serif;
}
ul{
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
     font-family: sans-serif;
}
ul li {
    list-style: none;
    margin-left: 62px;
    margin-top: 14px;
    font-size: 14px;
     font-family: sans-serif;

}
ul li a{
    text-decoration: none;
    color: #fff;
    font-family: sans-serif;;
    font-weight: bold;
    transition: 0.4s ease-in-out;

}
ul li a:hover{
    color: rgb(231, 129, 129);
}
.content{
    width: 500px;
    height: auto;
    margin: auto;
    color: #fff;
    position: relative;
    margin-left:20%;
     font-family: sans-serif;
}
.content .par{
    padding-left: 20px;
    padding-bottom: 25px;
    font-family: sans-serif;;
    letter-spacing: 1.2px;
    line-height: 30px;
}
.content h1{
    font-family: sans-serif;;
    font-size: 35px;
    padding-left: 20px;
    margin-top: 9%;
    letter-spacing: 2px;
}
.content .lg{
    width: 160px;
    height: 40px;
    background: rgb(231, 129, 129);
    border: none;
    margin-bottom: 10px;
    margin-left: 20px;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
    transition: .4s ease;
     font-family: sans-serif;
    
}

.content .lg a{
    text-decoration: none;
    color: #000;
    transition: .3s ease;
}

.lg:hover{
    background-color: #fff;
}

</style>