// import reactLogo from './images/reactLogo.png';
import omnifoodHero from './images/Omnifood/Omnifood-Hero.PNG';
import omnifoodAbout from './images/Omnifood/Omnifood-About.PNG';
import omnifoodContact from './images/Omnifood/Omnifood-Contact.PNG';
import omnifoodHow from './images/Omnifood/Omnifood-HowItWorks.PNG';
import omnifoodImgGallery from './images/Omnifood/Omnifood-ImageGallery.PNG';
import omnifoodLocations from './images/Omnifood/Omnifood-Locations.PNG';
import omnifoodPricing from './images/Omnifood/Omnifood-Pricing.PNG';
import omnifoodTestimonials from './images/Omnifood/Omnifood-Testimonials.PNG';
import HBacct from './images/HB/HB-acct.PNG';
import HBcart from './images/HB/HB-cart.PNG';
import HBhome from './images/HB/HB-home.PNG';
import HBlogin from './images/HB/HB-login.PNG';
import HBproduct from './images/HB/HB-product.PNG';
import HBstrains from './images/HB/HB-strains.PNG';
import HBstrains2 from './images/HB/HB-strains2.PNG';
import HBupsell from './images/HB/HB-upsell.PNG';
import StocksInfo from './images/Stocks/company-info1.PNG';
import StocksNews from './images/Stocks/company-news.png';
import StocksNews1 from './images/Stocks/company-news1.PNG';
import StocksPage from './images/Stocks/education-page.PNG';
import StocksPage2 from './images/Stocks/education-page2.PNG';
import StocksResults from './images/Stocks/education-results.PNG';
import StocksHome from './images/Stocks/homepage1.PNG';
import StocksSearch from './images/Stocks/search.PNG';

const cases = [
    {
        "ProjectID": 1,
        "path": "HB-ordering-site",
        "title": "Increase scalability with an e-commerce site",
        "image": HBproduct,
        "image-alt": "Heavenly Buds product page",
        "who": "Heavenly Buds",
        "what": "UI | UX | WordPress website design | Custom Theme",
        "result": "Over 140% increase in sales revenue",
        "appName": "Heavenly Buds Ordering Website",
        "link": "http://orders.heavenlybuds.com/",
        "github": "",
        "done-img1": HBhome,
        "done-img1-alt": "Heavenly Buds home page",
        "done-img2": HBstrains,
        "done-img2-alt": "Heavenly Buds strains page",
        "done-img3": HBstrains2,
        "done-img3-alt": "Heavenly Buds strains page with sticky nav",
        "done-img4": HBproduct,
        "done-img4-alt": "Heavenly Buds product page",
        "summary": `Heavenly Buds is a licensed recreational cannabis producer and processor in WA state.  They serve over 70 retail locations across the state with multiple brands and products.   They were previously receiving orders through email but were running into inventory and order fulfillment issues.  The goal was to create an online application to make their ordering process easier for their customers, reduce order fulfillment issues while increasing efficiency in their processes.
        The result of implementing the e-commerce site gave Heavenly Buds the ability to double their retail customer count and produce an increase of over 140% in overall sales revenue.  The ordering website currently processes over $1.2M in sales annually.`,
        "technology": "HTML | CSS | JavaScript | jQuery | WordPress",
        "role": "I contributed to the project by developing the UI/UX, custom theme and e-commerce website architecture design.  Coding was done by freelancer, Mario Espinosa.",
        "process": `I started by interviewing Heavenly Buds management to find out exactly what issues they were looking to resolve.  Email orders were taking a long time to process and they often ran out of inventory of certain products while customers were still ordering them.  This caused additional time going back and forth with retailers.  They also wanted an application that was easy to use and displayed the essence of their brands.
        I then connected with some of Heavenly Buds’ retail customers to find out what was important to this group.  The retailers are overwhelmed with phone calls, new companies seeking shelf space and customer issues.  They wanted something fast and easy to use, something that would make communication between the company seamless and something that had visuals of the products and important product info to make their purchase decisions.
        After defining each group’s needs, I sketched out the site theme, design and data flow.  Then, collaboration with Mario Espinosa began to code out the project.  We decided to use WordPress which addressed many of each group’s needs – ease of use for ordering and updating inventory, making product out of inventory unavailable and instant order status communication.`,
        "process-img1": HBlogin,
        "process-img1-alt": "Heavenly Buds login page",
        "process-img2": HBacct,
        "process-img2-alt": "Heavenly Buds account page - users can check order history, add order notes or change passwords",
        "process-img3": HBupsell,
        "process-img3-alt": "Added recommended products for upsell opportunities",
        "process-img4": HBcart,
        "process-img4-alt": "Heavenly Buds shopping cart with upsell products"
    },
    // {
    //     "ProjectID": 2,
    //     "path": "Land4Wholesale-website",
    //     "title": "Create Property Showcase to increase sales",
    //     "image": reactLogo,
    //     "image-alt": "alt text",
    //     "who": "CM3 Real Estate",
    //     "what": "UI | UX | Front End coding | Video editing",
    //     "result": "Cut days on market in half",
    //     "appName": "Land4Wholesale.com",
    //     "link": "",
    //     "github": "",
    //     "done-img1": reactLogo,
    //     "done-img1-alt": "alt text",
    //     "done-img2": reactLogo,
    //     "done-img2-alt": "alt text",
    //     "done-img3": reactLogo,
    //     "done-img3-alt": "alt text",
    //     "done-img4": reactLogo,
    //     "done-img4-alt": "alt text",
    //     "summary": `Land4Wholesale.com was owned by real estate investing company, CM3 Real Estate.  The company mainly focuses on commercial rentals but occasionally purchases raw land with optional zoning for commercial use.  Over time they created a stockpile of properties that they wanted to liquidate.  The goal was to create a website to showcase the properties to a wide range of both residential and commercial property buyers, deliver critical unique information needed to purchase raw land and market the properties on multiple platforms.`,
    //     "technology": "HTML | CSS | JavaScript | WordPress",
    //     "role": "I was sole contributor on each project – UI/UX, property data research, website design, video editing, Front-End coding and 3rd party integrations utilizing Zapier.com",
    //     "process": `I began the process by interviewing real estate agents and brokers on what kind of raw land properties they sought to purchase, what are the key property details needed to make a purchase and how do they determine a property’s value.  With this information I began to design an e-commerce style website which showcased each property and highlighted their needs.  Information and graphics from zoning to property GPS coordinates and boundary lines to 100-year flood zones and everything in between was included for each property.  
    //     Very quickly after launch we discovered there was a low response rate due to lack of compelling images, people had a hard time envisioning the possibilities with just plain pictures of trees and dirt.  We decided to have drones survey the properties and surrounding areas and marketed those videos for each property.  This dramatically increased the amount of interest in the properties and allowed for a 50% decrease in days on market which led to a much quicker liquidation of the properties.`,
    //     "process-img1": reactLogo,
    //     "process-img1-alt": "alt text",
    //     "process-img2": reactLogo,
    //     "process-img2-alt": "alt text",
    //     "process-img3": reactLogo,
    //     "process-img3-alt": "alt text",
    //     "process-img4": reactLogo,
    //     "process-img4-alt": "alt text"
    // },
    {
        "ProjectID": 3,
        "path": "stocks-analysis",
        "title": "Company stock news & info with investing education",
        "image": StocksHome,
        "image-alt": "Stocks Analysis homepage",
        "who": "Useful for New Investors",
        "what": "UI | UX | Design | Front End coding | RESTful APIs",
        "result": "Increased understanding of stock & options investing",
        "appName": "Stocks Analysis",
        "link": "https://miguelr215.github.io/stocks-analysis/",
        "github": "https://github.com/miguelr215/stocks-analysis",
        "done-img1": StocksHome,
        "done-img1-alt": "Stocks Analysis homepage",
        "done-img2": StocksInfo,
        "done-img2-alt": "Stocks Analysis stock detail section",
        "done-img3": StocksPage2,
        "done-img3-alt": "Stocks Analysis Education search page",
        "done-img4": StocksResults,
        "done-img4-alt": "Stocks Analysis Education YouTube results",
        "summary": `This project was a course assignment by Thinkful.  The goal was to create an application which uses at least 1 RESTful API to pull and display data dependent upon the user’s criteria request.  I created an application which pulls public companies’ data, news and stock information.  In addition, an Education section was added to pull YouTube videos teaching about investing in stocks and options.`,
        "technology": "HTML | CSS | JavaScript | jQuery | RESTful APIs",
        "role": "I was sole contributor on the entire project – UI/UX, design, Front-End coding",
        "process": `I started this process by considering what kind of application I wanted to build.  After deciding on stocks as my topic I researched numerous APIs and decided to use the free stock API through RapidAPI.  The original sketch idea was simple, a text field for the user to enter the company they wanted to research and a way to display the returned information.  I initially had an API fetch for every character entered but I quickly ran into limit issues utilizing the free API, so it was changed to search the full user input.  Company stock info and news were separated into their own sections.  The news articles returned from the NewsAPI fetch also presented an unexpected issue as many of the articles returned either distorted, irrelevant or just no images returned at all.  After review by my mentor, it was suggested to add an Education section for users that were unfamiliar with many of the terms and stock information that was displayed so I utilized the YouTube API to pull videos teaching about investing in stocks and options.  This was a great project which taught me a lot about APIs, AJAX and error handling.`,
        "process-img1": StocksSearch,
        "process-img1-alt": "Updated stocks analysis search",
        "process-img2": StocksNews,
        "process-img2-alt": "BEFORE - Stocks Analysis news view",
        "process-img3": StocksNews1,
        "process-img3-alt": "AFTER - Stocks Analysis news view",
        "process-img4": StocksPage,
        "process-img4-alt": "Original Education page with poor accessibility"
    },
    {
        "ProjectID": 4,
        "path": "omnifood",
        "title": "Food Delivery Service Website Development",
        "image": omnifoodHero,
        "image-alt": "Omnifood Food Delivery website",
        "who": "Omnifood Food Delivery",
        "link": "https://miguelr215.github.io/Omnifood/",
        "github": "https://github.com/miguelr215/Omnifood",
        "what": "Front End coding",
        "result": "Responsive single page application",
        "appName": "Omnifood Food Delivery",
        "done-img1": omnifoodHero,
        "done-img1-alt": "Omnifood Food Delivery Hero",
        "done-img2": omnifoodAbout,
        "done-img2-alt": "Omnifood Food Delivery About section",
        "done-img3": omnifoodTestimonials,
        "done-img3-alt": "Omnifood Testimonials section",
        "done-img4": omnifoodContact,
        "done-img4-alt": "Omnifood Contact Us section",
        "summary": `This was a course assignment on Udemy focusing on fundamental HTML, CSS and JavaScript concepts.  The goal was to create a business website for a fictitious food delivery company.  The result was a single page application which displays information about the company, their products and pricing, testimonials and a contact section.`,
        "technology": "HTML | CSS | JavaScript",
        "role": "I completed all Front-End coding",
        "process": `The goal was to create a website for a fictitious food delivery company utilizing HTML, CSS and JavaScript.  The website was designed to display critical information that a customer would want to know – description of the company and benefits of their services, food examples, pricing, testimonials, contact.  Each section of the website incorporated different CSS, JavaScript and/or jQuery animations, methods or techniques.  This was a great course which taught me foundational and advanced JavaScript and CSS coding.`,
        "process-img1": omnifoodImgGallery,
        "process-img1-alt": "Omnifood food image gallery highlight effect",
        "process-img2": omnifoodHow,
        "process-img2-alt": "Omnifood image animation effect",
        "process-img3": omnifoodPricing,
        "process-img3-alt": "Omnifood pulse animation on pricing",
        "process-img4": omnifoodLocations,
        "process-img4-alt": "Omnifood use & manipulation of icons"
    }
];

export default cases;