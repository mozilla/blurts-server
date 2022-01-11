# --- // DATA REMOVAL SPECIFIC ---

# Variables non-specific to data removal:
# MH TODO: the following are repeats from app.ftl, and used only in constructing strings. If they change in `app.ftl` - they should change here
## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{-product-name}</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Firefox Account
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
##
# “account” can be localized, “Firefox” must be treated as a brand,
# and kept in English.
-brand-fx-account = Firefox account

# End non-removal specific variables

# Data Removal Variables

-remove-brand-partner = Kanary
remove-partner-link = https://thekanary.com
remove-process-title = Data Removal
remove-pilot-title = { remove-process-title } Pilot

# Data Removal Pilot CTA

remove-card-title = Remove your data from websites.
remove-card-body = We’re piloting a new service to monitor and remove your name, physical address, phone number, and email 
  from online databases.
remove-card-cta = Join the waitlist

# Data Removal Form Strings

remove-form-intro-title = Please provide your information below
remove-form-intro-description = { -product-name } can scan many common <a href="/remove-faq#data-brokers">data broker and people 
  search sites</a> for your personal data. If we find any of your personal data exposed, we’ll automatically begin the process of getting it removed from those sites.
remove-dash-intro-signup-title = How to start removing your exposed personal data
remove-dash-intro-signup = To start removing your exposed personal data, please provide the following information. This information is used to scan 
  and identify exposed personal data. Once exposed personal data is found, the removal request process will automatically begin.<br><br>
  Initial results can take up to 48 hours.
remove-dash-info-change-title = Review your information
remove-dash-form-email-label = Select your email address
remove-dash-form-why-needed = Why is this information needed?
remove-dash-form-name-label = What is your full name?
remove-dash-form-name-first = First Name
remove-dash-form-name-middle = Middle Name (Optional)
remove-dash-form-name-last = Last Name
remove-dash-form-loc-label = What is your current location?
remove-dash-form-loc-city = City
remove-dash-form-loc-state = State
remove-dash-form-loc-country = Country
remove-dash-form-birth-year-label = What is your birth year?
remove-dash-form-birth-year = Birth year
remove-dash-submit = Start { remove-process-title }
remove-dash-change-submit = Review Information
remove-dash-form-required-helper = * All fields are required to properly identify your exposed information
remove-dash-form-disclaimer = By clicking “Start { remove-process-title }” you agree to start the { remove-process-title } process.
remove-optout = Opt-Out
remove-form-change-contact-msg = If you need to change your personal information due to an error, please contact support


# Data Removal Form Confirmation Strings

remove-dash-confirm-review = Confirm Your Information
remove-dash-confirm-subtext = Please make sure your details are correct. Once you submit your information, changes to your personal information can only be done by contacting support at
remove-dash-confirm-edit = Edit Info
remove-dash-confirm-cancel = Cancel
remove-dash-confirm-back = Back
remove-dash-confirm-label-full = Full Name
remove-dash-confirm-email = Email Address
remove-dash-confirm-loc = Current Location
remove-dash-confirm-birthyear = Birth Year
remove-dash-confirm-submit-new = Begin { remove-process-title }
remove-dash-confirm-submit-update = Confirm Information
remove-dash-manage-info = Review My Info

# Data Removal Footer
remove-dash-kanary-discalimer = Service powered by { -remove-brand-partner }
remove-dash-link-risk = About Risk Level
remove-dash-link-pilot = Pilot Details
remove-dash-link-faqs = Pilot FAQs
remove-dash-link-support = Help
remove-dash-link-terms = Pilot Terms
remove-dash-link-privacy = Privacy

# Data Removal Form Completion Page

remove-form-success-alt = Success
remove-form-success-title = Your automated { remove-process-title } request process is underway!
remove-form-success-details = A scan has been initiated for sites that may be putting your privacy and security at risk.
  Due to a high number of requests, it may take 24 hours for your report to finish.
remove-form-success-next-title = What's next?
remove-form-success-next-details = Check the exposures dashboard frequently to see the { remove-process-title } requests initiated on your behalf.
  As new exposures are found or existing results are removed, we'll update the exposures dashboard to reflect the changes.
remove-form-delete-dashboard = Return to { -product-short-name } dashboard
remove-form-create-dashboard = Go to My Dashboard
remove-form-data-delete = Cancel Service

# Data Removal Information Update Page

remove-form-update-title = Your information has been updated!
remove-form-update-details = We’re updating your info for removal requests. Due to a high number of requests, 
  it may take 24 hours for your changes to take effect.
remove-form-delete-title = Sorry to see you go
remove-form-delete-details = Your cancellation request has been processed. Your account has been deleted.
remove-form-delete-survey-context = Before you go, we would like to know more about why you left.
remove-form-delete-survey-request = Please take a minute to answer a short survey

# Data Removal Dashboard Strings

remove-status-exposures = Exposures of personal data for
remove-status-update = Last update:

# Data Removal Filters

remove-filter-label = Filters:
remove-filter-in-progress = In progress
remove-filter-complete = Removed
remove-filter-blocked = On hold
remove-filter-list = Filter Removal List
remove-filter-date = Filter by Date

# Data Removal Steps (Status)

remove-step-awaiting-scan = {remove-filter-in-progress}
remove-step-found = {remove-filter-in-progress}
remove-step-awaiting-removal = {remove-filter-in-progress}
remove-step-submitted = {remove-filter-in-progress}
remove-step-awaiting-review = {remove-filter-in-progress}
remove-step-removed = {remove-filter-complete}
remove-step-blocked = {remove-filter-blocked}

# Data Removal Dashboard Header

remove-dash-header-status = Status
remove-dash-header-site = Name of Site
remove-dash-header-updated = Last Update

# Data Removal Results Page

remove-results-toggle-alt = Expand Option
remove-risk-title = Risk Level
remove-risk-high = {remove-about-risk-high} Risk
remove-risk-medium = {remove-about-risk-medium} Risk
remove-risk-low = {remove-about-risk-low} Risk
remove-result-details-found = Info found
remove-result-description = What is this website?
remove-result-link = Links to exposed info
remove-result-link-title = Record Link
remove-result-manual = Manual removal instructions
remove-pending-title =  Success — now searching for exposed personal data.
remove-pending = We're scanning for sites that expose your personal data. It may take up to 48 hours for results to appear here.
remove-result-updated = Updated
remove-result-email = Email
remove-result-phone = Phone
remove-result-name = Name
remove-result-address = Address
remove-result-status = Removal Status

# Data Removal Pilot Enrollment Page

remove-enroll-program-end-date = 4/12/2022
remove-enroll-title = Welcome to { -product-name } { remove-pilot-title }
remove-enroll-intro = We’re confident you’ll love the ability to find and remove your personal data from data broker and people search sites.
remove-enroll-learn-more = Learn more about data brokers and people search sites
remove-enroll-description-title = Here's what happens next
remove-enroll-description = After you join the pilot, you’ll share some identifying information with us, which we share with our {remove-process-title} partner, 
  {-remove-brand-partner}. This info allows us to find data brokers and people search sites online that share it—and then get it removed. 
  This info will only be used for the duration of the pilot, and then deleted.
remove-enroll-details-title = Key details about the {-product-name} { remove-pilot-title }
remove-enroll-details1 = The pilot service will be offered at no cost to you for 3 months.
remove-enroll-details2 = The purpose of the pilot is to evaluate the service for a future paid offering. As such, participating 
  in the pilot will include additional communications and surveys about your experience. You are not required 
  to respond to these requests for information, but we would appreciate your assistance.
remove-enroll-details3 = At the end of the pilot period, any additional service will be suspended and all account information 
  held by {-brand-Mozilla} or our partner {-remove-brand-partner} will be deleted.
remove-enroll-details4 = You may discontinue your service at any point within the pilot period.
remove-enroll-terms-agreement1 = By checking this box you are accepting the
remove-enroll-terms-link = Terms of Service
remove-enroll-privacy-link = Privacy Notice
remove-enroll-terms-agreement2 = for participating in the {-product-name} { remove-pilot-title }
remove-enroll-submit = Continue to { remove-pilot-title }

# Data Removal Pilot Enrollment Full Page

remove-enroll-full-title = Enrollment in the { -product-name } { remove-pilot-title } is now closed
remove-enroll-full-description = Thank you for your interest in the { -product-name } { remove-pilot-title } powered by { -remove-brand-partner }.
  Unfortunately, we are not currently accepting participants to the pilot service. We’ve currently reached our maximum number of participants in this pilot.

# Data Removal Other Projects Component

remove-other-projects-title = Other { -brand-Mozilla } projects you can get involved with:
remove-other-projects-nightly = Download Nightly
remove-other-projects-nightly-description = Experience cutting-edge browser features by downloading future releases of {-brand-name} for desktop.
remove-other-projects-community = Join the Community
remove-other-projects-community-description = Help make the web more open and accessible to all. Learn, collaborate, and share your skills by joining one of Mozilla’s communities.

remove-enroll-error-is_enrolled = User is already enrolled

# Data Removal Pilot Enrollment Ended Page

remove-enroll-ended-title = Pilot Enrollment Deadline Expired
remove-enroll-ended-description = Thank you for your interest in { -brand-Mozilla }’s { remove-process-title } Service powered by { -remove-brand-partner }. <br><br>
  Unfortunately, the enrollment deadline for participating in the pilot has passed.

# Data Removal Pilot Ended Page

remove-pilot-ended-title = { -product-name } { remove-pilot-title } is now closed
remove-pilot-ended-description = Thank you for participating in the { -product-name} { remove-pilot-title}.<br><br>
  We are evaluating whether to continue offering the { remove-process-title } service at { -brand-Mozilla }.<br><br>
  We appreciate your input and feedback as we research new offerings to best meet your needs.<br><br>
  If you have any additional comments or questions, please send them to { remove-about-support-email }.
remove-pilot-ended-continue-title = Interested in continuing your service with {-remove-brand-partner}?
remove-pilot-ended-continue-text = If you are interested in continuing your { remove-process-title } coverage 
  while we evaluate next steps for our offering, please proceed to our partner's website:

# Data Removal Pilot Success Page
remove-enrolled-title = Welcome to the {remove-pilot-title}!  
remove-enrolled-description = Congratulations on successfully being enrolled in the pilot. Here’s how it works:
remove-enrolled-step1-title = Step 1: Submit your info
remove-enrolled-step2-title = Step 2: Watch for results
remove-enrolled-step3-title = Step 3: Examine the details
remove-enrolled-step1 = First, enter the info you want to search for and have removed. This data will be submitted for automatic {remove-process-title}.
remove-enrolled-step2 = Within 48 hours you should start seeing a list of sites where your information has been found on your {remove-process-title} dashboard.
remove-enrolled-step3 = If you view the details of each exposure, you can see the status of your {remove-process-title} request as it moves from request to completion. 
  Removals can take anywhere from two weeks to two months.

remove-enrolled-btn = Get started

# Data Removal Cancellation Page

remove-kan = Confirm Cancelation
remove-kan-disclaimer-title = Disclaimer
remove-kan-disclaimer-content = Canceling your service removes all of your data from {-product-name} as well as from our partner service { -remove-brand-partner }. 
  Any exposures that have been removed will remain so and any yet-to-be finished removals will be suspended.<br><br>
  Your information will be removed immediately upon removal request.
remove-kan-blurb = Confirm cancellation of { remove-process-title } service? Your { -product-short-name } account 
  will remain active.
remove-kan-btn-confirm = Confirm Cancelation
remove-kan-btn-nevermind = Nevermind

# Data Removal Sites List Page

remove-sites-list = { remove-process-title } Site List
remove-sites-blurb = Below are the most common sites { -remove-brand-partner } requests user data to be removed from.

# Data Removal Risks Info Page

remove-risk-heading = About { remove-process-title } Risk
remove-risk-blurb = “Risk” is assigned at the site level as a way to prioritize actions and escalations, and 
  is made up of 4 metrics:
remove-risk-criteria-1 = Does the site sell data?
remove-risk-criteria-2 = Does the site include context beyond the personally identifiable information?
remove-risk-criteria-3 = Does the site remove data consistently?
remove-risk-criteria-4 = Does the site feed data to other sources?
remove-risk-rating-high = Posts or sells location information, family information, contact information, or 
  credentials like passwords. Site includes context about why someone would want to target a person like job, 
  salary, political party. The site has complicated requirements and takes longer than average to remove personal information.
  The site feeds data to many other sources.
remove-risk-rating-med = Posts or sells contact information like name, email, phone number.
  The site doesn't include additional context.
  The site responds to removal requests on a consistent basis.
  The site likely feeds data to other sources.
remove-risk-rating-low = Posts personal information that is less likely to harm a specific person
  but if combined with other personal details could lead to harm.
  The site responds to removal requests on a consistent basis.
  The site likely doesn’t feed data to other sources.
remove-risk-title-high = High
remove-risk-title-med = Medium
remove-risk-title-low = Low

# Data Removal Modal General

remove-modal-close = Close
remove-modal-cancel = Cancel
remove-modal-continue = Continue
remove-modal-close-accessible = Close this dialog window
remove-modal-more-info = Learn More
remove-modal-more-info-found = Learn more about info found
remove-modal-more-info-links = Learn more about links to exposed info
remove-modal-more-manual = Learn more about manual removal
remove-modal-more-risk = Learn more about risk
remove-modal-more-status = Learn more about removal status
remove-expand = Expand Section

# Data Removal Info Needed modal

remove-modal-info-title = Why is this information needed?
remove-modal-info-text = The personal information provided here is used to search data broker and people search sites.<br><br>
  The purpose of this information is to find where your information is exposed on these sites.
remove-modal-info-link = Learn how your privacy is protected

# Data Removal Leaving Monitor title
remove-modal-leaving-title = Leaving {-product-name}
remove-modal-leaving-text = You are about to leave {-product-name}. The link directs you to a record of 
  your personal information found on data broker or people search sites. Mozilla is not responsible for 
  the content or service offered by this website.


# Data Removal Birth Year modal
remove-modal-birth-year-title = Why do you need my birth year?
remove-modal-birth-year-text = Your birth year is used to distinguish you from others who may have your 
  same name or location. This information ensures the proper listing is requested for removal.


# Data Removal Status Modal

remove-modal-status-title = Removal Status
remove-modal-status-text = Once a record is found on a data broker or people search site, 
  the { remove-process-title } service automatically sends a removal request and follows up with the site to track the status of the removal.

# Data Removal Info Found Modal

remove-modal-info-found-title = What info can you find?
remove-modal-info-found-text = We search many of the top data broker and people search websites for names, 
  phone numbers, addresses, and usernames.

# Data Removal Link Modal

remove-modal-link-title = What is a record link?
remove-modal-link-text = A record link is the link to your specific personal data found on a data broker or people search site.

# Data Removal Risk Modal

remove-modal-risk-title = What is Risk Level?

# Data Removal Manual Modal

remove-modal-manual-title = Manual Removal Instructions
remove-modal-manual-text = In the unlikely event that we cannot automatically remove your personal data from a site where we’ve 
  found it, we will try to provide a means of reaching out to that site manually in order to get your data removed.

# Data Removal Optout Modal

remove-modal-optout-title = Confirm Opt-Out of { remove-pilot-title }
remove-modal-optout-text = Once you submit your opt-out request, this action cannot be undone. 

# Data Removal About Page

remove-about-faq-title = FAQ
remove-about-faq-long-title = Frequently Asked Questions

remove-about-faq-details = Pilot Details
remove-about-details-content = In partnership with <a data-l10n-name="remove-link-partner">{ -remove-brand-partner }</a>, 
  we are evaluating a new feature for { -product-name } that allows users to automate the search and removal of 
  personal information from data broker and people search sites. This service is offered as part of a pilot program 
  that will help us determine future products and features within { -product-name }.

remove-about-partner-title = About Our Partner: { -remove-brand-partner }
remove-about-partner-content = { -brand-name } has partnered with { -remove-brand-partner}, 
  a leading { remove-process-title } provider, to help create this pilot service within { -product-name}.
  { -remove-brand-partner} helps you maintain your online presence. They scour the internet for sites posting 
  data about you, including your home address, phone numbers, leaked passwords and emails.
  They adhere to strict data storage, encryption, and anti-tracking practices.
remove-about-partner-security-link = Learn more about {-remove-brand-partner}'s privacy and security practices here

remove-about-service-details-title = Service Details
remove-about-service-details-content = The pilot service will be offered at no cost to you.
  The purpose of the pilot is to evaluate the service for a future paid offering.
  As such, participating in the pilot will include additional communications and surveys about your experience.
  You are not required to respond to these requests for information, but we would appreciate your assistance.<br><br>
  At the end of the pilot period, the service will be canceled and all account information held by Mozilla or our 
  partner {-remove-brand-partner} will be deleted. You may also cancel your service at any point within the pilot period.

remove-about-sites-title = Data Brokers and People Search Sites Explained
remove-about-sites-content = Data brokers and people search sites are third-party websites that collect and 
  expose personal data like names, addresses, and phone numbers. They collect and expose this personal data 
  without the knowledge of the person to whom that data belogs or represents. Many of these sites even sell this data,
  leaving you open to violations of your privacy and security.

remove-about-risk-title = Risk Level Explained
remove-about-risk-content = We categorize sites and information we find by risk level. There are 3 risk levels:
remove-about-risk-high = High
remove-about-risk-high-content = The site is sharing location information, contact information, or credentials 
  without your consent. It may include context that makes you a target like salary, political party, or profession.
  Removing data for the site is difficult and may take months to remove or be impossible.
remove-about-risk-medium = Medium
remove-about-risk-medium-content = The site is sharing contact information like name, email, or phone number 
  without your consent. The site is often inaccurate or doesn’t include additional context.
  It responds to requests and removes personal information on a consistent basis.
remove-about-risk-low = Low
remove-about-risk-low-content = The site is sharing personal information but you likely posted it yourself or 
  provided consent. It is unlikely to be harmful but could cause issues if combined with other personal information. 
  You may want to withdraw your consent and the site will likely comply with your request.

remove-about-status-title = Status Explained
remove-about-status-content = {remove-modal-status-text}
remove-about-status-in-progress = refers to active requests that are still being worked on. Removals can take some time 
  depending on the responsiveness of the data broker or people search site, and the steps they have set up for processing a removal.
remove-about-status-complete = refers to inactive requests. These items correspond to data or information that have 
  been requested and successfully removed and verified. Although data brokers and people search sites remove data, 
  they may relist the same information after some time. If this happens a new removal request is initiated.
remove-about-status-blocked = refers to request that cannot be completed or require additional steps. 
  {remove-filter-blocked} removals occur for a variety of reasons including data brokers or people search sites that add additional criteria to removing information.

remove-about-process-title = { remove-process-title } Process Explained
remove-about-process-content = Once you submit your information, our { remove-process-title } partner, { -remove-brand-partner },
  will continuously scan for your information on known { remove-process-title } and people search sites.
  Once your personal data is found on one of these sites, we automate the process of getting it removed.
  Sometimes, even if your data was removed from one of these sites, it may reappear at a later date.
  Data brokers and people search sites regularly collect data, and removal does not necessarily
  prevent many of these sites from sharing it again later.
remove-about-process-content2 = Data removal is not guaranteed. At times, {remove-process-title} requests cannot be completed or require additional steps. 
  Even still, {-remove-brand-partner} continues to work on removing your personal information. In the event that a request is 
  {remove-filter-blocked}, manual removal instructions are shown in the bottom of the expanded card. These instructions provide another means to attempt 
  removing your personal information from a data broker or people search site. The instructions are gathered from each specific site, 
  and so vary depending on the site requirements.

remove-about-support-title = Support
remove-about-support-email = monitor-pilot@mozilla.com
remove-about-support-kb-text = For self-help, please consult the knowledge base articles.
remove-about-support-content = If you cannot find an answer to your questions on this page, you can contact support
  via e-mail at <a data-l10n-name="remove-link-support-email">{remove-about-support-email}</a>.<br><br>
  If you wish to file a bug, <a data-l10n-name="remove-link-bug-form">you may do so via this google form</a>.

# Data Removal FAQ Section

remove-faq-sites-title = What type of sites do you scan for?

remove-faq-usage-title = What can bad actors do with my personal info?
remove-faq-usage-content = If your personal data is exposed and purchased, you could be targeted by 
  scammers and spammers, and in a worst-case scenario, you could even become a victim of identity theft.

remove-faq-search-title = Can you remove my information from Google?
remove-faq-search-content = No - we can't remove your info from search engines like Google or social media sites 
  like Facebook. In general, we cannot remove your information from services where you’ve signed up for an account, 
  or publicly-available information on government websites.

remove-faq-success-rate = { -remove-brand-partner }’s current success rate for removals is currently above 70%
remove-faq-guarantee-title = Is { remove-process-title } guaranteed?
remove-faq-guarantee-content = Data removal is not guaranteed, but { remove-faq-success-rate }.
remove-faq-blocked-title = What does it mean when a removal is ‘{remove-filter-blocked}’?
remove-faq-blocked-content = Sometimes, for various reasons, we are unable to proceed with a { remove-process-title } 
  request. While { remove-process-title } is not guaranteed, { remove-faq-success-rate }.

remove-faq-pii-title = Why do you need my personal information?
remove-faq-pii-content = The personal information you give us is the same information we search for on data broker 
  and people search sites.

remove-faq-how-found-title = How do data brokers and people search sites find my personal info?
remove-faq-how-found-content = Data brokers scrape the Internet for your data without your knowledge.
  Then they may sell the data to marketers, scammers, and others without your consent.

remove-faq-cancel-title = How can I cancel my service?
remove-faq-cancel-content = By cancelling your participation in the { remove-pilot-title}, your data will be deleted 
  from our servers, and from our partner, { -remove-brand-partner }.

# Data Removal Home Page Content

remove-home-title = See if you've been part of an online data breach.
remove-home-cta-content = Data brokers and people search sites make your personal data available to anyone. Let us help.
remove-home-removal-btn = Sign Up to Start { remove-process-title }
remove-home-protect-pii = Protect your identity
remove-home-protect-subtitle = Automatically remove exposed personal information.
remove-home-signup-btn = Check for Breaches
remove-home-signup-bottom-btn = Sign Up Now!
remove-home-article-data-removal-learn-more = Learn More About { remove-process-title }
remove-home-feature-tip-title = Sign up for monitoring & { remove-process-title } with a { -brand-fxa }.

# Data Removal Error messages

remove-error-title = Error encountered
remove-error-no-user = No user found
remove-error-account-exists = An account already exists for this user
remove-error-no-email-match = The email you provided does not match any verified email addresses in your { -brand-fxa }
remove-error-no-email-domain-match = The domain of the email addresss you are using for signup does not match any of 
  our approved domains.
remove-error-no-fxa-waitlist-match = The { -brand-fxa } email you are logged in with does not match the email on 
  our waitlist. Be sure you are logged in with the appropriate account, and that it has been added to our waitlist.
remove-error-no-waitlist-match = The email address you provided does not appear on our list of invited participants. 
  Be sure to use the email address you used to sign up for the waitlist.
remove-error-no-kid = No {-remove-brand-partner} ID found for this user
remove-error-no-kid-match = The {-remove-brand-partner} ID submitted for this user does not match the ID we have on file
remove-error-update = Error submitting updates to {-remove-brand-partner}. Please try your request again.
remove-error-kid-but-no-acct = An account is stored in our database, but does not exist in {-remove-brand-partner}. Please contact support.
remove-error-alpha = field allows only letters, dashes, and spaces
remove-error-no-id = The {-brand-remove-partner} API did not return an ID
remove-error-optout = There was an error opting out of the { remove-pilot-title }
remove-error-no-session = No { -remove-brand-partner } session variable found