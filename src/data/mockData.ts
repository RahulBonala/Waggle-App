import { Dog, Calendar, Scissors, Stethoscope } from 'lucide-react';

export const mockSitters = [
  {
    id: '1',
    name: 'Priya Sharma',
    rating: 4.9,
    reviews: 124,
    price: 499,
    location: 'Koramangala, Bangalore',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    bio: 'Avid dog lover with 5+ years of experience in pet sitting and walking. I have a medium-sized yard and plenty of toys!',
    services: ['Dog Walking', 'Pet Sitting'],
    isVerified: true,
    distance: '1.2 km',
    walksThisMonth: 45,
    languages: ['English', 'Hindi', 'Kannada'],
    responseTime: 'within 2 hours'
  },
  {
    id: '2',
    name: 'Rahul Verma',
    rating: 4.8,
    reviews: 89,
    price: 399,
    location: 'Indiranagar, Bangalore',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
    bio: 'Professional pet groomer and walker. I love spending time with all kinds of pets.',
    services: ['Dog Walking', 'Grooming'],
    isVerified: true,
    distance: '2.5 km',
    walksThisMonth: 32,
    languages: ['English', 'Hindi'],
    responseTime: 'within 1 hour'
  },
  {
    id: '3',
    name: 'Sneha Kapur',
    rating: 5.0,
    reviews: 56,
    price: 599,
    location: 'HSR Layout, Bangalore',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    bio: 'Certified pet sitter. I provide a safe and loving home environment for your furry friends.',
    services: ['Pet Sitting', 'Vet Consultation'],
    isVerified: true,
    distance: '0.8 km',
    walksThisMonth: 28,
    languages: ['English', 'Hindi', 'Punjabi'],
    responseTime: 'within 30 mins'
  }
];

export const mockPets = [
  {
    id: '1',
    name: 'Bruno',
    type: 'dog',
    breed: 'Golden Retriever',
    age: '3 years',
    weight: '25 kg',
    photo: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=400',
    isVaccinated: true,
    notes: 'Very friendly, loves fetching balls.'
  }
];

export const mockBookings = [
  {
    id: 'WGL-2024-001',
    sitterName: 'Priya Sharma',
    service: 'Dog Walking',
    date: 'June 15, 2024',
    time: '10:00 AM',
    status: 'Upcoming',
    price: 499,
    petName: 'Bruno'
  }
];

export const mockNotifications = [
  {
    id: '1',
    title: 'Booking Confirmed',
    message: 'Your booking with Priya Sharma has been confirmed.',
    time: '2 hours ago',
    isRead: false
  },
  {
    id: '2',
    title: 'Walk Started',
    message: 'Rahul has started the walk with Bruno.',
    time: 'Yesterday',
    isRead: true
  }
];

export const CITIES = [
  'Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Pune', 'Chennai', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Chandigarh', 'Kochi', 'Goa'
];

export const SERVICES = [
  { name: 'Dog Walking', icon: Dog, price: '₹199', color: '#FF6B35' },
  { name: 'Pet Sitting', icon: Calendar, price: '₹499', color: '#1A4D8C' },
  { name: 'Grooming', icon: Scissors, price: '₹799', color: '#10B981' },
  { name: 'Vet Visit', icon: Stethoscope, price: '₹999', color: '#F59E0B' }
];

export const REVIEWS = [
  {
    id: '1',
    user: 'Amit Singh',
    photo: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100',
    rating: 5,
    comment: 'Priya is amazing! Bruno loved his time with her. Highly recommended.',
    location: 'Bangalore',
    date: '2 days ago',
    pet: 'Bruno',
    breed: 'Golden Retriever'
  },
  {
    id: '2',
    user: 'Megha Rao',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    rating: 5,
    comment: 'Very professional service. The live tracking feature is a game changer.',
    location: 'Mumbai',
    date: '1 week ago',
    pet: 'Luna',
    breed: 'Indie'
  },
  {
    id: '3',
    user: 'Arjun Kapoor',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
    rating: 5,
    comment: 'Found a great sitter within minutes. Best app for pet parents in India.',
    location: 'Delhi',
    date: '3 days ago',
    pet: 'Simba',
    breed: 'Persian Cat'
  }
];

