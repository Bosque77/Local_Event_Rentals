import React from 'react'

import '../static/css/local-event-supplies.webflow.css'
import '../static/css/normalize.css'
import '../static/css/webflow.css'

import image_1 from '../static/images/VendorBadge_AsSeenInMag.png'
import image_2 from '../static/images/badge-weddingawards_en_US.png'
import image_3 from '../static/images/Google_Review.png'
import image_4 from '../static/images/jacksonville_wedding_photographers_jacksonville_public_library_irrok_photography-2-2-300x200.jpg'

const HomePage = () => {

	return (
		<div className="body">

			<div className="section cc-store-home-wrap">
				<div className="intro-header">
					<div className="intro-content cc-homepage">
						<div className="intro-text">
							<div className="heading-jumbo">Local Event Rentals</div>
							<div className="paragraph-bigger cc-bigger-white-light">Party and Event Rentals<br /></div>
							<div className="text-block-2">(619) 391-3810</div>
						</div>
						<a href="about.html" className="button cc-jumbo-button cc-jumbo-white w-inline-block">
							<div>Learn More</div>
						</a>
					</div>
				</div>
				<div className="container">
					<div className="motto-wrap">
						<div className="heading-jumbo-small">Local Event Rentals is San Diegos number one event rental company. We rent tents, tables, and chairs for any and all events. Call now and book your party rentals today!<br /></div>
					</div>
					<div className="divider"></div>
					<div className="home-content-wrap">
						<div className="w-layout-grid about-grid">
							<div id="w-node-_86e64837-0616-515b-4568-76c147234d34-56354828">
								<div className="home-section-wrap">
									<div className="label cc-light">About</div>
									<h2 className="section-heading">Who we are</h2>
									<p className="paragraph-light"><em>We are an event rental company located out of San Diego, California. We specialize in weddings and other special events, we are dedicated to providing great customer service and a range of high-quality rental items to ensure each couple’s event runs as smoothly as possible. Our commitment to our customers speaks for itself.</em></p>
								</div>
							</div>
							<div id="w-node-e2fba061-a4df-4542-2f45-0262091f6c71-56354828">
								<div>
									<div className="w-row">
										<div className="w-col w-col-6">
											<a id="w-node-_228b7609-eb0f-4d16-d4b3-50ef88242dbd-56354828" href="https://www.theknot.com/marketplace/local-event-supplies-jacksonville-beach-fl-2034308" className="w-inline-block"><img src={image_1} loading="lazy" alt=""></img></a>
										</div>
										<div className="w-col w-col-6">
											<a href="https://www.weddingwire.com/biz/local-event-supplies/84af8bed029c672c.html" className="w-inline-block"><img src={image_2} loading="lazy" alt=""></img></a>
										</div>
									</div>
									<div id="w-node-_508fa425-2ea4-9024-0298-1d1406282f7d-56354828" className="div-block">
										<a href="https://www.google.com/maps/place/Local+Event+Supplies/@30.2590783,-81.5747489,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x6998d9bde932348e!8m2!3d30.2590783!4d-81.5725602?hl=en" className="w-inline-block"><img src={image_3} loading="lazy" alt=""></img></a>
									</div>
								</div>
							</div>
						</div>
						<div className="w-layout-grid about-grid cc-about-2">
							<div id="w-node-_86e64837-0616-515b-4568-76c147234d41-56354828">
								<div className="home-section-wrap">
									<h2 className="section-heading">Event Rentals Near You</h2>
									<p className="paragraph-light">San Diego&#x27;s premier event service provider. We are your number one source for wedding rentals, chair rentals, and tent rentals throughout San Diego. The team at Local Event Rentals has years of experience putting on both indoor and outdoor barbecues, weddings, social gatherings, concerts, Bar and Bat Mitzvah parties, and sporting events. View our selection of chairs, tables, and tents. <br />‍<a href="https://localeventsupplies.com/products"><strong><em></em></strong></a> Give us a call and our staff will help make sure your event goes perfectly.No size tent is too big or too small.If you require setup, breakdown, or delivery we can do that as well.Our capable team of event specialists are here to answer any questions.</p>
								</div>
							</div><img src={image_4} width="371" id="w-node-_86e64837-0616-515b-4568-76c147234d4c-56354828" alt=""></img>
						</div>
					</div>
				</div>
			</div>

			<div className="section">
				<div className="container">
					<div className="blog-heading">
						<h2 className="work-heading">Client Testimonials</h2>
						<div>
							<div className="w-row client-testimonials">
								<div className="w-col w-col-4">
									<div>I can&#x27;t be more thankful for Amanda and Sherri at Local Event Supplies. I always plan things last minute but they are able to help me out anyways. Whether I need a party tent and a few tables or other party equipment rentals, they have always been able to help me out. This was the third time that I used Local Event Supplies for an event that I was hosting. We will honestly never use another event rental company besides Local Event Supplies&quot; - <strong>Nicole S</strong></div>
								</div>
								<div className="w-col w-col-4">
									<div>&quot;The team at Local Event Supplies just did our wedding. Sherri was <strong>AMAZING</strong> to work with. Our wedding was in Vero Beach, Florida and Sherri drove all the way on multiple occasions to make sure everything would be laid out perfectly. Our wedding turned out beautifully and it wouldn&#x27;t have been the same without her. She was extremely easy to work with and bent over backwards to help us find the right tents and tables for a suitable price. Sherri is a reliable vendor and I appreciate all the hard work you put in. Their prices are reasonable and they will guide you in the right direction so your event looks beautiful. Me and Marc truly enjoyed working with you and we couldn&#x27;t have done it without you!!! Thank You so Much&quot; - <strong>Daniel C</strong></div>
								</div>
								<div className="w-col w-col-4">
									<div>&quot;I called Local Event Supplies for a a tent rental for my sons birthday party. They brought me a beautiful tent and nice chairs for the event. We ran out of space for the tables and sense it was going to rain later on that day, they drove all the way back to get another tent for us. They even recommended us a bouncy house supplier in our area. I will definitely use them again.&quot; - <strong>Chris D</strong></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


		</div>

	)

}

export default HomePage