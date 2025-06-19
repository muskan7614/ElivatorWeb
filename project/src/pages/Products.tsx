import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import Econovator2 from '../Assets/Econovator2.jpg'
import Premiavator1 from '../Assets/Premiavator1.jpg'
import Elitavator1 from '../Assets/Elitavator1.jpg'


const products = [
  {
    id: 'passenger-lift',
    name: 'Passenger Lift',
    category: 'Budget-Friendly',
    image: Econovator2,
    description: 'Cost-effective elevator solution without compromising on safety and reliability.',
    features: ['Energy Efficient', 'Compact Design', 'Easy Maintenance', 'Budget-Friendly'],
    price: 'Starting from ₹8,50,000',
    rating: 4.5,
    subproducts: [
      {
        id: 'premiavators-floater',
        name: 'Premiavators Floater Passenger Lift',
        images: [
          Econovator2,
          Econovator2,
          Premiavator1,
          Premiavator1,
        ],
        price: 'Rs 14,50,000',
        specs: {
          'Capacity': '10 Persons',
          'Brand': 'Liftaas',
          'Usage/Application': 'Residential',
          'Max Persons': '15',
          'Door Style': 'Automatic',
          'Maximum Load': '1000 Kg',
          'Door Width': '4 Feet',
          'Country of Origin': 'Made in India'
        },
        description: '“Liftas Components Private Limited” is a well-known firm which is affianced in trading an extensive assortment of Home Lifts, Goods Lift, Capsule Elevators, Corporate Lifts, Passenger Elevators, etc. Apart from this we also provide Lift Maintenance Service, Lift Installation Service, etc. We are a trustworthy organization that is instrumental in providing extremely durable and reliable range of lifts as per the global set norms and in diverse specifications. Located at Gurgaon (Haryana, India), we are connected with the prominent and trustworthy vendors of the market. Under the headship of our mentor “Mr. Amit Goel,” we have been able to accomplish ever-evolving needs of customers.'
      },
      {
        id: 'residential-passenger',
        name: 'Residential Passenger Elevator',
        images: [
          '/assets/residential1.jpg',
          '/assets/residential2.jpg',
          '/assets/residential3.jpg',
          '/assets/residential4.jpg',
        ],
        price: 'Rs 7,50,000',
        specs: {
          'Capacity': '6 Persons',
          'Brand': 'Liftaas',
          'Usage/Application': 'Residential',
          'Max Persons': '6',
          'Door Style': 'Automatic',
          'Maximum Load': '600 Kg',
          'Door Width': '3 Feet',
          'Country of Origin': 'Made in India'
        },
        description: '“Liftas Components Private Limited” is a well-known firm which is affianced in trading an extensive assortment of Home Lifts, Goods Lift, Capsule Elevators, Corporate Lifts, Passenger Elevators, etc. Apart from this we also provide Lift Maintenance Service, Lift Installation Service, etc. We are a trustworthy organization that is instrumental in providing extremely durable and reliable range of lifts as per the global set norms and in diverse specifications. Located at Gurgaon (Haryana, India), we are connected with the prominent and trustworthy vendors of the market. Under the headship of our mentor “Mr. Amit Goel,” we have been able to accomplish ever-evolving needs of customers.'
      },
      {
        id: 'elitavators-floater',
        name: 'Elitavators Floater Passenger Lift',
        images: [
          '/assets/elitavators1.jpg',
          '/assets/elitavators2.jpg',
          '/assets/elitavators3.jpg',
          '/assets/elitavators4.jpg',
        ],
        price: 'Rs 16,00,000',
        specs: {
          'Capacity': '12 Persons',
          'Brand': 'Liftaas',
          'Usage/Application': 'Commercial',
          'Max Persons': '18',
          'Door Style': 'Automatic',
          'Maximum Load': '1200 Kg',
          'Door Width': '4.5 Feet',
          'Country of Origin': 'Made in India'
        },
        description: '“Liftas Components Private Limited” is a well-known firm which is affianced in trading an extensive assortment of Home Lifts, Goods Lift, Capsule Elevators, Corporate Lifts, Passenger Elevators, etc. Apart from this we also provide Lift Maintenance Service, Lift Installation Service, etc. We are a trustworthy organization that is instrumental in providing extremely durable and reliable range of lifts as per the global set norms and in diverse specifications. Located at Gurgaon (Haryana, India), we are connected with the prominent and trustworthy vendors of the market. Under the headship of our mentor “Mr. Amit Goel,” we have been able to accomplish ever-evolving needs of customers.'
      }
    ]
  },
  {
    id: 'elevator-lift',
    name: 'Elevator Lift',
    category: 'Premium Series',
    image: Premiavator1,
    description: 'Premium elevator with advanced features and elegant design for luxury spaces.',
    features: ['Smart Controls', 'Premium Finishes', 'Quiet Operation', 'Advanced Safety'],
    price: 'Starting from ₹15,00,000',
    rating: 4.8,
    subproducts: [
      {
        id: 'minivator-floater',
        name: 'Minivator Floater Passenger Lift',
        images: ['/assets/elevator-auto1.jpg', '/assets/elevator-auto2.jpg','/assets/elevator-auto2.jpg'],
        price: 'Rs 6,53,000',
        specs: {
          'Capacity': '10 Persons',
          'Brand': 'Residential',
          'Usage/Application': 'Liftas',
          'Max Persons': '13',
          'Door Style': 'Automatic',
          'Maximum Load': '1500 Kg',
          'Door Width': '4 Feet',
          'Country of Origin': 'Made in India'
        },
        description: ' “Liftas Components Private Limited” is a well-known firm which is affianced in trading an extensive assortment of Home Lifts, Goods Lift, Capsule Elevators, Corporate Lifts, Passenger Elevators, etc. Apart from this we also provide Lift Maintenance Service, Lift Installation Service, etc. We are a trustworthy organization that is instrumental in providing extremely durable and reliable range of lifts as per the global set norms and in diverse specifications. Located at Gurgaon (Haryana, India), we are connected with the prominent and trustworthy vendors of the market. Under the headship of our mentor “Mr. Amit Goel,” we have been able to accomplish ever-evolving needs of customers..'
      },
      {
        id: 'office-building-lift',
        name: 'Office Building Lift',
        images: ['/assets/elevator-manual1.jpg', '/assets/elevator-auto2.jpg','/assets/elevator-auto2.jpg'],
        price: 'Rs 12,00,000',
        specs: {
          'Capacity': '6 Persons',
          'Brand': 'Liftaas',
          'Usage/Application': 'Duplexing',
          'Door Style': 'Automatic',
          'Cabin Finish': 'Stainless Steel',
          'Machine Type': 'Geared',
          'Country of Origin': 'Made in India'
        },
        description: '“Liftas Components Private Limited” is a well-known firm which is affianced in trading an extensive assortment of Home Lifts, Goods Lift, Capsule Elevators, Corporate Lifts, Passenger Elevators, etc. Apart from this we also provide Lift Maintenance Service, Lift Installation Service, etc. We are a trustworthy organization that is instrumental in providing extremely durable and reliable range of lifts as per the global set norms and in diverse specifications. Located at Gurgaon (Haryana, India), we are connected with the prominent and trustworthy vendors of the market. Under the headship of our mentor “Mr. Amit Goel,” we have been able to accomplish ever-evolving needs of customers.'
      },
      {
        id: 'elevator-for-high-rise',
        name: 'Elevator For High Rise Building',
        images: ['/assets/elevator-manual1.jpg', '/assets/elevator-auto2.jpg','/assets/elevator-auto2.jpg'],
        price: 'Rs 16,00,000',
        specs: {
          'Capacity': '6 Persons',
          'Brand': 'Johnson',
          'Signalization': 'Simplexing',
          'Door Style': 'Automatic',
          'Drive Technology': 'Hydraulic, Gearless Traction, Geared Traction, Customized',
          'Country of Origin': 'Made in India'
        },
        description: 'We offer Elevator for High Rise Building which are elegant, quick, comfortable and secure mode for vertical transport at high rise building. Our elevators are an excellent blend of state of the art technology which is focusing on safety without any disturbance to free motion passengers.Price range - 7.25 to 80 lakh T&C. apply.'
      }
    ]
  },
  {
    id: 'residential-elevator',
    name: 'Residential Elevators',
    category: 'Elite Series',
    image: Elitavator1,
    description: 'Elite series elevator with cutting-edge technology and superior performance.',
    features: ['IoT Enabled', 'Touchscreen Controls', 'Biometric Access', 'Energy Star Rated'],
    price: 'Starting from ₹25,00,000',
    rating: 4.9,
    subproducts: [
      {
        id: 'home-elevator',
        name: 'Home Elevator',
        images: ['/assets/residential-compact1.jpg', '/assets/residential-compact2.jpg','/assets/residential-compact2.jpg'],
        price: 'Rs 9,00,000',
        specs: {
          'Capacity': '12 Persons',
          'Brand': 'Liftaas',
          'Cabin Finish': 'Stainless Steel ,Glass',
          
          'Door Style': 'Automatic',
          'Operating Height': '4 Floors',
          'Installation Provided': 'Yes',
          'Country of Origin': 'Made in India'
        },
        description: '“Liftas Components Private Limited” is a well-known firm which is affianced in trading an extensive assortment of Home Lifts, Goods Lift, Capsule Elevators, Corporate Lifts, Passenger Elevators, etc. Apart from this we also provide Lift Maintenance Service, Lift Installation Service, etc. We are a trustworthy organization that is instrumental in providing extremely durable and reliable range of lifts as per the global set norms and in diverse specifications. Located at Gurgaon (Haryana, India), we are connected with the prominent and trustworthy vendors of the market. Under the headship of our mentor “Mr. Amit Goel,” we have been able to accomplish ever-evolving needs of customers.'
      },
      {
        id: 'home-lift',
        name: 'Home Lift',
        images: ['/assets/residential-luxury1.jpg', '/assets/residential-luxury2.jpg','/assets/residential-luxury2.jpg'],
        price: 'Rs 9,00,000',
        specs: {
          'Capacity': '6 Persons',
          'Brand': 'Liftaas',
          'Cabin Finish': 'Glass',
          'Door Style': 'Automatic',
          'Operating Height': '4 Floors',
          'Installation Provided': 'Yes',
          'Country of Origin': 'Made in India'
        },
        description: '“Liftas Components Private Limited” is a well-known firm which is affianced in trading an extensive assortment of Home Lifts, Goods Lift, Capsule Elevators, Corporate Lifts, Passenger Elevators, etc. Apart from this we also provide Lift Maintenance Service, Lift Installation Service, etc. We are a trustworthy organization that is instrumental in providing extremely durable and reliable range of lifts as per the global set norms and in diverse specifications. Located at Gurgaon (Haryana, India), we are connected with the prominent and trustworthy vendors of the market. Under the headship of our mentor “Mr. Amit Goel,” we have been able to accomplish ever-evolving needs of customers.'
      },
      {
        id: 'automatic-hydraulic-passenger-lift',
        name: 'Automatic Hydraulic Passenger Lift',
        images: ['/assets/residential-luxury1.jpg', '/assets/residential-luxury2.jpg','/assets/residential-luxury2.jpg'],
        price: 'Rs 6,00,000',
        specs: {
          'Capacity': '6 Persons',
          'Brand': 'Liftaas Component Private Limited',
          'Usage/Application'	:'Residential',
          'Door Style': 'Automatic',
          'Maxximum Load': '1300 kg',
          'Door Width': '4 Feet',
          'Country of Origin': 'Made in India'
        },
        description: 'We are engaged in offering the best quality of product to our clients. Our range of all products is widely appreciated by our clients.'
      },
      {
        id: 'vaccum-elevator-lift',
        name: 'Vacuum Elevator Lift',
        images: ['/assets/residential-luxury1.jpg', '/assets/residential-luxury2.jpg','/assets/residential-luxury2.jpg'],
        price: 'Rs 17,00,000',
        specs: {
          'Capacity': '2 Persons',
          'Brand': 'Liftaas Components Private Limited',
          'Usages': 'Home',
          'Door Style': 'Automatic',
          'Shape': 'Round',
          'Power': 'Electric',
          'Country of Origin': 'Made in India'
        },
        description: 'We are engaged in offering the best quality of product to our clients. Our range of all products is widely appreciated by our clients.'
      },
    ]
  },
  {
    id: 'freight-elevator',
    name: 'Freight Elevator',
    category: 'Elderly Friendly',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Specially designed elevator with accessibility features for elderly and disabled users.',
    features: ['Wheelchair Accessible', 'Audio Announcements', 'Large Buttons', 'Emergency Phone'],
    price: 'Starting from ₹12,00,000',
    rating: 4.7,
    subproducts: [
      {
        id: 'alexander-freight',
        name: 'Alexander Frieght Elevators',
        images: ['/assets/freight-industrial1.jpg', '/assets/freight-industrial2.jpg', '/assets/freight-industrial2.jpg'],
        price: 'Rs 12,00,000',
        specs: {
          
          'Brand': 'Liftaas',
          'Usage/Application': 'Residential',
          'Max Persons': '15',
          
          'Maximum Load': '1000 Kg',
          'Door Width': '10 Feet',
          'Travel height':'14Feet',
          'Country of Origin': 'Made in India'
        },
        description: 'Liftas Alexander freight elevatos are the bestexample of efficient engineering for vertical trasportin industrial setup. It is built of the State-of -- artcomponents and technology to enjoy the loadhandling capacity in an enhanced manner. It is toocustomizable to the needs and freight of differentindustries. Alexander Freight Elevator can withstandthe daily toils of vertical transportation of heavy loadswith simplicity aand ease.Standard Features. Down Collective control· VVVF Drive. Emergency Light· Self diagnosis of breakdown. Automatic leveling with ground floor on powerrestoration. Floor position and direction indicator in car andlandings. Terminal approach slow down for safetyFinal limit protection. Lift out of order display· Attend opreration for non stop destinationlanding. Direction change function in attend mode· Emergency alarm. Door Open Announcement System· Intercom Facility. Home Landing'
      },
      {
        id: 'twis-lift',
        name: 'Twis Lift Elevators',
        images: ['/assets/freight-commercial1.jpg', '/assets/freight-commercial2.jpg', '/assets/freight-commercial2.jpg'],
        price: 'Rs 9,65,000',
        specs: {
          
          'Brand': 'Otis',
          'Usage/Application': 'Residentia',
          'Max Persons': '15',
          
          'Maximum Load': '1500 Kg',
          'Travel height': '80 Feet',
          'Country of Origin': 'Made in India'
        },
        description: ' “Liftas Components Private Limited” is a well-known firm which is affianced in trading an extensive assortment of Home Lifts, Goods Lift, Capsule Elevators, Corporate Lifts, Passenger Elevators, etc. Apart from this we also provide Lift Maintenance Service, Lift Installation Service, etc. We are a trustworthy organization that is instrumental in providing extremely durable and reliable range of lifts as per the global set norms and in diverse specifications. Located at Gurgaon (Haryana, India), we are connected with the prominent and trustworthy vendors of the market. Under the headship of our mentor “Mr. Amit Goel,” we have been able to accomplish ever-evolving needs of customers.'
      },
      {
        id: 'johnson-lift',
        name: 'Johnson Lifts',
        images: ['/assets/freight-industrial1.jpg', '/assets/freight-industrial2.jpg', '/assets/freight-industrial2.jpg'],
        price: 'Rs 12,00,000',
        specs: {
          'Capacity':'10 Person',
          'Door Style': 'Manual',
          'Payment': 'Online',
          'Brand': 'Johnson',
          'Country of Origin': 'Made in India'
        },
        description: '“Liftas Components Private Limited” is a well-known firm which is affianced in trading an extensive assortment of Home Lifts, Goods Lift, Capsule Elevators, Corporate Lifts, Passenger Elevators, etc. Apart from this we also provide Lift Maintenance Service, Lift Installation Service, etc. We are a trustworthy organization that is instrumental in providing extremely durable and reliable range of lifts as per the global set norms and in diverse specifications. Located at Gurgaon (Haryana, India), we are connected with the prominent and trustworthy vendors of the market. Under the headship of our mentor “Mr. Amit Goel,” we have been able to accomplish ever-evolving needs of customers.'
      },
      {
        id: 'freight-elevator',
        name: 'Freight Elevator',
        images: ['/assets/freight-industrial1.jpg', '/assets/freight-industrial2.jpg', '/assets/freight-industrial2.jpg'],
        price: 'Rs 9,50,000',
        specs: {
          'Material':'Stainless Steel',
          'Capacity ':'4 Ton',
          'Brand': 'Liftaas',
          'Usage/Application': 'Industrial',
          'Warranty': '12 month',
          'Door Style': 'Manual(Caged)',
          'Country of Origin': 'Made in India'
        },
        description: '“Liftas Components Private Limited” is a well-known firm which is affianced in trading an extensive assortment of Home Lifts, Goods Lift, Capsule Elevators, Corporate Lifts, Passenger Elevators, etc. Apart from this we also provide Lift Maintenance Service, Lift Installation Service, etc. We are a trustworthy organization that is instrumental in providing extremely durable and reliable range of lifts as per the global set norms and in diverse specifications. Located at Gurgaon (Haryana, India), we are connected with the prominent and trustworthy vendors of the market. Under the headship of our mentor “Mr. Amit Goel,” we have been able to accomplish ever-evolving needs of customers.'
      },
    ]
  },
  {
    id: 'capsule-elevator',
    name: 'Capsule Elevator',
    category: 'Medical Grade',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Hospital-grade elevator designed for medical facilities with stretcher compatibility.',
    features: ['Stretcher Compatible', 'Antibacterial Coating', 'Emergency Power', 'Smooth Operation'],
    price: 'Starting from ₹18,00,000',
    rating: 4.8,
    subproducts: [
      {
        id: 'grace-capsule',
        name: 'Grace Capsule Elevators',
        images: ['/assets/capsule-panoramic1.jpg', '/assets/capsule-panoramic2.jpg','/assets/capsule-panoramic2.jpg'],
        price: 'Rs 10,50,000',
        specs: {
          'Capacity': '4 Persons',
          'Material':'Stainless Steel',
          'Cabin Finish':'Stainless Steel',
          'Usage/Application': 'Office',
          'Machine Room':'Required',
          'Warranty': '18 months',
          'Drive Type': 'AC',
          'Signalization': 'Duplexing',
          'Door Style': 'Automatic'
        },
        description: 'Grace Capsule Elevators from Liftas act as anarchitectural attraction on prestigious buildingsand heights. It is not wrong to term them asembellishments of a building as they enhance itsbeauty and bring life to the building. With LiftasCapsule elevators design. features and other optionsprovide the optimum travel comfort and leisure. Theyhave aesthetically attractive interious with large glassviewing panel.Standard Features:. Digital car position indicator at all floors· Full voltage protection· Veriable-frequency variable voltage drive forcontrolling the rotational speed· UP/DN indivator at all floors. Car ventilation and light at all floors. Emergency alarm bell'
      },
      {
        id: 'commercial-capsule',
        name: 'Commercial Capsule Elevator',
        images: ['/assets/capsule-designer1.jpg', '/assets/capsule-designer2.jpg','/assets/capsule-designer1.jpg'],
        price: 'Rs  7,50,000',
        specs: {
          'Capacity': '10 Persons',
          'Material': 'Glass',
          'Usage/Application': 'Malls',
          'Cabin Finish': 'Glass',
          'Warranty': '18 Months',
          'Door Style': 'Automatic'
        },
        description: '“Liftas Components Private Limited” is a well-known firm which is affianced in trading an extensive assortment of Home Lifts, Goods Lift, Capsule Elevators, Corporate Lifts, Passenger Elevators, etc. Apart from this we also provide Lift Maintenance Service, Lift Installation Service, etc. We are a trustworthy organization that is instrumental in providing extremely durable and reliable range of lifts as per the global set norms and in diverse specifications. Located at Gurgaon (Haryana, India), we are connected with the prominent and trustworthy vendors of the market. Under the headship of our mentor “Mr. Amit Goel,” we have been able to accomplish ever-evolving needs of customers.'
      },
      {
        id: 'capsule-lift',
        name: 'Capsule Lift',
        images: ['/assets/capsule-designer1.jpg', '/assets/capsule-designer2.jpg','/assets/capsule-designer1.jpg'],
        price: 'Rs  7,50,000',
        specs: {
          'Capacity': '10 Persons',
          'Material': 'Glass',
          'Usage/Application': 'Malls',
          'Cabin Finish': 'Glass',
          'Warranty': '18 Months,12 Months',
          'Door Style': 'Automatic'
        },
        description: '“Liftas Components Private Limited” is a well-known firm which is affianced in trading an extensive assortment of Home Lifts, Goods Lift, Capsule Elevators, Corporate Lifts, Passenger Elevators, etc. Apart from this we also provide Lift Maintenance Service, Lift Installation Service, etc. We are a trustworthy organization that is instrumental in providing extremely durable and reliable range of lifts as per the global set norms and in diverse specifications. Located at Gurgaon (Haryana, India), we are connected with the prominent and trustworthy vendors of the market. Under the headship of our mentor “Mr. Amit Goel,” we have been able to accomplish ever-evolving needs of customers.'
      }
    ]
  },
  {
    id: 'passenger-lift-and-elevator',
    name: 'Passenger Lift And Elevator',
    category: 'Freight Elevator',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Heavy-duty freight elevator for industrial and commercial cargo transportation.',
    features: ['High Load Capacity', 'Durable Construction', 'Industrial Grade', 'Weather Resistant'],
    price: 'Starting from ₹20,00,000',
    rating: 4.6,
    subproducts: [
      {
        id: 'liftas-commercial-passenger',
        name: 'Liftas Commercial Passenger Elevator MRL',
        images: ['/assets/passenger-standard1.jpg', '/assets/passenger-standard2.jpg',, '/assets/passenger-standard2.jpg'],
        price: 'Rs 8,00,000',
        specs: {
          'Capacity': '12 Persons',
          'Brand': 'Liftaas',
          'Machine Room': 'With Machine Room',
          'Machine Type':'Geared,Geared less',
          'Max Persons': '18',
          'Door Style': 'Automatic,Manual',
          'Maximum Load': '408 Kg - 1768 kg',
          'Warranty': '12 Months',
          'Area Of Cabin':'5/5',
          'Height':'50ft',
          'Country of Origin': 'Made in India'
        },
        description: ' A form of vertical transportation system known as a “commercial elevator” is made expressly for usage in public buildings including offices, hotels, malls, hospitals, and other public buildings.Additional Information:Delivery Time: 45-60 days'
      },
      {
        id: 'residential-passenger',
        name: 'Residential Passenger Elevator',
        images: ['/assets/passenger-premium1.jpg', '/assets/passenger-premium2.jpg', '/assets/passenger-premium2.jpg'],
        price: 'Rs 6,50,000',
        specs: {
          'Capacity': '10 Persons',
          'Brand': 'Liftaas',
          'Cabin Finish': 'Stainless Steel',
          'Machine Room': 'Required',
          'Door Style': 'Automatic',
          'Operating Height': '4 Floors',
          'Installation Provided': 'Yes',
          'Country of Origin': 'Made in India'
        },
        description: '“Liftas Components Private Limited” is a well-known firm which is affianced in trading an extensive assortment of Home Lifts, Goods Lift, Capsule Elevators, Corporate Lifts, Passenger Elevators, etc. Apart from this we also provide Lift Maintenance Service, Lift Installation Service, etc. We are a trustworthy organization that is instrumental in providing extremely durable and reliable range of lifts as per the global set norms and in diverse specifications. Located at Gurgaon (Haryana, India), we are connected with the prominent and trustworthy vendors of the market. Under the headship of our mentor “Mr. Amit Goel,” we have been able to accomplish ever-evolving needs of customers.'
      },
      {
        id: 'hydraulic-passenger',
        name: 'Hydraulic Passenger Elevator',
        images: ['/assets/passenger-premium1.jpg', '/assets/passenger-premium2.jpg', '/assets/passenger-premium2.jpg'],
        price: 'Rs 6,70,000',
        specs: {
          'Lift Type': 'Passenger Lift',
          'AMC': 'Not Provided',
          'Warranty': '1 year',
          'Country of Origin': 'Made in India'
        },
        description: '“Liftas Components Private Limited” is a well-known firm which is affianced in trading an extensive assortment of Home Lifts, Goods Lift, Capsule Elevators, Corporate Lifts, Passenger Elevators, etc. Apart from this we also provide Lift Maintenance Service, Lift Installation Service, etc. We are a trustworthy organization that is instrumental in providing extremely durable and reliable range of lifts as per the global set norms and in diverse specifications. Located at Gurgaon (Haryana, India), we are connected with the prominent and trustworthy vendors of the market. Under the headship of our mentor “Mr. Amit Goel,” we have been able to accomplish ever-evolving needs of customers.'
      }
    ]
  },
  {
    id: 'goods-lift',
    name: 'Goods Lift',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Compact home elevator perfect for residential buildings and private homes.',
    features: ['Space Saving', 'Home Integration', 'Quiet Operation', 'Custom Interiors'],
    price: 'Starting from ₹10,00,000',
    rating: 4.4,
    subproducts: [
      {
        id: 'high-speed-elevator',
        name: 'High Speed Elevators',
        images: ['/assets/goods-mini1.jpg', '/assets/goods-mini2.jpg','/assets/goods-mini1.jpg'],
        price: 'Rs 8,00,000',
        specs: {
          'Capacity': '13 Persons',
          'Brand': 'Liftas',
          'Motor Power': '3 Phase',
          'Max Height': '8.5 feet',
          'Door Style': 'Automatic',
          'Usage/Application': 'Malls',
          'Max Person': '13 Person',
          'Country of Origin': 'Made in India'
        },
        description: 'We are offering High Speed Elevator to our clients.Our offered Passenger Elevator is a combination of latest technology and superior grade components. These are designed keeping the thoughtfulness the interiors, collective control, passenger capacity and efficient workings. These find its applications in residential buildings, offices and various other places. Additionally,Price range - 6 to 80 lakh'
      },
      {
        id: 'goods-cum-passenger-elevator',
        name: 'Goods Cum Passenger Elevator',
        images: ['/assets/goods-heavy1.jpg', '/assets/goods-heavy2.jpg', '/assets/goods-heavy2.jpg'],
        price: 'Rs 15,00,000',
        specs: {
          'Material':'Mild Steel',
          'Capacity': '10 Ton',
          'Brand': 'Liftas Component Private Limited',
          'Usage/Application': 'Malls',
          'Max Persons': '18',
          'Door Style': 'Automatic',
          'Drive Type': 'AC',
        },
        description: 'We are engaged in offering the best quality of product to our clients. Our range of all products is widely appreciated by our clients.'
      },
      {
        id: 'automatic-elevator',
        name: 'Automatic Elevator',
        images: ['/assets/goods-heavy1.jpg', '/assets/goods-heavy2.jpg', '/assets/goods-heavy2.jpg'],
        price: 'Rs 5,50,000',
        specs: {
          'Capacity': '12 Persons',
          'Brand': 'Liftaas',
          'Usage/Application': 'Office',
          'Max Persons': '18',
          'Door Style': 'Automatic',
          'Maximum Height': '1200 Kg',
          'Maximum Speed': '0.3 M/s',
          'Country of Origin': 'Made in India'
        },
        description: ' “Liftas Components Private Limited” is a well-known firm which is affianced in trading an extensive assortment of Home Lifts, Goods Lift, Capsule Elevators, Corporate Lifts, Passenger Elevators, etc. Apart from this we also provide Lift Maintenance Service, Lift Installation Service, etc. We are a trustworthy organization that is instrumental in providing extremely durable and reliable range of lifts as per the global set norms and in diverse specifications. Located at Gurgaon (Haryana, India), we are connected with the prominent and trustworthy vendors of the market. Under the headship of our mentor “Mr. Amit Goel,” we have been able to accomplish ever-evolving needs of customers.'
      }
    ]
  },
  {
    id: 'hospital-elevator',
    name: 'Hospital Elevator',
    category: 'High-Rise',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'High-speed elevator designed for tall buildings and skyscrapers.',
    features: ['High Speed', 'Advanced Control', 'Energy Efficient', 'Destination Control'],
    price: 'Starting from ₹30,00,000',
    rating: 4.9,
    subproducts: [
      {
        id: 'hospital-elevator',
        name: 'Hospital Elevator',
        images: ['/assets/hospital-stretcher1.jpg', '/assets/hospital-stretcher2.jpg', '/assets/hospital-stretcher2.jpg'],
        price: 'Rs 8,50,000',
        specs: {
          'Max Persons': '6 Persons',
          'Brand': 'Liftaas',
          'Usage/Application': 'Hospitals',
          'Max Speed': '2 m/s',
          'Capacity': '1020 kg',
          'Application': 'Stretcher Lift',
          'Country of Origin': 'Made in India'
        },
        description: ' “Liftas Components Private Limited” is a well-known firm which is affianced in trading an extensive assortment of Home Lifts, Goods Lift, Capsule Elevators, Corporate Lifts, Passenger Elevators, etc. Apart from this we also provide Lift Maintenance Service, Lift Installation Service, etc. We are a trustworthy organization that is instrumental in providing extremely durable and reliable range of lifts as per the global set norms and in diverse specifications. Located at Gurgaon (Haryana, India), we are connected with the prominent and trustworthy vendors of the market. Under the headship of our mentor “Mr. Amit Goel,” we have been able to accomplish ever-evolving needs of customers.'
      },
      {
        id: 'hospital-elevator-lift',
        name: 'Hospital Elevators Lifts',
        images: ['/assets/hospital-icu1.jpg', '/assets/hospital-icu2.jpg', '/assets/hospital-icu2.jpg'],
        price: 'Rs 9,00,000',
        specs: {
          'Max Persons': '6 Persons',
          'Usage/Application': 'Hospital',
          'Maximum Speed': '66',
          'Maximum Load': '408 Kg',
          'Country of Origin': 'Made in India'
        },
        description: ' “Liftas Components Private Limited” is a well-known firm which is affianced in trading an extensive assortment of Home Lifts, Goods Lift, Capsule Elevators, Corporate Lifts, Passenger Elevators, etc. Apart from this we also provide Lift Maintenance Service, Lift Installation Service, etc. We are a trustworthy organization that is instrumental in providing extremely durable and reliable range of lifts as per the global set norms and in diverse specifications. Located at Gurgaon (Haryana, India), we are connected with the prominent and trustworthy vendors of the market. Under the headship of our mentor “Mr. Amit Goel,” we have been able to accomplish ever-evolving needs of customers.'
      },
      {
        id: 'harbor-hospital-elevator',
        name: 'Harbor Hospital Elevators',
        images: ['/assets/hospital-icu1.jpg', '/assets/hospital-icu2.jpg', '/assets/hospital-icu2.jpg'],
        price: 'Rs 5,00,000',
        specs: {
          'Max Persons': '15 Persons',
          'Usage/Application': 'Residential',
          'Travel height': '60 Feet',
          'Maximum Load': '2000 Kg',
          'Door Width':'5 Feet',
          'Country of Origin': 'Made in India'
        },
        description: ' Liftas are primarily for moving stretchers withpatients up and down in a hospital, The Harbor rangeare made to the comfort of ergonomic design andappropriate dimensions to adjust patients onstretchers or wheelchairs, critical medical equipmentand medical staff. Harbor is confirmed to very highstandard of safety and offer an ultra smoothmovement for passengers and patients.Standard Features :-. Over speed protection· Full collective control· VVVF Drive· Emergency Light. Self Diagnosis of beakdown. Automatic leveling with forund floor on powerrestoration. Floor Position and direction indicator in car andlandings. Home landing. Terminal approach slow down for safety· Final limit protection· Attendant operation for non-stop destinaitonlanding· Direction change function in attendant mode· Emergency alarm· Full curtain infrared door safety (for automatedelevator)'
      }
    ]
  },
  {
    id: 'mrl-elevators',
    name: 'Mrl Elevators',
    category: 'Eco-Friendly',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Environmentally conscious elevator with green technology and energy recovery.',
    features: ['Energy Recovery', 'LED Lighting', 'Eco Materials', 'Carbon Neutral'],
    price: 'Starting from ₹16,00,000',
    rating: 4.7,
    subproducts: [
      {
        id: 'automatic-home-hydraulic-elevator',
        name: 'Automatic Home Hydraulic Elevator',
        images: ['/assets/mrl-gearless1.jpg', '/assets/mrl-gearless2.jpg', '/assets/mrl-gearless2.jpg'],
        price: 'Rs 8,50,000',
        specs: {
          'Capacity': '6 Persons',
          'Brand': 'Liftaas',
          'Usage/Application': 'Commercial',
          'Max passengers': '1 - 10 passengers',
          'Door Style': 'Automatic',
          'Maximum Load': '1500 Kg',
          'Machine Type':'Hydraulic Machine',
          'Phase':'Three Phase',
          'Voltage':'440v',
          'Country of Origin': 'Made in India'
        },
        description: 'Hydraulic elevators are a type of elevator that uses hydraulic fluid to move the elevator car up and down. Hydraulicelevators are typically used in low-rise buildings, as they are not as fast as traction elevators and have heightlimitations. However, hydraulic elevators are more energy-efficient than traction elevators, and they also have asmoother ride quality and operate with less noisevAdvantages. Less Expensive to install than other elevator types. Reduced Structural impact on building. 10% Less Space Required than Traction Lifts. Lower Operating costs· Less Maintenance RequiredDisadvantages. Limited Heigh Restrication. Ride Quality Influenced by Evironment: Heat/Cold. Slower Rise Than Traction Elevators, Average only 100-120Ft Per Minute Additional Information:Delivery Time: 30-45 days'
      },
      {
        id: 'hydraulic-home-lift',
        name: 'Hydraulic Home Lift',
        images: ['/assets/mrl-roomless1.jpg', '/assets/mrl-roomless2.jpg', '/assets/mrl-roomless2.jpg'],
        price: 'Rs 7,50,000',
        specs: {
          'Capacity': '6 Persons',
          'Brand': 'Liftaas',
          'Usage/Application': 'Home',
          'Max Persons': '18',
          'Door Style': 'Automatic',
          'Load Capacity': '408 Kg',
          'Shape': 'Rectangle',
          'Country of Origin': 'Made in India'
        },
        description: 'We are engaged in offering the best quality of product to our clients. Our range of all products is widely appreciated by our clients.'
      }
    ]
  },
  {
    id: 'dumbwaiter-elevator',
    name: 'Dumbwaiter Elevator',
    category: 'Smart Technology',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'AI-powered smart elevator with predictive maintenance and IoT connectivity.',
    features: ['AI Powered', 'Predictive Maintenance', 'Remote Monitoring', 'App Control'],
    price: 'Starting from ₹22,00,000',
    rating: 4.8,
    subproducts: [
      {
        id: 'automatic-dumbwaiter-lift',
        name: 'Automatic Dumbwaiter Lift',
        images: ['/assets/dumbwaiter-kitchen1.jpg', '/assets/dumbwaiter-kitchen2.jpg', '/assets/dumbwaiter-kitchen2.jpg'],
        price: 'Rs 5,00,000',
        specs: {
          'Material':'Stainless Steel',
          'Capacity': '5 Ton',
          'Brand': 'Liftaas',
          'Usage/Application': 'Industrial',
          'Door Style': 'Automatic',
          'Country of Origin': 'Made in India'
        },
        description: 'We are engaged in offering the best quality of product to our clients. Our range of all products is widely appreciated by our clients.'
      },
      {
        id: 'dishing-dumb-waiter',
        name: 'Dishing Dumb Waiter',
        images: ['/assets/dumbwaiter-hotel1.jpg', '/assets/dumbwaiter-hotel2.jpg','/assets/dumbwaiter-hotel2.jpg'],
        price: 'Rs 3,00,000',
        specs: {
          'Material':'Mild Steel',
          'Capacity': '6 Ton',
          'Brand': 'Liftas',
          'Usage/Application': 'Industrial',
          'Warranty':'24 months',
          'Max Persons': '18',
          'Door Style': 'Automatic',
          'Operating Height': '30 Feet',
          'Country of Origin': 'Made in India'
        },
        description: 'The Dishing Dumb Waiter elevator from Liftas areformed with specially designed for the hospitalitysector and industry. it has been extensively used intransporting food, crockery, cutlery, etc. verticallyfrom the Kitchen at floor to different floors in the hotel.Complete attention has been paid in making theelevators attentively keeping the hygienerequirements of the hotel. They are specially designedfor the smooth movement of fragile and delicatearticles crockery, etc.Standard features:· Load capacity between 50 to 250 kgs inincrements of 50 kgs. Standard speed of 0.25m/s· Drive unit:Traction drive, high quality reduction wormgrer, coupled with motor and magnetc discbrake and hand wheel· Cabin:SS / MS, centered suspension, guided on bothsides, fitted with removable shelf and withoutdoor. Landing DoorSS/MS Centre biparting vertical opening'
      }
    ]
  },
  {
    id: 'glass-elevator',
    name: 'Glass Elevator',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Ultra-luxury elevator with bespoke design and premium materials.',
    features: ['Bespoke Design', 'Premium Materials', 'Custom Lighting', 'Concierge Integration'],
    price: 'Starting from ₹35,00,000',
    rating: 5.0,
    subproducts: [
      {
        id: 'home-glass-elevator',
        name: 'Home Glass Elevator',
        images: ['/assets/glass-panoramic1.jpg', '/assets/glass-panoramic2.jpg','/assets/glass-panoramic2.jpg'],
        price: 'Rs 8,50,000',
        specs: {
          'Max Persons': '12 Persons',
          'Brand': 'Liftaas',
          'Speed': '	0.35 m/s',
          'Maximum Floor':'1 Floor - 3 Floor',
          'Material': 'Gearedless',
          'Area of Cabin': '5/5',
          'Cabin Design': 'Glass , Customization',
          'Country of Origin': 'Made in India'
        },
        description: 'The Awning range of Home Elevators from Liftas is highly customizable and scalable. Uriquely Created for instalation in Homes. These lifts are very much energy efficient and can run on a single phase connection. The aesthetics and intricate charm of these lifts add to aesthetics of all homes. They are very easy in Functionality and helpful in maintaining them. It has great value addition, emodying both the elegance and the high end technology.'
      },
      
    ]
  },
  {
    id: 'home-lift',
    name: 'Home Lift',
    category: 'Express',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Express elevator for buildings requiring fast vertical transportation.',
    features: ['Express Service', 'High Capacity', 'Fast Installation', 'Minimal Waiting'],
    price: 'Starting from ₹14,00,000',
    rating: 4.6,
    subproducts: [
      {
        id: 'small-home-lift',
        name: 'Small Home Lift',
        images: ['/assets/home-compact1.jpg', '/assets/home-compact2.jpg','/assets/home-compact2.jpg'],
        price: 'Rs 9,00,000',
        specs: {
          'Capacity': '4 Persons',
          'Cabin Finish': 'Glass, Stainless Steel',
          'Operating Height': '4 Floors',
          'Door Style': 'Automatic',
          'Installation Provided': 'Yes'
        },
        description: '“Liftas Components Private Limited” is a well-known firm which is affianced in trading an extensive assortment of Home Lifts, Goods Lift, Capsule Elevators, Corporate Lifts, Passenger Elevators, etc. Apart from this we also provide Lift Maintenance Service, Lift Installation Service, etc. We are a trustworthy organization that is instrumental in providing extremely durable and reliable range of lifts as per the global set norms and in diverse specifications. Located at Gurgaon (Haryana, India), we are connected with the prominent and trustworthy vendors of the market. Under the headship of our mentor “Mr. Amit Goel,” we have been able to accomplish ever-evolving needs of customers.'
      },
      {
        id: 'premium-home',
        name: 'Premium Home Lift',
        images: ['/assets/home-premium1.jpg', '/assets/home-premium2.jpg'],
        price: 'Rs 9,00,000',
        specs: {
          'Capacity': '12 Persons',
          'Brand': 'Liftaas',
          'Usage/Application': 'Commercial',
          'Max Persons': '18',
          'Door Style': 'Automatic',
          'Maximum Load': '1200 Kg',
          'Door Width': '4.5 Feet',
          'Country of Origin': 'Made in India'
        },
        description: 'Premium lift for villas.'
      }
    ]
  }
];

export const Products: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our Elevator Solutions
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of elevators designed to meet 
            every vertical transportation need with style and reliability.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      {renderStars(product.rating)}
                      <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">
                      {product.price}
                    </span>
                    <Link
                      to={`/products/${product.id}`}
                      className="flex items-center  bg-transparent-600 hover:bg-yellow-700 border border-yellow-700 text-black px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default products;