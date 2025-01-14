<template>
  <div class="calendar-embed">
    <div class="bg-background-secondary/20 rounded-xl p-8">
      <div class="cal-embed-container">
        <cal-inline-widget 
          src="https://cal.com/fabianpaul/30min"
          style="min-width:320px;height:800px;border-radius:8px;"
        ></cal-inline-widget>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarBooking',
  mounted() {
    // Cal.com Inline Widget Script
    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            typeof namespace === "string"
              ? (cal.ns[namespace] = api) && p(api, ar)
              : p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");
    
    // Initialisiere Cal mit deinem Theme
    window?.Cal("init", {
      origin: "https://app.cal.com",
      theme: "dark",
      styles: {
        branding: {
          brandColor: "#22c55e"
        }
      }
    });

    // Lade das Widget neu, wenn es Fehler gibt
    window?.Cal("preload", {
      calLink: "fabianpaul/30min"
    });
  }
}
</script>

<style scoped>
.calendar-embed {
  --cal-brand-color: #22c55e;
}

.cal-embed-container {
  position: relative;
  min-height: 800px;
  border-radius: 0.5rem;
  overflow: hidden;
  background: #1a1a1a;
}

/* Cal.com Custom Styles */
:deep(.cal-embed-container) {
  --cal-brand-color: #22c55e;
  --cal-text-color: #ffffff;
  --cal-text-secondary-color: #9ca3af;
  --cal-background-color: #1a1a1a;
  --cal-border-color: #333333;
}
</style> 