import React from "react";
import ReactDOM  from "react-dom/client";


const Title=()=>(
  <h1>This is title</h1>
)
const Header=()=>(
  <div className="header">
  <Title/>
     <div className="nav-items">
    <ul>
      <li>Home</li>
      <li>Cart</li>
      <li>Aboutus</li>
    </ul>
    </div>
  </div>
)
// config driven UI
const ResturantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "46964",
      name: "Bhagat Mishthan Bhandar",
      uuid: "20259779-5112-4c2f-96c6-9185a3322936",
      city: "12",
      area: "Sindhi Camp",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "hfn18ntb6dcukg5oucsd",
      cuisines: ["Sweets", "Snacks"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 20,
      maxDeliveryTime: 30,
      slaString: "20-30 MINS",
      lastMileTravel: 2.0999999046325684,
      slugs: {
        restaurant: "bhagat-mishthan-bhandar-mi-road-c-scheme",
        city: "jaipur",
      },
      cityState: "12",
      address:
        "Plot No 2, Galundia Bhavan, Opp. Aakashvani, MI Road, Jaipur, Rajasthan 302001",
      locality: "MI Road",
      parentId: 43944,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT150 off",
        shortDescriptionList: [
          {
            meta: "FLAT150 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT150 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹150 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT150 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2300,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2300,
        message: "",
        title: "Delivery Charge",
        amount: "2300",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5751130~p=1~eid=00000185-fb96-d5fc-1f2e-261600560162",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "46964",
        deliveryTime: 22,
        minDeliveryTime: 20,
        maxDeliveryTime: 30,
        lastMileTravel: 2.0999999046325684,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.5",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "55887",
      name: "Rawat Mishthan Bhandar",
      uuid: "2049f63f-79e1-4634-9a30-135430346fe1",
      city: "12",
      area: "Sindhi Camp",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "uzklu7r1dd7kc1lto5l5",
      cuisines: [
        "North Indian",
        "Thalis",
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 MINS",
      lastMileTravel: 2.200000047683716,
      slugs: {
        restaurant: "rawat-mishthan-bhandar-sindhi-camp-sindhi-camp",
        city: "jaipur",
      },
      cityState: "12",
      address: "Opposite Polovictory Cinema, Station Road, Sindhi Camp, Jaipur",
      locality: "Station Road",
      parentId: 167813,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "EXCLUSIVE",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2300,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2300,
        message: "",
        title: "Delivery Charge",
        amount: "2300",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "55887",
        deliveryTime: 28,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        lastMileTravel: 2.200000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "648274",
      name: "Carbon",
      uuid: "b447f6d0-fbd4-4b1f-ad1f-9e3118bd0a56",
      city: "12",
      area: "C Scheme",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "e163346a6a126e1d7afb9ed10348c18b",
      cuisines: ["North Indian", "Fast Food", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: "27 MINS",
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: "carbon-c-scheme-c-scheme",
        city: "jaipur",
      },
      cityState: "12",
      address:
        "GROUND FLOOR  AMIR MANZIL  F-6A, RAMESH ,MARG, C  SCHEME ,,Jaipur II Ward 32,Jaipur,Rajasthan  302005",
      locality: "Amir Manzil",
      parentId: 55914,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2300,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2300,
        message: "",
        title: "Delivery Charge",
        amount: "2300",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5658398~p=4~eid=00000185-fb96-d5fc-1f2e-261700560400",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "648274",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "--",
      totalRatings: 0,
      new: true,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "442172",
      name: "SPICY CHICKEN BIRYANI",
      uuid: "e1e9b2dc-5022-4230-a8dc-e8311313a188",
      city: "12",
      area: "C Scheme",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "y9tobpjpolwmelchiluz",
      cuisines: ["Biryani"],
      tags: [],
      costForTwo: 10000,
      costForTwoString: "₹100 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 2.5,
      slugs: {
        restaurant: "spicy-chicken-biryani-c-scheme-c-scheme",
        city: "jaipur",
      },
      cityState: "12",
      address: "Near vodafone store Ahinsha Circle C Scheme, Jaipur",
      locality: "Vodafone Store",
      parentId: 266339,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2300,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2300,
        message: "",
        title: "Delivery Charge",
        amount: "2300",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5605306~p=7~eid=00000185-fb96-d5fc-1f2e-261800560749",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "442172",
        deliveryTime: 31,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 2.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "529795",
      name: "Shekhawati Thali",
      uuid: "febd8c60-a359-4eea-a2a3-8fd8b91f1f5d",
      city: "12",
      area: "Mansarovar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "gq1qzctjmvoawrj5oa21",
      cuisines: ["North Indian", "Indian"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: "27 MINS",
      lastMileTravel: 1.100000023841858,
      slugs: {
        restaurant: "daawat-e-chaska-malviya-nagar-malviya-nagar",
        city: "jaipur",
      },
      cityState: "12",
      address:
        "Plot no 74/75  opposite corporate park, ajmer road,gopalbari (Hotal spark) jaipur",
      locality: "Kaveri Path",
      parentId: 182729,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2300,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2300,
        message: "",
        title: "Delivery Charge",
        amount: "2300",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "529795",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 1.100000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  }
];

const ResturantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  minDeliveryTime,
}) => {
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
      />
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h4>minDeliveryTime {minDeliveryTime}</h4>
    </div>
  );
};

const Body =()=>{
  return (
    <div className="resturent">
      {ResturantList.map((resturent)=>{
        return <ResturantCard {...resturent.data} />;
      })
}
    </div>
  );
}

const Footer=()=>{
  return(
    <h1>Footer</h1>
  )
}
//Component composition
const AppLayout=()=>{
  return(
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )}

  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
