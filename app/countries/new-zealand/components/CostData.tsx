// app/countries/new-zealand/components/costs-data.ts
export const CITIES = {
    'Auckland': {
      sharedRent: [800, 1200] as [number, number],
      studioRent: [1300, 2000] as [number, number],
      expenses: [600, 900] as [number, number]
    },
    'Wellington': {
      sharedRent: [700, 1000] as [number, number],
      studioRent: [1100, 1600] as [number, number],
      expenses: [550, 800] as [number, number]
    },
    'Christchurch': {
      sharedRent: [600, 900] as [number, number],
      studioRent: [900, 1400] as [number, number],
      expenses: [500, 750] as [number, number]
    },
    'Dunedin': {
      sharedRent: [550, 800] as [number, number],
      studioRent: [800, 1200] as [number, number],
      expenses: [450, 650] as [number, number]
    }
  };
  
  export const PROGRAMS = {
    undergraduate: {
      'Business Management': { duration: 3, cost: [27000, 35000] },
      'Finance': { duration: 3, cost: [26000, 34000] },
      'Accounting': { duration: 3, cost: [25000, 33000] },
      'Data Science': { duration: 3, cost: [28000, 37000] },
      'Artificial Intelligence': { duration: 4, cost: [29000, 38000] },
      'Computer Science': { duration: 3, cost: [27000, 36000] },
      'Law': { duration: 4, cost: [26000, 34000] },
      'Medical (MBChB)': { duration: 6, cost: [35000, 48000] },
      'Nursing': { duration: 3, cost: [24000, 32000] },
      'Engineering': { duration: 4, cost: [30000, 40000] }
    },
    postgraduate: {
      'MBA': { duration: 2, cost: [45000, 65000] },
      'Finance': { duration: 1.5, cost: [38000, 52000] },
      'Fintech': { duration: 1.5, cost: [42000, 58000] },
      'Professional Accounting': { duration: 2, cost: [36000, 48000] },
      'Artificial Intelligence': { duration: 2, cost: [44000, 60000] },
      'Law (LLM)': { duration: 1, cost: [40000, 55000] },
      'Computer Science': { duration: 2, cost: [42000, 58000] },
      'Food Technology': { duration: 1.5, cost: [38000, 50000] },
      'Wine Science': { duration: 2, cost: [35000, 48000] }
    }
  };