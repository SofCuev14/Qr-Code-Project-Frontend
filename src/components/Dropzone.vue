<template>
  <div 
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
    :class="{'active-dropzone':active}"
    class="dropzone"
  >
    <span> Drag or drop file </span>
    <span> OR </span>
    <label for="dropzoneFile"> Select File </label>
    <input type="file" id="dropzoneFile" class="dropzoneFile"/>
  </div>
</template>

<script>
  import {ref} from "vue";
  export default{
    name: 'Dropzone',
    setup(){
      const active = ref(false);
      const toggleActive = () => {
        active.value = !active.value;
      };

      return {active, toggleActive}
    },  
  };
</script>

<style scoped lang="scss">
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.dropzone {
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  border: 2px dashed #000000;
  background-color: #FFFFFF;
  transition: 0.3s ease all;
}
.active-dropzone{
  color: #fff;
  border-color: #fff;
  background-color: #41b883;
  label{
    background-color: #fff;
    color:#41b883;
  }
}

</style>
