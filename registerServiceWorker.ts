import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onRegistered(r) {
    console.log('Service worker registered:', r);
  },
  onRegisterError(error) {
    console.error('Service worker registration error:', error);
  }
});

export default updateSW;
