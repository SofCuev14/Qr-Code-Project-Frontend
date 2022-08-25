<template>
  <div class="filePage">
    <span></span>
    <span>Payruler</span>
    <h3>QR Code Generator</h3>
    <span>
    Note:
    Click the generate button to produce random QR code
    <span>Generate</span>
    <GeneratorBox/>
    <button>Generate</button>
    </span>
    
    //<span class="file-info"> File: {{dropzoneFile.name}}</span>
  </div>
</template>

<script>
import GeneratorBox from "@/components/GeneratorBox.vue";
import {ref} from "vue";

export default{
  name:"QRGeneration",
  components:{
    GeneratorBox,
  },
  setup(){
    
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
