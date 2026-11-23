export class SpeechService {
  private static synth: SpeechSynthesis | null = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private static cachedVoice: SpeechSynthesisVoice | null = null;

  private static getVoice(): SpeechSynthesisVoice | null {
    if (!this.synth) return null;
    if (this.cachedVoice) return this.cachedVoice;

    const voices = this.synth.getVoices();
    if (!voices || voices.length === 0) return null;

    // Prefer high-quality US or UK English voices
    const preferredVoices = [
      'Google US English',
      'Samantha',
      'Daniel',
      'Microsoft Zira',
      'Microsoft David',
      'Alex',
      'Victoria',
    ];

    for (const name of preferredVoices) {
      const match = voices.find((v) => v.name.includes(name) && v.lang.startsWith('en'));
      if (match) {
        this.cachedVoice = match;
        return match;
      }
    }

    // Fallback: any en-US or en voice
    const enVoice = voices.find((v) => v.lang === 'en-US') || voices.find((v) => v.lang.startsWith('en'));
    this.cachedVoice = enVoice || null;
    return this.cachedVoice;
  }

  static speak(
    text: string,
    onStart?: () => void,
    onEnd?: () => void,
    onError?: (error: any) => void
  ): void {
    if (!this.synth) {
      console.warn('Speech synthesis not supported on this browser.');
      onEnd?.();
      return;
    }

    try {
      // Cancel any ongoing speech
      this.synth.cancel();

      const cleanText = text.replace(/\[.*?\]/g, '').trim();
      if (!cleanText) {
        onEnd?.();
        return;
      }

      const utterance = new SpeechSynthesisUtterance(cleanText);
      const voice = this.getVoice();
      if (voice) {
        utterance.voice = voice;
      }
      utterance.lang = 'en-US';
      utterance.rate = 0.88; // Slightly slower for crisp vocabulary learning
      utterance.pitch = 1.0;

      utterance.onstart = () => onStart?.();
      utterance.onend = () => onEnd?.();
      utterance.onerror = (e) => {
        console.warn('Speech error:', e);
        onError?.(e);
        onEnd?.();
      };

      this.synth.speak(utterance);
    } catch (err) {
      console.warn('Speech synthesis exception:', err);
      onError?.(err);
      onEnd?.();
    }
  }

  static stop(): void {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  static isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }
}

// Pre-load voices on browser start
if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    // triggers cache update
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      // voice list ready
    }
  };
}
