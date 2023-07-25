<template>
    <div class="countdown">
        <div class="countdown-item">
            <div class="countdown-value">{{ days }}</div>
            <div class="countdown-label">Jours</div>
        </div>
        <div class="countdown-item">
            <div class="countdown-value">{{ hours }}</div>
            <div class="countdown-label">Heures</div>
        </div>
        <div class="countdown-item">
            <div class="countdown-value">{{ minutes }}</div>
            <div class="countdown-label">Minutes</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countdownDate: new Date('2024-04-10 00:00:00'), 
            days: 0,
            hours: 0,
            minutes: 0
        };
    },
    mounted() {
        this.startCountdown();
    },
    methods: {
        startCountdown() {
            setInterval(() => {
                const now = new Date().getTime();
                const distance = this.countdownDate.getTime() - now;

                this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            }, 1000);
        }
    }
};
</script>
 
<style scoped lang="scss">

.countdown {
  display: flex;
  gap: $m-4;
}

.countdown-value {
  font-size: $fs-huge;
  font-weight: bold;
}

.countdown-label {
  font-size: $fs-6;
}
</style>