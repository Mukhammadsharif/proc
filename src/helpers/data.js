export const routes = [
  {
    image: require('../assets/cycling/cycling_1.png'),
    name: 'Green Valley Trail',
    description:
      'This trail takes you through beautiful green landscapes with moderate climbs.',
    route: 'Green Valley Rd, Oakridge',
    difficulty: 'Medium',
    distance: 10,
    checkpointsCount: 6,
    checkpoints: [
      {
        name: 'Main Entrance, 102 Green Valley Rd',
        location: '49.1234° N, 123.4567° W',
        time: 600,
      },
      {
        name: 'Near Pine Ridge Outlook',
        location: '49.1250° N, 123.4582° W',
        time: 600,
      },
      {
        name: '145 Green Valley Rd',
        location: '49.1268° N, 123.4595° W',
        time: 600,
      },
      {
        name: '160 Green Valley Rd',
        location: '49.1275° N, 123.4610° W',
        time: 600,
      },
      {
        name: 'Trailhead at Rocky Hill',
        location: '49.1290° N, 123.4622° W',
        time: 600,
      },
      {
        name: 'North Lake Access',
        location: '49.1310° N, 123.4662° W',
        time: 600,
      },
    ],
  },
  {
    image: require('../assets/cycling/cycling_2.png'),
    name: 'Blue Mountain Ridge',
    description:
      'A challenging trail offering spectacular summit views. Ideal for experienced hikers seeking a tough but rewarding journey.',
    route: 'Blue Mountain Rd, Pine Valley',
    difficulty: 'Hard',
    distance: 15,
    checkpointsCount: 6,
    checkpoints: [
      {
        name: 'Trailhead at Blue Mountain Lodge',
        location: '48.9021° N, 122.4857° W',
        time: 600,
      },
      {
        name: 'Whispering Pines Viewpoint',
        location: '48.9105° N, 122.4921° W',
        time: 900,
      },
      {
        name: 'Summit Ridge Camp',
        location: '48.9158° N, 122.4989° W',
        time: 1200,
      },
      {
        name: 'Sunset Rock Point',
        location: '48.9200° N, 122.5032° W',
        time: 900,
      },
      {
        name: 'Blue Lake Overlook',
        location: '48.9255° N, 122.5108° W',
        time: 600,
      },
      {name: 'Summit Finish', location: '48.9300° N, 122.5150° W', time: 800},
    ],
  },
  {
    image: require('../assets/cycling/cycling_3.png'),
    name: 'Redwood Forest Loop',
    description:
      'A serene loop trail through towering redwoods. Perfect for families and casual hikers looking for a relaxing day out.',
    route: 'Redwood Rd, Forest Haven',
    difficulty: 'Easy',
    distance: 5,
    checkpointsCount: 6,
    checkpoints: [
      {name: 'Forest Entrance', location: '47.4567° N, 120.7890° W', time: 300},
      {
        name: 'Tall Trees Picnic Area',
        location: '47.4600° N, 120.7915° W',
        time: 600,
      },
      {name: 'Grove of Giants', location: '47.4625° N, 120.7933° W', time: 600},
      {
        name: 'Wildflower Meadow',
        location: '47.4640° N, 120.7945° W',
        time: 500,
      },
      {
        name: 'Bird Watching Spot',
        location: '47.4655° N, 120.7960° W',
        time: 400,
      },
      {name: 'Forest Exit', location: '47.4660° N, 120.7975° W', time: 300},
    ],
  },
  {
    image: require('../assets/cycling/cycling_4.png'),
    name: 'Canyon Edge Trail',
    description:
      'A medium-difficulty trail along the canyon edge with stunning valley views and varied rocky terrain.',
    route: 'Canyon Rd, Eagle Nest',
    difficulty: 'Medium',
    distance: 8,
    checkpointsCount: 6,
    checkpoints: [
      {
        name: 'Canyon Base Entrance',
        location: '46.7891° N, 121.6782° W',
        time: 600,
      },
      {name: 'Eagle’s Perch', location: '46.7910° N, 121.6810° W', time: 900},
      {
        name: 'Rocky Bluff Lookout',
        location: '46.7933° N, 121.6850° W',
        time: 600,
      },
      {
        name: 'Deep Gorge Bridge',
        location: '46.7950° N, 121.6885° W',
        time: 600,
      },
      {
        name: 'Sunset Viewpoint',
        location: '46.7970° N, 121.6900° W',
        time: 700,
      },
      {name: 'Trail Finish', location: '46.7985° N, 121.6920° W', time: 500},
    ],
  },
  {
    image: require('../assets/cycling/cycling_5.png'),
    name: 'Crystal Lake Path',
    description:
      'An easy lakeside walk with views of clear waters and surrounding snow-capped mountains. Great for all ages.',
    route: 'Crystal Lake Rd, Snowy Pines',
    difficulty: 'Easy',
    distance: 3,
    checkpointsCount: 6,
    checkpoints: [
      {
        name: 'Crystal Lake Entrance',
        location: '45.1234° N, 119.4567° W',
        time: 300,
      },
      {
        name: 'Lakeside Viewpoint',
        location: '45.1250° N, 119.4590° W',
        time: 600,
      },
      {name: 'Picnic Area', location: '45.1270° N, 119.4615° W', time: 300},
      {name: 'Fishing Spot', location: '45.1290° N, 119.4630° W', time: 400},
      {name: 'Meadow Walk', location: '45.1310° N, 119.4650° W', time: 500},
      {name: 'End of Trail', location: '45.1330° N, 119.4670° W', time: 300},
    ],
  },
];

export const pointTypes = [
  'Start Point',
  'Scenic Overlook',
  'Rest Area',
  'Water Source',
  'Steep Ascent',
  'Finish Line',
];

export const scores = [
  {
    category: 'Green Valley Trail',
    items: [
      {rank: 1, name: 'Robert Fox', time: 52},
      {rank: 2, name: 'Cody Fisher', time: 50},
      {rank: 3, name: 'Esther Howard', time: 47},
      {rank: 4, name: 'Jenny Wilson', time: 45},
      {rank: 5, name: 'Ronald Richards', time: 44},
      {rank: 6, name: 'Jacob Jones', time: 42},
      {rank: 7, name: 'Arlene McCoy', time: 41},
      {rank: 8, name: 'Savannah Nguyen', time: 40},
      {rank: 9, name: 'Guy Hawkins', time: 39},
      {rank: 10, name: 'Kathryn Murphy', time: 38},
      {rank: 11, name: 'Courtney Henry', time: 36},
      {rank: 12, name: 'Darlene Robertson', time: 35},
    ],
  },
  {
    category: 'Blue Mountain Ridge',
    items: [
      {rank: 1, name: 'Bessie Cooper', time: 75},
      {rank: 2, name: 'Kristin Watson', time: 72},
      {rank: 3, name: 'Leslie Alexander', time: 70},
      {rank: 4, name: 'Wade Warren', time: 67},
      {rank: 5, name: 'Floyd Miles', time: 65},
      {rank: 6, name: 'Marvin McKinney', time: 63},
      {rank: 7, name: 'Jerome Bell', time: 62},
      {rank: 8, name: 'Kurtis Weissnat', time: 61},
      {rank: 9, name: 'Ralph Edwards', time: 60},
      {rank: 10, name: 'Marvin Fisher', time: 58},
      {rank: 11, name: 'Cameron Williamson', time: 57},
      {rank: 12, name: 'Eleanor Pena', time: 55},
    ],
  },
  {
    category: 'Redwood Forest Loop',
    items: [
      {rank: 1, name: 'Michael Brown', time: 100},
      {rank: 2, name: 'Cameron Evans', time: 98},
      {rank: 3, name: 'Lucas Green', time: 95},
      {rank: 4, name: 'Caleb Parker', time: 93},
      {rank: 5, name: 'Zoe Adams', time: 90},
      {rank: 6, name: 'Leah Scott', time: 89},
      {rank: 7, name: 'Emma Johnson', time: 87},
      {rank: 8, name: 'Oliver Martinez', time: 85},
      {rank: 9, name: 'Amelia Lee', time: 84},
      {rank: 10, name: 'Liam Harris', time: 82},
      {rank: 11, name: 'Sophia Lewis', time: 80},
      {rank: 12, name: 'Henry King', time: 78},
    ],
  },
  {
    category: 'Canyon Edge Trail',
    items: [
      {rank: 1, name: 'Noah Young', time: 40},
      {rank: 2, name: 'Isabella Walker', time: 38},
      {rank: 3, name: 'Mia Robinson', time: 36},
      {rank: 4, name: 'James Hall', time: 35},
      {rank: 5, name: 'Benjamin Allen', time: 33},
      {rank: 6, name: 'Charlotte Wright', time: 32},
      {rank: 7, name: 'Ava Hill', time: 31},
      {rank: 8, name: 'William Adams', time: 30},
      {rank: 9, name: 'Lucas Nelson', time: 29},
      {rank: 10, name: 'Emily Clark', time: 28},
      {rank: 11, name: 'Mason Lewis', time: 27},
      {rank: 12, name: 'Evelyn Baker', time: 26},
    ],
  },
  {
    category: 'Crystal Lake Path',
    items: [
      {rank: 1, name: 'Olivia Rodriguez', time: 148},
      {rank: 2, name: 'Elijah Torres', time: 145},
      {rank: 3, name: 'Sophia Ramirez', time: 143},
      {rank: 4, name: 'Alexander Turner', time: 140},
      {rank: 5, name: 'Aiden Carter', time: 138},
      {rank: 6, name: 'Grace Phillips', time: 135},
      {rank: 7, name: 'Luna Campbell', time: 133},
      {rank: 8, name: 'Jack Mitchell', time: 130},
      {rank: 9, name: 'Harper Roberts', time: 128},
      {rank: 10, name: 'Eliana Evans', time: 125},
      {rank: 11, name: 'Michael Johnson', time: 122},
      {rank: 12, name: 'Layla Gonzalez', time: 120},
    ],
  },
];
