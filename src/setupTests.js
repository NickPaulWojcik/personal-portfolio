import '@testing-library/jest-dom/vitest'

// jsdom does not implement matchMedia; Mantine's color-scheme detection needs it.
window.matchMedia =
  window.matchMedia ||
  function matchMedia() {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }
  }
