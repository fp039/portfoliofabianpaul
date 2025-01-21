<template>
  <div class="calendar-embed">
    <button 
      v-if="!showCalendar" 
      @click="showCalendar = true"
      class="calendar-button"
    >
      Kalender öffnen
    </button>
    
    <div v-show="showCalendar" class="calendar-wrapper">
      <div class="cal-embed-container">
        <iframe
          v-if="showCalendar"
          :src="calendarUrl"
          loading="eager"
          frameborder="0"
          allowtransparency="true"
          data-cal-link="fabianpauldesign/30min"
          title="Terminbuchung mit Fabian Paul"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarBooking',
  data() {
    return {
      showCalendar: false,
      calendarUrl: 'https://cal.com/fabianpauldesign/30min?theme=dark&hideEventTypeDetails=false&layout=month_view&hiddenFields=title,location&hideNavigation=true&hideCalendarNotes=true&hideExternalCalendarLink=true&hideTimeZone=true&hideBookingTabButton=true'
    }
  }
}
</script>

<style scoped>
.calendar-embed {
  --cal-brand-color: #22c55e;
  width: 100%;
}

.calendar-button {
  width: 100%;
  padding: 1rem 2rem;
  background: transparent;
  color: #00FF00;
  border: 1px solid #00FF00;
  border-radius: 9999px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.calendar-button:hover {
  background: rgba(0, 255, 0, 0.1);
}

.calendar-wrapper {
  background: rgba(var(--background-secondary-rgb), 0.2);
  border-radius: 1rem;
  padding: 2rem 1rem;
  margin: 0 auto;
}

.cal-embed-container {
  width: 100%;
  height: 700px;
  border-radius: 0.75rem;
  background: transparent;
  overflow: hidden;
}

.cal-embed-container iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0.75rem;
}

/* Cal.com Custom Styles */
:deep(.cal-embed-container) {
  --cal-brand: #22c55e;
  --cal-brand-emphasis: #16a34a;
  --cal-brand-text: #ffffff;
  --cal-text: #ffffff;
  --cal-text-emphasis: #ffffff;
  --cal-text-muted: #9ca3af;
  --cal-text-default: #ffffff;
  --cal-bg: transparent;
  --cal-bg-emphasis: #333333;
  --cal-bg-subtle: #2A2A2A;
  --cal-bg-muted: #1a1a1a;
  --cal-bg-inverted: #ffffff;
  --cal-border-emphasis: #333333;
  --cal-border-default: #333333;
  --cal-border-subtle: #2A2A2A;
  --cal-border-booker: #333333;
  --cal-border-muted: #1a1a1a;
}

/* Responsive Anpassungen */
@media (max-width: 768px) {
  .calendar-wrapper {
    padding: 1rem;
  }

  .cal-embed-container {
    height: 600px;
  }
}
</style> 