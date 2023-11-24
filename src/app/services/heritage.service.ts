import { Injectable } from '@angular/core'
import { Place } from '../shared/models/Place'
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})

export class HeritageService {

  constructor() { }

  getPlaceById(id: number): Place {
    return this.getAllPlaces().find(place => place.id == id)!;
  }

  getPlacesByTag(tag: string): Place[] {
    if (tag.toLowerCase() == 'all')
      return this.getAllPlaces();
    else
      return this.getAllPlaces().filter(place => place.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    const tagMap: { [tagName: string]: Tag } = {};

    // Add 'all' tag with the count of all places
    tagMap['All'] = { name: 'All', count: this.getAllPlaces().length };

    // Iterate through each Food object
    this.getAllPlaces().forEach((place) => {
      // Iterate through tags of the current Food
      place.tags.forEach((tag) => {
        // Check if the tag already exists in the tagMap
        if (tagMap[tag]) {
          // If yes, increment the count
          tagMap[tag].count++;
        } else {
          // If no, create a new Tag object
          tagMap[tag] = { name: tag, count: 1 };
        }
      });
    });

    // Convert the tagMap values to an array of Tag objects
    const tags: Tag[] = Object.values(tagMap);

    return tags;
  }


  getAllPlaces(): Place[] {
    return [
      {
        id: 1,
        name: 'Sonargaon',
        address:"Narayanganj District, Dhaka Division, Bangladesh",
        description: 'Sonargaon represents the lost city was an administrative center, port and mint-town in the 14th century the ancient Capital of Bengal (13th to 17th Century) had a long 800 years of history and heritage surrounded by rivers and its fertile lands was the symbol of warm business environment that once weavers could process fine linen and produces world famous Muslin cloths. At that time, the industry and culture of Bengal flourished during the Sultanate period. Hearing the story of wealth of Bengal many people came to illustrate their fortunes and many were famous and many were rich by existing various trades. Sonargaon historic city has many other memories of affluence and its self-independence during Sultanate rules, Bengal Sultan and the glorious story tale of Isha khan who was the chieftain of the Bhati kingdom. Sonargaon historical expeditions and cruise on Mehna river is most favorable by tourists or photographers.',
        imageUrl: 'assets/1.jpg',
        entryfee: 10,
        reviews: 3320,
        tags: ['Dhaka','Day Trip'],
        offday: ['Sunday']
      },
      {
        id: 2,
        name: 'Radisson Blu Dhaka Water Garden',
        address:"Airport Road, Dhaka 1206, Bangladesh",
        description: 'Situated on seven acres of luscious gardens in the heart of Dhakas primary commercial hub, the Radisson Blu Dhaka Water Garden provides a serene escape from the bustle of the city. The hotel provides the perfect balance of supreme comfort and business-minded functionality, with five-star resort amenities and incredible conveniences, such as the short ten-minute drive to Hazrat Shahjalal International Airport (DAC). Located near major business and tourist attractions, such as the National Assembly Building or Ahsan Manzil, our hotel is perfect for any guest, business or leisure.',
        imageUrl: 'assets/2.jpg',
        entryfee: 0,
        reviews: 5320,
        tags: ['Dhaka','Hotel','Day Trip'],
        offday: ['N/A']
      },
      {
        id: 3,
        name: 'Lalbag Fort',
        address:"Lalbagh Road, Old Dhaka, Dhaka 1211, Bangladesh",
        description: 'Located inside the busy Dhaka city, this small fort is well maintained by the Government. The fort has a tomb inside which is locked for entry, it has a man made fountain replicating the Mughal architecture of fountain with Garden as we see in most of the Mughal gardens in our India including Tajmahal. Garden is well maintained. This fort houses a mosque, a dried lake, residential buildings for officials of the rulers, water storage facility. Also it houses a bath house used by the royals with paintings of the usage of the bath house. The entry fees is 20 for Bangladesh citizens, 100 taka for Saarc countries visitors',
        imageUrl: 'assets/3.jpg',
        entryfee: 150,
        reviews: 3320,
        tags: ['Dhaka','Day Trip'],
        offday: ['Friday']
      },
      {
        id: 4,
        name: 'Chittagong City Tour',
        address:"Chittagong, Bangladesh",
        description: 'Great Tour for history and nature lovers. Explore the natural beauty of Chittagong city and the nearby sea beach and river. Chittagong is the second largest city in Bangladesh. It is known as the Commercial Capital of Bangladesh. It has a rich British heritage and Muslim culture and is full of natural beauty, including rivers, the sea and green hills. We provide a Guided Tour of Chittagong City for Day-long. Hotel pickup and drop-off, and private transportation are included in the tour plans. ',
        imageUrl: 'assets/4.jpg',
        entryfee: 150,
        reviews: 3320,
        tags: ['Chittagong','Day Trip','Multi-Day'],
        offday: ['N/A']
      },
      {
        id: 5,
        name: 'Sreemangal Tour',
        address:"Sreemangal, Sylhet, Bangladesh",
        description: 'Discover Bangladesh’s incredible natural beauty on this three day Sreemangal tour. Spot native birds at the famous Baikka Beel bird sanctuary. Get amongst the wildlife with a tour of Lowacherra National Park, and experience local culture at a tribal life tour of Adivasi villages. Explore the green tea garden and view the stunning tranquil forest and wetlands. Accommodation is not included in this tour.',
        imageUrl: 'assets/5.jpg',
        entryfee: 150,
        reviews: 3320,
        tags: ['Sylhet','Day Trip','Multi-Day'],
        offday: ['N/A']
      },
      {
        id: 6,
        name: 'Sundarban',
        address:"House 39, Muktijoddha Road, Azampur Kachabazar, Uttara, Dhaka 1213, Bangladesh",
        description: 'Sundarban is the world biggest mangrove forest. In Bangladesh tourism, Sunderban plays the most vital role. A large number of foreigners come to Bangladesh every year only to visit this unique mangrove forest. Besides, local tourists also go to visit Sundarban every year. The area of great Sundarban is approximately 6000 sq. km. <br/> Since 1966 the Sunderbans have been a wildlife sanctuary, and it is estimated that there are now 400 Royal Bengal tigers and about 30,000 spotted deer in the area. Sundarbans is home to many different species of birds, mammals, insects, reptiles and fishes. Over 120 species of fish and over 260 species of birds have been recorded in the Sundarbans. The Gangetic River Dolphin (Platanista gangeticus) is common in the rivers. No less than 50 species of reptiles and eight species of amphibians are known to occur. The Sundarbans now support the only population of the Estuarine, or Salt-Water Crocodile (Crocodiles paresis) in Bangladesh, and that population is estimated at less than two hundred individuals',
        imageUrl: 'assets/6.jpg',
        entryfee: 150,
        reviews: 3320,
        tags: ['Kulna','Multi-Day'],
        offday: ['Dec-Jan']
      },
      {
        id: 7,
        name: 'Sada Pathor',
        address:"House 39, Muktijoddha Road, Azampur Kachabazar, Uttara, Dhaka 1213, Bangladesh",
        description: 'Experience the enchanting beauty and cultural heritage of Sylhet, a mesmerizing destination nestled in the northeastern region of Bangladesh. Sylhet tour offers an extraordinary blend of breathtaking landscapes, serene tea gardens, spiritual landmarks, and warm hospitality, making it a captivating place to explore. Delve into Sylhets spiritual ambiance by visiting the revered shrines and mosques. The Shahjalal Mazar, the final resting place of the great Sufi saint Hazrat Shahjalal, is a significant pilgrimage site and a center of spiritual devotion. The Shahi Eidgah, a historic mosque built during the Mughal era, showcases remarkable architectural grandeur. Whether you seek natural wonders, spiritual enlightenment, cultural exploration, or simply a tranquil getaway, Sylhet tour promises an unforgettable experience. Allow yourself to be captivated by the ethereal beauty of this enchanting region and create cherished memories that will last a lifetime.',
        imageUrl: 'assets/7.jpg',
        entryfee: 15,
        reviews: 3320,
        tags: ['Sylhet','Day Trip'],
        offday: ['N/A']
      },
      {
        id: 8,
        name: "Cox's Bazar Sea Beach",
        address:"House 39, Muktijoddha Road, Azampur Kachabazar, Uttara, Dhaka 1213, Bangladesh",
        description: "To be brutally honest, this “beach” is not even a beach in the sense that any Westerner would understand. It’s basically a wide sediment plain that the sea laps over as the tide comes in. The “sand” again is a kind of sediment that resembles wet cement. As this is a sediment plain and not a beach, there are no attractive coconut trees, no vegetation of any kind, no seashells… it’s a wide, very wide sediment plain of wet cement. “Longest beach in the world”—what is that supposed to even signify? Does anyone even care how many kilometers a beach runs? Beach length doesn’t mean anything. What matters is the quality of the sand and water, the attractiveness, the swim-ability and wave characteristics, etc. Cox Bazaar beach fails on every one of these, except that there are waves, but unfortunately no beach but a sediment plain to land on. The only positive thing to say is that the wet cement-like plain is diligently kept clean, and since there are no seashells or even stones you can very safely walk barefoot on it—but no one seems to walk barefoot, curiously no one removes their footwear or any articles of clothing. The water too is clean but dark and murky due to the color of the sediment. So what is it if not a beach—it’s a kind of gathering spot for the Bangladeshi public—a wide expanse to appear in your finery and frolic among the masses. It’s a place to see and be seen and get photographed with SLR cameras.",
        imageUrl: 'assets/8.jpg',
        entryfee: 150,
        reviews: 3320,
        tags: ["Chittagong","Cox's Bazar",'Multi-Day'],
        offday: ['N/A']
      },
      {
        id: 9,
        name: 'Sayeman Beach Resort',
        address:"House 39, Muktijoddha Road, Azampur Kachabazar, Uttara, Dhaka 1213, Bangladesh",
        description: "After fifty years of glorious past, Sayeman Beach Resort revives its famed legacy of comfort, elegance and impeccable service. An eminent landmark constructed in 1964, this legendary first private hotel of Cox's Bazar is reborn, infusing modern sophistication into this vintage-chic, iconic hotel at a new beachfront location of Marine Drive, Kolatoli, Cox's Bazar. With its richly historic past, the Hotel Sayeman now fully becomes a part of the exciting and rapidly changing present with the addition of a modern, elegant luxury ocean front hotel. The beauty of Cox's Bazar - the climate, the panoramic ocean views, the sandy beaches, plus the rich culture and history along with the warmth of the sun - is what attracts people here. And the Sayeman Beach Resort provides you exactly just that with extraordinary comfort, luxury and services. Sayeman Beach Resort, the illustrious lifestyle destination offers 228 guest rooms, including 16 Panorama Ocean Suites with 180-degree view of the Bay of Bengal, 38 Ocean View suites overlooking the sumptuous infinity pool, an exclusive portfolio of leisure and entertainment experiences and over 20,000 sq ft. of expanded event space that includes several meeting rooms, executive boardrooms, breakout area, a grand ballroom, a multipurpose halls and flexible indoor and outdoor event spaces. Soak up the sun and the beach action at this prime oceanfront hotel in Cox's Bazar's most attractive beaches. Sayeman Beach Resort lets you enjoy breathtaking ocean view, beaches, surfing & water sports, Thai spa, fabulous dining, and exceptional event venue. There's so much to discover and it's all steps away.",
        imageUrl: 'assets/9.jpg',
        entryfee: 150,
        reviews: 3320,
        tags: ["Cox's Bazar",'Hotel'],
        offday: ['N/A']
      },
      {
        id: 10,
        name: 'Bandarban',
        address:"House 39, Muktijoddha Road, Azampur Kachabazar, Uttara, Dhaka 1213, Bangladesh",
        description: "Couples of year back I had the chance to visit one of the most beautiful place of Bandarban named Amiakhum. The route is not popular to the common tourist. Usually only trackers are interested to visit this place. If you had energy and if you had 3 days in your hand with a small team including at least 4 people, you can plan for Amiakhum. But you need to take permission from the Boarder Guard or BGD or Bangladeshi Army. So far I know foreigners have no authority to visit this place. The simplest way to visit this place is Bangladesh > Dhaka > Bandarban > Thanchi > Remakri > Nafakhum > Zinnah Para > Thuisa Para > Amiakhum. The time to visit this place is October. March to September are very tough to get permission considering the risk of the route. As the travellers have to walk and climd mountains, it is wise to avoid rainy season. <br/> This place has the unique beauty with mountain and falls. Basically, Amiakhum is a falls surrounding by the rock mountains. If you wish to hear the nature please visit this brutal beauty. Moreover, as a bonus you can have the excellent beauty on your way. Who never visit this place can't imagine how beautiful our Bangladesh is.",
        imageUrl: 'assets/10.jpg',
        entryfee: 150,
        reviews: 3320,
        tags: ['Bandarban','Chittagong','Multi-Day'],
        offday: ['N/A']
      }
      //,
      // {
      //   id: 11,
      //   name: 'Kuakata',
      //   address:"House 39, Muktijoddha Road, Azampur Kachabazar, Uttara, Dhaka 1213, Bangladesh",
      //   description: "Kuakata is a panoramic sea beach which is known as Sagar Kannya locally. It’s an 18 km long sea beach situated at Potuakhali District. From here one can enjoy the unbridled beauty of the sunrise and sunset of the Bay of Bengal. This beach is an amazing mixture of vivid natural beauty, blue sky, sandy land and evergreen forest that will give you a great feeling of heaven. The fishing community, the large bazaar of dried fish, dense forest of shegun and a harborage of migratory birds make this beach the most unique beach in the world. So, you must have to visit this place.",
      //   imageUrl: 'assets/11.jpg',
      //   entryfee: 150,
      //   reviews: 3320,
      //   tags: ['Khulna','Multi-Day'],
      //   offday: ['Sunday']
      // },
      // {
      //   id: 12,
      //   name: 'Rangamati',
      //   address:"House 39, Muktijoddha Road, Azampur Kachabazar, Uttara, Dhaka 1213, Bangladesh",
      //   description: "Rangamati is the largest district and beauty queen of Bangladesh. There are many tribal communities, among them, chakma is seen everywhere. Not only that there are many uncomparable tourist spots in Rangamati including Hanging Bridge, Kaptai Lake, Sajek Valley, Paulwell Park, Subolong Spring and so on which will make your holiday more colorful. Every place is distinguished with its own majesty. All kinds of astonishment are gathered in this district. If you want to make a tour in Rangamati, you will have a whole package of tour ingredients here. You can rely on that won’t be disappointed by visiting Rangamati.",
      //   imageUrl: 'assets/12.jpg',
      //   entryfee: 150,
      //   reviews: 3320,
      //   tags: ['Rangamati','Chittagong','Multi-Day'],
      //   offday: ['N/A']
      // },
      // {
      //   id: 13,
      //   name: 'Sajek Valley',
      //   address:"House 39, Muktijoddha Road, Azampur Kachabazar, Uttara, Dhaka 1213, Bangladesh",
      //   description: "Sajek valley is famous as a tourist spot for its beautiful environment clasped by mountains with deep forest. It is located at Baghaichhari Upazila in Rangamati District and many rivers including Mayni river is flown by its side. Many tribal communities like Chakma, Marma, Tripura, Lushai, Pankua, and  Sagma live here. If you want to observe the elegant charm of the dense mountain life then you will be well-received by the nature of Sajek Valley.",
      //   imageUrl: 'assets/13.jpg',
      //   entryfee: 150,
      //   reviews: 3320,
      //   tags: ['Dhaka','Multi-Day'],
      //   offday: ['N/A']
      // },
      // {
      //   id: 14,
      //   name: 'Nilachol',
      //   address:"House 39, Muktijoddha Road, Azampur Kachabazar, Uttara, Dhaka 1213, Bangladesh",
      //   description: "Nilachol is an amazing tourist spot, situated in  Tigerpara, Bandarban. It is about 2000 feet above from the sea level where you can find the whole view of Bandarban at a glance. This area is called the heaven of Bangladesh because you touch the cloud by climbing up Nilachol. Not only that the rainy season, fogs of winter, moonlit night, view of sunrise and sunset everything is so fantastic here. If you visit this place once, your mind doesn’t want to back his busy life. So, it’s a highly recommended place for making an enjoyable tour.",
      //   imageUrl: 'assets/14.jpg',
      //   entryfee: 150,
      //   reviews: 3320,
      //   tags: ['Rangamati','Day Trip'],
      //   offday: ['N/A']
      // },
      // {
      //   id: 15,
      //   name: 'Patenga',
      //   address:"House 39, Muktijoddha Road, Azampur Kachabazar, Uttara, Dhaka 1213, Bangladesh",
      //   description: "Patenga is one of the most attractive beaches of Bangladesh, situated in Chattogram. It is located 14 km from the city and river Karnaphuli is flown by its side. It is one of the prodigious beaches for the beauty lover who loves to watch the sunset scene. The shore of the sea is bound by stones to confine erosion.  The area is enclosed by tight security so that visitors can move safely. Tourist comes here generally early in the morning to observe the sunrise and end of the day to watch the sunset. Ergo, if you are a true visitor, you should come here once.",
      //   imageUrl: 'assets/15.jpg',
      //   entryfee: 150,
      //   reviews: 3320,
      //   tags: ["Chittagong",'Day Trip'],
      //   offday: ['Sunday']
      // },
      // {
      //   id: 16,
      //   name: 'Jaflong',
      //   address:"House 39, Muktijoddha Road, Azampur Kachabazar, Uttara, Dhaka 1213, Bangladesh",
      //   description: "Jaflong is a hill station and a “must-see” tourist destination of Sylhet division, Bangladesh. It is residing at Gowainghat Upazilla beside the river of Piyain at Sylhet district. The best attraction of Jaflong is the hanging bridge over the river that gives a view of the next level. Another traction of Jaflong is the spectacular tea garden. You can also find an ancient royal palace called Tamabil situated adjacent to Jaflong. The perfect time to visit Jaflong between April and October though visitors come here generally in winter. So, don’t forget to visit the place if you are a travel lover.",
      //   imageUrl: 'assets/16.jpg',
      //   entryfee: 150,
      //   reviews: 3320,
      //   tags: ['Dhaka','Day Trip'],
      //   offday: ['Sunday']
      // }
      // ,
      // {
      //   id: 17,
      //   name: "St. Martin’s Island",
      //   address:"House 39, Muktijoddha Road, Azampur Kachabazar, Uttara, Dhaka 1213, Bangladesh",
      //   description: "For the beach lover St. Martin’s Island is the best place to enjoy the pure beauty of the sea. It’s a small coral island of Bay of Bengal with an area of only 8 sq km. There is also a neighboring island beside it called Chera Dwip. The northeast of the island is called Narikeldia where all kinds of hotel, motel restaurant can be found and the southern part of the island is known as Dakshinpara. All over you can find various types of view in a small place together. It’s a fantastic place to tour.",
      //   imageUrl: 'assets/17.jpg',
      //   entryfee: 150,
      //   reviews: 3320,
      //   tags: ["Cox's Bazar",'Multi-Day'],
      //   offday: ['Jan-Mar']
      // }
    ];
  }
}
