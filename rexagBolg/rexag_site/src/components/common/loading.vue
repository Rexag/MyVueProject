<template>
  <div class="loading">
    <div class="demoItem animation1">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
    </div>
    <div class="demoItem animation2">
      <div class="con">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.demoItem {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 150px auto;
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.animation1 .shape {
  display: inline-block;
  margin: 0 5px;
  width: 10px;
  height: 10px;
  opacity: 0.5;
}

.animation1 .shape-1 {
  background-color: #1875e5;
  animation: AnimationShape1 1.5s ease infinite;
}

.animation1 .shape-2 {
  background-color: #c5523f;
  animation: AnimationShape1 1.5s ease infinite 0.5s;
}

.animation1 .shape-3 {
  background-color: #499255;
  animation: AnimationShape1 1.5s ease infinite 0.8s;
}

.animation1 .shape-4 {
  background-color: #f2b736;
  animation: AnimationShape1 1.5s ease infinite 1s;
}

@keyframes AnimationShape1 {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    transfrom: scale(0.5);
    opacity: 0.5;
  }
}

/* animation2 */
.animation2 .con {
  width: 30px;
  height: 30px;
  position: relative;
}
.animation2 .shape {
  position: absolute;
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 50%;
  top: 40%;
}

.animation2 .shape-1 {
  background-color: #1875e5;
  animation: AnimationShape2 1s ease infinite;
}

.animation2 .shape-2 {
  left: 10px;
  background-color: #c5523f;
}

.animation2 .shape-3 {
  left: 20px;
  background-color: #499255;
}

.animation2 .shape-4 {
  background-color: #f2b736;
  left: 30px;
  animation: AnimationShape3 1s ease infinite;
}
@keyframes AnimationShape2 {
  0% {
    left: -15px;
    top: 5px;
  }
  25% {
    left: 0;
    top: 40%;
  }
  50% {
    left: 0;
    top: 40%;
  }
  75% {
    left: 0;
    top: 40%;
  }
  100% {
    left: -15px;
    top: 5px;
  }
}

@keyframes AnimationShape3 {
  0% {
    left: 30px;
    top: 40%;
  }
  25% {
    left: 30px;
    top: 40%;
  }
  50% {
    left: 45px;
    top: 5px;
  }
  75% {
    left: 30px;
    top: 40%;
  }
  100% {
    left: 30px;
    top: 40%;
  }
}
</style>
