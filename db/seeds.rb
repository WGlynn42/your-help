# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  first_name: "Will",
  last_name: "Glynn",
  password: "password",
  email: "wglynn42@gmail.com",
  password_confirmation: "password"
)

Charity.create(
  name: "Christopher's Haven",
  address: "One Emerson Place, Suite 2N",
  city: "Boston",
  state: "MA",
  zip: "02114",
  phone: "857-233-4178",
  email: "info@christophershaven.org",
  website: "www.christophershaven.org",
  donation_page: "https://interland3.donorperfect.net/weblink/weblink.aspx?name=E83931&id=1",
  photo: "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/1536576_10153717395464036_5428369702380011188_n.png?_nc_cat=105&_nc_oc=AQmv0JojXtFv9At9K-trbJP9T3EiBOLwOAg6VcvXLs2mYsRZqlXSsGwBsJOcICmx_LOLk5diHV1F9lUwKQmg8nz0&_nc_ht=scontent.fbed1-1.fna&oh=5bc42b487eef72b15f4f24e36b11e190&oe=5E1AE3D8",
  contact_name: "Joyce Duvall",
  contact_role: "Executive Director",
  contact_phone: "857-233-4178",
  contact_email: "joyce.duvall@christophershaven.org",
  tagline: "A home for kids when cancer hits home.",
  mission_statement: "Christopher's Haven touches people’s lives in unimaginable ways. It is their home away from home when their child or grandchild is receiving life saving cancer treatment. It is not just a place to stay. It is a place to return to after a hard day, and share experiences with people living similar nightmares. It is a happy place actually, filled with love, support, activities, volunteers, and warmth. It contributes to the healing process while going through treatment and long afterwards. It is family centric, caring not only for the patient, but the entire family unit. There are many people who’s lives have been touched by Christopher’s Haven, and they and their families would like an opportunity to give back financially to help support the organization."
)

Charity.create(
  name: "Crohn's and Colitis Foundation - New England",
  address: "72 River Park Street, Suite 202",
  city: "Needham Heights",
  state: "MA",
  zip: "02494",
  phone: "781-449-0324",
  email: "ne@crohnscolitisfoundation.org",
  website: "https://www.crohnscolitisfoundation.org/chapters/ne",
  donation_page: "https://online.crohnscolitisfoundation.org/site/Donation2;jsessionid=00000000.app30101a?idb=29044895&df_id=22817&mfc_pref=T&22817.donation=form1&NONCE_TOKEN=4D91D17A74B012BECA40E50AD3DDE5D5&_gac=1.155329993.1572286656.CjwKCAjwo9rtBRAdEiwA_WXcFi2fjd-Gd-ssqcEFz6cWyu9CpumGr2Nt99fy5fEyJ6zdmkVnJZ-3lBoCd1QQAvD_BwE&22817_donation=form1&_ga=2.101519233.1424468701.1572286656-617981587.1572286656",
  photo: "https://scontent.fbed1-2.fna.fbcdn.net/v/t1.0-9/16864112_10155063082964508_5504170374707634960_n.jpg?_nc_cat=106&_nc_oc=AQkiYmzjY7ezsyQ59YH1xax3q-WoHtFZ_Lt-BvYslxy596JMJf9Z6htwacMZoMRg_irTKv3zNoNpIZ7JZZ7waJgC&_nc_ht=scontent.fbed1-2.fna&oh=f476d4cd0d80001c5328fc8729002284&oe=5E53285D",
  contact_name: "Kimberly F. Snapper",
  contact_role: "Executive Director",
  contact_phone: "781-449-0324",
  contact_email: "kfredericksnapper@crohnscolitisfoundation.org",
  tagline: "Leading the way for over 3,000,000 patients through research, education, and support.",
  mission_statement: "We serve Maine, Massachusetts, New Hampshire, Rhode Island, and Vermont by funding research, raising awareness and providing education and support to inflammatory bowel disease patients and caregivers."
)

Charity.create(
  name: "Greater Boston Food Bank",
  address: "70 South Bay Avenue",
  city: "Boston",
  state: "MA",
  zip: "02118",
  phone: "617-427-5200",
  email: "info@gbfb.org",
  website: "www.gbfb.org",
  donation_page: "https://my.gbfb.org/give/248538/#!/donation/checkout",
  photo: "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/1937390_117644686729_1536679_n.jpg?_nc_cat=109&_nc_oc=AQn4xuKKfc0lY8hdkAUU6rHxmdktKEYPTvWFKBC_E2LsJCi54YPty6EUwFgtgQNsbHeVUC1jCkMZlNexpZE3ZmXX&_nc_ht=scontent.fbed1-1.fna&oh=c240bc62d84ad9205ba2a39fe0ef235f&oe=5E19121D",
  contact_name: "Catherine D'Amato",
  contact_role: "President and CEO",
  contact_phone: "617-427-5200",
  contact_email: "cdamato@gbfb.org",
  tagline: "Together, with our partners and supporters, we are creating a healthy and hunger free Eastern Massachusetts.",
  mission_statement: "The Greater Boston Food Bank works passionately to end hunger across Eastern Massachusetts by providing our neighbors in need the healthy food and resources they need to thrive."
)

Charity.create(
  name: "OneMission",
  address: "69 Milk Street, Suite 300",
  city: "Westborough",
  state: "MA",
  zip: "01581",
  phone: "508-628-9090",
  email: "info@onemission.org",
  website: "www.onemission.org",
  donation_page: "https://secure.onemissionbuzzoff.org/registrant/DonationPage.aspx?eventid=233861&langpref=en-CA&Referrer=https%3a%2f%2fonemission.org%2f",
  photo: "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/72286505_10157534297560419_8189486839346757632_n.png?_nc_cat=105&_nc_oc=AQm9KInupJeg9SCn5e7ZcwEF86KNq_PoxwzMSPEojT9J5n35j6Gjq2R2FPvtcw0nmgXbBc_pI2C29m1qP5imOUhL&_nc_ht=scontent.fbed1-1.fna&oh=3bf9a809089a8d09592f8bd626415a2b&oe=5E567CD0",
  contact_name: "Ashley Haseotes",
  contact_role: "President & Founder",
  contact_phone: "508-628-9090",
  contact_email: "ashley@onemission.org",
  tagline: "One Mission is a pediatric cancer charity that helps children and families through the emotional and financial challenges of treatment.",
  mission_statement: "One Mission is a pediatric cancer charity that does whatever it takes to get kids through cancer. One Mission programs make living in the hospital less lonely and stressful, bring back joy in a time of fear and uncertainty, and give kids and their loved ones the support they need to get through the emotional and financial challenges of treatment."
)

Charity.create(
  name: "Pitching in for Kids",
  address: "One South Market Building, 4th Floor",
  city: "Boston",
  state: "MA",
  zip: "02109",
  phone: "617-367-3322",
  email: "info@pitchinginforkids.org",
  website: "https://www.pitchinginforkids.org/",
  donation_page: "https://mxmerchant.com/mxcustomer/d/607cc519-8be7-44f5-a1df-c476d25f5361/v3",
  photo: "https://scontent.fbed1-1.fna.fbcdn.net/v/t31.0-8/13308551_1027929073961240_3310665257819318757_o.jpg?_nc_cat=109&_nc_oc=AQme6qamUkT9mLTmgUmkb1-L1L_ZXP3Z6246w7Hp-RKL06G2ikuRK-bceipe8L75mRoYuk9oRB6DxkmwKQHq6eeF&_nc_ht=scontent.fbed1-1.fna&oh=0ff586a553b73a974a342ca3d5ab8d9c&oe=5E4F128F",
  contact_name: "Kevin  Ward",
  contact_role: "Event Director",
  contact_phone: "617-367-3322",
  contact_email: "kevin@pitchinginforkids.org",
  tagline: "Be Kind. Always",
  mission_statement: "Pitching in for Kids, Inc. is a nonprofit organization dedicated to providing specifically earmarked grants designed to improve the lives of children across the New England region through sports-related fundraising events and programs."
)

Charity.create(
  name: "The Jimmy Fund",
  address: "10 Brookline Place West",
  city: "Brookline",
  state: "MA",
  zip: "02445",
  phone: "800-525-4669",
  email: "JimmyFundContactUs@dfci.harvard.edu",
  website: "http://www.jimmyfund.org/",
  donation_page: "https://danafarber.jimmyfund.org/site/Donation2?df_id=2101&mfc_pref=T&2101.donation=form1",
  photo: "https://scontent.fbed1-2.fna.fbcdn.net/v/t1.0-9/71211008_10156518639495770_609894762010378240_n.jpg?_nc_cat=102&_nc_oc=AQmJB5ESV0aEDupUycJ7ExEHuF84kb3dj4U7qwAj5mDx5ucaI81NVtGjmWi6yreYnhMUlkplqoufp16a-WnT8-lG&_nc_ht=scontent.fbed1-2.fna&oh=eac0236554ad7916bcc309e3de5d3c64&oe=5E168C0D",
  contact_name: "Brenda Quinlan Goodell",
  contact_role: "Assistant Vice President of Event Fundraising",
  contact_phone: "617-632-5089",
  contact_email: "Brenda_Goodell@dfci.harvard.edu",
  tagline: "Since its founding in 1948, the Jimmy Fund has raised millions of dollars through thousands of grassroots efforts to help save lives and give hope to cancer patients everywhere.",
  mission_statement: "The Jimmy Fund solely supports the fight against cancer at Dana-Farber. Since its founding in 1948, the Jimmy Fund has raised millions of dollars through thousands of community efforts to help save lives and give hope to cancer patients around the world. An official charity of the Boston Red Sox, Pan-Mass Challenge, Massachusetts Chiefs of Police Association, and Variety Children’s Charity of New England, the Jimmy Fund is an American favorite."
)

Event.create(
  charity_id: 1,
  name: "6th Annual Christopher's Haven Benefit",
  description: "Fashion show featuring current guests and alumni of Christopher's Haven!",
  event_date: "2020-05-17",
  start_time: "5:30pm",
  end_time: "9:00pm",
  venue:"State Room",
  address: "60 State Street",
  city: "Boston",
  state: "MA",
  zip: "02109",
  venue_website: "https://longwoodvenues.com/venues/boston-event-venue/",
  event_page: "http://www.christophershaven.org/upcoming-events/",
  event_photo: "https://scontent.fbed1-2.fna.fbcdn.net/v/t31.0-8/10481197_10153321398539036_3436042841035186413_o.jpg?_nc_cat=106&_nc_oc=AQnB7FeLwVbezQeDHeprHMBFWdhSO6zoR45BN52lZZEywG67xTBC_17HSIHiBeaf8NuOd5nuXBGMqsAX619PAIbY&_nc_ht=scontent.fbed1-2.fna&oh=c20fe6c7334b7f1ea909392991640023&oe=5E178B6E"
)

Event.create(
  charity_id: 2,
  name: "A Night in White",
  description: "A Night in White for the Cure",
  event_date: "2020-06-20",
  start_time: "6:00pm",
  end_time: "10:00pm",
  venue: "Artists For Humanity EpiCenter",
  address: "100 W 2nd St",
  city: "Boston",
  state: "MA",
  zip: "02127",
  venue_website: "http://afhboston.org/epicenter.html",
  event_page: "https://e.givesmart.com/events/cer/",
  event_photo: "https://scontent.fbed1-1.fna.fbcdn.net/v/t31.0-8/13723930_10154354490799508_6907866763438034477_o.jpg?_nc_cat=105&_nc_oc=AQm-Jvk37WNGllrHJK4H35mUa408MRkBBKycS7ut3BUH4rQ4wbvA8BOAnWW8tRrxSrokI5XpPOjgaKqNWmeJx_H_&_nc_ht=scontent.fbed1-1.fna&oh=c390a20043d985fde4d925572758baa3&oe=5E63B37D"
)

Event.create(
  charity_id: 3,
  name: "Growing Healthy Futures",
  description: "On September 15, 2020, The Greater Boston Food Bank (GBFB) will be hosting Growing Healthy Futures: A Farm to Table Dinner. Proceeds from the event will support GBFB’s School-based Pantries program.",
  event_date: "2020-09-15",
  start_time: "5:30pm",
  end_time: "9:00pm",
  venue: "Wright-Locke Farm",
  address: "78 Ridge Street",
  city: "Winchester",
  state: "MA",
  zip: "01890",
  venue_website: "https://www.wlfarm.org/",
  event_page: "https://www.gbfb.org/get-involved/events/signature-events/growing-healthy-futures/",
  event_photo: "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/4403_83511506729_6425378_n.jpg?_nc_cat=110&_nc_oc=AQlfq0QdCnl1EtyG7NRsW1bYFkvDmFqIcwEwUDbXnAggHAHyojddI1e6yCTrFcay8sAoZ0MwKEDD1RJggrHIj_bg&_nc_ht=scontent.fbed1-1.fna&oh=0c92a5c80ee80d6863f7c90e3fe95c9d&oe=5E58C51A"
)

Event.create(
  charity_id: 4,
  name: "OneMission Buzz Off",
  description: "Kids with cancer don’t just feel sick. They feel different from everyone else.  By shaving your head, in less than five minutes you can show them they are not alone and that others really do care! All that stands between you and a life-changing experience is a head of hair!",
  event_date: "2020-06-01",
  start_time: "9:00am",
  end_time: "3:00pm",
  venue: "Gillette Stadium",
  address: "One Patriot Place",
  city: "Foxboro",
  state: "MA",
  zip: "02035",
  venue_website: "https://www.gillettestadium.com/",
  event_page: "https://buzzforkids.org/",
  event_photo: "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/66842963_10157328530035419_1759975261715038208_o.jpg?_nc_cat=101&_nc_oc=AQmQDrtVbeHQCBSqJIVMIELPZj56e-fbiflabHOCvrCfR6Ta3sPon8gxTm_Aiuj83RxsgU8q8wKwDG5lMURu3Oj3&_nc_ht=scontent.fbed1-1.fna&oh=087bce5755b25bef2ac63c27ba9f0495&oe=5E1C627D"
)

Event.create(
  charity_id: 5,
  name: "Candy Land Playathon",
  description: "Each December, Pitching in for Kids partners with our good friends at Hasbro Toys for a Candy Land Play-A-Thon in the Upper Rotunda at the historic Faneuil Hall in Boston. This tradition has become one of Boston's signature holiday events! Guests will enjoy a sampling of food provided by the vendors in Faneuil Hall. Each child in attendance gets a free Hasbro toy or game!",
  event_date: "2019-12-01",
  start_time: "10:00am",
  end_time: "1:00pm",
  venue: "Faneuil Hall Marketplace",
  address: "4 South Market Street",
  city: "Boston",
  state: "MA",
  zip: "02109",
  venue_website: "https://faneuilhallmarketplace.com/",
  event_page: "https://www.pitchinginforkids.org/events",
  event_photo: "https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/25158305_1542458312508311_5849150519902862578_n.jpg?_nc_cat=110&_nc_oc=AQmnGG0KbIJB8NHXiOAHAurwhtShNdJtovhGivHqWFlkN6iz5jz6TQu98-ybcxUP1gkcZYq_ONPA3-Nv-J7fsL3J&_nc_ht=scontent.fbed1-1.fna&oh=7525348be8d592a92a4af956d6240170&oe=5E1DA1F4"
)

Event.create(
  charity_id: 6,
  name: "Chefs for Jimmy",
  description: "Chefs for Jimmy offers participants a memorable evening with delicious local dishes, raising money for cancer research and patient care at Dana-Farber.",
  event_date: "2020-01-24",
  start_time: "6:30pm",
  end_time: "9:30pm",
  venue: "Chez Josef",
  address: "176 Shoemaker Lane",
  city: "Agawam",
  state: "MA",
  zip: "01001",
  venue_website: "https://www.chezjosef.com/",
  event_page: "http://www.jimmyfund.org/events/cancer-fundraising-events/chefs-for-jimmy/",
  event_photo: "https://scontent.fbed1-2.fna.fbcdn.net/v/t1.0-9/2305_53917190769_1471_n.jpg?_nc_cat=102&_nc_oc=AQlRijrGW0Mqq4EwVb_fUdw7ql42ghO3hbDGLaeOGoCXD9l_mU24RDORIWQuqCrV5RuhG4JIkpQj2SEU6TXeRj2j&_nc_ht=scontent.fbed1-2.fna&oh=67dc37e7c954cb23ad36c45726fa87a1&oe=5E5170F7"
)
