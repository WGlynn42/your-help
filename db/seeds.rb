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
  email: "wglynn42@gmail.com",
  phone: "555-123-4567"
)

Charity.create(
  user_id: 1,
  event_id: 1,
  name: "Christopher's Haven",
  street_address: "One Emerson Place, Suite 2N",
  city: "Boston",
  state: "MA",
  zip: "02114",
  phone: "857-233-4178",
  email: "info@christophershaven.org",
  website: "www.christophershaven.org",
  donation_page: "https://interland3.donorperfect.net/weblink/weblink.aspx?name=E83931&id=1",
  photo: "https://images.app.goo.gl/Yn1zNjYk6XyURXGC6",
  contact_name: "Joyce Duvall",
  contact_role: "Executive Director",
  contact_phone: null,
  contact_email: "joyce.duvall@christophershaven.org",
  mission_statement: "Christopher's Haven touches people’s lives in unimaginable ways. It is their home away from home when their child or grandchild is receiving life saving cancer treatment. It is not just a place to stay. It is a place to return to after a hard day, and share experiences with people living similar nightmares. It is a happy place actually, filled with love, support, activities, volunteers, and warmth. It contributes to the healing process while going through treatment and long afterwards. It is family centric, caring not only for the patient, but the entire family unit. There are many people who’s lives have been touched by Christopher’s Haven, and they and their families would like an opportunity to give back financially to help support the organization."
)

Charity.create(
  user_id: 1,
  event_id: 2,
  name: "Crohn's and Colitis Foundation - New England",
  street_address: "72 River Park Street, Suite 202",
  city: "Needham Heights",
  state: "MA",
  zip: "02494",
  phone: "781-449-0324",
  email: "ne@crohnscolitisfoundation.org",
  website: "https://www.crohnscolitisfoundation.org/chapters/ne",
  donation_page: "https://online.crohnscolitisfoundation.org/site/Donation2;jsessionid=00000000.app30101a?idb=29044895&df_id=22817&mfc_pref=T&22817.donation=form1&NONCE_TOKEN=4D91D17A74B012BECA40E50AD3DDE5D5&_gac=1.155329993.1572286656.CjwKCAjwo9rtBRAdEiwA_WXcFi2fjd-Gd-ssqcEFz6cWyu9CpumGr2Nt99fy5fEyJ6zdmkVnJZ-3lBoCd1QQAvD_BwE&22817_donation=form1&_ga=2.101519233.1424468701.1572286656-617981587.1572286656",
  photo: "https://images.app.goo.gl/5R89o3j4ftoPmDmr7",
  contact_name: "Kimberly F. Snapper",
  contact_role: "Executive Director",
  contact_phone: null,
  contact_email: "kfredericksnapper@crohnscolitisfoundation.org",
  mission_statement: "We serve Maine, Massachusetts, New Hampshire, Rhode Island, and Vermont by funding research, raising awareness and providing education and support to inflammatory bowel disease patients and caregivers."
)

Charity.create(
  user_id: 1,
  event_id: 3,
  name: "Greater Boston Food Bank",
  street_address: "70 South Bay Avenue",
  city: "Boston",
  state: "MA",
  zip: "02118",
  phone: "617-427-5200",
  email: "info@gbfb.org",
  website: "www.gbfb.org",
  donation_page: "https://my.gbfb.org/give/248538/#!/donation/checkout",
  photo: "https://images.app.goo.gl/GwoBABAF62aphDp58",
  contact_name: "Catherine D'Amato",
  contact_role: "President and CEO",
  contact_phone: null,
  contact_email: null,
  mission_statement: "The Greater Boston Food Bank works passionately to end hunger across Eastern Massachusetts by providing our neighbors in need the healthy food and resources they need to thrive."
)

Charity.create(
  user_id: 1,
  event_id: 4,
  name: "OneMission",
  street_address: "69 Milk Street, Suite 300",
  city: "Westborough",
  state: "MA",
  zip: "01581",
  phone: "5086289090",
  email: "info@onemission.org",
  website: "www.onemission.org",
  donation_page: "https://secure.onemissionbuzzoff.org/registrant/DonationPage.aspx?eventid=233861&langpref=en-CA&Referrer=https%3a%2f%2fonemission.org%2f",
  photo: "https://images.app.goo.gl/84doScQ5CyMqMuHt6",
  contact_name: "Ashley Haseotes",
  contact_role: "President & Founder",
  contact_phone: null,
  contact_email: "ashley@onemission.org",
  mission_statement: "One Mission is a pediatric cancer charity that does whatever it takes to get kids through cancer. One Mission programs make living in the hospital less lonely and stressful, bring back joy in a time of fear and uncertainty, and give kids and their loved ones the support they need to get through the emotional and financial challenges of treatment."
)

Charity.create(
  user_id: 1,
  event_id: 5,
  name: "Pitching in for Kids",
  street_address: "One South Market Building, 4th Floor",
  city: "Boston",
  state: "MA",
  zip: "02109",
  phone: "617-367-3322",
  email: "info@pitchinginforkids.org",
  website: "https://www.pitchinginforkids.org/",
  donation_page: "https://mxmerchant.com/mxcustomer/d/607cc519-8be7-44f5-a1df-c476d25f5361/v3",
  photo: "https://images.app.goo.gl/ydiYemy5ThM3ULSi8",
  contact_name: "Kevin  Ward",
  contact_role: "Event Director",
  contact_phone: null,
  contact_email: "kevin@pitchinginforkids.org",
  mission_statement: "Pitching in for Kids, Inc. is a nonprofit organization dedicated to providing specifically earmarked grants designed to improve the lives of children across the New England region through sports-related fundraising events and programs."
)

Charity.create(
  user_id: 1,
  event_id: 6,
  name: "The Jimmy Fund",
  street_address: "10 Brookline Place West",
  city: "Brookline",
  state: "MA",
  zip: "02445",
  phone: "800-525-4669",
  email: "JimmyFundContactUs@dfci.harvard.edu",
  website: "http://www.jimmyfund.org/",
  donation_page: "https://danafarber.jimmyfund.org/site/Donation2?df_id=2101&mfc_pref=T&2101.donation=form1",
  photo: "https://images.app.goo.gl/6ZExDiJkjyAFQbTW9",
  contact_name: "Brenda Quinlan Goodell",
  contact_role: "Assistant Vice President of Event Fundraising",
  contact_phone: "617-632-5089",
  contact_email: "Brenda_Goodell@dfci.harvard.edu",
  mission_statement: "The Jimmy Fund solely supports the fight against cancer at Dana-Farber. Since its founding in 1948, the Jimmy Fund has raised millions of dollars through thousands of community efforts to help save lives and give hope to cancer patients around the world. An official charity of the Boston Red Sox, Pan-Mass Challenge, Massachusetts Chiefs of Police Association, and Variety Children’s Charity of New England, the Jimmy Fund is an American favorite."
)

Event.create(
  charity_id: 1,
  user_id: 1,
  name: "6th Annual Christopher's Haven Benefit",
  description: "Fashion show featuring current guests and alumni of Christopher's Haven!",
  event_date: "May 17, 2020",
  month: "05",
  date: "17",
  year: "2020",
  start_time: "5:30",
  start_time_of_day: "pm",
  end_time: "9:00",
  end_time_of_day: "pm",
  venue:"State Room",
  address: "60 State Street",
  city: "Boston",
  state: "MA",
  zip: "02109",
  venue_website: "https://longwoodvenues.com/venues/boston-event-venue/",
  event_website: "http://www.christophershaven.org/upcoming-events/"
)

Event.create(
  charity_id: 2,
  user_id: 1,
  name: "A Night in White",
  description: "A Night in White for the Cure",
  event_date: "June 20, 2020",
  month: "06",
  date: "20",
  year: "2020",
  start_time: "6:00",
  start_time_of_day: "pm",
  end_time: "10:00",
  end_time_of_day: "pm",
  venue: "Artists For Humanity EpiCenter",
  address: "100 W 2nd St",
  city: "Boston",
  state: "MA",
  zip: "02127",
  venue_website: "http://afhboston.org/epicenter.html",
  event_website: "https://e.givesmart.com/events/cer/"
)

Event.create(
  charity_id: 3,
  user_id: 1,
  name: "Growing Healthy Futures",
  description: "On September 15, 2020, The Greater Boston Food Bank (GBFB) will be hosting Growing Healthy Futures: A Farm to Table Dinner. Proceeds from the event will support GBFB’s School-based Pantries program.",
  event_date: "September 15, 2020",
  month: "09",
  date: "15",
  year: "2020",
  start_time: "5:30",
  start_time_of_day: "pm",
  end_time: "9:00",
  end_time_of_day: "pm",
  venue: "Wright-Locke Farm",
  address: "78 Ridge Street",
  city: "Winchester",
  state: "MA",
  zip: "01890",
  venue_website: "https://www.wlfarm.org/",
  event_website: "https://www.gbfb.org/get-involved/events/signature-events/growing-healthy-futures/"
)

Event.create(
  charity_id: 4,
  user_id: 1,
  name: "OneMission Buzz Off",
  description: "Kids with cancer don’t just feel sick. They feel different from everyone else.  By shaving your head, in less than five minutes you can show them they are not alone and that others really do care! All that stands between you and a life-changing experience is a head of hair!",
  event_date: "June 1, 2020",
  month: "06",
  date: "01",
  year: "2020",
  start_time: "9:00",
  start_time_of_day: "am",
  end_time: "3:00",
  end_time_of_day: "pm",
  venue: "Gillette Stadium",
  address: "One Patriot Place",
  city: "Foxboro",
  state: "MA",
  zip: "02035",
  venue_website: "https://www.gillettestadium.com/",
  event_website: "https://buzzforkids.org/"
)

Event.create(
  charity_id: 5,
  user_id: 1,
  name: "Candy Land Playathon",
  description: "Each December, Pitching in for Kids partners with our good friends at Hasbro Toys for a Candy Land Play-A-Thon in the Upper Rotunda at the historic Faneuil Hall in Boston. This tradition has become one of Boston's signature holiday events! Guests will enjoy a sampling of food provided by the vendors in Faneuil Hall. Each child in attendance gets a free Hasbro toy or game!",
  event_date: "December 1, 2019",
  month: "12",
  date: "01",
  year: "2019",
  start_time: "10:00",
  start_time_of_day: "am",
  end_time: "1:00",
  end_time_of_day: "pm",
  venue: "Faneuil Hall Marketplace",
  address: "4 South Market Street",
  city: "Boston",
  state: "MA",
  zip: "02109",
  venue_website: "https://faneuilhallmarketplace.com/",
  event_website: "https://www.pitchinginforkids.org/events"
)

Event.create(
  charity_id: 6,
  user_id: 1,
  name: "Chefs for Jimmy",
  description: "Chefs for Jimmy offers participants a memorable evening with delicious local dishes, raising money for cancer research and patient care at Dana-Farber.",
  event_date: "January 24, 2020",
  month: "01",
  date: "24",
  year: "2020",
  start_time: "6:30",
  start_time_of_day: "pm",
  end_time: "9:30",
  end_time_of_day: "pm",
  venue: "Chez Josef",
  address: "176 Shoemaker Lane",
  city: "Agawam",
  state: "MA",
  zip: "01001",
  venue_website: "https://www.chezjosef.com/",
  event_website: "http://www.jimmyfund.org/events/cancer-fundraising-events/chefs-for-jimmy/"
)
