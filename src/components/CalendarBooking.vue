<template>
  <div class="calendar-embed">
    <div class="calendar-wrapper">
      <div class="cal-embed-container">
        <iframe
          src="https://cal.com/fabianpauldesign/30min?theme=dark&hideEventTypeDetails=false&layout=month_view&hiddenFields=title,location&hideNavigation=true&hideCalendarNotes=true&hideExternalCalendarLink=true&hideTimeZone=true&hideBookingTabButton=true"
          loading="lazy"
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
  name: 'CalendarBooking'
}
</script>

<style scoped>
.calendar-embed {
  --cal-brand-color: #22c55e;
  width: 100%;
}

.calendar-wrapper {
  background: rgba(var(--background-secondary-rgb), 0.2);
  border-radius: 1rem;
  padding-top: 2rem;
  margin: 0 auto;
}

.cal-embed-container {
  position: relative;
  width: 100%;
  height: 800px;
  border-radius: 0.75rem;
  overflow: hidden;
  background: transparent;
}

.cal-embed-container iframe {
  position: absolute;
  top: 0;
  left: 0;
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