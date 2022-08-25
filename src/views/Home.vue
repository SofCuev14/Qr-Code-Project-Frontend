<template>
  <div class="home">
    <span>
      <h1>Upload new Image</h1>
      <h3>Upload chosen certificate</h3>
    </span>
    
    <span>Local files</span>
    
    <div>
      <router-link to="/generator"><button>Proceed</button></router-link>
    </div>
    <router-view></router-view>
    
    <DropZone @drop.prevent="drop" @change="selectedFile"/>
    
    <span class="file-info"> File: {{dropzoneFile.name}}</span>
  </div>
</template>

<script>
import DropZone from "@/components/Dropzone.vue";
import {ref} from "vue";

export default{
  name:"Home",
  components:{
    DropZone,
  },
  setup(){
    let dropzoneFile = ref("");

    const drop = (event) =>{
      dropzoneFile.value = event.dataTransfer.files[0]
    };

    const selectedFile = () =>{
      dropzoneFile.value = document.querySelector('.dropzoneFile').files[0]
    };

    return {dropzoneFile,drop,selectedFile};
  },
};

</script>

<style scoped lang="scss">

.home{
  height: 100vh;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color: #f1f1f1;

  h1{
    font-size: 40px;
    margin-bottom:32px; 
  }

  file-info{
    margin-top: 32px;

  }

}

.wrap {
  height: 100vh;
  background-image: url("../assets/images/bldg.jpg");
  background-size: cover;
}
.container {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 5%;
}
.btns {
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-top: 150px;
}
.v-btn {
  background: #538530 !important;
  color: #ffffff !important;
  text-transform: none !important;
}
</style>
