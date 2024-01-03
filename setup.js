global.window ??= Object.create(window);
Object.defineProperty(window, 'location', {
  value: {
    ...window.location,
    assign: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    toString: jest.fn(),
  },
  writable: true,
});

window.matchMedia = jest.fn().mockImplementation(() => ({
  matches: false,
  addListener: jest.fn(), // Deprecated
  removeListener: jest.fn(), // Deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

window.scroll = jest.fn();

const mockGetItem = jest.fn();
const mockSetItem = jest.fn();
const mockRemoveItem = jest.fn();

window.localStorage = jest.fn().mockImplementation(() => ({
  getItem: (...args) => mockGetItem(...args),
  setItem: (...args) => mockSetItem(...args),
  removeItem: (...args) => mockRemoveItem(...args),
}));
