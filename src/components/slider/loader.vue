<template >
  <div>
      <div class="loader">
  <div class="loader__element"></div>
</div>
  </div>
</template>
<script>
export default {
  name:"loader"
}
</script>
<style scoped>


  :root {
  --main-color: #111;
  --loader-color: #4CAF50;
  --back-color: #A5D6A7;
  --time: 3s;
  --size: 3px;
}

.loader {
	background-color: var(--main-color);
	overflow: hidden;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0; left: 0;
  display: flex;
  align-items: center;
  align-content: center; 
  justify-content: flex-start;  
	z-index: 100000;
}

.loader__element {
	height: var(--size);
	width: 100%;
	background: var(--back-color);

}

.loader__element:before {
	content: '';
	display: block;
	background-color: var(--loader-color);
	height: var(--size);
	width: 0;
  animation: getWidth var(--time) ease-in infinite;
}

@keyframes getWidth {
	100% { width: 100%; }
}
</style>