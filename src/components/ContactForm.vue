<template>
  <form @submit.prevent="handleSubmit" class="space-y-16">
    <div class="space-y-12">
      <!-- Name & Email -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="relative group">
          <input 
            type="text" 
            id="name" 
            v-model="formData.name"
            required
            class="peer w-full bg-transparent border-b border-text-secondary/30 py-2 focus:border-accent focus:outline-none transition-colors text-text-primary placeholder-transparent"
            placeholder="Name"
          />
          <label 
            for="name" 
            class="absolute left-0 -top-6 text-fluid-sm text-text-secondary transition-all 
            peer-placeholder-shown:text-base peer-placeholder-shown:text-text-secondary/60 peer-placeholder-shown:top-2 
            peer-focus:-top-6 peer-focus:text-fluid-sm peer-focus:text-accent"
          >
            Name
          </label>
        </div>
        <div class="relative group">
          <input 
            type="email" 
            id="email" 
            v-model="formData.email"
            required
            class="peer w-full bg-transparent border-b border-text-secondary/30 py-2 focus:border-accent focus:outline-none transition-colors text-text-primary placeholder-transparent"
            placeholder="E-Mail"
          />
          <label 
            for="email" 
            class="absolute left-0 -top-6 text-fluid-sm text-text-secondary transition-all 
            peer-placeholder-shown:text-base peer-placeholder-shown:text-text-secondary/60 peer-placeholder-shown:top-2 
            peer-focus:-top-6 peer-focus:text-fluid-sm peer-focus:text-accent"
          >
            E-Mail
          </label>
        </div>
      </div>

      <!-- Subject -->
      <div class="relative group">
        <input 
          type="text" 
          id="subject" 
          v-model="formData.subject"
          required
          class="peer w-full bg-transparent border-b border-text-secondary/30 py-2 focus:border-accent focus:outline-none transition-colors text-text-primary placeholder-transparent"
          placeholder="Betreff"
        />
        <label 
          for="subject" 
          class="absolute left-0 -top-6 text-fluid-sm text-text-secondary transition-all 
          peer-placeholder-shown:text-base peer-placeholder-shown:text-text-secondary/60 peer-placeholder-shown:top-2 
          peer-focus:-top-6 peer-focus:text-fluid-sm peer-focus:text-accent"
        >
          Betreff
        </label>
      </div>

      <!-- Message -->
      <div class="relative group">
        <textarea 
          id="message" 
          v-model="formData.message"
          required
          rows="4"
          class="peer w-full bg-transparent border-b border-text-secondary/30 py-2 focus:border-accent focus:outline-none transition-colors text-text-primary placeholder-transparent resize-none"
          placeholder="Nachricht"
        ></textarea>
        <label 
          for="message" 
          class="absolute left-0 -top-6 text-fluid-sm text-text-secondary transition-all 
          peer-placeholder-shown:text-base peer-placeholder-shown:text-text-secondary/60 peer-placeholder-shown:top-2 
          peer-focus:-top-6 peer-focus:text-fluid-sm peer-focus:text-accent"
        >
          Nachricht
        </label>
      </div>
    </div>

    <button 
      type="submit"
      class="button-hover-effect relative flex items-center justify-center px-[clamp(20px,3vw,35.833px)] py-[clamp(8px,1.5vw,11.944px)] rounded-[35.833px] bg-[#0F0] text-[#1D1D1B] hover:scale-105 transition-all hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] overflow-hidden"
      style="font-size: clamp(1rem, 1.5vw, 1.194rem); font-weight: 500; line-height: 1;"
      :disabled="isSubmitting"
    >
      <span class="relative z-10 flex items-center">
        <span v-if="isSubmitting" class="animate-spin h-5 w-5 mr-2">
          <svg viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
        {{ isSubmitting ? 'Wird gesendet...' : 'Nachricht senden' }}
      </span>
      <div class="absolute inset-0 bg-[#0F0] transform -translate-x-full transition-transform duration-300 ease-out hover-line"></div>
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false
    }
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true;
      
      try {
        // Hier kommt später die E-Mail-Versand-Logik
        console.log('Form submitted:', this.formData);
        
        // Formular zurücksetzen
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        
        // Erfolgsmeldung
        alert('Danke für deine Nachricht! Ich melde mich schnellstmöglich bei dir.');
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Es gab leider einen Fehler beim Senden. Bitte versuche es später noch einmal.');
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script> 