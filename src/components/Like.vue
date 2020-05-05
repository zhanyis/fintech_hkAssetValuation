<template>
  <div class="large-container">
    <p>
      {{ $t("message.comment")
      }}<router-link to="/discuss">{{ $t("message.tucao") }}</router-link>
    </p>
    <div class="like-container">
      <div class="like">
        <div @click="addlike" :class="show ? 'enlarge' : ''">
          <i class="iconfont icon-biaoqing"></i>
        </div>
        <div>{{ likenum }}</div>
      </div>
      <div class="like">
        <div @click="addunlike" :class="show1 ? 'enlarge' : ''">
          <i class="iconfont icon-wentifankui"></i>
        </div>
        <div>{{ unlikenum }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likenum: 0,
      unlikenum: 0,
      show: false,
      show1: false,
      canRun: true
    };
  },
  mounted: function() {
    if (localStorage.like) {
      this.likenum = localStorage.getItem("like");
    } else {
      this.likenum = 666;
    }
    if (localStorage.unlike) {
      this.unlikenum = localStorage.getItem("unlike");
    } else {
      this.unlikenum = 250;
    }
  },
  methods: {
    addlike() {
      if (!this.canRun) return;
      this.canRun = false;
      this.likenum++;
      localStorage.setItem("like", this.likenum);
      this.show = !this.show;
      setTimeout(() => {
        this.show = !this.show;
        this.canRun = true;
      }, 1000);
    },
    addunlike() {
      if (!this.canRun) return;
      this.canRun = false;
      this.unlikenum++;
      localStorage.setItem("unlike", this.unlikenum);
      this.show1 = !this.show1;
      setTimeout(() => {
        this.show1 = !this.show1;
        this.canRun = true;
      }, 1000);
    }
  }
};
</script>

<style scoped>
.like-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 50%;
  margin: auto;
}

.large-container {
  padding-top: 15px;
}

p {
  font-size: 24px;
  font-style: italic;
  font-weight: 100;
}

.like {
  font-size: 24px;
  color: rgb(4, 44, 44);
}

.enlarge {
  animation: enlarge-in 1s;
  -webkit-animation: enlarge-in 1s;
}

.iconfont {
  font-size: 58px;
}

@keyframes enlarge-in {
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(0.9);
  }
  66% {
    transform: scale(1.1);
    color: red;
  }
  100% {
    transform: scale(1);
    color: rgb(4, 44, 44);
  }
}

@-webkit-keyframes enlarge {
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(0.9);
  }
  66% {
    transform: scale(1.1);
    color: red;
  }
  100% {
    transform: scale(1);
    color: rgb(4, 44, 44);
  }
}
</style>
