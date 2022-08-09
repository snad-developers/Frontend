<template>
  <!-- <nav>
    <router-link to="/services">Services</router-link>
    <router-link to="/portfolio">Portfolio</router-link>
    <router-link to="/bio">Bio</router-link>
    <router-link to="/contacts">Contacts</router-link>
  </nav> -->
   <div class="maincontainer">
 <div class="sidebar">
    <div class="img">
      <img alt="" src="@/assets/snadicon.png" />
   </div>
 <a href="/launchpage" style="margin-left:-24px"><i class="fa fa-fw fa-home"></i> Dashboard</a>
  <a href="/Ldbpage" style="margin-left:-30px" ><i class="fa fa-fw fa-wrench" ></i> Load Data</a>
  <a href="/amdpage" style="margin-left:3px" ><i class="fa fa-fw fa-user"></i>Amend Details</a>
  <a href="" style="margin-left:16px"><i class="fa fa-fw fa-envelope"></i>Reporting portal</a><br><br>
   <a href="" @click.prevent="logout"><i class="uil uil-sign-in-alt"></i>Logout</a>

</div>
     
    </div>
    <!-- <div class="welcomediv">
 
    </div> -->
</template>

<script>
export default {
  name: 'side-menu',
       data:function(){
  return {
     logid:null
  }
       },
        created(){
      console.log("created");
      
    },
       methods: {
           logout(){
localStorage.removeItem('UserDetails')
localStorage.removeItem('currentUser')
  this.$router.push({name:"login"});
  }
       }
}
</script>

<style scoped>

.sidebar {
  height: 150%;
  width: 255px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color:white;
  overflow-x: hidden;
  padding-top: 16px;
}

.sidebar a {
    /* margin-top: 100px; */
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
  margin: 26px;
}

.sidebar a:hover {
  color: black;
  box-sizing:border-box;
}

.img{
  margin-left: 2px;
}

</style>