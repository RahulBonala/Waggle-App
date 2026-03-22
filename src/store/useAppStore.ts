import { create } from 'zustand';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo?: string;
  hasPet: boolean;
  petName?: string;
}

export interface Pet {
  id: string;
  name: string;
  type: 'dog' | 'cat' | 'other';
  breed: string;
  age: string;
  weight: string;
  photo?: string;
  isVaccinated: boolean;
  notes?: string;
}

export interface Booking {
  id: string;
  sitterId: string;
  sitterName: string;
  service: string;
  date: string;
  time: string;
  status: 'Upcoming' | 'Active' | 'Completed' | 'Cancelled';
  price: number;
  petName: string;
  petPhoto?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

interface AppState {
  user: User | null;
  pets: Pet[];
  bookings: Booking[];
  notifications: Notification[];
  isAuthModalOpen: boolean;
  setUser: (user: User | null) => void;
  addPet: (pet: Pet) => void;
  setPets: (pets: Pet[]) => void;
  addBooking: (booking: Booking) => void;
  setBookings: (bookings: Booking[]) => void;
  setNotifications: (notifications: Notification[]) => void;
  setAuthModalOpen: (isOpen: boolean) => void;
  markNotificationAsRead: (id: string) => void;
  clearNotifications: () => void;
  logout: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  pets: [],
  bookings: [],
  notifications: [],
  isAuthModalOpen: false,
  setUser: (user) => set({ user }),
  addPet: (pet) => set((state) => ({ pets: [...state.pets, pet] })),
  setPets: (pets) => set({ pets }),
  addBooking: (booking) => set((state) => ({ bookings: [...state.bookings, booking] })),
  setBookings: (bookings) => set({ bookings }),
  setNotifications: (notifications) => set({ notifications }),
  setAuthModalOpen: (isOpen) => set({ isAuthModalOpen: isOpen }),
  markNotificationAsRead: (id) => set((state) => ({
    notifications: state.notifications.map((n) => 
      n.id === id ? { ...n, isRead: true } : n
    )
  })),
  clearNotifications: () => set({ notifications: [] }),
  logout: () => set({ user: null, pets: [], bookings: [], notifications: [] }),
}));
