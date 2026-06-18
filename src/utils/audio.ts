class SciFiAudioManager {
  private ctx: AudioContext | null = null;
  private muted: boolean = false;

  constructor() {
    // Read local storage config or default to muted to respect user browsers autoplay policy
    this.muted = localStorage.getItem('sfx_muted') !== 'false';
  }

  private initCtx() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  isMuted() {
    return this.muted;
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('sfx_muted', String(this.muted));
    return this.muted;
  }

  playClick() {
    if (this.muted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {
      console.warn("AudioContext block:", e);
    }
  }

  playHover() {
    if (this.muted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.03);

      gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.03);
    } catch (e) {
      console.warn("AudioContext block:", e);
    }
  }

  playKeyboard() {
    if (this.muted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = 'triangle';
      const freq = 600 + Math.random() * 400;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.008, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.02);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.02);
    } catch (e) {
      console.warn("AudioContext block:", e);
    }
  }

  playChime() {
    if (this.muted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const timeOffset = idx * 0.06;
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx!.currentTime + timeOffset);

        gain.gain.setValueAtTime(0.03, this.ctx!.currentTime + timeOffset);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx!.currentTime + timeOffset + 0.25);

        osc.start(this.ctx!.currentTime + timeOffset);
        osc.stop(this.ctx!.currentTime + timeOffset + 0.25);
      });
    } catch (e) {
      console.warn("AudioContext block:", e);
    }
  }
}

export const sfx = new SciFiAudioManager();
