<template>
  <div>   <Header />
  <div class="container mt-5">
    <h2>Work page</h2>
    <div class="row">
      <div class="col-md-6">
        <h3>Timer</h3>
        <div id="timer-display" class="mb-3">00:00:00</div>
        <button v-on:click="startTimer" class="btn btn-success mr-1">Start</button>
        <button v-on:click="pauseTimer" class="btn btn-warning mr-1">Pause</button>
        <button v-on:click="resumeTimer" class="btn btn-info mr-1">Continue</button>
        <button v-on:click="stopTimer" class="btn btn-danger">Stop</button>
      </div>
      <div class="col-md-6">
        <h3>Session history</h3>
        <ul class="list-group session-history">
          <li v-for="session in sessionHistory" :key="session.id" class="ist-group-item ">
            {{ session.duration }} - {{ session.date }}
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: 'Work',
  components: {Header},
  data() {
    return {
      sessionHistory: [],
      currentTime: '00:00:00',
      intervalId: null
    }
  },
  methods: {
    startTimer() {
      let totalSeconds = 0;
      this.intervalId = setInterval(() => {
        totalSeconds++;
        this.currentTime = this.formatTime(totalSeconds);
      }, 1000);
    },

    formatTime(seconds) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;

      return [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        remainingSeconds.toString().padStart(2, '0'),
      ].join(':');
    },
    pauseTimer() {
      clearInterval(this.intervalId);
    },
    resumeTimer() {
      this.startTimer();
    },
    stopTimer() {
      clearInterval(this.intervalId);
      this.sessionHistory.push({
        id: Math.random(),
        duration: this.currentTime,
        date: new Date().toLocaleDateString()
      });
      this.currentTime = '00:00:00';
    }
  }
}
</script>

<style scoped>


#timer-display {
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 5px;
  margin-bottom: 20px;
}

.btn {
  margin-right: 10px;
}

.session-history {
  max-height: 300px;
  overflow-y: auto;
  border-radius: 5px;
  padding: 10px;
}

</style>